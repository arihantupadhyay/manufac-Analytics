// src/components/Chart.tsx
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { fuelData, City, FuelType, Year } from '../Data/fuelData';
import './Chart.css';

interface ChartProps {
  city: City;
  fuelType: FuelType;
  year: Year;
}

const Chart = ({ city, fuelType, year }: ChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const monthlyData = fuelData[city]?.[fuelType]?.[year] ?? new Array(12).fill(0);

    chartInstance.setOption({
      title: {
        text: `Monthly Average RSP (${fuelType}) in ${city} (${year})`,
        left: 'center',
        textStyle: {
          color: '#374151',
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b} <br/>{a}: {c} ₹',
      },
      xAxis: {
        type: 'category',
        data: months,
        axisLabel: {
          color: '#4B5563',
        },
        axisLine: {
          lineStyle: {
            color: '#D1D5DB',
          },
        },
      },
      yAxis: {
        type: 'value',
        name: 'Price (₹)',
        axisLabel: {
          formatter: '{value} ₹',
          color: '#4B5563',
        },
        axisLine: {
          lineStyle: {
            color: '#D1D5DB',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#E5E7EB',
          },
        },
      },
      series: [
        {
          name: fuelType,
          type: 'bar',
          data: monthlyData,
          itemStyle: {
            color: fuelType === 'Petrol' ? '#6366f1' : '#f59e0b',
            borderRadius: [4, 4, 0, 0],
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c} ₹',
            color: '#374151',
          },
        },
      ],
    });

    const handleResize = () => {
      chartInstance.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, [city, fuelType, year]);

  return <div ref={chartRef} className="chart-container" />;
};

export default Chart;
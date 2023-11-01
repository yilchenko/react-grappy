import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

interface ChartComponentProps {
  link: string;
  width?: number;
  height?: number; 
}

type ChartType = 'bar' | 'line' | 'pie' | 'doughnut' | 'radar';



export function Grappy({ link, width, height }: ChartComponentProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  console.log(chartRef);
  const chartInstanceRef = useRef<Chart<ChartType, any, any> | null>(null);
  console.log(chartInstanceRef);

  useEffect(() => {
    console.log('im in use effect');
    let urlParams = new URLSearchParams(link || '');
    
    let optionsParam = urlParams.get('options');
    let dataParam = urlParams.get('https://grappy.000.pe/?data');
    let chartType = (urlParams.get('type') || 'bar') as ChartType;

    if (!dataParam || !chartType || !optionsParam) {
      link ='https://grappy.000.pe/?data=%7B%22labels%22%3A%5B%22data%231%22%2C%22data%232%22%2C%22data%233%22%2C%22data%234%22%2C%22data%235%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Sample%20Data%22%2C%22data%22%3A%5B300%2C230%2C600%2C750%2C1300%5D%2C%22backgroundColor%22%3A%5B%22%233E5141%22%5D%2C%22borderColor%22%3A%22black%22%2C%22borderWidth%22%3A1%7D%5D%7D&options=%7B%22scales%22%3A%7B%22x%22%3A%7B%22display%22%3Atrue%2C%22title%22%3A%7B%22display%22%3Afalse%2C%22text%22%3A%22X-Axis%20Label%22%7D%2C%22grid%22%3A%7B%22display%22%3Afalse%7D%7D%2C%22y%22%3A%7B%22display%22%3Atrue%2C%22beginAtZero%22%3Atrue%2C%22title%22%3A%7B%22display%22%3Afalse%2C%22text%22%3A%22Y-Axis%20Label%22%7D%2C%22ticks%22%3A%7B%22stepSize%22%3A10%7D%2C%22grid%22%3A%7B%22display%22%3Afalse%7D%7D%7D%2C%22plugins%22%3A%7B%22legend%22%3A%7B%22display%22%3Afalse%2C%22position%22%3A%22bottom%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22My%20fancy%20chart%22%2C%22font%22%3A%7B%22size%22%3A16%2C%22weight%22%3A%22normal%22%7D%7D%7D%2C%22responsive%22%3Atrue%7D&type=bar';

      urlParams = new URLSearchParams(link || '');

      optionsParam = urlParams.get('options');
      dataParam = urlParams.get('https://grappy.000.pe/?data');
      chartType = (urlParams.get('type') || 'bar') as ChartType;
    }

    try {
      const data = JSON.parse(decodeURIComponent(dataParam || ''));
      const options = JSON.parse(decodeURIComponent(optionsParam || ''));

      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          const chart = new Chart(ctx, {
            type: chartType,
            data: data,
            options: options,
          });

          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          chartInstanceRef.current = chart;
        }
      }
    } catch (error) {
      // console.warn('Error parsing data and options:', error);
    }
  }, [link]);

  return (
    <div style={{width:`${width ? width + 'px' : 'auto'}`, height:`${height ? height + 'px' : 'auto'}`}}>
      <canvas ref={chartRef} />
    </div>
  )
  
};

// export default Grappy;

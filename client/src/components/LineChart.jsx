import React, { useRef, useEffect, useState } from 'react';

export const LineChart = ({ option }) => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(null);

  const [values, setValues] = useState([]);

  const fakes = [
    [10, 25, 18, 32, 20, 59, 5, 10, 35],
    [42, 17, 30, 8, 56, 23, 41, 12, 39],
    [28, 9, 37, 14, 63, 27, 48, 3, 19],
    [5, 72, 18, 43, 95, 61, 8, 37, 54]
  ]

  const handleChange = (option) => {
    switch (option) {
      case "1":
        setValues(fakes[0])
        break
      case "2":
        setValues(fakes[1])
        break
      case "3":
        setValues(fakes[2])
        break
      case "4":
        setValues(fakes[3])
        break
    }
  }

  useEffect(() => {
    if (chartContainerRef.current) {
      const width = chartContainerRef.current.offsetWidth;
      setChartWidth(width);
    }

    console.log("option = "+option)
    
    handleChange(option);
  }, []);

  // Datos del gráfico
  const data = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'],
    values
  };

  console.log(values)

  // Escala para el eje Y (ajusta el valor según tus datos)
  const scaleY = 5;

  // Alto del gráfico
  const chartHeight = 300;

  // Calcula el espacio horizontal entre los puntos en función del ancho total
  const spacingX = chartWidth ? chartWidth / (data.values.length - 1) : 0;

  return (
    <div className="text-white">
      <div ref={chartContainerRef} style={{ overflow: 'visible' }}>
        <svg width={chartWidth} height={chartHeight}>
          {/* Eje X */}
          <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#282b36" />
          {data.labels.map((label, index) => {
            const x = index * spacingX;
            return (
              <text key={index} x={x} y={chartHeight + 15} textAnchor="middle" fill='white'>
                {label}
              </text>
            );
          })}

          {/* Eje Y */}
          <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#282b36" />

          {/* Línea de gráfico */}
          {data.values.map((value, index) => {
            const x = index * spacingX;
            const y = chartHeight - value * scaleY;
            return (
              <circle key={index} cx={x} cy={y} r="4" fill="#e17322" />
            );
          })}
          {/* Conectar puntos */}
          <polyline
            points={data.values.map((value, index) => {
              const x = index * spacingX;
              const y = chartHeight - value * scaleY;
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="white"
          />
        </svg>
      </div>
    </div>
  );
};
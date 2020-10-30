import React from 'react';

function PieChart(props) {

  const data = [
    {label: 'this thing', value: .25},
    {label: 'that thing', value: .25},
    {label: 'that thing', value: .27},
    {label: 'that thing', value: .25},
  ];

  const getRandom = () => Math.floor(Math.random() * 255);
  const getRGB = () => `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;

  const getColors = (data) => {
    let colors = [];
    let value = 0;
    for (let i = 0; i < data.length; i++) {
      let rgb = getRGB();
      value += data[i].value * 100;
      colors.push(`${rgb} 0, ${rgb} ${value}%`);
    }
    return colors.join();
  }

  const colors = getColors(data);
  console.log(`conic-gradient(${colors})`);

  const chartStyle = {
    height: props.height,
    width: props.width
  }

  const pieStyle = {
    background: `conic-gradient(${colors})`,
    minHeight: '100%',
    borderRadius: '50%',
    border: '1px solid #D0FEFE',
    boxShadow: '0 0 6px black'
  }

  return (
    <div className="Chart" style={chartStyle}>
      <div className="pie" style={pieStyle}></div>
    </div>
  )
}

export default PieChart;

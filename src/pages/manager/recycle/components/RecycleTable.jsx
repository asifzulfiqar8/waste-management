import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '01', line1: 100, line2: 300, line3: 200, line4: 400, line5: 250 },
  { name: '02', line1: 150, line2: 350, line3: 250, line4: 450, line5: 300 },
  { name: '03', line1: 200, line2: 320, line3: 300, line4: 500, line5: 350 },
  { name: '04', line1: 250, line2: 400, line3: 350, line4: 550, line5: 400 },
  { name: '05', line1: 300, line2: 450, line3: 400, line4: 600, line5: 450 },
  { name: '06', line1: 350, line2: 500, line3: 450, line4: 650, line5: 500 },
  { name: '07', line1: 400, line2: 550, line3: 500, line4: 700, line5: 550 },
  { name: '08', line1: 450, line2: 600, line3: 550, line4: 750, line5: 300 },
];

const RecycleTable = () => {
  // State to store the selected option for filtering the chart lines.
  const [selectedLine, setSelectedLine] = useState('all');

  // Details for each line (for both chart and metrics)
  const linesData = [
    { key: 'line1', name: 'Paper Recycle Rate', color: '#8884d8' },
    { key: 'line2', name: 'Wood Recycle Rate', color: '#82ca9d' },
    { key: 'line3', name: 'Liquid Recycle Rate', color: '#ff7300' },
    { key: 'line4', name: 'Plastic Recycle Rate', color: '#ff0000' },
    { key: 'line5', name: 'Metal Recycle Rate', color: '#00c0ff' },
  ];

  // Mapping for dropdown selection to data keys
  const lineMapping = {
    paper: 'line1',
    wood: 'line2',
    liquid: 'line3',
    plastic: 'line4',
    metal: 'line5',
  };

  // Filter the lines for chart rendering based on the dropdown selection.
  const filteredChartLines =
    selectedLine === 'all'
      ? linesData
      : linesData.filter((line) => line.key === lineMapping[selectedLine]);

  // Helper function to calculate total for a given data key
  const getTotal = (key) => data.reduce((acc, cur) => acc + cur[key], 0);

  // Style for the colored box preceding each metric text
  const boxStyle = (color) => ({
    display: 'inline-block',
    width: '12px',
    height: '12px',
    backgroundColor: color,
    marginRight: '8px',
  });

  return (
    <div className="w-full">
      {/* Dropdown for filtering chart lines */}
      <div className='flex justify-end'>
        <select
          className='border border-[#54545433] rounded-md py-2 px-4 text-xs text-[#484848] font-semibold capitalize '
          value={selectedLine}
          onChange={(e) => setSelectedLine(e.target.value)}
          style={{ padding: '8px', fontSize: '16px' }}
        >
          <option value="all">All</option>
          <option value="paper">Paper</option>
          <option value="wood">Wood</option>
          <option value="liquid">Liquid</option>
          <option value="plastic">Plastic</option>
          <option value="metal">Metal</option>
        </select>
      </div>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 1000]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            tickFormatter={(value) => `${value}kg`}
          />
          <Tooltip />
          {filteredChartLines.map((line) => (
            <Line
              key={line.key}
              type="linear"
              dataKey={line.key}
              name={line.name}
              stroke={line.color}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      {/* Metrics Section (Always shows all totals) */}
      <div
        className="flex flex-col gap-4 p-0 lg:p-4 md:w-full overflow-auto"

      >
        <section className="flex justify-between text-[#474445] text-xs font-extrabold">
          <section>Metrics</section>
          <section className="flex w-[100px] justify-between">
            <section>Current</section>
            <section>Previous</section>
          </section>
        </section>
        {linesData.map((line) => (
          <section key={line.key} className="flex justify-between text-xs font-normal">
            <section>
              <span style={boxStyle(line.color)}></span>
              <span className='text-[#474445]'>
                {line.name}:
              </span>
            </section>
            <section className="flex w-[100px] text-[#474445] justify-between">
              {getTotal(line.key)}kg
            </section>
          </section>
        ))}
      </div>
    </div>
  );
};

export default RecycleTable;

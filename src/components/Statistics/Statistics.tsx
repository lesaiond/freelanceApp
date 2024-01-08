import React, { useEffect } from 'react';
import { StyledStatistics } from './Statistics.style';

const ActivityHistory = [
  {
    time: 5,
    date: '01.01',
  },
  {
    time: 6,
    date: '01.02',
  },
  {
    time: 9,
    date: '01.03',
  },
  {
    time: 6,
    date: '01.04',
  },
  {
    time: 7,
    date: '01.05',
  },
  {
    time: 8,
    date: '01.06',
  },
  {
    time: 9,
    date: '01.07',
  },
];

const ActivityRecomended = 12

// interface ActivityHistoryProps {
//   time: number;
//   data: string;
// }

const Statistics = () => {

  useEffect(()=> {

    // slice

  }, [])
  const maxRatio = Math.max(...ActivityHistory.map(item => item.time / ActivityRecomended));

  return (
    <StyledStatistics>
      {ActivityHistory.map((item, index) => (
        <div key={index}>
          <div className={`column ${item.time === maxRatio * ActivityRecomended ? 'peak' : ''}`} style={{ height: `${(item.time / ActivityRecomended) * 100 - 22}vh` }}></div>
          <div className="date">{item.date}</div>
        </div>
      ))}
    </StyledStatistics>
  );
};

export default Statistics;
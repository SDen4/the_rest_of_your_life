import React from 'react';

import { IWeeksTable } from './types';

import styles from './WeeksTable.module.css';

const WeeksTable: React.FC<IWeeksTable> = ({ valueYears }) => {
  const tableCols = [];
  for (let i = 0; i < 52; i++) {
    tableCols.push(
      <td className={styles.tableCell} height={10} key={i + 1000} />,
    );
  }

  const tableInners = (rowsNum: number, tableCols: any[]) => {
    const arrToRender = [];
    for (let i = 1; i <= rowsNum; i++) {
      arrToRender.push(
        <tr key={i + 1} className={styles.row}>
          <td className={styles.rowNumber}>{i}</td>
          {tableCols}
        </tr>,
      );
    }
    return arrToRender;
  };

  return (
    <div className={styles.weeksTableWrapper}>
      <table>
        <tbody>{tableInners(valueYears, tableCols)}</tbody>
      </table>
    </div>
  );
};

export default WeeksTable;

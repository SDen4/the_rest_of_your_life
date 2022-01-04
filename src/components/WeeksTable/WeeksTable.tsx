import React from 'react';
import clsx from 'clsx';

import { IWeeksTable } from './types';

import styles from './WeeksTable.module.css';

const WeeksTable: React.FC<IWeeksTable> = ({ valueYears, userYears }) => {
  const roundUserYears = Math.ceil(userYears);

  const tableCols = [];
  for (let i = 0; i < 52; i++) {
    tableCols.push(
      <td className={styles.tableCell} height={10} key={i + 1000} />,
    );
  }

  const restWeeks = Math.floor((1 - (roundUserYears - userYears)) * 52);
  const tableColsRest: any[] = [];
  for (let i = 1; i <= 52; i++) {
    tableColsRest.push(
      <td
        className={clsx(
          styles.tableCell,
          restWeeks > i && styles.tableFullCellRest,
        )}
        height={10}
        key={i + 1000}
      />,
    );
  }

  const tableInners = (rowsNum: number, tableCols: any[]) => {
    const arrToRender = [];
    for (let i = 1; i <= rowsNum; i++) {
      arrToRender.push(
        <tr
          key={i + 1}
          className={clsx(styles.row, userYears > i && styles.tableFullCell)}
        >
          <td className={styles.rowNumber}>{i}</td>
          {i === roundUserYears ? tableColsRest : tableCols}
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

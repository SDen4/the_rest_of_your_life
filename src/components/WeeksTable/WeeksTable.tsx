import React, { memo, useMemo } from 'react';
import clsx from 'clsx';

import styles from './WeeksTable.module.css';

interface IProps {
  valueYears: number;
  userYears: number;
}

const WeeksTable: React.FC<IProps> = ({ valueYears, userYears }) => {
  const roundUserYears = useMemo(() => Math.ceil(userYears), []);

  const tableCols = [];
  for (let i = 0; i < 52; i++) {
    tableCols.push(
      <td className={styles.tableCell} height={3} key={i + 1000} />
    );
  }

  const restWeeks = useMemo(
    () => Math.floor((1 - (roundUserYears - userYears)) * 52),
    []
  );

  const tableColsRest: unknown[] = [];
  for (let i = 1; i <= 52; i++) {
    tableColsRest.push(
      <td
        className={clsx(
          styles.tableCell,
          restWeeks > i && styles.tableFullCellRest
        )}
        height={3}
        key={i + 1000}
      />
    );
  }

  const tableInners = (rowsNum: number, tableCols: unknown[]) => {
    const arrToRender = [];
    const tableRows = valueYears > userYears ? rowsNum : userYears;

    for (let i = 1; i <= tableRows; i++) {
      arrToRender.push(
        <tr
          key={i + 1}
          className={clsx(
            styles.row,
            userYears > i && styles.tableFullCell,
            i > rowsNum && styles.tableExtraCell
          )}
        >
          {i === roundUserYears ? tableColsRest : tableCols}
        </tr>
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

export default memo(WeeksTable);

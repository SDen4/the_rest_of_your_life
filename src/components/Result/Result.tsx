import React from 'react';
import WeeksTable from '../WeeksTable';
import { IResult } from './types';

const Result: React.FC<IResult> = ({ store }) => {
  return (
    <div>
      <h2>Итого чего-то там...</h2>
      <WeeksTable />
    </div>
  );
};

export default Result;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useMemo } from 'react';

function MyHeading(): JSX.Element {
  const [count, setCount] = useState(0);
  const [cssStyle, setCssStyle] = useState(false);

  const heavyFunction = (number: number): number => {
    console.log('Current value count: ', number);
    for (let index = 0; index < 99999999; index += 1) {}
    return number * number;
  };

  const countSquare = useMemo(() => heavyFunction(count), [count]);

  // const countSquare = heavyFunction(count);

  return (
    <>
      <h1 onClick={() => setCssStyle(!cssStyle)} style={{ color: cssStyle ? 'green' : 'red' }}>
        useMemo
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <h2>{countSquare}</h2>
    </>
  );
}
export default MyHeading;

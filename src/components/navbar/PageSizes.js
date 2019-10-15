import React, { Fragment } from 'react';
import uuid from 'uuid';

export default function PageSizes() {
  const pages = [10, 50, 100, 'All'];

  return (
    <Fragment>
      {pages &&
        pages.map(item => {
          return (
            <option key={uuid()} value={item}>
              {item}
            </option>
          );
        })}
    </Fragment>
  );
}

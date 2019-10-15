import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const DataTables = ({ columns, dataSource }) => {
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th scope="col" key={index}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((rowItem, index) => (
            <tr key={uuid()}>
              {columns.map((columnData, index) => (
                <td key={index}>{rowItem[columnData.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTables.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  dataSource: PropTypes.arrayOf(PropTypes.object)
};

DataTables.defaultProps = {
  columns: [],
  dataSource: []
};

export default DataTables;

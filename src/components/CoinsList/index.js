import React from 'react';
import PropTypes from 'prop-types';

import DataTable from '../DataTable';

const ListCoins = ({ data }) => {
  data = data.map(item => {
    item.key = item.rank;
    return item;
  });

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price_usd',
      key: 'price_usd'
    },
    {
      title: 'Price Change (24h)',
      dataIndex: 'percent_change_24h',
      key: 'percent_change_24h'
    },
    {
      title: 'Market Cap',
      dataIndex: 'market_cap_usd',
      key: 'market_cap_usd'
    },
    {
      title: 'Volume',
      dataIndex: '24h_volume_usd',
      key: '24h_volume_usd'
    }
  ];

  /* Append $ at start of currency values*/
  data = data.map(item => {
    item.price_usd = `$${item.price_usd}`;
    item.market_cap_usd = `$${item.market_cap_usd}`;
    item['24h_volume_usd'] = `$${item['24h_volume_usd']}`;
    return item;
  });

  /* This is configuration about table data representation. whether to show our fetched data in pagination format. */
  // let pagination = {
  //   hideOnSinglePage: true,
  //   defaultPageSize: 10
  // };

  return (
    <div className="coins-list">
      <div className="card">
        <div className="card-body">
          <DataTable dataSource={data} columns={columns}></DataTable>
        </div>
      </div>
    </div>
  );
};

ListCoins.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

ListCoins.defaultProps = {
  data: []
};

export default ListCoins;

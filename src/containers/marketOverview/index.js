import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { getCoins } from '../../actions/coinsAction';
import CoinsList from '../../components/CoinsList/index';

class MarketOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { pageSize } = this.props.coinsData;
    this._loadMarketCoins(pageSize);
  }

  _loadMarketCoins = pageSize => {
    this.props.getCoins(pageSize);
  };

  shouldComponentUpdate(nextProps) {
    let pegCall = true;
    if (nextProps.coinsData && this.props.coinsData) {
      if (nextProps.coinsData.pageSize !== this.props.coinsData.pageSize) {
        this._loadMarketCoins(nextProps.coinsData.pageSize);
        pegCall = false;
      }
    }
    return pegCall;
  }

  render() {
    const { coins } = this.props.coinsData;

    return (
      <div className="container">
        {(!coins.loading && coins.data && (
          <div className="container">
            <CoinsList data={coins.data} />
          </div>
        )) || (
          <div className="waitingLoader">
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coinsData: state.coins
});

const mapDispatchToProps = dispatch => {
  return {
    getCoins: limit => dispatch(getCoins(limit))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketOverview);

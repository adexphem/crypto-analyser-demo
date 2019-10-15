import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Apartment } from '@material-ui/icons';
import { changePageSize } from '../../actions/coinsAction';
import { DEFAULT_PAGE_SIZE } from '../../settings/appSettings';
import PageSizes from './PageSizes';

class Index extends Component {
  constructor(props) {
    super(props);
    this.defaultPageSize = DEFAULT_PAGE_SIZE;
  }

  onPageSizeToggle = event => {
    let selectedSize = event.target.value;
    selectedSize =
      selectedSize === 'All' ? this.defaultPageSize : parseInt(selectedSize);

    // make a dispatch
    this.props.changePageSize(selectedSize);
  };

  render() {
    const { pageSize } = this.props.coinsData;

    return (
      <div className="header-container">
        <header className="navbar fixed">
          <div className="navitem logo">
            <span className="icon">
              <Apartment />
            </span>
            <Link to="/">Crypto Assets Analyzer</Link>
          </div>
          <div className="navlinks">
            <Link to="/" className="navitem">
              Market Overview
            </Link>
            <Link to="/liquidity" className="navitem">
              Liquidity
            </Link>
          </div>
        </header>
        <div className="p-t p-b container">
          <h1 className="t-c">
            Listing {this.props.coinsData && this.props.coinsData.pageSize}{' '}
            Cryptocurrencies by Market Capitalization
          </h1>
          <div className="row align-items-center justify-content-between">
            <label>
              <b>Total Records Fetched</b>
            </label>
            <select
              onChange={this.onPageSizeToggle}
              className="custom-select"
              value={pageSize}
            >
              <PageSizes />
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coinsData: state.coins
});

const mapDispatchToProps = dispatch => {
  return {
    changePageSize: pageSize => dispatch(changePageSize(pageSize))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(Index);

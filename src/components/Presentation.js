import React, { Component, Fragment } from 'react';
import { Chart } from 'react-google-charts';

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  buildData = data => {
    let response = [
      [
        'Volume',
        'Market Cap.',
        { role: 'tooltip', type: 'string', p: { html: true } }
      ]
    ];

    // eslint-disable-next-line
    data.map(item => {
      response.push([
        parseFloat(item['24h_volume_usd']),
        parseFloat(item['market_cap_usd']),
        `<div class="tooltip"><div>Name: ${item.name} </div><div>Market Cap.: ${
          item['market_cap_usd']
        }</div> <div> Volume: ${
          item['24h_volume_usd']
        }</div><div>Price Change: ${item.percent_change_24h}</div></div>`
      ]);
    });

    this.setState({
      chartData: response
    });
  };

  componentDidMount() {
    this.buildData(this.props.data);
  }

  componentDidUpdate(nextProps, prevProps) {
    let check = true;

    if (nextProps.data.length !== this.props.data.length) {
      this.buildData(this.props.data);
      check = false;
    }

    return check;
  }

  render() {
    const { chartData } = this.state;

    return (
      <Fragment>
        <Chart
          width={'100%'}
          height={'60vh'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[...chartData]}
          options={{
            title: 'Volume vs. Market Cap. comparison',
            hAxis: { title: 'Market Cap.', minValue: 0, maxValue: 50 },
            vAxis: { title: 'Volume', minValue: 0, maxValue: 50 },
            tooltip: { isHtml: true, trigger: 'visible' },
            legend: 'none'
          }}
        />
      </Fragment>
    );
  }
}

export default Presentation;

import {
  CHART_TITLE,
  CHART_SUB_TITLE,
  CHART_XAXIS_TEXT,
  CHART_YAXIS_TEXT
} from './appSettings';

export const chartType = {
  type: 'scatter',
  zoomType: 'xy'
};

export const chartXAxis = {
  title: {
    enabled: true,
    text: CHART_XAXIS_TEXT
  },
  startOnTick: true,
  endOnTick: true,
  showLastLabel: true
};

export const chartYAxis = {
  title: {
    text: CHART_YAXIS_TEXT
  }
};

export const chartTitle = {
  text: CHART_TITLE
};

export const chartSubTitle = {
  text: CHART_SUB_TITLE
};

export const chartLegend = {
  enabled: false
};

export const chartPlotOptions = {
  scatter: {
    marker: {
      radius: 5,
      states: {
        hover: {
          enabled: true,
          lineColor: 'rgb(100,100,100)'
        }
      }
    },
    states: {
      hover: {
        marker: {
          enabled: false
        }
      }
    },
    tooltip: {
      headerFormat: '<b>{point.name}</b><br>',
      pointFormat: '${point.x}, ${point.y}',
      pointFormatter: function() {
        var point = this;
        return (
          '<span style="color:' +
          point.color +
          '">\u25CF</span> <span><b>' +
          point.name +
          '</b></span><br />' +
          '<span><b>Price Change (24h): </b> ' +
          point.pricechange +
          ' %</span><br />' +
          '<span><b>Volume: </b> ' +
          point.volume +
          ' USD</span><br />' +
          '<span><b>Market Cap: </b> ' +
          point.marketcap +
          ' USD</span><br />'
        );
      }
    }
  }
};

import React, { Component } from 'react';
import PieChart from 'react-svg-piechart';
var _ = require('lodash');


class PieChartComponent extends Component {

  componentDidMount(){

  }

  render() {
    const { issues } = this.props;
    let intermed = issues.map(elem => _.pick(elem, ['issue', 'fixed']))
    intermed = intermed.reduce((total, current) => {
      total[current.fixed] = (total[current.fixed] || 0) + 1;
      return total;
    }, {})
    const data = [
      {title: 'Fixed', value: intermed.true, color: "#91CA78"},
      {title: 'Not Fixed', value: intermed.false, color: "#D2616A"}
    ]
    console.log(data)
    return (
      <div id="pie-chart">
        <h2 className="component-header">Pie Chart of Issues </h2>
        <PieChart
        data={data}
        />
      </div>
    )
  }
}

export default PieChartComponent;

import React, { Component } from 'react';
import _ from 'lodash';
import { ChartArea, StackedBar } from 'viiksetjs';
import styled from 'styled-components';


let data = [
  {issue: 'pothole', fixed: 0, unfixed: 0},
  {issue: 'streetlight', fixed: 0, unfixed: 0},
  {issue: 'traffic-light', fixed: 0, unfixed: 0}
]

const isMobile = window.innerWidth <= 500

const ChartWrapper = styled.div`
  height: ${ isMobile ? '300px' : '500px'};
`

class BarGraph extends Component {

  componentDidMount(){
    const { issues } = this.props;
    let intermed = issues.map(elem => _.pick(elem, ['issue', 'fixed']))
    intermed.forEach(element => {
      if(element.issue === 'pothole'){
        if(element.fixed) data[0].fixed ++
        else data[0].unfixed++;
      }
      if(element.issue === 'streetlight'){
        if(element.fixed) data[1].fixed ++
        else data[1].unfixed++;
      }
      if(element.issue === 'traffic-light'){
        if(element.fixed) data[2].fixed ++
        else data[2].unfixed++;
      }
    })
    console.log(data);
  }





  render(){
    return (
      <div>
        <h2 className="component-header">Percent Complete by Issue</h2>
        <ChartWrapper>
          <ChartArea
              data={data}
              type='ordinal'
              numXTicks={isMobile ? 1: 4}
              color="grey"
              xKey="issue"
              stroke="grey"
              nogrid
              yTickLabelProps={() => ({ fontSize: 10, strokeWidth: '0.5px' })}
            >
              <StackedBar
                colors={['#91CA78', '#D2616A']}
                keys={['fixed', 'unfixed']}
              />
            </ChartArea>
          </ChartWrapper>
      </div>
    )
  }
}

export default BarGraph;


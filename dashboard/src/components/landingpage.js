import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Line from './Line';
import Radar from './Radar';
import Pie from './Pie' ;
import Checklist from './Checklist';
import Date from './Date';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell className="resume-left-col" col={4} >
          <h4>Quality of Air</h4>
          <Line/>
          </Cell>
          <Cell className="resume-left-col" col={3} >
          <h4>Poll of environemental involved people</h4>
          <Pie/>
          </Cell>
          <Cell className="resume-left-col" col={5} >
          <h4>Quantity of waste on Earth</h4>
          <Radar/>
          </Cell>
          <Cell className="resume-left-col" col={6} >
          <h4>Sum up</h4>
          <Checklist/>
          </Cell>
          <Cell  >
          <Date/>
          </Cell>
        </Grid>



      </div>
    )
  }
}

export default Landing;

import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent , Textfield} from 'react-mdl';


class Admin extends Component {
  render() {
    return(
      <div >
        <br/>
        <Grid className="contact-grid" style={{ opacity:'0.8'}}>
          <Cell col={6}>
            <h2>Admin Space</h2>
            <br/>
            <h6>Enter what you want to enter</h6>
            <Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
/>

<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    style={{width: '200px'}}
/>
<h6>Enter what you want to enter</h6>
<Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
/>

<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    style={{width: '200px'}}
/>
<h6>Enter what you want to enter</h6>
<Textfield
    onChange={() => {}}
    label="Text..."
    style={{width: '200px'}}
/>

<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    style={{width: '200px'}}
/>
          </Cell>
         
        </Grid>
      </div>
    )
  }
}

export default Admin;

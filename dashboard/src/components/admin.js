import React, { Component } from 'react';
import { Grid, Cell, Tab,Tabs, Textfield, Button} from 'react-mdl';


class Admin extends Component {
  
  
  
  constructor(props) {
    super(props);
    this.state={
    value1:'Name :',
    value2:'Surname :',
    value3:'Birth :',
    value4:'Album : ',
    value5:'Followers : ',
    activeTab : 1
    }
    }
  
  
  
  
  render() {
    return(
      <div >
        <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab onClick = {()=>{this.setState({value1:'Title : ',value2:'Duration : ',value3:'Listenings : ',value4:'Likes : ',value5:'Track'})}}>Track</Tab>
                    <Tab onClick = {()=>{this.setState({value1:'Name : ',value2:'Surname : ',value3:'Birth : ',value4:'Album : ',value5:'Followers'})}}>Artist</Tab>
                    <Tab onClick = {()=>{this.setState({value1:'Title : ',value2:'Release : ',value3:'Type : ',value4:'Cover-URL : ',value5:'Tracks'})}}>Album</Tab>
                </Tabs>
            </div>  
        <Grid className="contact-grid" style={{ opacity:'0.8'}}>
          <Cell col={6}>
            <h6>{this.state.value1}</h6>
            <Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
/>
<h6>{this.state.value2}</h6>
<Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
/>

<h6>{this.state.value3}</h6>
<Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
/>
<h6>{this.state.value4}</h6>
<Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
/>

<h6>{this.state.value5}</h6>
<Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
/>
<br/>
          <Button ripple>Add</Button>
         
          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Admin;



/*


render() {
return (
<div className="profile "> 
<h2>Ajout {this.state.value5}</h2> 
<form className="text-center">
<label>{this.state.value1} 
<input type="text" name="{this.state.value1} " />
</label>


<input type="submit" value="Submit" />
<br/>
<button
type="button"
id="bouton"
onClick = {()=>{this.setState({value1:'Title : ',value2:'Duration : ',value3:'Listenings : ',value4:'Likes : ',value5:'Track'})}}
>
Add Track
</button>
<button
type="button"
id="bouton"
onClick = {()=>{this.setState({value1:' Title : ',value2:'Release : ',value3:'Genre : ',value4:'Cover Url : ',value5:'Album'})}}
>
Add Album
</button>
<button
type="button"
id="bouton"
onClick = {()=>{this.setState({value1:' Surname : ',value2:'Name : ',value3:'Followers : ',value4:'Undefined : ',value5:'Artist'})}}
>
Add Artist
</button>
</form>

</div>
);
}
}

export default admin;*/

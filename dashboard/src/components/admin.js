import React, { Component } from 'react';
import { Grid, Cell, Tab,Tabs, Textfield, Button} from 'react-mdl';
const axios = require('axios');


class Admin extends Component {
  
  
  
  constructor(props) {
    super(props);
    this.state={
    value1:'Name :',
    value2:'Surname :',
    value3:'Birth :',
    value4:'Album : ',
    value5:'Followers : ',
    type:'Artist',
    activeTab : 1,
    name:''//RAJOUTER TOUS LES AUTRES VARIABLES DE CHAQUE FORM
    }
    }
    
    datarecep = async (e) =>{{

      if(this.state.type==='Artist')
      {
        axios.put(

      'http://localhost:3000/add/artist',
      
      {
        name: this.state.myInputValue1,
        surname: this.state.myInputValue2,
        birth: this.state.myInputValue3 ,
        album:this.state.myInputValue4,
        followers: this.state.myInputValue5
      })
      .then(function(response){console.log('Your artist has been added !')});
      }

      else if(this.state.type==='Album')
      {
        axios.put(

      'http://localhost:3000/add/album',
      
      {
        title: this.state.myInputValue1,
        release: this.state.myInputValue2,
        type: this.state.myInputValue3 ,
        coverurl:this.state.myInputValue4,
        tracks: this.state.myInputValue5
      })
      .then(function(response){console.log('Your album has been added !')});
      }

      else if(this.state.type==='Track')
      {
        axios.put(

      'http://localhost:3000/add/track',
      
      {
        title: this.state.myInputValue1,
        duration: this.state.myInputValue2,
        listening: this.state.myInputValue3 ,
        likes:this.state.myInputValue4,
        featuring: this.state.myInputValue5
      })
      .then(function(response){console.log('Your track has been added !')});
      }


      return false;
    
    }};


  
  
  
  render() {
    return(
      <div >
        <form onSubmit={this.handleSubmit}>
        <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab onClick = {()=>{this.setState({value1:'Title : ',value2:'Duration : ',value3:'Listenings : ',value4:'Likes : ',value5:'Track',type:'Track'});console.log(this.state.type);}}>Track</Tab>
                    <Tab onClick = {()=>{this.setState({value1:'Name : ',value2:'Surname : ',value3:'Birth : ',value4:'Album : ',value5:'Followers',type:'Artist'});console.log(this.state.type);}}>Artist</Tab>
                    <Tab onClick = {()=>{this.setState({value1:'Title : ',value2:'Release : ',value3:'Type : ',value4:'Cover-URL : ',value5:'Tracks',type:'Album'});console.log(this.state.type);}}>Album</Tab>
                </Tabs>
            </div>  
        <Grid className="contact-grid" style={{ opacity:'0.8'}}>
          <Cell col={6}>
            <h6>{this.state.value1}</h6>
            <Textfield
    defaultValue={this.state.myInputValue1}
    onChange={e => this.setState({myInputValue1: e.target.value})}
    label="..."
    style={{width: '200px'}}
/>
<h6>{this.state.value2}</h6>
<Textfield
    defaultValue={this.state.myInputValue2}
    onChange={e => this.setState({myInputValue2: e.target.value})}
    label="..."
    style={{width: '200px'}}
/>

<h6>{this.state.value3}</h6>
<Textfield
    defaultValue={this.state.myInputValue3}
    onChange={e => this.setState({myInputValue3: e.target.value})}
    label="..."
    style={{width: '200px'}}
/>
<h6>{this.state.value4}</h6>
<Textfield
    defaultValue={this.state.myInputValue4}
    onChange={e => this.setState({myInputValue4: e.target.value})}
    label="..."
    style={{width: '200px'}}
/>

<h6>{this.state.value5}</h6>
<Textfield
    defaultValue={this.state.myInputValue5}
    onChange={e => this.setState({myInputValue5: e.target.value})}
    label="..."
    style={{width: '200px'}}
/>
<br/>
          <Button type="button" onClick={this.datarecep}  ripple>Add</Button>
         
          </Cell>
          
        </Grid>
        </form>
      </div>
    )
  }
}

export default Admin;




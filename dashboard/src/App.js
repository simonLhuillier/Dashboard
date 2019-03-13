import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
    <Layout style={{background: 'url(https://zupimages.net/up/19/11/5wyi.jpg) center / cover'}}  >
    <Header style={{background: 'white', opacity: '.8' }}  transparent   title={<Link style={{textDecoration: 'none', color: 'black' }} to="/">Musical Dashboard</Link>} scroll>
            <Navigation >
                <Link to="/" style={{fontWeigh : 'bold', color: 'black' }}>Home</Link>
                <Link to="/admin" style={{fontWeigh :'bold', color: 'black' }}>Admin</Link>
            </Navigation>
    </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black' }} to="/">Dashboard</Link>}>
            <Navigation className="nav">
              <Link  to="/">Home</Link>
              <Link to="/admin">Admin</Link>      
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>


      </div>
      
    );
  }
}

export default App;

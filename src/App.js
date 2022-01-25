import { Link, Route, Switch, } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './App.css';

import { NavBar, HomePage, Exchanges, CryptoCurrencies, Cryptodetails, News } from './components'

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <CryptoCurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <Cryptodetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
            CryptoVerse<br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to='/' >Home</Link>
            <Link to='/exchanges' >Exhcanges</Link>
            <Link to='/news' >News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Avatar, Button, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import Icon from '../img/cryptocurrency.png';

const NavBar = props => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={Icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>CryptoVerse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme='dark'>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to='/' >Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FundOutlined />}>
            <Link to='/cryptocurrencies' >Crypto Currencies</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
            <Link to='/exchanges' >Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BulbOutlined />}>
            <Link to='/news' >News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default NavBar
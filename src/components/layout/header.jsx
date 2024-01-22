import {Button, Dropdown, notification} from 'antd';
import Logo from "../../assets/images/logo.png";
import {SearchOutlined, MenuOutlined} from "@ant-design/icons";
import InscribeImg from "../../assets/images/inscribe.svg";
import MarketImg from "../../assets/images/market.svg";

import {NavLink, useNavigate} from "react-router-dom";
import styled from "styled-components";


const Box = styled.div`
    a{
      text-decoration: none;
      
    }

`
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  a{
    text-decoration: none;
    font-family: Aeonik Mono;
  }
  span{
    font-size: 48px;
    color: #fff;
    line-height: 60px;
    text-decoration: none;
      
  }
  img{
    height:90px;
    //background: #000;
    margin-bottom: 30px;
  }
`

export default function Header() {

    return <div className="app-header">
        <LogoBox>
            <NavLink to="/"><img src={Logo} alt=""/> </NavLink>
        </LogoBox>
        <Box className="menu">
            <NavLink  to="/explorer" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item false'}>
                <SearchOutlined />
                <span className="label">Explorer</span>
            </NavLink>
            <NavLink  to="/marketplace" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item false'}>
                <img src={MarketImg} alt=""/>
                <span className="label">Marketplace</span>
            </NavLink>
            <a className="menu-item false" href="https://seeuclub.xyz/inscribe" rel="noreferrer" >
                <img src={InscribeImg} alt=""/>
                <span className="label">Inscribe</span>
            </a>
        </Box>
        <div className="mobile-menu"><MenuOutlined />
        </div>
    </div>
}

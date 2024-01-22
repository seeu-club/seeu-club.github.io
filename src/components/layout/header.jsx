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

            <a href="https://seeu.meme" target="_blank"  className="menu-item false">
                <img src={MarketImg} alt=""/>
                <span className="label">Website</span>
            </a>

            <a href="https://www.okx.com/web3/marketplace/ordinals/brc20/SeeU" className="menu-item false" target="_blank">
                <SearchOutlined/>
                <span className="label">OKX Trade</span>
            </a>
            <a href="https://unisat.io/market/brc20?tick=SeeU" className="menu-item false"
               target="_blank">
                <SearchOutlined/>
                <span className="label">Unisat Trade</span>
            </a>
            <a href="https://dune.com/0xfrozen/seeu-club" className="menu-item false"
               target="_blank">
                <SearchOutlined/>
                <span className="label">Dune Dashboard</span>
            </a>

            <a className="menu-item active" href="https://seeuclub.xyz/inscribe" rel="noreferrer">
                <img src={InscribeImg} alt=""/>
                <span className="label">Inscribe</span>
            </a>

        </Box>
        <div className="mobile-menu"><MenuOutlined/>
        </div>
    </div>
}

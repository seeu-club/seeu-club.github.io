import VideoBg from "../../assets/images/bg.webm";
import {Button} from "antd"
import {useNavigate} from "react-router-dom";
import {WEB_NAME} from "../../utils/constant.js";
import styled from "styled-components";

const Box = styled.div`
    .slogan span{
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    .webName{
        font-weight: bold;
        background-image: linear-gradient(to right, #ff779b, #fff06e, #84ff93, #4d86fa);
        background-clip: text;
        font-family: Aeonik Mono;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-stroke: 2px #000;
        //text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
`


export default function Banner() {
    const navigate = useNavigate();
    const togo = (url) =>{
        navigate(url)
    }

    return <Box>
        <div className="home-first-screen">
            <video className="video-bg" src={VideoBg} autoPlay loop muted></video>
            <div className="slogan">
                <span className="">Your first </span>
                <span className="right">inscription</span>
                <div><span>is</span> <strong className="webName">{WEB_NAME}</strong></div>
            </div>
            <div className="desc">
                <span className="desc-text"> </span>
                {/* <Button className="launch-btn" onClick={() => togo("/inscribe")}> */}
                <Button className="launch-btn" onClick={() => open("https://t.me/seeubtc")}>
                    <span className="label">Join {WEB_NAME}</span>
                </Button>
            </div>
        </div>
    </Box>
}

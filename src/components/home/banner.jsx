import VideoBg from "../../assets/images/home/bg.mp4";
import {Button} from "antd"
import {useNavigate} from "react-router-dom";
import {WEB_NAME} from "../../utils/constant.js";


export default function Banner() {
    const navigate = useNavigate();
    const togo = (url) =>{
        navigate(url)
    }

    return <div className="home-first-screen">
        <video className="video-bg" src={VideoBg} autoPlay loop muted></video>
        <div className="slogan">
            <span className="">Your first </span>
            <span className="right">inscription</span>
            <span>is {WEB_NAME}</span>
        </div>
        <div className="desc">
            <span className="desc-text"> </span>
            <Button className="launch-btn" onClick={()=>togo("/inscribe")}>
                <span className="label">Join {WEB_NAME}</span>
            </Button>
        </div>
    </div>
}

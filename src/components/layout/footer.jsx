import MediaImg from "../../assets/images/media.svg";
import TwitterImg from "../../assets/images/twitter.svg";
import TelegramImg from "../../assets/images/telegram.svg";

export default function Footer() {
    return <div className="app-footer">
        <div className="medias">
            {/* <a className="media" href="#" target="_blank">
                <img src={MediaImg} alt=""/>
            </a> */}
            <a className="media" href="https://twitter.com/seeu_brc20" target="https://twitter.com/seeu_brc20">
                <span role="img"  className="anticon anticon-twitter">
                    <img src={TwitterImg} alt=""/>
                </span>
            </a>
            <a className="media" href="https://t.me/seeubtc" target="https://t.me/seeubtc">
                <img src={TelegramImg} alt=""/>
        </a></div>
    </div>
}

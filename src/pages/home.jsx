import Layout from "../components/layout/layout.jsx";
import Banner from "../components/home/banner.jsx";
import "../assets/styles/home.scss";

export default function Home(){
    return <Layout>
        <div className="home-page">
            <Banner />
        </div>
    </Layout>
}

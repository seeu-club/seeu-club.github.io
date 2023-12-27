import Header from "./header.jsx";
import Footer from "./footer.jsx";
export default function Layout({children}){
    return <div className="app-layout">
        <Header />
            <div className="app-container">{children}</div>
        <Footer />
    </div>
}

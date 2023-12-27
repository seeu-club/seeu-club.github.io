import GlobalStyle from "./utils/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLink from "./router/router";
import { ConfigProvider } from 'antd';

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#fff',

                    },
                    components: {
                        Button: {
                            colorPrimary: '#141414',
                            colorPrimaryHover: "#141414",
                            colorPrimaryActive: "#141414",
                            defaultBg: "#141414",
                            defaultBorderColor: "#424242",
                        }
                    },
                }}
            >
                <Router>
                    <RouterLink />
                </Router>
                <GlobalStyle />
            </ConfigProvider>

        </>
    )
}

export default App

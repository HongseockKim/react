import HeaderStyle from "./style/HeaderStyle";
import logo from '@image/logo.svg'
import {Route, Routes} from "react-router-dom";
import Default from "./layout/Default";
import Main from "./component/Main";


function App() {
    return (
        <div className="App">
            <HeaderStyle>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className='nav_el'>
                    <ul className="nav_list" >
                        <li className="nav_item" ></li >
                        </ul >
                </nav>
            </HeaderStyle>
            <Routes>
                <Route path='/' element={<Default/>}>
                    <Route path='/' element={<Main/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
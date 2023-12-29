import HeaderStyle from './style/HeaderStyle'
import logo from '@image/logo.svg'
import { Route, Routes } from 'react-router-dom'
import Default from './layout/Default'
import ProductDetail from './component/ProductDetail'
import LoginComponet from './component/LoginComponet'
import Main from './component/Main'
import BottomSheet from './component/BottomSheet'
import 'swiper/css'

function App() {
  return (
    <div className="App">
      <HeaderStyle>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav_el">
          <ul className="nav_list">
            <li className="nav_item"></li>
          </ul>
        </nav>
      </HeaderStyle>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<LoginComponet />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="product/open/:productId/:postId"
            element={<ProductDetail />}
          />
          <Route
            path="product/private/:productId/:postId"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
      <BottomSheet />
    </div>
  )
}

export default App

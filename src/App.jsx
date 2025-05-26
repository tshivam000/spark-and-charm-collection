import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProduceDetails'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} exact={true} element={<Home />} />
        <Route path={'/productListing'} exact={true} element={<ProductListing />} />
        <Route path={'/productDetails/:id'} exact={true} element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

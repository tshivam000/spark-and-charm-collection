import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} exact={true} element={<Home />} />
        <Route path={'/productListing'} exact={true} element={<ProductListing />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

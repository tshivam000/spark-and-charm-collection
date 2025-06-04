import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer'
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProduceDetails'
import {createContext, useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom'
import { IoCloseSharp } from 'react-icons/io5'
import ProductDetailsComponent from './components/ProductDetails'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CartPage from './Pages/Cart'
import Verify from './components/Verify'
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './Pages/ForgotPassword'
import Checkout from './Pages/Checkout'
import MyAccount from './components/MyAccount'
import MyList from './Pages/MyList'
import Orders from './components/Orders'



const MyContext = createContext()

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true)
  const [maxWidth, setMaxWidth] = useState('lg')
  const [isLogin, setIsLogin] = useState(true)
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleClickOpenProductDetailsModel = () => {
    setOpenProductDetailsModel(true);
  };
 
  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const openAlertBox = (status, msg) => {
  if (status === "success") {
    toast.success(msg);
  }
  if (status === "error") {
    toast.error(msg);
  }
  };

  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  } 




  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path={'/'} exact={true} element={<Home />} />
        <Route path={'/productListing'} exact={true} element={<ProductListing />} />
        <Route path={'/productDetails/:id'} exact={true} element={<ProductDetails />} />
        <Route path={'/login'} exact={true} element={<Login />} />
        <Route path={'/register'} exact={true} element={<Register />} />
        <Route path={'/cart'} exact={true} element={<CartPage />} />
        <Route path={'/verify'} exact={true} element={<Verify />} />
        <Route path={'/forgot-password'} exact={true} element={<ForgotPassword />} />
        <Route path={'/checkout'} exact={true} element={<Checkout />} />
        <Route path={'/my-account'} exact={true} element={<MyAccount />} />
        <Route path={'/my-list'} exact={true} element={<MyList />} />
        <Route path={'/my-orders'} exact={true} element={<Orders />} />
      </Routes>
      <Footer/>
      </MyContext.Provider>
      </BrowserRouter>

      <Toaster />


      <Dialog 
        open={openProductDetailsModel}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModel'
      >
        <DialogContent>
          <div className='flex items-center w-full productDetailsModelContainer relative'>
            <Button className='!bg-[#f1f1f1] !w-[35px] h-[35px] !min-w-[35px] !rounded-full !absolute top-[-15px] right-[-20px] 
            ' onClick={handleCloseProductDetailsModel}><IoCloseSharp className='text-[20px]'/></Button>
            <div className='col1 w-[40%]'>
              <ProductZoom/>
            </div>
            <div className='col2 w-[60%] py-0 px-8 productContent'>
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>

      </Dialog>      

    </>
  )
}

export default App
export {MyContext}

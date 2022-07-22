import { Route, Routes } from "react-router-dom";
import Products from "../Product page/Products";
import React from "react";
import Description from "../Description/Description";
// import Cart from "../Cart/Cart";
import Home from "../Landing page/Home";
import { Login } from "../Auth Page/Login";
import { Signup } from "../Auth Page/Signup"
import Navbar from "../util/Navbar";
import  Footer  from "../Footer/Footer";
import Cart from "../Cart/Cart"
import Info from "../Cart/Costumer_info/Info";
import Payment from "../Cart/Costumer_info/Payment";
const MainRoutes = () => {

    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="/description" element={<Description />} />
                <Route path="products/:id" element={<Products />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Info/>}/>
                <Route path="/payment" element={<Payment/>}/>
            </Routes>
            <Footer />
        </>

    )
}

export default MainRoutes;

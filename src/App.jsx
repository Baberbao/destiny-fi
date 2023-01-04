import "./App.css";
// import React, { useEffect, useState } from "react";
// import Web3 from "web3";
// import NetworkChange from "./networkSwitch";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AdvancePart from "./components/AdvanceThings/AdvancePart";
import Affiliate from "./components/AffiliateProgram/Affiliate";
import BehindDestiny from "./components/BehindDestiny/BehindDestiny";
import DeFifi from "./components/DeFifi/DeFifi";
import WhyDefinity from "./components/WhyDefinity/TechDifference";
import Affiliateprogram from "./components/Affiliate.jsx/Affiliateprogram";
import Joinacademy from "./components/Joinacademy/Joinacademy";
import DashboardMain from "./components/Dashboard/DashboardMain";
import Product from "./components/Product/Product";
import Education from "./components/Education/Educations";
import { useContext, useEffect, useState } from "react";
import LoadingSvg from "./LoadingSvg";
import MemberMain from "./components/Member/MemberMain";
import { AppContext } from "./utils";

function App() {
  const [loading, setLoading] = useState(true);
  const { account, connect } = useContext(AppContext);
  const navigate = useNavigate();

  const myGreeting = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", (event) => {
      setLoading(false);
    });
  });

  useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      let final = getAddress.slice(0, 42);
      localStorage.setItem("defi_refAddress", final);
    }
    if (account) {
      navigate("/dashbord");
    }
    // if (!account) {
    //   connect();
    //   console.log("calling connect");
    // }
  }, [account]);

  return (
    <>
      <LoadingSvg loading={loading} />
      {/* <NetworkChange open={open} setOpen={setOpen} /> */}
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <WhyDefinity />
              <Education />
              <AdvancePart />
              <DeFifi />
              <Affiliate />
              <BehindDestiny />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header fixed={true} />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/joinacademy"
          element={
            <>
              <Header fixed={true} />
              <Joinacademy />
              <Footer />
            </>
          }
        />
        <Route
          path="/defifireFX"
          element={
            <>
              <Header fixed={true} />
              <Product />
              <Footer />
            </>
          }
        />

        <Route
          path="/affiliate-program"
          element={
            <>
              <Header fixed={true} />
              <Affiliateprogram />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashbord/*"
          element={
            // account ?
            <DashboardMain />
            // : <Navigate to="/login" />
          }
        />

        <Route path="/member/*" element={<MemberMain />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherAPI } from "./store/features/weatherSlice";
import { VC_URL, VC_KEY } from "./constants/api";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NotFoundPage from "./components/notFound/NotFoundPage";
import NextDay from "./components/nextDay/NextDay";
import FourDays from "./components/fourDays/FourDays";
import Maps from "./components/maps/Maps";
import Navbar from "./components/navbar/Navbar";
import SignUpPage from "./components/signUpPage/SignUpPage";
import About from "./components/about/About";

import "./styles/App.scss";

const App = () => {
  const [location, setLocation] = useState("Kyiv");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.weather);
  const path = useLocation();

  const getWeatherData = (url) => {
    dispatch(getWeatherAPI(url));
  };

  useEffect(() => {
    getWeatherData(VC_URL + location + VC_KEY);
  }, [location]);

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <>
          {data.search !== false ? (
            <Routes>
              <Route
                index
                element={<Main data={data} setLocation={setLocation} />}
              />
              <Route path="/next" element={<NextDay data={data} />} />
              <Route path="/few" element={<FourDays data={data} />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/about" element={<About />} />
              <Route path="/signUp" element={<SignUpPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
        </>
        {path.pathname === "/maps" ? null : <Navbar />}
      </div>
    </div>
  );
};

export default App;

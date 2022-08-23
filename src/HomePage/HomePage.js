import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";
import HeroSection from "../skcomponents/HeroSection";
import Home from "../skcomponents/pages/Home";
import ProjectDetails from "../skcomponents/Project";
import Cards from "../skcomponents/Cards";
import Footer from "../skcomponents/Footer";

const HomePage = () => {
  return (
    <div>
      <>
        <Navbar />
        <CssBaseline />
        <Home />
      </>
    </div>
  );
};

export default HomePage;

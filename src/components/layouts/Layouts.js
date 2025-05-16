import React from "react";
import HeaderResponsiveAppBar from "../headers/HeaderResponsiveAppBar";
import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";


export default function Layouts() {
  return (
    <LayoutHeaderStyled>
      <HeaderResponsiveAppBar />
      {/* <header>test</header> */}


      <LayoutContentStyled>
        <Outlet />
      </LayoutContentStyled>

      <LayoutFooterStyled>
        Solar Rooftop Application
        <br />© 2023 Scada Automation CO.,Ltd.
      </LayoutFooterStyled>
    </LayoutHeaderStyled>
  );
}

const LayoutHeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
const LayoutContentStyled = styled(Box)(({ theme }) => ({
  marginTop: "12px",
}));
const LayoutFooterStyled = styled(Box)(({ theme }) => ({
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  backgroundColor: theme.palette.warning.dark,
  color: "white",
  textAlign: "center",
}));

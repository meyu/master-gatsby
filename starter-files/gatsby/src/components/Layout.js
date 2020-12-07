import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

// Note: 這裡使用了 Normalize.css 來"修正"網頁最底層版型
// https://necolas.github.io/normalize.css/
import "normalize.css";
// Note: 引入自訂的 Global Style
import GlobalStyles from "../styles/GlobalStyle";
import Typography from "../styles/Typography";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </>
  );
}

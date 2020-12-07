// Note：gatsby-browser.js 和 gatsby-ssr.js 的作用和內容是一樣的，只是一個是由 browswer 執行，一個由 server 執行。
import React from "react";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

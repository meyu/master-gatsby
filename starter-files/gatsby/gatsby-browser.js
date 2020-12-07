import React from "react";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
    // Note：這邊不傳入 {...props} 也可以運作。所以... 為何要這麼做呢?
    return <Layout {...props}>{element}</Layout>;
}

import React from "react";

// 傳統寫法
// export default function Footer() {
//   return (
//     <footer>
//         <p>&copy; 好比薩 {new Date().getFullYear()}</p>
//     </footer>
//   );
// }

// Note: 也可以寫成這樣
const Footer = () => (
  <footer>
    <p>&copy; Gatsby Pizza Boom {new Date().getFullYear()}</p>
  </footer>
);
export default Footer;

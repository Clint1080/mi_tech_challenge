// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import Link from "./Link";
// import Contact from "./Contact";
// import Home from "./Home";
// import logo from "../assets/Logo.png";

// const Header = () => {
//   const [pageSwitch, setpageSwitch] = useState(false);

//   const addBackground = () => {
//     const header = document.querySelector(".header");
//     header.classList.add("contact_header_background");
//   };
//   const removeBackground = () => {
//     const header = document.querySelector(".header");
//     header.classList.remove("contact_header_background");
//   };

// const Links = () => {
//   if (!pageSwitch) {
//     return (
//       <li>
//         <Link
//           href="/contact"
//           className="stuff"
//           // onClick={() => {
//           //   removeBackground();
//           //   setpageSwitch(true);
//           // }}
//         >
//           home
//         </Link>
//       </li>
//     );
//   } else {
//     return (
//       <li>
//         <Link
//           // onClick={() => {
//           //   addBackground();
//           //   setpageSwitch(false);
//           // }}
//           className="morestuff"
//           href="/"
//         >
//           home
//         </Link>
//       </li>
//     );
//   }
// };
//   return (
//     <div className="header">
//       <img src={logo} className="logo" alt="logo"></img>
//     </div>
//   );
// };

// export default Header;

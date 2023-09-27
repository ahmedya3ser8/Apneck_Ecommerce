import { Outlet } from "react-router-dom";
import Header from "../basic/header/Header";
import Footer from "../basic/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location)

  return (
    <div>
      <Header></Header>
      <div>
        {
            isNavigation && <span>Loading.....</span>
        }
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;

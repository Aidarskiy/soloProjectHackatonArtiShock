import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CreateCard from "./components/CreateCard/CreateCard";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import NavbarComp from "./components/Navbar/NavbarComp";
import MainContextProvider from "./contexts/MainContext";
import EditPage from "./Pages/EditPage/EditPage";
import OrderPage from "./Pages/OrderPage/OrderPage";
import CatalogPage from "./Pages/CatalogPage";
import Footer from "./components/Footer/Footer";
import AdminPage from "./Pages/AdminPage";
import AdminContextProvider from "./contexts/AdminContex";
import AuthContextProvider from "./contexts/AuthContext";
import NewsPage from "./Pages/NewsPage/NewsPage";

import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import CreditCardPage from "./Pages/CreditCard/CreditCardPage";
import ShowMore from "./Pages/ShowMore/ShowMore";
import CommentContextProvider from "./contexts/CommentContext";
import FavoritePage from "./Pages/FavoritePage";

const Routes = () => {
  return (
    // <ClientContextProvider>
    <CommentContextProvider>
    <AuthContextProvider>
      <AdminContextProvider>
        <MainContextProvider>
          <BrowserRouter>
            <NavbarComp />
            {/* test */}

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/admin" component={AdminPage} />
              <Route exact path="/create" component={CreateCard} />
              <Route exact path="/edit/:id" component={EditPage} />

              <Route exact path="/sign-in" component={SignInPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/order" component={OrderPage} />
              <Route exact path="/news" component={NewsPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/created" component={CatalogPage} />
              <Route exact path="/contacts" component={ContactPage} />
              <Route exact path="/credit/card" component={CreditCardPage} />
              <Route exact path="/showmore/:id" component={ShowMore} />
              <Route exact path="/favorites" component={FavoritePage} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </MainContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
    </CommentContextProvider>
    // </ClientContextProvider>
  );
};

export default Routes;

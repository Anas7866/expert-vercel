import React from "react";
import Header from "@/Components/Header/Header";
import { Layout } from "@/Components/Layout/Layout";
import { Provider, useDispatch } from "react-redux";
import { getCookie, theme } from "@/utils/utils";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { store } from "../Redux/Store";
import "bootstrap/dist/css/bootstrap.css";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";
import Head from "next/head";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import 'font-awesome/css/font-awesome.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleReCaptchaProvider
        reCaptchaKey={"6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK"}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleReCaptchaProvider>
    </Provider>
  );
}

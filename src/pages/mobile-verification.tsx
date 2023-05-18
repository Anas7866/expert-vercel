import Img from "@/Components/Image/Image";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { CopyRight } from "@/styles/CopyRight.styled";
import { Button } from "@/styles/Button.style";
import { FAECodeInput } from "@/Components/VerificationInput/VerificationInput";
import { ResendAction, VerificationAction } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
function MobileVerification() {
  const router = useRouter();
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loadToken, setLoadToken] = React.useState(false);
  const [otp, setOTP] = useState("");
  const [authToken, setAuthToken] = React.useState("");
  const [tokenRefresh, setTokebRefresh] = React.useState(false);
  const [seconds, setSeconds] = useState(60);
  const [success, setSuccess] = useState<any>(false);
  const [resend, Setresend] = useState<any>(true);
  const query = router.query;
  const { userId, priamryMobile, recreatePassword } = query || {};
  const handleClick = (e: any) => {
    e.preventDefault();
    setLoader(true);
    setErrorMessage({ type: false, message: "" });
    VerificationAction(Number(userId), otp, priamryMobile).then((result) => {
      setLoader(false);
      if (result?.statusCode === 0 && recreatePassword) {
        router.push({
          pathname: "/create-forget-password",
          query: { ...query, userOTP: otp, userId, recreatePassword },
        });
      } else if (result?.statusCode === 0 && !recreatePassword) {
        router.push({
          pathname: "/create-password",
          query: { userOTP: otp, userId, recreatePassword },
        });
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => {
        const newSeconds = seconds - 1;
        if (newSeconds <= 0) {
          setSuccess(false);
          Setresend(true);
          setSeconds(60);
          return 0;
        }
        return newSeconds;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const resendHandler = () => {
    setLoader(true);
    ResendAction(userId, authToken).then((result) => {
      Setresend(false);
      setLoader(false);
      setErrorMessage({
        type: true,
        message:
          result?.message == "Successfully"
            ? "Code Sent! Please check your mobile."
            : result?.message,
      });
      setSuccess(true);
    });
  };

  // /////////////////////////  functions
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadToken(!loadToken);
    }, 20000);
    return () => clearInterval(interval);
  }, [loadToken]);

  const handleToken = React.useCallback(
    (token: any) => {
      setAuthToken(token);
    },
    [loadToken]
  );
  return (
    <>
      <GoogleReCaptcha onVerify={handleToken} refreshReCaptcha={tokenRefresh} />
      <div className="container mt-5 mb-4">
        <div className="col-md-12 backgroundsignup">
          <div className="row">
            <div className="col-md-4 bg_image_signup bg-light">
              <div className="col-md-12 text-center  background_image_new d-flex align-items-center  h-100 justify-content-center">
                <img
                  className="img-fluid img_width_signup"
                  src={`https://1864597015.rsc.cdn77.org/newexpertpreprod/Images/logoOnbanner.png`}
                />
              </div>
            </div>
            <div className="col-md-8  m-auto">
              <div className="col-md-12 text-end px-3 pb-5">
                <button className="btn btn-light btn-sm rounded-pill color_light_font">
                  Skip
                </button>
              </div>
              <form onSubmit={handleClick}>
                <div style={{}}>
                  <h3
                    style={{
                      margin: " 0 0 5.8px",
                      fontFamily: "Poppins",
                      fontSize: "30px",
                      fontWeight: "600",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      letterSpacing: "normal",
                      textAlign: "center",
                      color: "#22272e",
                    }}
                  >
                    Mobile{" "}
                    <span style={{ color: "#dc0000" }}>Verification</span>
                  </h3>
                  <p
                    style={{
                      margin: "0.6px 33px 40px 0.9px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      letterSpacing: "normal",
                      textAlign: "center",
                      color: "#757677",
                    }}
                  >
                    Enter the code that was sent to
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      letterSpacing: "normal",
                      textAlign: "center",
                      color: "#444",
                    }}
                  >
                    {priamryMobile || "mobile number is missed"}
                  </p>
                  {/* <FAECodeInput getValue={setOTP} /> */}
                  <FAECodeInput
                    id="pinCode"
                    type="text"
                    isValid={true}
                    fields={6}
                    onChange={setOTP}
                    name="pinCode"
                    inputMode="numeric"
                    // value={pinCode}
                  />

                  <p
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#a9a9a9",
                    }}
                  >
                    Having problem?
                  </p>
                  {resend ? (
                    <button
                      style={{
                        margin: "auto",
                        display: "block",
                        background: "initial",
                        border: "0px",
                        outline: "initial",
                        fontSize: "14px",
                        fontWeight: "600",
                        textAlign: "center",
                        cursor: "pointer",
                        color: "#db0406",
                      }}
                      type="button"
                      onClick={resendHandler}
                    >
                      Resend Code
                    </button>
                  ) : (
                    <button
                      disabled
                      style={{
                        margin: "auto",
                        display: "block",
                        background: "initial",
                        border: "0px",
                        outline: "initial",
                        fontSize: "14px",
                        fontWeight: "600",
                        textAlign: "center",
                        cursor: "wait",
                        color: "gray",
                      }}
                      type="button"
                      onClick={resendHandler}
                    >
                      Resend Code
                    </button>
                  )}
                  <div className="text-center">
                    {success && <h6 style={{ color: "#db0406" }}>{seconds}</h6>}
                  </div>
                  <Button type="submit" width="340px">
                    {" "}
                    Verify Number{" "}
                  </Button>
                  {loader ? (
                    <Loader status={loader} />
                  ) : (
                    <Message type={errorMessage.type}>
                      {" "}
                      {errorMessage.message}{" "}
                    </Message>
                  )}
                </div>
              </form>
              <div className="col-md-12 padding_apply_signup_terms">
                <hr />
              </div>
              <div className="col-md-12 text-center ">
                <p className="font_set_terms_conditions">
                  Terms & Conditions • Privacy Policy • Copyright • Cookies
                  Policy • Help <br /> © 2022 Selteq Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileVerification;

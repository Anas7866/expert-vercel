import Img from "@/Components/Image/Image";
// import { InputField } from '@/Components/Input/Input';
import InputField from "@/Components/InputField";
import Loader from "@/Components/Loaders/Loader";
import { SignIn } from "@/helper";
import { Button } from "@/styles/Button.style";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import { Message } from "@/styles/message.style";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/router";
import * as React from "react";
import Image from "next/image";
import { ForgotPasswordAction } from "@/helper";
import { useDispatch } from "react-redux";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";

function Password() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [confirmMessage, setConfirmMessage] = React.useState("");
  const router = useRouter();
  const query = router.query || {};
  const { userId, priamryMobile, recreatePassword } = query || {};
  const [passwordValue, setPassword] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [checkValue, setCheckValue] = React.useState(false);

  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    setLoader(true);
    SignIn(query?.priamryMobile, passwordValue).then((result) => {
      console.log("Code for implementation", result?.code);
      console.log("firstname", result?.result?.user?.firstName);
      setLoader(false);
      if (result?.code === 0) {
        localStorage.setItem("jwtToken", result?.result?.jwtToken);
        localStorage.setItem(
          "jwtRefreshToken",
          result?.result?.jwtRefreshToken
        );
        // update redux store
        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: result?.result?.user,
        });
        router.push({ pathname: "/profile", query: { ...query } });
      } else if (result?.code === 4) {
        localStorage.setItem("token", result?.token);
        if (result?.result?.user?.firstName) {
          localStorage.setItem("token", result?.token);
          router.push({ pathname: "/add-email", query: { ...query } });
        } else {
          router.push({
            pathname: "/personal-information",
            query: { ...query },
          });
        }
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };

  const ForgotPassword = (e: any) => {
    setLoader(true);
    ForgotPasswordAction(query?.priamryMobile).then((result) => {
      setLoader(false);
      if (result?.code === 0) {
        localStorage.setItem("token", result?.token);
        router.push({
          pathname: "/mobile-verification",
          query: { ...result?.result, recreatePassword: true },
        });
        setErrorMessage({ type: false, message: result?.message });
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };
  return (
    <div className="container mt-5 mb-4">
      <div className="col-md-12 backgroundsignup">
        <div className="row">
          <div className="col-md-4 bg_image_signup bg-light">
            <div className="col-md-12 text-center   background_image_new d-flex align-items-center  h-100 justify-content-center">
              <img
                className="img-fluid img_width_signup"
                src={`https://1864597015.rsc.cdn77.org/newexpertpreprod/Images/logoOnbanner.png`}
              />
            </div>
          </div>
          <div className="col-md-8  m-auto">
            <div className="col-md-12 text-end px-3 pb-5">
              <button className="btn btn-light btn-sm rounded-pill color_light_font">
                Skipped
              </button>
            </div>
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
                {priamryMobile || "Mobile number"}
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
                Is already registered.
              </p>
              <InputField
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
                isPasswordField={true}
                indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/lock.svg"
                placeholder="Enter Password"
                passwordLabel="Enter Password to Login"
              />
              <Flex
                style={{
                  backgroundColor: "#fff",
                  width: "340px",
                }}
              >
                <Item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkValue}
                        onChange={(e: any) => setCheckValue(e.target.checked)}
                        color="default"
                      />
                    }
                    label={
                      <p
                        style={{
                          textAlign: "left",
                          color: "#6c6c6c",
                          marginTop: "20px",
                        }}
                      >
                        Remember Me
                      </p>
                    }
                  />
                </Item>
                <Item>
                  <p
                    onClick={ForgotPassword}
                    style={{
                      cursor: "pointer",
                      margin: "0px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      fontStyle: "normal",
                      lineHeight: "normal",
                      letterSpacing: "normal",
                      textAlign: "right",
                      color: "#757677",
                    }}
                  >
                    Forgot Password?
                  </p>
                </Item>
              </Flex>
              <Button onClick={handleClick} width="340px">
                {" "}
                Login{" "}
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
            <div className="col-md-12 padding_apply_signup_terms">
              <hr />
            </div>
            <div className="col-md-12 text-center ">
              <p className="font_set_terms_conditions">
                Terms & Conditions • Privacy Policy • Copyright • Cookies Policy
                • Help <br /> © 2022 Selteq Ltd.
              </p>
            </div>

            {/* <InputField /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;

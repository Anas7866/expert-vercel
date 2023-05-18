import Img from "@/Components/Image/Image";
import InputField from "@/Components/InputField";
import Loader from "@/Components/Loaders/Loader";
import { PasswordAction } from "@/helper";
import { Button } from "@/styles/Button.style";
import { LoginContainer } from "@/styles/Container.styled";
import { CopyRight } from "@/styles/CopyRight.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import { Message } from "@/styles/message.style";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";

function CreatePassword() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loader, setLoader] = React.useState(false);

  const [confirmMessage, setConfirmMessage] = React.useState("");
  const router = useRouter();
  const query = router.query || {};
  const { recreatePassword, userOTP } = query;
  const [passwordValue, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState();
  // This is required
  const validatePassword = () => {
    const regex = /^(?=.*\d)(?=.*[!\"@#£$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(passwordValue);
  };

  const messages = [
    {
      success: "✔️ At least one number",
      text: "❌ At least one number",
      regex: /^(?=.*\d)/,
    },
    {
      success: "✔️ At least eight characters",
      text: "❌ At least eight characters",
      regex: /^.{8,}$/,
    },
    {
      success: '✔️ At least one symbol (!"£$%^&*)',
      text: '❌ At least one symbol (!"£$%^&*)',
      regex: /^(?=.*[!\"@#£$%^&*])/,
    },
  ];
  const invalidMessages = messages.map(({ regex, success, text }) =>
    regex.test(passwordValue) ? { success } : { text }
  );
  // const invalidMessages = messages.filter(
  //   ({ regex }) => !regex.test(passwordValue)
  // );

  // This is required
  const renderRequirementMessage = () => {
    // if (validatePassword()) {
    //   return (
    //     <div
    //       style={{
    //         fontSize: "14px",
    //         margin: "auto",
    //         display: "block",
    //         width: "332px",
    //         listStyle: "none",
    //         paddingLeft: "0",
    //         paddingTop: "6px",
    //         color: "green",
    //       }}
    //     >
    //       Password meets requirements
    //     </div>
    //   );
    // }

    return (
      <div style={{ color: "#6c6c6c" }}>
        <ul
          style={{
            fontSize: "14px",
            margin: "auto",
            display: "block",
            width: "332px",
            listStyle: "none",
            paddingLeft: "0",
            paddingTop: "6px",
          }}
        >
          {invalidMessages.map((itm) => {
            console.log(itm);
            return <li key={itm.text}>{itm.text || itm.success}</li>;
          })}
        </ul>
      </div>
    );
  };

  const checkIsOk = (messages: any[] = []) => {
    return messages.filter((msg: any) => msg.text);
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    // alert("1");
    if (confirmPassword !== passwordValue) {
      // alert("2");
      setConfirmMessage("Please confirm your password");
    } else if (checkIsOk(invalidMessages).length !== 0) {
      // } else if (invalidMessages.length === 3) {
      // alert("5");
      return;
    } else if (passwordValue == "") {
      // alert("3");
      setConfirmMessage("Please confirm your password");
    } else {
      // alert("4");
      setLoader(true);
      PasswordAction(Number(query.userId), false, passwordValue, userOTP).then(
        (result) => {
          setLoader(false);
          if (result?.code === 0) {
            localStorage.setItem("token", result?.result?.jwtToken);
            recreatePassword == "true"
              ? router.push("/login")
              : router.push({
                  pathname: "/personal-information",
                  query: { ...query },
                });
            localStorage.setItem("token", result?.token);
          } else {
            setErrorMessage({ type: false, message: result?.message });
          }
        }
      );
    }
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
            <div className="col-md-12 text-end px-3 py-4">
              <button className="btn btn-light btn-sm rounded-pill color_light_font">
                Skip
              </button>
            </div>
            <div style={{}}>
              <h3
                style={{
                  margin: " 0 0 10.8px",
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
                Create <span style={{ color: "#dc0000" }}>Password</span>
              </h3>
              <form onSubmit={handleClick}>
                <br />
                <InputField
                  type="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                  isPasswordField={true}
                  indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/lock.svg"
                  placeholder="Password"
                  passwordLabel="Enter Password"
                />
                <div className="col-md-12 ">
                  {passwordValue && renderRequirementMessage()}
                </div>
                <br />
                <InputField
                  type="password"
                  onChange={(e: any) => {
                    setConfirm(e.target.value);
                    confirmPassword !== passwordValue &&
                      setConfirmMessage("Your password is not matching!");
                  }}
                  isPasswordField={true}
                  indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/lock.svg"
                  message={
                    confirmPassword !== passwordValue ? confirmMessage : ""
                  }
                  placeholder="Confirm Password"
                  passwordLabel="Repeat Password"
                />

                <Button type="submit" width="340px">
                  {" "}
                  Save & Continue{" "}
                </Button>
                {loader ? (
                  <Loader status={loader} />
                ) : (
                  <Message type={errorMessage.type}>
                    {" "}
                    {errorMessage.message}{" "}
                  </Message>
                )}
              </form>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;

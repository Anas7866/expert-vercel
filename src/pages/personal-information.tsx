import Img from "@/Components/Image/Image";
import { LoginContainer } from "@/styles/Container.styled";
import { Flex, Item } from "@/styles/Flex.styled";
import * as React from "react";
import styled from "styled-components";
import { Button } from "@/styles/Button.style";
import InputField from "@/Components/InputField";
import { useRouter } from "next/router";
import ImageUploadCard from "@/Components/UploadAvatar/UploadAvatar";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import { PersonalVerifcationAction, UploadImage } from "@/helper";
import { Message } from "@/styles/message.style";
import Loader from "@/Components/Loaders/Loader";

function PersonalInformation() {
  const [errorMessage, setErrorMessage] = React.useState({
    type: false,
    message: "",
  });
  const [loader, setLoader] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [checkValue, setCheckValue] = React.useState(false);
  const [value, setValue] = React.useState("female");

  const radioBoxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const router = useRouter();
  const { userId } = router.query || {};

  const handleInputChange = (e: any) => {
    const regex = /^[a-zA-Z]+$/; // Regular expression to allow only alphanumeric characters
    console.log("===========>", firstName);
    const value = e.target.value;
    if (regex.test(value)) {
      setFirstName(value);
      setLastName(value);
    } else {
      setFirstName("");
      setLastName("");
    }
    // if (regex.test(value)) {
    //   setFirstName(value);
    //   console.log("===========>", firstName);
    // }
  };
  const handleInputChangetwo = (e: any) => {
    const regex = /^[a-zA-Z]+$/; // Regular expression to allow only alphanumeric characters
    console.log("===========>", firstName);
    const value = e.target.value;
    if (regex.test(value)) {
      setLastName(value);
    } else {
      setLastName("");
    }
    // if (regex.test(value)) {
    //   setFirstName(value);
    //   console.log("===========>", firstName);
    // }
  };

  const genderId = 1;
  const imagePath = "";
  const modifiedBy = 0;
  const handleClick = (e: any) => {
    e.preventDefault();
    if (checkValue == false) {
      setErrorMessage({
        type: false,
        message: "Please select the agreement of expert.",
      });
      return;
    }
    setLoader(true);
    PersonalVerifcationAction({
      userId: Number(userId),
      firstName,
      lastName,
      genderId,
      imagePath: imageUrl,
      modifiedBy,
    }).then((result) => {
      setLoader(false);
      if (result?.code === 0) {
        router.push({ pathname: "/add-email", query: { userId } });
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };
  const onChangeFile = (e: any) => {
    e.preventDefault();
    UploadImage(userId, e.target.files[0], "preprod").then((result: any) => {
      setLoader(false);
      if (result?.code === 0) {
        setImageUrl(
          "https://1864597015.rsc.cdn77.org/consentformattachments/images/staging/" +
            result?.result?.imageURL
        );
      } else {
        setErrorMessage({ type: false, message: result?.message });
      }
    });
  };

  console.log("---------------url--->", imageUrl);

  const handleLinkClick = (e: any) => {
    e.preventDefault();
    window.open(e.currentTarget.href, "_blank");
  };

  const isButtonDisabled = !(firstName && lastName);

  return (
    <div className="container mt-5 mb-4">
      <div className="col-md-12 backgroundsignup">
        <div className="row">
          <div className="col-md-4 bg_image_signup bg-info">
            <div className="col-md-12 background_image_new text-center d-flex align-items-center  h-100 justify-content-center">
              <img
                className="img-fluid img_width_signup"
                src={`https://1864597015.rsc.cdn77.org/newexpertpreprod/Images/logoOnbanner.png`}
              />
            </div>
          </div>
          <div className="col-md-8  m-auto">
            <div className="col-md-12 text-end px-3 py-3">
              <button className="btn btn-light btn-sm rounded-pill color_light_font">
                Skip
              </button>
            </div>
            <form onSubmit={handleClick}>
              <div>
                <ImageUploadCard
                  type="button"
                  changeFile={onChangeFile}
                  imgLink={imageUrl}
                />

                <InputField
                  indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/person.svg"
                  placeholder="Enter first name"
                  passwordLabel="First Name"
                  type="text"
                  required={true}
                  onChange={handleInputChange}
                />

                <InputField
                  indicateIcon="https://1864597015.rsc.cdn77.org/newexpertpreprod/icons/person.svg"
                  placeholder="Enter last name"
                  passwordLabel="Last Name"
                  type="text"
                  required={true}
                  onChange={handleInputChangetwo}
                />
                <div className="col-md-12 text-center py-2 ">
                  {isButtonDisabled ? (
                    <span className="incorrect_format">
                      ❌ Don't include special character or number in First name
                      & Last name.
                    </span>
                  ) : (
                    <span className="correct_format">
                      ✔️ This is correct format
                    </span>
                  )}
                </div>

                <FormControl
                  style={{
                    width: "340px",
                    margin: "auto",
                    display: "block",
                  }}
                >
                  {/* <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel> */}
                  {/* <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={value}
                    onChange={radioBoxHandler}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup> */}
                </FormControl>
                {/* <Flex
                  style={{
                    backgroundColor: "#fff",
                    width: "350px",
                  }}
                >
                  <Item>
                    
                  </Item>
                </Flex> */}
                <div className="row">
                  <div className="col-md-3 "></div>
                  <div className="col-md-6 px-5">
                    <div className="col-md-12 ">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkValue}
                            onChange={(e: any) =>
                              setCheckValue(e.target.checked)
                            }
                            color="default"
                          />
                        }
                        label={
                          <p
                            style={{
                              textAlign: "left",
                              color: "#6c6c6c",
                              fontSize: "12px",
                            }}
                          >
                            I agree to the Expert{" "}
                            <Link
                              href="/term-and-condition"
                              onClick={handleLinkClick}
                              style={{
                                fontWeight: "bold",
                                color: "#6c6c6c",
                                textDecoration: "none",
                              }}
                            >
                              Terms of Services
                            </Link>
                            &nbsp; and{" "}
                            <Link
                              style={{
                                fontWeight: "bold",
                                color: "#6c6c6c",
                                textDecoration: "none",
                              }}
                              href="/term-and-condition"
                            >
                              Privacy Policy
                            </Link>
                          </p>
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>

                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-danger button_style_profile pt-2 pb-2"
                    disabled={isButtonDisabled}
                  >
                    Confirm
                  </button>
                </div>
                {/* <Button type="submit" width="340px">
                  {" "}
                  Confirm{" "}
                </Button> */}
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
            <div className="col-md-12 pt-0 padding_apply_signup_terms">
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

export default PersonalInformation;

import { Logo, StyledHeader } from "@/styles/Header.styled";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";
import { removeCookie } from "@/utils/utils";
import { useDispatch } from "react-redux";

export default function Header(props: any) {
  const [tabbar1, settabbar1] = useState(false);

  const dispatch = useDispatch();
  const tabbarone = () => {
    settabbar1(!tabbar1);
  };
  return (
    <>
      <div className="navigation_pc">
        {props.profile?.firstName ? (
          <div className="col-md-12 background_color_navigation_two py-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        className="img-fluid logo_width_image"
                        src="../assets/Images/navexp.png"
                      />
                    </div>
                    <div className="col-md-9 m-auto">
                      <span className="font_exp">Become an expert</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="font_exp">Help</span>&nbsp;&nbsp;&nbsp;
                      <span className="font_exp">Contact</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 m-auto">
                  <div className="row">
                    <div className="col-md-9 text-end m-auto text-end ">
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="../assets/Images/heartt.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="../assets/Images/cartt.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="../assets/Images/all.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid heart_icon"
                          src="../assets/Images/flag.png"
                        />
                      </span>
                      &nbsp;&nbsp;
                      <span>
                        <img
                          className="img-fluid downn"
                          src="../assets/Images/down.png"
                        />
                      </span>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <img
                            className="img-fluid img_ava"
                            src={
                              props?.profile?.imageURL ||
                              "../assets/Images/avatar.png"
                            }
                          />
                        </div>
                        <div className="col-md-6 px-0">
                          <p className="guest_hello mb-0 pb-0 ">
                            {" "}
                            {props.profile?.firstName || "No Name"}{" "}
                          </p>

                          <Dropdown>
                            <Dropdown.Toggle
                              variant="white"
                              id="dropdown-basicc"
                            >
                              <p className="guest_option mb-0 pb-0">
                                {" "}
                                Manage List{" "}
                              </p>
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="new_drop">
                              <div className="col-md-12 px-3">
                                <div className="text-center pt-2">
                                  <img
                                    className="img-fluid img_ava1"
                                    src={
                                      props?.profile?.imageURL ||
                                      "../assets/Images/avatar.png"
                                    }
                                  />
                                  <p className="text-color-black mb-0">
                                    <b>
                                      {" "}
                                      {props.profile?.firstName ||
                                        "No Name"}{" "}
                                      {props.profile?.lastName || "No Name"}
                                    </b>
                                  </p>
                                  <p className="color_email">
                                    {props.profile?.primaryEmail || "No Email"}
                                  </p>
                                </div>
                              </div>
                              <hr />
                              <div className="col-md-12 px-4">
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <Link href="/profile" className="style_a_tag">
                                    <p className="mb-0 pb-0 text_icon_all">
                                      <img
                                        className="img-fluid img_width_all_icons"
                                        src="../assets/Images/user.png"
                                      />{" "}
                                      &nbsp; Manage Account
                                    </p>
                                  </Link>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../assets/Images/shield.png"
                                    />{" "}
                                    &nbsp; File Manager
                                  </p>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../assets/Images/news.png"
                                    />{" "}
                                    &nbsp; Terms of Use
                                  </p>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../assets/Images/question.png"
                                    />{" "}
                                    &nbsp; Help & Support
                                  </p>
                                </div>
                                <hr />
                                <div className="col-md-12 px-2 mb-0 pb-0">
                                  <p className="mb-0 pb-0 text_icon_all">
                                    <img
                                      className="img-fluid img_width_all_icons"
                                      src="../assets/Images/userstar.png"
                                    />{" "}
                                    &nbsp; Rate Us
                                  </p>
                                </div>
                                <hr />
                                <div
                                  onClick={(e) => {
                                    dispatch({ type: AUTH_ACTIONS.LOGOUT });
                                    removeCookie && removeCookie("profile");
                                  }}
                                  className="col-md-12 px-2 mb-0 pb-0 pb-2"
                                >
                                  <Link href="/" className="style_a_tag">
                                    <p className="mb-0 pb-0 text_icon_all">
                                      <img
                                        className="img-fluid img_width_all_icons"
                                        src="../assets/Images/logout.png"
                                      />{" "}
                                      &nbsp; Logout
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Navigation number one ---------------------------------- */}
            <div className="col-md-12 background_color_navigation_one">
              <div className="container py-1">
                <div className="row">
                  <div className="col-md-2 display_image_header_icons">
                    <span>
                      <img
                        className="img-fluid header_nav_icons_width "
                        src="../assets/Images/facebook.png"
                      />
                    </span>
                    &nbsp;
                    <span>
                      <img
                        className="img-fluid header_nav_icons_width"
                        src="../assets/Images/twitter.png"
                      />
                    </span>
                    <span>
                      <img
                        className="img-fluid header_nav_icons_width"
                        src="../assets/Images/linkedin.png"
                      />
                    </span>
                    &nbsp;
                    <span>
                      <img
                        className="img-fluid header_nav_icons_width"
                        src="../assets/Images/insta.png"
                      />
                    </span>
                    &nbsp;
                    <span>
                      <img
                        className="img-fluid header_nav_icons_width"
                        src="../assets/Images/pintrist.png"
                      />
                    </span>
                    &nbsp;
                    <span>
                      <img
                        className="img-fluid header_nav_icons_width"
                        src="../assets/Images/youtube.png"
                      />
                    </span>
                  </div>
                  <div className="col-md-4">
                    <span className="font_new_one_header">About</span> &nbsp;
                    <span className="font_new_one_header">Blog</span> &nbsp;
                    <span className="font_new_one_header">Help</span> &nbsp;
                    <span className="font_new_one_header">FAQs</span>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-12 text-end">
                      <Link
                        href="/services/"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <span className="font_new_one_header1">
                          All Services
                        </span>{" "}
                      </Link>
                      &nbsp; &nbsp;
                      <span className="font_new_one_header1">
                        Become an Expert
                      </span>{" "}
                      &nbsp; &nbsp;
                      <span className="font_new_one_header1">Offers</span>{" "}
                      &nbsp; &nbsp;
                      <span className="font_new_one_header1">
                        Refer & Earn
                      </span>{" "}
                      &nbsp; &nbsp;
                      <span className="font_new_one_header1">
                        24/7 Customer Care
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Number 2  */}
            <div className="col-md-12 background_color_navigation_two">
              <div className="container py-1">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid logo_width_image"
                      src="../assets/Images/navexp.png"
                    />
                  </div>
                  <div className="col-md-4 m-auto">
                    <input
                      className="form-control input_form_search"
                      type="text"
                      placeholder="i'm searching for..."
                    />
                  </div>
                  <div className="col-md-6 m-auto">
                    <div className="row ">
                      <div className="col-md-7  text-end">
                        <span>
                          <button className="btn btn-light px-0 background_button_nav background_button_light">
                            <img
                              className="img-fluid img_tag"
                              src="../assets/Images/tag.png"
                            />
                          </button>
                        </span>
                        &nbsp;&nbsp;
                        <span>
                          <button className="btn btn-light px-2 background_button_nav background_button_light">
                            <img
                              className="img-fluid img_cart"
                              src="../assets/Images/cart.png"
                            />{" "}
                            &nbsp;
                            <span className="fontcart">Cart</span>
                          </button>
                        </span>
                        <span>
                          <button className="btn btn-light px-2 background_button_nav_lang background_button_light">
                            <p className="fontcartlang mb-0 pb-0">EN</p>
                            <img
                              className="img-fluid img_globe"
                              src="../assets/Images/globe.png"
                            />
                          </button>
                        </span>
                      </div>
                      <div className="col-md-5 border_left_new text-left m-auto display_but">
                        <img
                          className="img-fluid img_avatar"
                          src="../assets/Images/avatar.png"
                        />
                        <Dropdown>
                          <Dropdown.Toggle variant="white" id="dropdown-basic">
                            <Link
                              href="/signup"
                              style={{ textDecoration: "none" }}
                            >
                              <h6 className="guest mb-0">
                                {" "}
                                {props.profile?.firstName || "Guest"}
                              </h6>
                              <h6 className="loginreg mb-0">
                                {props.profile?.firstName
                                  ? "Logged In"
                                  : "Login & Register"}
                              </h6>
                            </Link>
                          </Dropdown.Toggle>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* navigation mobile  */}
      <div className="navigation_mobile">
        {props.profile?.firstName ? (
          <div className="col-md-12 background_color_navigation_two py-2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-10 m-auto">
                  <img
                    className="img-fluid logo_width_image_mobile"
                    src="../assets/Images/navexp.png"
                  />
                </div>
                <div className="col-md-6 col-2 text-end">
                  <button className="btn btn-danger" onClick={tabbarone}>
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
            {tabbar1 ? <p>true</p> : null}
          </div>
        ) : (
          <>
            {/* Navigation Number 2  */}
            <div className="col-md-12 background_color_navigation_two">
              <div className="container py-1">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid logo_width_image"
                      src="../assets/Images/navexp.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

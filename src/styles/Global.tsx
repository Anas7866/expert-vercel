import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }: { theme: any }) => "#fff"};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    background-color: #f1f6fa;

  }
  

  .backgroundsignup
  {
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 85vh;
  }
  
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  .img_width_signup
{
  width: 70%;
}
.font_set_terms_conditions
{
  font-size: 12px;
}
.padding_apply_signup_terms
{
  padding-top: 5%;
  padding-left: 20%;
  padding-right: 20%;
}

.padding_apply_signup_terms1
{
  padding-top: 2%;
  padding-left: 20%;
  padding-right: 20%;
}
.color_light_font
{
  color: lightgray;
}

  .bg_image_signup
  {
    background-image: url("https://1864597015.rsc.cdn77.org/newexpertpreprod/Images/LoginBg.png");
    background-size: cover;
    background-position: 100% 100%;
    background-repeat: no-repeat;
    height: 85vh;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    object-fit: cover !important;
  }



  input{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal; 
    color: #4a4a4a;
  }
  .react-tel-input .country-list .country{
    text-align:left;
  }
  img {
    max-width: 100%;
  }
  .react-tel-input .flag-dropdown { 
    background-color: #f1f6fa;
    border: 0px solid #cacaca;
    border-radius: 3px 0 0 3px;
  }
  .react-tel-input .form-control {
    
    background: #f1f6fa;
    border: 0px solid #CACACA;
    border-radius: 5px;
    line-height: 25px;
    height: 35px;
    width: 300px;
    outline: none;
  }
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background-color: #f1f6fa;
   }
  .react-tel-input .flag-dropdown.open .selected-flag {
    background: #f1f6fa;
    border-radius: 3px 0 0 0;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
     -webkit-appearance: none;
    margin: 0;  
}

.button_style_profile
{
  background-color: #DF1919;
  color: white;
  width: 40%;
  border-radius: 10px;
}

.button_style_profile:hover
{
  background-color: #DF1919;
  color: white;
  width: 40%;
  border-radius: 10px;
}

.header_nav_icons_width
{
  width: 9%;
}

.font_new_one_header
{
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f2a3a3;
  cursor: pointer;
}

.font_new_one_header1
{
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  cursor: pointer;
}

.logo_width_image
{
  width: 80%
}

.img_tag
{
  width: 50%;
}

.background_button_nav
{
  background-color: white;
  border-radius: 4px;
  border: solid 1px #eee;
}


.background_button_nav_lang
{
  background-color: white;
  border-radius: 4px;
  border: solid 0px #eee;
}

.background_button_nav_lang:hover
{
  background-color: white;
  border-radius: 4px;
  border: solid 0px #eee;
}

.fontcartlang
{
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}


.fontcart
{
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.sidebar_style
{
  display: block,
  margin: auto,
  width: 35%,
}

.background_color_sidebar
{
  background-color:#DB0406;
  color: white;
  border-radius: 8px;
  cursor: pointer
}

.background_color_sidebar_one
{
  background-color: white;
  color: rgb(74, 74, 74);
  border-radius: 8px;
  cursor: pointer
}
.image_icon_width
{
  width: 10%
}

.border_profile
{
  border: solid 1px #f1f6fa; 
}

.subheading_profile
{
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #ccd2d8;
}
.basic_text
{
  color: black;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
}

.basic_text1
{
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #ccd2d8;
}

.right_icon_style
{
  width: 1.5%
}

.basic_text2
{
  color: black;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
}

.subheading_profile_switch
{
  color: red;
  font-size: 14px;
  cursor: pointer;
  
  
}

.heading_name_profile
{
  color: black;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
}

.incorrect_format
{
  font-size: 70%;
  color: red;
}
.correct_format
{
  font-size: 70%;
  color: green;
}

// .total_height_dashboard
// {
//   height: 100vh;
// }
.img_width_verified
{
  width: 10%;
}
.font_exp
{
  color: #444;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.heart_icon
{
  width: 4.5%
}

.guest_option
{
  color: #ccd2d8;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.style_a_tag
{
  text-decoration: none;
  color: rgb(74, 74, 74)
}
.style_a_tag:hover
{
  text-decoration: none;
  color: rgb(74, 74, 74)
}

.guest_hello
{
  color: #4a4a4a;font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.height_of_edit_screens
{
  height: 100vh;
}

.css-1d3z3hw-MuiOutlinedInput-notchedOutline
{
  border-radius: 10px !important
}

.img_ava
{
  width: 75%;
}

.img_ava1
{
 width: 25%;
}

.text_icon_all
{
  font-size: 100%;
  font-weight: 500;
  color: black;
}

.img_width_all_icons
{
  width: 10%
}

.text-color-black
{
  color: black;
}

.color_email
{
  color: lightgray;
}

.downn
{
  width: 2%;
}

#new_drop
{
  width: 300px !important;
}


#dropdown-basic
{
  width: 100%;
  text-align: left !important;
  background-color: white;
}

.display_but
{
  display: flex;
  flex-direction: row;
}
#dropdown-basic:focus
{
  width: 100%;
  text-align: left !important;
  background-color: white;
}

.guest
{
  color: #bbb;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.loginreg
{
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.img_avatar
{
  width: 20%
}

#dropdown-basic::after
{
 display: none;
}

#dropdown-basicc
{
  padding: 0px;
}

#dropdown-basicc::after
{
 display: none;
}

.border_left_new
{
  border-left: solid 1px #eee;
}

.img_cart
{
  width: 30%
}

.img_globe
{
  width: 50%
}

.input_form_search
{
  background-color: #f1f6fa;
  border: none;
}
.input_form_search:focus
{
  background-color: #f1f6fa;
  border: none;
  box-shadow: none;
  outline: none;
}

.background_color_navigation_one
{
  background-color: #db0406;
}

.background_color_navigation_two
{
  background-color: #fff;
  box-shadow: 0 4px 2px -2px lightgray;
}

input[type=number] {
    -moz-appearance:textfield;  
}

.background_line
{
  background-color: #f1f6fa;
  border: 1px solid #f1f6fa;
}
.navigation_mobile
{
  display: none;
}

.email_font_screen
{
  font-size: 80%;
}

.email_font_screen_sub
{
  color: lightgray;
  font-size: 70%;
}

.recovery_text_red
{
  font-size: 70%;
  color: red;
  cursor: pointer;
}

.a_style
{
  text-decoration: none;
}

.text_des_email
{
  font-size: 70%;
  color: lightgray;
}

.text_style_profile
{
  color: #DB0406;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.mobile_responsive_navigation
{
  display: none;
}

//////////////////////////Anas

input[type="file"] {
  display: none;
}
.display_file_upload
{
  // margin-top:10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 2px;
  background: rgb(251, 228, 228); 
  border-radius: 5px;
  color: red;
  font-size: 80%;
  
}
.display_file_upload1
{
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 25px;
  padding-bottom: 45px;
  display: table;
  border-radius: 10px;
  color: red;
  font-size: 80%;
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  
}

.justify_con
{
  display: flex;
    flex-direction: row;
    justify-content: end;
}

.audio_setting
{
  width: 100%;
  border-radius: 0 !important;
 
}

.img_width_bannerg
{
  width: 30%;
}

.btn_style_light
{
  background-color: white;
  border: 1px solid lightgray;
}

.img_fix_banner
{
  height: 60vh;
  border-radius: 10px;
}

.img_width_setting
{
  height: 25vh;
  width: 30vw;
  border-radius: 10px;
}

.icon_red_upload_cloud
{
  font-size: 260%;
  color: #ccd2d8;
}

  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
     -webkit-appearance: none;
    margin: 0;  
}

input[type=number] {
    -moz-appearance:textfield;  
}
.width_img
{
  width:400%;
}
.border_cards
{
  border: 1px solid lightgray;
  border-radius: 5px;
}

video {
  width: 100% !important;
  height: 100%;
  object-fit: fill;
  z-index: 0;
  border-radius: 10px;
}

.video-container
{
  height: 80vh;
    width: 100%;
    object-fit: fill;
}

.right_margin
{
  left: auto;
}
.display_flexx
{
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;

}

.catagories_width
{
  width: 10%;
}

.border_container
{
  border: 1px solid lightgray;
  border-radius: 10px;
}

.heading_color
{
  color: #444;
}

.img_width_packages
{
  width: 70%;
}
.font_size_2
{
  font-size: 12px;
  color: #ccd2d8;
}

.font_size_4
{
  font-size: 14px;
}

.poly_width
{
  width: 30%;
}

.position_top
{
  margin-top: -28px;
  font-size: 12px;
  color: white;
}
.save_text
{
  font-size: 6px;
}

.border_right
{
  border-right: 1px solid lightgray
}

.text_300
{
  font-size: 8px;
}

.bcakground_color_card
{
  border-radius: 8px;
  background-color: #f5f5f5;
}

.save_text1
{
  color: #292929;
  font-size: 13px;
  font-weight: 600;
}

.get_now_text1
{
  font-size: 12px;
}

.main_heading_service
{
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.sub_heading_service
{
  font-size: 14px;
  color: #6c6c6c;
}

ul {
  padding-left: 1rem;
}

.font_ul
{
  font-size: 14px;
  color: #4a4a4a;
}

.font_size_3
{
  font-size: 16px;
  color: #444;
}

.display_flexx_services
{
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
}

.img_width_ind
{
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.box_width
{
  width: 10%;
}

.border_card_ind
{
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
}

.cursor_back
{
  cursor: pointer;
}


/////////////////////////Anas



@media(max-width:380px){
  .react-tel-input .form-control { 
     width: 228px !important; 
  }
  .react-tel-input {
      width: 100% !important;  
      padding: 10.9px 21px 13px 15px !important;  
  }
}

@media only screen and (max-width: 600px) {
  .navigation_mobile
{
  display: block;
}
.mobile_responsive_navigation
{
  display: block;
}

  .logo_width_image_mobile
  {
    width: 35%;
  }
  .navigation_pc
  {
    display: none;
  }
  .side_nav_hide
  {
    display: none;
  }
 .bg_image_signup
  {
    display: none;
  }
  .backgroundsignup
  {
    background-color: white;
    border-radius: 10px;
    padding-top: 30px;
  }
}
`;

export default GlobalStyles;

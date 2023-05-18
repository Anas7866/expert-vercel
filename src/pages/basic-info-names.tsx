import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateNames } from "@/helper";
import { AUTH_ACTIONS } from "@/Redux/Actions/loginPageAction";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function BasicInfoname() {
  const { profile } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [profileData, setprofileData] = useState({ ...profile });
  const router = useRouter();
  const query = router.query || {};
  const { userId, priamryMobile, recreatePassword } = query || {};

  const UpdateNamesBasicProfile = (e: any) => {
    e.preventDefault();
    updateNames(
      profile.userId,
      profileData.firstName,
      profileData.lastName,
      profile.userId
    )
      .then((res) => {
        console.log("------------ res ---------------");
        console.log(res);
        console.log("------------ res ---------------");
        dispatch({
          type: AUTH_ACTIONS.SET_NAMES_BASIC_INFO,
          payload: {
            firstName: profileData.firstName,
            lastName: profileData.lastName,
          },
        });
        router.push({ pathname: "/profile", query: { ...query } });
      })
      .catch((err) => {
        console.log("------- error ----------");
        console.log(err);
        console.log("------- error ----------");
      });
  };

  const handleChange = (e: any) => {
    const { type, name, value, checked } = e.target;
    setprofileData({
      ...profileData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="col-md-12  bg-white height_of_edit_screens">
      <div className="container total_height_dashboard mt-1 pt-4 pb-5">
        <div className="row">
          {/* Sidenavigation code  */}
          <div className="col-md-3 ">
            <div className="col-md-12 pr-5">
              <div className="col-md-12 background_color_sidebar px-4 py-2">
                <img
                  className="img-fluid image_icon_width"
                  src="../assets/images/userwhite.png"
                />{" "}
                Profile
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div
              className="col-md-12 border_profile px-5  pb-4 py-4"
              style={{ borderRadius: "8px" }}
            >
              <p>User Name </p>
              <form onSubmit={(e) => UpdateNamesBasicProfile(e)}>
                <div className="col-md-12">
                  <TextField
                    id="outlined-basic"
                    label="Firstname"
                    type="text"
                    variant="outlined"
                    sx={{ width: "100%", borderRadius: "8px" }}
                    value={profileData.firstName}
                    onChange={(e) => handleChange(e)}
                    name="firstName"
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Lastname"
                    variant="outlined"
                    type="text"
                    sx={{ width: "100%" }}
                    value={profileData?.lastName}
                    onChange={(e) => handleChange(e)}
                    required
                    name="lastName"
                  />
                </div>

                <div className="col-md-12 text-end py-4">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    style={{ backgroundColor: "#DB0406" }}
                  >
                    {" "}
                    Save & Continue{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfoname;

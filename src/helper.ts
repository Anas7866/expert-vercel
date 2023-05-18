import axios from "axios";

const renewJwtToken = () => {
  //
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/*
axios.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
    ) {
      // renew JWT Token
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem("refreshToken")
      return axios
        .post('/auth/token', {
          refresh_token: refreshToken
        })
        .then(res => {
          if (res.status === 201) {
            localStorage.setItem("jwtToken", "res")
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + localStorage.getItem("jwtToken");
            return axios(originalRequest)
          }
        })
    }
    return Promise.reject(error)
  }
)
*/

export const LoadAction = async (
  mobileNumber: number,
  recaptacToken: string
) => {
  try {
    var data = JSON.stringify({
      mobileNumber: `+${mobileNumber}`,
      countryId: 1,
      deviceId: navigator.userAgent,
      isMobile: false,
      raptchaToken: recaptacToken,
      isAndroidRequest: false,
      mobileCaptchaData: {
        projectId: "findanexpert-client",
        recaptchaAction: "LOGIN",
        recaptchaSiteKey: "6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK",
      },
    });

    // debugger;
    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const AddSecondaryMobileNumber = async (
  userId: number,
  secondaryMobile: number,
  recaptacToken: string
) => {
  try {
    var data = JSON.stringify({
      userId,
      secondaryMobile: `+${secondaryMobile}`,
      countryId: 1,
      deviceId: navigator.userAgent,
      isMobile: false,
      raptchaToken: recaptacToken,
      isAndroidRequest: false,
      mobileCaptchaData: {
        projectId: "findanexpert-client",
        recaptchaAction: "LOGIN",
        recaptchaSiteKey: "6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK",
      },
    });

    // debugger;
    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addSecondaryMobile",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const SignInLoading = async (mobileNumber: any, password: string) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

// Basic profile firstName, lastName update

export const updateNames = async (
  userId: number,
  firstName: string,
  lastName: number,
  ModifiedBy: any
) => {
  let d = {
    userId,
    firstName,
    lastName,
    ModifiedBy: userId,
  };
  try {
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateBasicProfile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      data: JSON.stringify(d),
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const addGender = async (
  userId: number,
  genderId: number,
  ModifiedBy: any
) => {
  let d = {
    userId,
    genderId,
    ModifiedBy: userId,
  };
  try {
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUsergender`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      data: JSON.stringify(d),
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const addDob = async (userId: number, dob: string, ModifiedBy: any) => {
  let d = {
    userId,
    dob,
    ModifiedBy: userId,
  };
  try {
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserDob`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      data: JSON.stringify(d),
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const SignIn = async (mobileNumber: any, password: string) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/signIn",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const UploadImage = async (
  userId?: any,
  fileInput?: any,
  environment?: string
) => {
  try {
    const form = new FormData();
    form.append("AllFilesToUpload", fileInput);
    const token = localStorage.getItem("token");
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserImage?UserId=${userId}&environment=${environment}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      data: form,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ChangeUserImageApi = async (userId?: any, imagepath?: any) => {
  try {
    let data = {
      userId,
      imagePath: imagepath,
      modifiedBy: userId,
    };

    // form.append("AllFilesToUpload", fileInput);
    const token = localStorage.getItem("token");
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/changeUserImage`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(data),
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const VerificationAction = async (
  userId: any,
  userOTP: string | number,
  phone: any
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      otpCode: userOTP,
      phone: phone,
    });

    var config = {
      method: "post",
      url: "https://apigateway-preprod.findanexpert.net/otp/verify",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const resetUserPassword = async (
  userId: any,
  password: any,
  userOTP: any
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      password: password,
      otp: userOTP,
      deviceId: navigator.userAgent,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resetUserPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const EmailVerificationCodeAction = async (
  userOTP: string | number,
  phone: any
) => {
  try {
    var data = JSON.stringify({
      // userId: userId,
      otpCode: userOTP,
      phone: phone,
    });

    var config = {
      method: "post",
      url: "https://apigateway-preprod.findanexpert.net/otp/verify",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const EmailVerificationAction = async (
  userOTP: any,
  email: any,
  userId: any
) => {
  try {
    var data = JSON.stringify({
      otpCode: userOTP,
      email: email,
      userId: userId,
    });

    var config = {
      method: "post",
      url: "https://apigateway-preprod.findanexpert.net/otp/verify",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const ResendAction = async (userId: any, recaptchaToken?: any) => {
  try {
    const data = JSON.stringify({
      userId: userId,
      type: 1,
      isMobile: false,
      isCrossPlatForm: false,
      raptchaToken: recaptchaToken,
      isAndroidRequest: false,
      mobileCaptchaData: {
        projectId: "findanexpert-client",
        recaptchaAction: "LOGIN",
        recaptchaSiteKey: "6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK",
      },
    });
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/ResendMobileOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ResendActionSecondary = async (
  userId: any,
  recaptchaToken?: any
) => {
  try {
    const data = JSON.stringify({
      userId: userId,
      type: 2,
      isMobile: false,
      isCrossPlatForm: false,
      raptchaToken: recaptchaToken,
      isAndroidRequest: false,
      mobileCaptchaData: {
        projectId: "findanexpert-client",
        recaptchaAction: "LOGIN",
        recaptchaSiteKey: "6LdbmQMlAAAAAI0uG7ZSF6Uhf8gpPfoG6f9bjpCK",
      },
    });
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/ResendMobileOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ResendEmailAction = async (
  userId: any,
  type: any,
  IsEmailOTP?: boolean
) => {
  try {
    let data = JSON.stringify({ userId, type });
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resendEmailOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ResendEmailActionSecondary = async (
  userId: any,
  IsEmailOTP?: boolean
) => {
  try {
    let data = JSON.stringify({ userId, type: 2 });
    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resendEmailOtp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
export const PersonalVerifcationAction = async ({
  userId,
  firstName,
  lastName,
  genderId,
  imagePath,
  modifiedBy,
}: {
  userId: number;
  firstName: string;
  lastName: string;
  genderId: number;
  imagePath: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      genderId: genderId,
      imagePath: imagePath,
      modifiedBy: modifiedBy || 0,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserProfile",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const PasswordAction = async (
  userId: any,
  isRest?: boolean,
  password?: any,
  userOTP?: any
) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      password: password,
      otp: userOTP,
      deviceId: navigator.userAgent,
    });

    var config = {
      method: "post",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/${
        isRest == true ? "resetUserPassword" : "addUserPassword"
      }`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ForgetPasswordAction = async (mobileNumber: any) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/forgetPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const AddUserEmailAction = async ({
  userId,
  text,
  modifiedBy,
}: {
  userId: number;
  text: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      text: text,
      type: 1,
      modifiedBy: modifiedBy,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserEmails",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const AddUserSecondaryEmailAction = async ({
  userId,
  text,
  modifiedBy,
}: {
  userId: number;
  text: string;
  modifiedBy: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      text: text,
      type: 2,
      modifiedBy: modifiedBy,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/addUserEmails",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const VerifyUserEmailAction = async ({
  userId,
  type,
}: {
  userId: number;
  type: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      type,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resendEmailOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const VerifyUserEmailSecondaryAction = async ({
  userId,
  type,
}: {
  userId: number;
  type: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      type,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resendEmailOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const VerifyUserMobileSecondaryAction = async ({
  userId,
  type,
}: {
  userId: number;
  type: number;
}) => {
  try {
    var data = JSON.stringify({
      userId: userId,
      type,
      isMobile: true,
      raptchaToken: "string",
      mobileCaptchaData: {
        projectId: "string",
        recaptchaAction: "string",
        recaptchaSiteKey: "string",
      },
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/resendMobileOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const ForgotPasswordAction = async (mobileNumber: any) => {
  try {
    var data = JSON.stringify({
      mobileNumber: mobileNumber,
      countryId: 1,
    });

    var config = {
      method: "post",
      url: "https://microsignupapi-preprod.findanexpert.net/signup_svc/pb/users/forgetPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const getUserDetail = async (id: number) => {
  try {
    var config = {
      method: "get",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/getUserById?Id=${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const getUserDetailbyid = async (id: any) => {
  try {
    var config = {
      method: "get",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/getUserById?Id=${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const UploadUserImage = async (userId?: any, fileInput?: any) => {
  try {
    const form = new FormData();
    form.append("AllFilesToUpload", fileInput);
    const environment = "prepord";
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/changeUserImage?UserId=${userId}&environment=${environment}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: form,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const updateBasicProfile = async (
  id: number,
  lastname: string,
  firstname: string
) => {
  try {
    var config = {
      method: "get",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateBasicProfile?UserId=${id}&FirstName=${firstname}&LastName=${lastname}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const updateEmails = async (
  id: number,
  text: string,
  type: number,
  ModifiedBy: any
) => {
  try {
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateEmails?UserId=${id}&text=${text}&type=${type}&ModifiedBy=${ModifiedBy}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

export const updateMobile = async (id: number, text: string) => {
  try {
    var config = {
      method: "put",
      url: `https://microsignupapi-preprod.findanexpert.net/signup_svc/pv/users/updateMobile?UserId=${id}&text=${text}&type=2`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};

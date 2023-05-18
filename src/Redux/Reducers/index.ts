import { getCookie, setCookie } from "@/utils/utils";
import { AUTH_ACTIONS } from "../Actions/loginPageAction";

const Auth_default_state = {
  loading: false,
  profile: {},
  message: "Just for testing",
};

export const authReducer = (state = Auth_default_state, action: ActionI) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return { ...state, loading: true };
      break;
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      setCookie("profile", JSON.stringify(payload));
      return { ...state, loading: false, profile: payload, message: "" };

    case AUTH_ACTIONS.LOGIN_FAILED:
      return { ...state, loading: false, message: payload };
    case AUTH_ACTIONS.SET_PROFILE:
      return { ...state, profile: payload };
    case AUTH_ACTIONS.LOGOUT:
      return { ...state, profile: null };
    case AUTH_ACTIONS.SET_NAMES_BASIC_INFO:
      console.log(" --- prof -----");
      console.log(payload);
      console.log(" --- prof -----");
      let newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(newState.profile));
      return newState;

    case AUTH_ACTIONS.ADD_GENDER:
      console.log(" --- l -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      return _newState;

    case AUTH_ACTIONS.ADD_DOB: {
      console.log(" --- l -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      return _newState;
    }

    case AUTH_ACTIONS.UPDATE_PRIMARY_EMAIL: {
      console.log(" --- l -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      return _newState;
    }

    case AUTH_ACTIONS.UPDATE_SECONDARY_MOBILE: {
      console.log(" --- lUPDATE_SECONDARY_MOBILE -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      console.log(_newState);
      console.log(" --- lUPDATE_SECONDARY_MOBILE -----");
      return _newState;
    }
    case AUTH_ACTIONS.UPDATE_SECONDARY_EMAIL: {
      console.log(" --- l -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      return _newState;
    }
    case AUTH_ACTIONS.SECONDARY_EMAIL_ADD: {
      console.log(" --- l -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      return _newState;
    }
    case AUTH_ACTIONS.SECONDARY_MOBILE_ADD: {
      console.log(" --- l -----");
      console.log(payload);
      console.log(" --- prof -----");
      let _newState = {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          ...payload,
        },
        message: "",
      };
      setCookie("profile", JSON.stringify(_newState.profile));
      return _newState;
    }
    default:
      return state;
  }
};

interface ActionI {
  payload: any;
  type: string;
}

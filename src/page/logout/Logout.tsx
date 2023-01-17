import { useState } from "hoist-non-react-statics/node_modules/@types/react";
import React, { FunctionComponent } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";
// import DialogBox from "../../component/dialog/DialogBox";
// import { ClearToken } from "../../redux/token/tokenAction";
// import { ClearUser } from "../../redux/user/userAction";

interface Props {
    guest?: boolean
}

const Logout: FunctionComponent<Props> = ({ guest }) => {
    // const dispatch = useDispatch();
    // localStorage.removeItem("persist:root");
    // localStorage.removeItem("agahToken");
    // localStorage.removeItem("accessToken");
    // dispatch(ClearUser());
    // dispatch(ClearToken());
    // localStorage.removeItem("persist:root");
    // { process.env.REACT_APP_ENV === "dev" && window.location.replace("http://192.168.10.71:8003") }
    // { process.env.REACT_APP_ENV === "stage" && window.location.replace("http://idara.ir") }
    // { process.env.REACT_APP_ENV === "prod" && window.location.replace("http://darato.ir") }

    return (
        <>
            
        </>)
}

export default Logout;
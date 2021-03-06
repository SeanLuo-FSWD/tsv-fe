import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { globalContext } from "../../store/context/globalContext";
import { server_url } from "../../constants";
import { IUser } from "../../interface/IUser";
import { AxiosResponse } from "axios";

function useAuthenticate() {
  const { setCurrentUser } = useContext(globalContext);

  axios
    .get(`${server_url}auth/authenticate`, { withCredentials: true })
    // .get(`${server_url}auth/authenticate`)

    .then((res: AxiosResponse) => {
      console.log(`${server_url}auth/authenticate --------`);
      console.log(res);
      const userObj: IUser = {
        userId: res.data.userId,
        username: res.data.username,
      };
      setCurrentUser(userObj);
    }).catch((err) => {  
      console.log(err.message);
    })
}

export default useAuthenticate;

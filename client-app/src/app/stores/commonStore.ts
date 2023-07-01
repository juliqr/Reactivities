import { makeAutoObservable } from "mobx";
import { ServerError } from "../layout/models/serverError";

export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = null;
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);
  }

  setServerError(error: ServerError) {
    this.error = error;
  }

  //set the token
  setToken = (token: string | null) => {
    if (token) localStorage.setItem("jwt", token);
    this.token = token; //equal to the token we have it inside our store state
  };

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}

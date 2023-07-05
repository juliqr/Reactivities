import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../layout/models/serverError";

export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = localStorage.getItem("jwt");
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    //setting the token inside local storage
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          localStorage.setItem("jwt", token);
        } else {
          localStorage.removeItem("jwt");
        }
      }
    );
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

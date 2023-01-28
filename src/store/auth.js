import axios from "axios";
import { defineStore } from "pinia";

export const AuthStore = defineStore("auth", {
  state: () => {
    return {
      token: null,
    };
  },
  actions: {
    Register(email, first_name, last_name, password) {
      return axios
        .post("http://localhost:3000/auth/register", {
          email,
          first_name,
          last_name,
          password,
        })
        .then((response) => {
          this.token = response.data.token;
          localStorage.setItem("USER_TOKEN", JSON.stringify(this.token));
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`;
        });
    },

    Login(email, password) {
      return axios
        .post("http://localhost:3000/auth/login", {
          email,
          password,
        })
        .then((reponse) => {
          (this.token = reponse.data.token),
            localStorage.setItem("USER_TOKEN", JSON.stringify(this.token));
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${this.token}`;
        });
    },
    Logout() {
      localStorage.clear("token");
    },
  },
});

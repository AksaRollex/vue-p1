<style>
body {
  background-color: grey;
}
#judul {
  text-align: center;
  /* border: 1px solid; */
  width: 270px;
}
#sek {
  width: 300px;
  border: 1px solid beige;
  background-color:  rgb(255, 255, 255);
  margin-top: 100px;
  margin-left: 40%;
  height: 350px;
  border-radius: 10px;
}
#iemail {
  width: 275px;
}
#ipass {
  width: 275px;
}
#tsave {
  margin-top: 10px;
}
#sese{
  text-align: center;
}
</style>
<template>
  <div class="row" id="sek">
    <div class="col-sm-4">
      <h1 id="judul">LOGIN </h1>

      <form @submit.prevent="LoginData"  >
        <div class="form-group" align="left">
          <label>Email</label>
          <input
            type="email"
            v-model="student.email"
            class="form-control"
            placeholder="Email"
            id="iemail"
          />
        </div>

        <div class="form-group" align="left">
          <label>Password</label>
          <input
            type="password"
            v-model="student.password"
            class="form-control"
            placeholder="Password"
            id="ipass"
          />
        </div>

        <button type="submit" class="btn btn-primary" id="tsave">Login</button>
      </form>
    </div>
    <p id="sese">Don't have an account yet?  <br> <router-link :to="{name: 'Register'}">Register Now</router-link></p>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

Vue.use(axios);
export default {
  name: "Login",
  data() {
    return {
      result: {},
      student: {
        email: "",
        password: "",
      },
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called.......");
  },
  methods: {
    LoginData() {
      axios
        .post("http://127.0.0.1:8000/api/logincak", this.student)
        .then(({ data }) => {
          console.log(data);
          try {
            if (data.status === true) {
              alert("Login Successfully");
              this.$router.push({ name: 'Admin' });
            } else {
              alert("Login Gagal Cacakku");
            }
          } catch (err) {
            alert("Error, please try again");
          }
        });
    },
  },
};
</script>

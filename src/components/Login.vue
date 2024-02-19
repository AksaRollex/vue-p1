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
  height: 310px;
  border-radius: 10px;
}

#tsave {
  margin-top: 10px;
}
#sese{
  text-align: center;
}
</style>
<template>
  <div class="card" align="left" id="sek">
    <div class="card-header"> Login </div>
      <div class="card-body">
        <form @submit.prevent="logindata"  >
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
    <p id="sese">Belum punya akun ? <br> <router-link :to="{name: 'Register'}">Daftar dulu sini cakku </router-link></p>
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
        email: '',
        password: '',
      },
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called.......");
  },
  methods: {
    logindata() {
      axios
        .post("http://127.0.0.1:8000/api/logincak", this.student)
        .then(({ data }) => {
          console.log(data);
          try {
              alert("Login Successfully");
              this.$router.push({ name: 'Admin' });
            } catch (err) {
            alert("Error, please try again");
          }
        });
    },
  },
};
</script>

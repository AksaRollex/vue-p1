<style>
body {
  background-color: #333333;
}
#judul {
  text-align: center;
  /* border: 1px solid; */
  width: 270px;
}
#sek {
  width: 300px;
  background-color:  rgb(255, 255, 255);
  margin-top: 100px;
  margin-left: 40%;
  height: 380px;
  border-radius: 10px;
}
#tsave {
  margin-top: 14px;
  margin-left: 0.5%;
  width: 260px;
}
#sese{
  text-align: center;
}
#sksk {
    margin-left: 0.5%;
  width: 260px;
  margin-top: 10px;
}
#sksk2 {
  margin-left: 0.5%;
  width: 260px;
}
</style>
<template>
  <div class="card " align="left" id="sek">
    <div class="card-header"> Login Dengan Username </div>
      <div class="card-body">
        <form @submit.prevent="logindata"  >

        <div class="form-group" align="left">
          <label>Username</label>
          <input
            type="text"
            v-model="student.name"
            class="form-control"
            placeholder="Username"
            id=""
          />
        </div>

        <div class="form-group" align="left">
          <label>Password</label>
          <input
            type="password"
            v-model="student.password"
            class="form-control"
            placeholder="Password"
            id=""
          />
      </div>

        <button type="submit" class="btn btn-primary" id="tsave">Login</button>
        <router-link :to="{ name: 'Login' }" class="btn btn-primary" id="sksk">Login Dengan Email !</router-link>
      </form>
      <p style="text-align: center; margin-top: 10px;">Belum Punya Akun ? </p>
    <router-link :to="{ name: 'Register' }" class="btn btn-danger" id="sksk2">Daftar Dulu !</router-link>
      </div>

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
        name:'',
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
        .post("http://127.0.0.1:8000/api/logincak2", this.student)
        .then(({ data }) => {
          // Ambil data dari respons
          const role = data.role
          console.log("role id=", data.role)
          if (data.token) {
            // Simpan token di localStorage
            localStorage.setItem('jwt', data.token);
            if(role === 1){
              // Redirect ke halaman HelloWorld setelah login berhasil
              this.$router.push({ name: 'Admin' });
              alert("Berhasil Login Sebagai Admin !");
              alert("Selamat Datang Admin !");
            }else if(role === 2){
              // Redirect ke halaman HelloWorld setelah login berhasil
              this.$router.push({ name: 'User' });
              alert("Berhasil Login Sebagai Pengguna !");
              alert("Selamat Datang Pengguna !");
            }else{
              alert('user tidak terdaftar')
            }
          }
        })
    },
  },
};
</script>

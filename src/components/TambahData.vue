<style>
body {
  background-color: #333333;
}
#container {
  width: 300px;
  margin-left: 40%;
  margin-top: 100px;
  height: 350px;
}
#s {
  margin-top: 10px;
  width: 265px;
}
#cyak {
  text-align: center;
  margin-top: 15px;
}
#s1 {
  margin-top:10px;
   width: 265px;
}
</style>
<template>
  <div data-aos="fade-down">
    <div class="">
        <HeaderAdmin />
        <div class="card" align="left" id="container">
    <div class="card-header">Tambah Data</div>
    <div class="card-body">
      <form @submit.prevent="saveData">
        <label>First Name</label>
        <input
          type="text"
          v-model="student.name"
          name="name"
          id="name"
          class="form-control"
        />

        <label>Email</label>
        <input
          type="email"
          v-model="student.email"
          name="email"
          id="email"
          class="form-control"
        />

        <label>Password</label>
        <input
          type="password"
          v-model="student.password"
          name="password"
          id="password"
          class="form-control"
        />

        <input type="submit" value="Save" class="btn btn-primary" id="s" to="/Admin"/>
        <router-link :to="{ name: 'Admin' }" class="btn btn-danger" id="s1">Batal</router-link>
        <!-- <router-link :to="{ name: 'Admin' }" class="btn btn-danger" style="margin-top: 10px;">Batal</router-link> -->
      </form>
    </div>
  </div>
    </div>
  </div>
    
  
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin'
import Vue from "vue";
import axios from "axios";
Vue.use(axios);

export default {
  name: "Admin",
  components: {
    HeaderAdmin,
  },
  name: "DataUser",
  data() {
    return {
      result: {},
      student: {
        name: "",
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
    saveData() {
      axios
        .post("http://127.0.0.1:8000/api/registcak", this.student)
        .then(({ data }) => {
          console.log(data);
          try {
            alert("Data Berhasil Di Tambahkan ! ");
            this.$router.push({ name: "DataUser" });
          } catch (err) {
            alert("Data Gagal Di Tambahkan ! ");
          }
        });
    },
  },
};
</script>

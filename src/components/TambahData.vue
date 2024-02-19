<style>
body {
  background-color: grey;
}
#container {
  width: 300px;
  margin-left: 40%;
  margin-top: 100px;
  height: 310px;
}
#save {
  margin-top: 10px;
}
#cyak {
  text-align: center;
  margin-top: 15px;
}
</style>
<template>
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

        <input type="submit" value="Save" class="btn btn-primary" id="save" />
      </form>
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
            alert("brhasil cyak");
            this.$router.push({ name: "TambahData" });
          } catch (err) {
            alert("failed");
          }
        });
    },
  },
};
</script>

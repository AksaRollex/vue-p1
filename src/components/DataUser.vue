<style>
#body {
  background-color: #333333;
}
</style>
<template>
  <div data-aos="fade-down">
    <div class="">
    <HeaderAdmin />
    <div class="container mt-3">
      <table class="table table-hover table-danger">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody v-for="users in user" :key="users.id">
          <tr class="table-primary">
            <td scope="row">{{ users.id }}</td>
            <td scope="row">{{ users.name }}</td>
            <td scope="row">{{ users.email }}</td>
            <td scope="row">{{ users.role_id }}</td>
            <td>
              <router-link
                :to="{ name: 'EditData', params: { id: users.id } }"
                class="btn btn-primary btn-sm"
                >Update</router-link
              >
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click.prevent="deleteUser(users.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  
</template>


<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";
import axios from "axios";

export default {
  name: "Admin",
  components: {
    HeaderAdmin,
  },
  data() {
    return {
      user: Array,
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      let url = "http://127.0.0.1:8000/api/showData";
      await axios
        .get(url)
        .then((response) => {
          this.user = response.data.user;
          console.log(this.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteUser(id) {
      let url = `http://127.0.0.1:8000/api/delete/${id}`;
      await axios.delete(url).then((response) => {
        if (response.data.code == 200) {
          alert(response.data.message);
          this.getUser();
        }
      });
    },
  },
  mounted() {
    console.log("User List Mounted...");
  },
};
</script>
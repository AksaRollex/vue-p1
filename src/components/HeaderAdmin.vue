<template>
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style="width: 100vw;">
  <div class="container-fluid">
    <a class="navbar-brand" href="">
      <router-link :to="{ name: 'Admin' }" class="nav-link">MCFLYON</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
            <router-link :to="{ name: 'TambahData' }" class="nav-link">Tambah Data</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'DataUser' }" class="nav-link">Data User</router-link>
        </li>
        <li class="nav-item">
          <button class="nav-link" v-on:click="logout" to="/login">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name : 'HeaderAdmin',
    methods : {
      logout(){
            localStorage.removeItem('jwt')
            this.$router.push({name : 'Login'})
            alert('log out berhasil cyak')
            }
    }
}
</script>
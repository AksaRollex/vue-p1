<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style="width: 100vw;">
      <div class="container-fluid">
        <a class="navbar-brand" href="">
          <router-link :to="{ name: 'User' }" class="nav-link">MCFLYON USER</router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <button class="nav-link" v-on:click="logout" to="/login" style="color: white;">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </template>
    
    <script>
    export default {
        name : 'HeaderUser',
        methods : {
            logout(){
            localStorage.removeItem('jwt')
            this.$router.push({name : 'Login'})
            alert('Logout Berhasil !')
            alert('Terimakasih Pengguna !')
            }
        }
    }
    </script>
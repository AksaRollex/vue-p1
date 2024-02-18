<template>

<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MCFLYON</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" to="{name : 'Home'}">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'Register' }" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name : 'Header'
}
</script>
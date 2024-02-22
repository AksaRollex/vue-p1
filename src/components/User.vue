<style>
body {
  background-color: #333333;
}
#cyak {
    margin-top: 20%;
    text-align: center;
}
</style>
<template>
  <div data-aos="fade-down">
    <div class="">
    <HeaderUser />
    <figure>
      <blockquote class="blockquote" id="cyak">
        <h1 class="hero-title mt-5" style="color: white; text-align: center;">Selamat Datang User !</h1>
      </blockquote>
    </figure>
  </div>
  </div>
  
</template>

<script>
import HeaderUser from '@/components/HeaderUser.vue'

export default {
    name : 'User',
    components : {
        HeaderUser
    }
}
</script>
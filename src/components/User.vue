<style>
#cyak {
    margin-top: 20%;
    text-align: center;
}
</style>
<template>
  <div class="">
    <HeaderUser />
    <figure>
      <blockquote class="blockquote" id="cyak">
        <p class="mb-0">
          Selamat Datang Di Halaman User Cakku !
        </p>
      </blockquote>
    </figure>
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
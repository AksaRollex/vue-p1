<style>
body {
  background-color: #333333;
}

#cyak {
    margin-top: 20%;
    text-align: center;
}

.hero-subtitle {
  color: white;
}
</style>
<template>
  <div class="">
    <HeaderAdmin />
    <figure>
      <blockquote class="blockquote" id="cyak">
        <h1 class="hero-title mt-5" style="color: white; text-align: center;">Selamat Datang Admin !</h1>
      </blockquote>
    </figure>
  </div>
</template>

<script>
import HeaderAdmin from "@/components/HeaderAdmin.vue";

export default {
  name: "Admin",
  components: {
    HeaderAdmin,
  },
};
</script>

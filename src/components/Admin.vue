<style>
#cyak {
    margin-top: 20%;
    text-align: center;
}
</style>
<template>
  <div class="">
    <HeaderAdmin />
    <figure>
      <blockquote class="blockquote" id="cyak">
        <p class="mb-0">
          Selamat Datang Di Halaman Admin Cakku !
        </p>
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

<style>
body {
  background-color: #333333;
}
#container {
  width: 300px;
  margin-left: 40%;
  margin-top: 100px;
  height: 390px;
}
#save {
  margin-top: 14px;
  margin-left: 28%;
  width: 120px;
}
#sksk {
  margin-left: 28%;
}
</style>
<template>
  <div class="card" align="left" id="container">
        <div class="card-header">Register / Daftar </div>
          <div class="card-body"> 
          
              <form  @submit.prevent="saveData">
              
              <label>Username</label>
              <input type="text" v-model="student.name" name="name" id="name" class ="form-control"/> 
  
        
              <label>Email</label>
              <input type="email" v-model="student.email" name="email" id="email" class ="form-control"/>
  
              <label>Password</label>
              <input type="password" v-model="student.password" name="password" id="password" class ="form-control"/> 
  
  
              <input type="submit" value="Save" class="btn btn-primary" id="save"> 
              
              <p style="text-align: center; margin-top: 10px;">Sudah Punya Akun ? </p>
              <router-link :to="{ name: 'Login' }" class="btn btn-danger" id="sksk">Login Disini !</router-link>

              </form>
          </div>
      </div>
  </template>
  
     <script>
         import Vue from 'vue'; 
         import axios from 'axios';
         Vue.use(axios)

       export default {
         name: 'DataUser',
         data () {
           return {
             result: {},
             student:{
                        name: '',
                        email: '',
                        password: ''
             }
           }
         },
         created() { 
         },
         mounted() {
               console.log("mounted() called.......");
           },
         methods: {
                saveData()
                {
                 axios.post("http://127.0.0.1:8000/api/registcak", this.student)
                 .then(
                   ({data})=>{
                    console.log(data);
                     try 
                       {
                          alert("Pendaftaran Pengguna Berhasil !")
                          alert("Login Dengan Akun Yang Telah Kamu Daftarkan !")
                          this.$router.push({ name: 'Login'})
                        } catch(err) 
                        {
                          alert('failed');
                        }    
                   }
                 )
                }
           }
       }
       </script>
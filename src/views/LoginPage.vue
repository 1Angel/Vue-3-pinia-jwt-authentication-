<script setup>
import {ref} from 'vue';
import {AuthStore} from "../store/auth";

const store = AuthStore();
const email = ref("");
const password = ref("");

function Login(){
    store.Login(email.value, password.value)
}

</script>



<template>
  <h1>Login page</h1>

  <div>
    <label>Email</label>
    <input v-model="email" />
  </div>
  <div>
    <label>Password</label>
    <input v-model="password"/>
  </div>
  <button @click="Login">Aceptar</button>
</template>


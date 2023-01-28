<script setup>
import {ref} from 'vue'
import { AuthStore } from '../store/auth';

const store = AuthStore();

const email = ref("");
const first_name = ref("");
const last_name = ref("");
const password = ref("");

function Register(){
    store.Register(email.value, first_name.value, last_name.value, password.value)

}

</script>


<template>
  <h1>Register Page</h1>

    <div>
        <label>Email</label>
        <input v-model="email"/>
    </div>
    
    <div>
        <label>first Name</label>
        <input v-model="first_name"/>
    </div>
    
    <div>
        <label>Last Name</label>
        <input v-model="last_name"/>
    </div>
    
    <div>
        <label>Password</label>
        <input v-model="password"/>
    </div>
    <div>
        <Button @click="Register">Registrar</Button>
    </div>


</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';


const privatexd = ref("");


function GetPrivateView(){
    return axios.get("http://localhost:3000/auth/private").then(response=>privatexd.value = response.data);
}


onMounted(()=>{
    GetPrivateView()
})

</script>


<template>
    <h1>private Page</h1>
    <p>{{ privatexd }}</p>

</template>
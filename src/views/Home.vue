<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <HelloWorld msg="Welcome to My Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
img {
  width: 20%;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
div {
  font-family: 'Nunito', sans-serif;
}
</style>
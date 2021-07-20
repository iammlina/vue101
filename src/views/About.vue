<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld number='3000'/>
  </div>
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'About',
  components : {
    HelloWorld
  }
}
</script>
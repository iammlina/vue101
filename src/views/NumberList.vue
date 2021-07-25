<template>
  <div>
      <Counter init-number="0"></Counter>
      <Counter init-number="100"></Counter>
      <Counter init-number="-10"></Counter>
      <Counter></Counter>
      <Counter></Counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
    components: {
        Counter
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
div {
  font-family: 'Nunito', sans-serif;
}

</style>
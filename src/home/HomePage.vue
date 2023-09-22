<script>
export default {
  name: 'HomePage',
};
</script>

<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-hidden="true" />
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link> building your first
      robot!
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>

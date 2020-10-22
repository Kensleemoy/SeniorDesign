<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <Header />
	<h1>ABOUT US</h1>
  <div class="horizontal-container">
    <hr />
  </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
    Header: () => import('@/components/Header.vue'),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

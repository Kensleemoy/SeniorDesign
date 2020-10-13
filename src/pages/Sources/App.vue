<template>
  <div id="app">
    <Header/>
    <h1>Sources</h1>
  </div>
</template>

<script>
export default {
  name: 'Sources',
  components: {
    Header: () => import('@/components/Header.vue'),
  },
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

/* This makes sure there is not weird padding around header */
html, body {
    margin: 0;
    padding: 0;
}
</style>

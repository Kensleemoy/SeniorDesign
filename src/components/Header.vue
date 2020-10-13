<template>
    <div class="nav-header">
        <div class="header">
            <h1><span id="COV-ID">COV-ID</span><span id="aho">aho</span></h1>
        </div>
        <Nav /> 
    </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
      Nav: () => import('@/components/Nav.vue'),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-header {
    position: static;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #000000;
    height: 30%;
}
.header {
    text-align: center;
    background-color: #1c4587ff;
    margin: 0;
    padding: 0;
}
#COV-ID {
    color: #ff9900;
}

#aho {
    color: #ffffff;
}

</style>

<template>
  <div id="app">
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
  <Header />
    <div class="data" style="position: relative">
		<div class="short-it">
			<div class="idahostats">
				<h1>Idaho Stats</h1>
				<StateData />
				<CountyData />
				<AllCountiesData />
			</div>
		</div>
		<div id="map">
			<img src="@/assets/Idaho_map_counties.png">
		</div>
	</div>

	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
        StateData: () => import('@/components/StateData.vue'),
		CountyData: () => import('@/components/CountyData.vue'),
		AllCountiesData: ()=> import('@/components/AllCountiesData.vue'),
	},

}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  float: top;
}

.data{
  margin-left: 25%;
  margin-bottom: 50px;
}

.short-it div {
    bottom: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
}

div#map {
    position: absolute;
    right: 0%;
    left: 39%;
    top: -2%;
}

</style>

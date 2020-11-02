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
		</div>
      <svg-map :map="idaho_map"/>
		</div>
	</div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import idaho_map from "../../../svg-maps/packages/usa.idaho";

export default {
  name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
        StateData: () => import('@/components/StateData.vue'),
		CountyData: () => import('@/components/CountyData.vue'),
    AllCountiesData: ()=> import('@/components/AllCountiesData.vue'),
    SvgMap
	},
  data() {
    return {
      idaho_map
    };
  }
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

div#map{
    position: absolute;
    right: 0%;
    left: 39%;
    top: -2%;
}

.svg-map {
  position: absolute;
  transform: rotate(-11deg);
  left: -22%;
  top: 18%;
  width: 172%;
  height: 225%;
  stroke: #666;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;}
  .svg-map__location {
    fill: #a1d99b;
    cursor: pointer; }
    .svg-map__location:focus, .svg-map__location:hover {
      fill: #b8e2b3;
      outline: 0; }
    .svg-map__location[aria-checked="true"] {
      fill: #f4bc44; }


</style>

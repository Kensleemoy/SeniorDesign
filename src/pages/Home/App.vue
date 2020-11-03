<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <Header />
    <div class="data">
        <div class="idahostats">
          <h1>Idaho Stats</h1>
          <StateData />
          <CountyData />
          <AllCountiesData />
        </div>
      </div>
      <div class="map">
        <svg-map z-index="0" :map="idaho_map"/>
      </div>
		</div>
</template>

<script>
import { SvgMap } from "vue-svg-map";
import idaho_map from "../../svg-maps/packages/usa.idaho";

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  float: top;
  
}

.data{
  /* display: relative; */
  position: relative;
  margin-left: 325px;
  margin-bottom: 50px;
  z-index: 3;
}

.map {
  position: relative;
   /* z-index: 1; */
}

.svg-map {
  z-index: 1;
  transform: rotate(-11deg);
  /* width: 1000px;
  height: 1500px; */
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

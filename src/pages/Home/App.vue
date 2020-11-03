<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <Header />
    <div class="data">
        <h1>Idaho Stats</h1>
        <StateData />
        <CountyData />
      </div>
      <div class="map">
        <svg-map :map="idaho_map"/>
      </div>
      <div class="idahostats">
        <AllCountiesData />
      </div>
		<checkbox-svg-map v-model="selectedLocations" :map="idaho_map" />
		</div>
</template>

<script>
import { CheckboxSvgMap } from "vue-svg-map";
import idaho_map from "../../svg-maps/packages/usa.idaho";

export default {
  name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
        StateData: () => import('@/components/StateData.vue'),
		CountyData: () => import('@/components/CountyData.vue'),
    AllCountiesData: ()=> import('@/components/AllCountiesData.vue'),
    CheckboxSvgMap
	},
  data() {
    return {
		idaho_map,
		selectedLocations: []
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
  /* display: inline-block; */
  position: relative;
  z-index: 3;
  margin-left: 22%;
  width: 30%;
  padding: 10px;
}

.idahostats {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 140px;
}

.svg-map {
  z-index: 1;
  /* display: inline-block; */
  position: absolute;
  transform: rotate(-11deg);
  stroke: rgb(255, 255, 255)56);
  left: -22%;
  top: 100px;
  width: 172%;
  height: 225%;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;}

.svg-map__location {
    fill: #1c4587ff;
    cursor: pointer; }

.svg-map__location:focus, .svg-map__location:hover {
      fill: #ff9900;
      outline: 0; }

.svg-map__location[aria-checked="true"] {
      fill: #ff9900; }
</style>

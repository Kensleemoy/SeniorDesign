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
		<checkbox-svg-map v-model="selectedLocations" :map="idaho_map" :location-class="getLocationClass"
        @mouseover="pointLocation"
        @mouseout="unpointLocation"
        @mousemove="moveOnLocation"/>
		<div class="idaho__tooltip" :style="tooltipStyle">
			{{ pointedLocation }}
		</div>
		</div>

      <div class="idahostats">
        <AllCountiesData />
      </div>
		
		</div>
</template>

<script>
import { CheckboxSvgMap } from "vue-svg-map";
import idaho_map from "../../svg-maps/packages/usa.idaho";
import { getLocationName } from "../../utilities"

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
		selectedLocations: [],
		pointedLocation: null,
		tooltipStyle: null,
    };
	
  },
	methods: {
		pointLocation(event) {
			this.pointedLocation = getLocationName(event.target)
		},
		unpointLocation() {
			this.pointedLocation = null
			this.tooltipStyle = { display: 'none' }
		},
		moveOnLocation(event) {
			this.tooltipStyle = {
				display: 'block',
				top: `${event.clientY + 10}px`,
				left: `${event.clientX - 100}px`,
			}
		},
		getLocationClass(location, index) {
			// Generate heat map
			return `svg-map__location svg-map__location--id${index % 4}`
		},
	},

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

.idaho__tooltip {
    z-index: 2;
	position: fixed;
    width: 80px;
    padding: 10px;
    border: 1px solid #a9a9a9;
    background-color: #fff;
}

</style>

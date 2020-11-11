<template>
	<div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <Header />
    <div class="data">
        <h1>Idaho Stats</h1>
        <StateData />
      </div>
		<div class="map">
		<checkbox-svg-map v-model="selectedLocations" :map="idaho_map" :location-class="getLocationClass"
        @mouseover="pointLocation"
        @mouseout="unpointLocation"
        @mousemove="moveOnLocation"/>
		<div v-if="pointedLocation !== null" class="idaho__tooltip" :style="tooltipStyle">
			{{ pointedLocation }}
		</div>
		</div>
		
      <div class="idahostats">
			<h1>County Stats</h1>
			<div class="description">
				Select counties on the map to view their data in the table below.
			</div>
			<div class="idahostats-table">
			<table>
			<thead>
				<tr>
					<th>County</th>
					<th>Population</th>
					<th>Cases</th>
					<th>Deaths</th>
					<th>Hospital Beds</th>
					<th>ICU Beds</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="location in selectedLocations" :key="location">
					<td>{{findCounty(location)}}</td>
					<td>{{findPop(location)}}</td>
					<td>{{findCases(location)}}</td>
					<td>{{findDeaths(location)}}</td>
					<td>{{findHospBeds(location)}}</td>
					<td>{{findICUBeds(location)}}</td>
				</tr>
			</tbody>
			</table>
		</div>
      </div>
		</div>
</template>

<script>
import { CheckboxSvgMap } from "vue-svg-map";
import idaho_map from "../../svg-maps/packages/usa.idaho";
import { getLocationName } from "../../utilities"
import { getSelectedLocationName } from "../../utilities"

export default {
  name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
        StateData: () => import('@/components/StateData.vue'),
		CheckboxSvgMap
	},
  data() {
    return {
		idaho_map,
		selectedLocations: [],
		pointedLocation: null,
		tooltipStyle: null,
		counties: {
			actuals: {
			hospitalBeds: {

			},
			icuBeds: {

			},
			},
		},

    };
	
  },
	mounted() {
		this.getCountiesData()
	},
	methods: {
		async getCountiesData(){
			try {
				const proxyurl = "https://hidden-fortress-01637.herokuapp.com/";
				const url = "https://api.covidactnow.org/v2/counties.json?apiKey=";
				const key = process.env.VUE_APP_APIKEY;
				const response = await fetch (proxyurl + url + key);
				const data = await response.json();
				var IdahoData = data.filter(function(d){return d.state == "ID"});
				
				//if we want to remove the " County" part from County name:
				var formatData = (JSON.stringify(IdahoData)).replace(/ County/g, "");
				this.counties = JSON.parse(formatData);
				
				//if not, comment out the two lines above, and uncomment line below:
				//this.counties = JSON.parse(JSON.stringify(IdahoData));

			} catch (error) {
				console.error(error);
			}
		},
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
			return `svg-map__location svg-map__location--id${index % 4}`
		},
		getSelectedLocationName,
		tmpValObj(location){
			let x = getSelectedLocationName(idaho_map, location);
			var valObj = this.counties.filter(function(elem){
				if(elem.county == x){
					//console.log(elem.county);
					return elem;
				}
			});			
			return valObj[0];
		},
		findCounty(location){
			let x = this.tmpValObj(location);			
			return x.county;
		},
		findPop(location){
			let x = this.tmpValObj(location);			
			return x.population;
		},
		findCases(location){
			let x = this.tmpValObj(location);			
			return x.actuals.cases;
		},
		findDeaths(location){
			let x = this.tmpValObj(location);			
			return x.actuals.deaths;
		},
		findHospBeds(location){
			let x = this.tmpValObj(location);			
			return x.actuals.hospitalBeds.capacity;
		},
		findICUBeds(location){
			let x = this.tmpValObj(location);			
			return x.actuals.icuBeds.capacity;
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
  padding-left: 22%;
  width: 37%;
}

.idahostats-table {
  padding-top: 20px;
}

.svg-map {
  z-index: 1;
  padding-top: 10px;
  position: absolute;
  transform: rotate(-11deg);
  stroke: #ffffff;
  left: -10%;
  top: 100px;
  width: 172%;
  height: 225%;
  stroke-width: 0.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.description {
	padding-bottom: 10px;
}

.svg-map__location {
    fill: #1c4587ff;
    cursor: pointer; }

.svg-map__location:focus, .svg-map__location:hover {
    fill: #ff9900;
	outline: 0;
}

.svg-map__location[aria-checked="true"] {
	fill: #ff9900; 
}

.idaho__tooltip {
    z-index: 2;
	position: fixed;
    text-align: center;
	width: 100px;
    padding: 10px;
    border: 1px solid #a9a9a9;
    background-color: #fff;
}

	.empty-table {
		text-align: center;
	}
	table {
		border-collapse: collapse;
		width: 100%;
	}
	table, th, td {
		border: 1px solid #666666;
		text-align:center;
	}
	td, th {
		padding: 10 10;
		font-size:auto;
		background-color: rgb(255, 245, 231);
	}
	th {
		background-color: #1c4587ff;
		color:#ffffff;
	}
	td.tableMsg{
		text-align:center;
	}
</style>

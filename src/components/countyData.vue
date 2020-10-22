<template>
  <div id="countyData">
      <p> 
        Select a county to view: 
        <select id="selectCounty"> 
            <option value="16001">Ada</option> 
            <option value="16003">Adams</option> 
            <option value="16005">Bannock</option> 
        </select> 
    </p>
	<div> Last updated on {{county.lastUpdatedDate}}</div>
	<div>Population: {{county.population}}</div>
	<div>Cases: {{county.actuals.cases}}</div>
	<div>Deaths: {{county.actuals.deaths}}</div>
	<div>Hospital Beds: {{county.actuals.hospitalBeds.capacity}}</div>
	<div>Hospital beds used by Covid: {{county.actuals.hospitalBeds.currentUsageCovid}}</div>
	<div>ICU Beds: {{county.actuals.icuBeds.capacity}}</div>
	<div>ICU beds used by Covid: {{county.actuals.icuBeds.currentUsageCovid}}</div>
	
  </div>
</template>

<script>
  export default {
    name: 'CountyData',
	data(){
		return{
			county: {
				actuals: {
					hospitalBeds: {

					},
					icuBeds: {

					},
				},
			},
		}
	},
	mounted() {
		this.getCountyData()
	},
	methods: {
		async getCountyData(){
			try {
				const proxyurl = "https://cors-anywhere.herokuapp.com/";
				const urlpart1 = "https://api.covidactnow.org/v2/county/";
				const county = "16001"; //need to make this dynamic!
				const urlpart2 = ".json?apiKey=";
				const key = process.env.VUE_APP_APIKEY;
				const response = await fetch (proxyurl + urlpart1 + county + urlpart2 + key);
        const data = await response.json();
        this.county = JSON.parse(JSON.stringify(data));
			} catch (error) {
				console.error(error);
			}
		},
	}
  }
</script>

<style scoped>
	button {
		margin: 0 0.5rem 0 0;
	}
	input {
		margin: 0;
	}
	.empty-table {
		text-align: center;
	}
</style>
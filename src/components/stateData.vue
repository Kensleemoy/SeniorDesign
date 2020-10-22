<template>
  <div id="stateData">
	<div> Last updated on {{state.lastUpdatedDate}}</div>
	<div>Population: {{state.population}}</div>
	<div>Cases: {{state.actuals.cases}}</div>
	<div>Deaths: {{state.actuals.deaths}}</div>
	<div>Hospital Beds: {{state.actuals.hospitalBeds.capacity}}</div>
	<div>Hospital beds used by Covid: {{state.actuals.hospitalBeds.currentUsageCovid}}</div>
	<div>ICU Beds: {{state.actuals.icuBeds.capacity}}</div>
	<div>ICU beds used by Covid: {{state.actuals.icuBeds.currentUsageCovid}}</div>
	
  </div>
</template>

<script>
  export default {
    name: 'StateData',
	data(){
		return{
			state: {
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
		this.getStateData()
	},
	methods: {
		async getStateData(){
			try {
				const proxyurl = "https://cors-anywhere.herokuapp.com/";
				const url = "https://api.covidactnow.org/v2/state/ID.json?apiKey=";
				const key = process.env.VUE_APP_APIKEY;
				const response = await fetch (proxyurl + url+ key);
        const data = await response.json();
        this.state = JSON.parse(JSON.stringify(data));
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
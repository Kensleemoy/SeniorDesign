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
    name: 'stateData',
	props: {
		state: Array,
	},

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
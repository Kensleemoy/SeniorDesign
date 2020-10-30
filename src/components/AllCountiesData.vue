<template>
  <div id="allCountiesData">
		<table>
			<thead>
				<tr>
					<th>County</th>
					<th>Last updated</th>
					<th>Population</th>
					<th>Cases</th>
					<th>Deaths</th>
					<th>Hospital Beds</th>
					<th>Hospital Beds used by Covid</th>
					<th>ICU Beds</th>
					<th>ICU Beds used by Covid</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for = "county in counties" v-bind:key="county.fips">
					<td>{{county.county}}</td>
					<td>{{county.lastUpdatedDate}}</td>
					<td>{{county.population}}</td>
					<td>{{county.actuals.cases}}</td>
					<td>{{county.actuals.deaths}}</td>
					<td>{{county.actuals.hospitalBeds.capacity}}</td>
					<td>{{county.actuals.hospitalBeds.currentUsageCovid}}</td>
					<td>{{county.actuals.icuBeds.capacity}}</td>
					<td>{{county.actuals.icuBeds.currentUsageCovid}}</td>
				</tr>
			</tbody>
		</table>

  </div>
</template>

<script>
  export default {
    name: 'AllCountiesData',
	data(){
		return{
			counties: {
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
		this.getCountiesData()
	},
	methods: {
		async getCountiesData(){
			try {
				const proxyurl = "https://cors-anywhere.herokuapp.com/";
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
	#allCountiesData{
		margin-top: 140px;
	}
	.empty-table {
		text-align: center;
	}
	table {
		border-collapse: collapse;
		width: 100%;
	}
	table, th, td {
		border: 1px solid #a2937e;
		text-align:center;
	}
	td, th {
		padding: 10 10;
		font-size:20px;
	}
	th {
		background-color: #1c4587ff;
		color:#ff9900;
	}
	td.tableMsg{
		align:center;
	}
</style>
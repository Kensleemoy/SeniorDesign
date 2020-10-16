<template>
  <div id="app">
  <Header />
    <div class="data" style="position: relative">
		<div class="short-it">
			<div class="idahostats">
       <h1>Idaho Stats</h1>
       <StateData :state="state" />
      </div>
      <!--<div class="natstats">
       //<h1>Nationwide Stats</h1>
       **MOCK DATA**
       <NationalData :national="national"/>
       <div>Population: 12</div>
       <div>Cases: 2000000</div>
       <div>Deaths: 987345</div>
       <div>Hospital Beds: 23423 </div>
       <div>Hospital beds used by Covid: 234234 </div>
       <div>ICU Beds: 234234</div>
       <div>ICU beds used by Covid: 234234</div>
       **MOCK DATA** 
      </div>-->
		</div>
		</div>
    <div id="map">
      <img src="@/assets/Idaho_map_counties.png">
    </div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
    StateData: () => import('@/components/stateData.vue'),
    // NationalData: () => import('@/components/nationalData.vue'),
	},
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
				const url = "https://api.covidactnow.org/v2/state/ID.json?apiKey=bd6b09ad6c234b8aad900c39489909cf";
				const response = await fetch (proxyurl + url);
        const data = await response.json();
        this.state = JSON.parse(JSON.stringify(data));
			} catch (error) {
				console.error(error);
			}
		},
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

/* This makes sure there is not weird padding around header */
html, .idahostats, .natstats {
    margin: 0;
    padding: 0;
}

</style>

<template>
  <div id="app">
  <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
  <Header />
    <div>
		<div class="short-it">
			<div class="body">
    <h1>Cases In Idaho</h1>
    <StateData :state="state" />
  </div>
		</div>
		<div />
	</div>
  </div>
</template>

<script>

export default {
	name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
		StateData: () => import('@/components/stateData.vue'),
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
  text-align: center;
  color: #2c3e50;
  float: top;
}

.short-it div {
    bottom: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 40px;
}


</style>

<template>
  <div id="app">
  <Header />
    <div style="position: relative">
		<div class="short-it">
			<div class="body">
    <h1>Cases In Idaho</h1>
    <stateData
		:state="state" 
	/>
  </div>
		</div>
		<div />
	</div>
  </div>
</template>

<script>
import stateData from '@/components/stateData.vue'

export default {
	name: 'Home',
	components: {
		Header: () => import('@/components/Header.vue'),
		stateData,
	},
	data(){
		return{
			state: [],
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
				const response = await fetch (proxyurl + url)
				const data = await response.json()
				this.state = data
			} catch (error) {
				console.error(error)
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
}

.short-it {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 500px;
  + div {
    position: absolute;
    bottom: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to bottom, transparent, #fff)
  }
}

/* This makes sure there is not weird padding around header */
html, body {
    margin: 0;
    padding: 0;
}

</style>

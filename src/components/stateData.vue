<template>
  <div id="stateData">
	<div>{{state}}</div>
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
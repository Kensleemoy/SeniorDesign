<template>
	<div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <Header />
	<h1>ABOUT US</h1>
	<div class="horizontal-container">
		<hr />

		<div id="desc">
		We are a group of three Boise State Seniors majoring in Computer Science. We created this website with the goal of 
		providing Idaho COVID-19 data in a clear and straightforward manner. 
		</div>
	</div>
  <div class="aboutus">
    <div id="kenslee">
      <div id="kenslee-photo" class="personal-photo"> <img src="@/assets/pngwing.com.png"> </div>
      <div class="likes">
        <h3 class="subhead">KENSLEE</h3>
        Likes: Ice Cream and Puppies
        </div>
    </div>
    <div id="susan">
      <div id="susan-photo" class="personal-photo"> <img src="@/assets/HeraLuna2.png"> </div>       
      <div class="likes">
        <h3 class="subhead">SUSAN</h3>
        Likes: Going on adventures with Hera and Luna
        </div>
    </div>
    <div id="aubrey">
      <div id="aubrey-photo" class="personal-photo"> <img src="@/assets/pngwing.com.png"> </div>       
      <div class="likes">
        <h3 class="subhead">AUBREY</h3>
        Likes: Chocolate and Slides
        </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
    Header: () => import('@/components/Header.vue'),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#desc{
	text-align: left;
	line-height: 1.6;
}

.personal-photo{
  margin-top: 50px;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

#kenslee, #susan, #aubrey {
    width: 300px;
    margin: 20px 20px 50px 20px;
    display: inline-block;
}

</style>

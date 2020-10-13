<template>
    <div class="nav">
		<ul>
				<a href="about.html">
			<li>
					ABOUT US
			</li>
				</a>
                <a href="sources.html">
            <li>
                SOURCES
            </li>
                </a>
		</ul>
    </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    height: 30%;
    text-align: left;
    width: 18%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0;
  padding: 2%;
  background-color: #1c4587ff;
  color: #ffffffff;
  text-align: center;
}
a {
    text-decoration: none;
    color: #ffffffff;
    font-weight: bold;
    font-size: 25px;
}

li:hover {
    background-color: #ff9900;
    color: #1c4587ff
}
</style>

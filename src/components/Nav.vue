<template>
    <div class="nav">
		<ul>
			<li>
				<a href="about.html">
					About Us
				</a>
			</li>
      <li>
        <a href="sources.html">
          Sources
        </a>
        </li>
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
    position: absolute;
    float: left;
    width: 20%;
    height: 30%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  width: 100%;
  height: 100%;
  background-color: #1c4587ff;
  color: #ffffffff;
}
a {
    text-decoration: none;
    color: #ffffffff;
    font-weight: bold;
    font-size: 100%;
}

li a:hover {
    color: #1c4587ff;
}

li:hover {
    background-color: #ff9900;
    color: #1c4587ff
}
</style>

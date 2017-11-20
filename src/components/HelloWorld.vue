<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <ul>
      <li><h2><a href="#/form-demo">Form Demo</a></h2></li>
    </ul>
    
    <ul>
      <li><h2><a href="#/video-demo">Video Demo</a></h2></li>
    </ul>

    <ul>
      <li><h2><a href="#/channel">Watch Channels</a></h2></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Demo App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>

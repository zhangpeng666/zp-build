<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'accumulateIndex' }">
          <a>
            问题积累-arm64内核解决nvm下载node的问题
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: 'Welcome to my app',

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

<template>
  <div class="hello">
    <vue-markdown>{{article}}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import article from './article.md';
export default {
  name: 'accumulate',
  components: {
      VueMarkdown
  },
  data () {
    return {
      msg: 'Welcome to my app',
      article,
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
img {
    width: 100px;
    height: 100px;
}
</style>

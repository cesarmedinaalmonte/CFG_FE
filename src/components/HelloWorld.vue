<template>
  <div>
      <h3>Listado de Escuelas</h3>
    <b-table striped hover :items="escuelas"></b-table>
  </div>
</template>

<script>

  import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: []
    }
  },
  methods: {
    ...mapActions(['getEscuelas'])
  },
  computed: {
    ...mapGetters(['escuelas'])
  },
  created(){
    console.log('created')
    this.getEscuelas()
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

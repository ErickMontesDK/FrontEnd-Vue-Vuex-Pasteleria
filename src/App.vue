<template>
  <Header/>
  
  <router-view/>
  <contact/>
  <footerd/>
  

</template>

<script>
import Header from '@/components/header.vue'
import contact from '@/components/contact.vue'
import footerd from '@/components/footer.vue'


export default {
  name: 'HomeView',
  components: {
    Header,contact,footerd
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
body{
  margin: 0px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <!--Esta es la plantilla de todas las paginas
  Los componentes aquí aparecen para todas las paginas, los cuales son-->
  <!--Componente de header-->
  <Header/>
  <!--Router view que muestra la info de las paginas-->
  <router-view/>
  <!--Componente de contacto-->
  <contact/>
  <!--Componente de footer-->
  <footerd/>
  

</template>

<script>
//Aqui se importan los componentes
import Header from '@/components/header.vue'
import contact from '@/components/contact.vue'
import footerd from '@/components/footer.vue'


export default {
  name: 'app',
  components: {
    //Componentes que se importan aqui, y se exportan a la plantilla de html index.html en carpeta public
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

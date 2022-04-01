<template>
<!--Aqui esta lo contenido en la pagina de inicio-->

<!--Aqui esta el componente de "Banner", donde se rellena con las variables para cambiar el banner-->
<!--src de la imagen, titulo, mensaje y texto del div con link a la tienda-->
  <banner 
  fondo='https://raw.githubusercontent.com/ErickMontesDK/Front-End-HTML-Pasteleria/main/Sources/Banners/Banner.png'
  title="Pasteles y postres para cada ocasión" 
  msg="Desde 2022, conservamos nuestras recetas caseras"
  btext="Ver productos"
  />

<!--Contenedor con texto-->
  <div class="mostrador">
    <div class="LosMas">
      <h2>Los favoritos</h2>
      <p>Los más buscados en este último mes</p>
      
    </div>
    <!--Contenedor-->
    <div class="LosMasContainer">
      <!--Aqui esta el componente "showindex", que muestra los productos que queremor "lucir" en el aparador-->
      <showIndex/>
    </div>
  </div>
  <div>
    <!--Aqui esta el componente "categorys", que muestra todas las categoria de productos que hay-->
    <category/>
  </div>


  
</template>

<script>
//Importa los componentes
import banner from '@/components/banner.vue'
import showIndex from '@/components/showindex.vue'
import category from '@/components/categorys.vue'



export default {
  //nombre de la view
  name: 'HomeView',

  components: {
    //componentes que se importaron e igual se exportaran a App.vue
    banner,
    showIndex,
    category
    
    } 
  }

</script>

<style scoped>
.mostrador{
  width: 100%;
  min-height: 600px;
  background-color: #ffe6e6;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");

  display: flex;
}
.LosMas{
  height: 100%;
  width:40%;
  

  display: flex;
  flex-direction: column;
  justify-content: center;}
.LosMas h2{
 color: #7031AF;
 font-size: 35px;
 font-style: italic;
}
.LosMas p{
  font-size: 20px;
  margin-top: 2px;
}
.LosMasContainer{
  width: 60%;
  height: 100%;
  

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width: 733px){
  .mostrador{
    flex-direction: column ;
    align-items: center;
  }
  .LosMas{
    width: 100%;
  }
  .LosMasContainer{
    width: 100%;
  }
  
}


</style>

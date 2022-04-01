<template>
<!--Aqui se muestra lo contenido en la pagina de Store/Tienda-->

<!--Aqui esta el componente "Banner" con los datos para personalizarlo-->
<!--src de la imagen, titulo, sin mensaje y sin div de acceso a tienda-->
  <banner 
  fondo='https://raw.githubusercontent.com/ErickMontesDK/Front-End-HTML-Pasteleria/main/Sources/Banners/tienda.png'
  title="Sabor para cada momento" 
  msg=""
  />
  <!--contenedor-->
  <div class="mostrador">

    <!--Esto solo aparece para la store. Muestra las categorias disponibles y cuantos sabores hay -->
    <!--Al darle click, ejecuta una funcion en state.mutations que oculta todas las categorias menos la seleccionada-->
    <!--Las funciones se explican más en el index de store-->
    <div class="navegador">

      <div class="products">
        <div class="deco1">Categorias</div>
        <div class="products">
          <ul >
            <li><div>
                <!--Esta funcion muestra todas las categorias-->
                <button @click="$store.commit('showAlle')"><span>Todos</span></button>
              </div></li>
            <li>
              <div>
                <!--Esta funcion muestra solo los pasteles-->
                <button @click="$store.commit('showPasteles')"><span>Pasteles</span><span>{{Categorys.Pasteles.Sabores.length}}</span></button>
              </div>
            </li>
            <li>
              <div>
                <!--Esta funcion muestra solo los pays-->
                <button @click="$store.commit('showPays')"><span>Pays</span><span>{{Categorys.Pays.Sabores.length}}</span></button>
              </div>
            </li>
            <li>
              <div>
                <!--Esta funcion muestra solo los brownies-->
                <button @click="$store.commit('showBrownies')"><span>Brownies</span><span>{{Categorys.Brownies.Sabores.length}}</span></button>
              </div>
            </li>
            <li>
              <div>
                <!--Esta funcion muestra solo las galletas-->
                <button @click="$store.commit('showGalletas')"><span>Galletas</span><span>{{Categorys.Galletas.Sabores.length}}</span></button>
              </div>
            </li>
            <li>
              <div>
                <!--Esta funcion muestra solo los muffins-->
                <button @click="$store.commit('showMuffins')"><span>Muffins</span><span>{{Categorys.Muffin.Sabores.length}}</span></button>
              </div>
            </li>
          </ul>

        </div>
      </div>

    </div>

    
    <!--contenedor-->
    <div class="showroom">
      <!--Aqui esta el componente "productView" que muestra todos los productos, los agrega a "un carrito" y envia el pedido-->
      <productView/>
    </div>

  </div>


  
</template>

<script>
//componentes importados
import banner from '@/components/banner.vue'
import productView from '@/components/productView.vue'


export default {
  //nombre de la view
  name: 'HomeView',
  components: {
    //componentes importados que se exportaran a App.vue
    banner,
    productView
    },
  computed:{
      Categorys(){
        return this.$store.state.Productos
      },
      
    },
    methods:{
      
    }
  
    
  }

</script>

<style scoped>
.mostrador{
  width: 100%;
  
  
  background-color: #ffe6e6;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");


  display: flex;
  

  
}
.navegador{
  width: 240px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-left: 20px;
  margin-top: 15px;
  margin-right: 10px;

  color: white;
  }
.navegador input{
  width:95%; height:25px;
}
.navegador button{
  width:100px; height:25px;
}
.showroom{
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
.deco1{
  background: #222222;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");

  
  height: 25px;
  
  display: flex;
  align-items: center;
  justify-content: center;
}
.products{
  width: 100%;
  
  background: #D76B7A;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.products li{
  text-align:left; 
}
.products li div button{
  display: flex;
  justify-content: space-between;
  
  background:transparent;
  border-width: 0px;
  width:95%;

  color: white;
  font-weight: bold;
  font-style: italic;
}
.products li div :hover{
  background: #222222;
  border-radius:7px;
}

@media screen and (max-width: 672px){
  .mostrador{
    flex-direction: column;
    align-items: center;
  }
}

</style>

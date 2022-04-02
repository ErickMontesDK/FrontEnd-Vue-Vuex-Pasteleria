import { createStore, storeKey } from 'vuex'

export default createStore({
  //aqui estan almacenados los datos de la tienda
  state: {
    //Datos de contacto
    Contacto:{direccion:"Calle Lerdo de Tejada #1600 Col.Los Andamios",
              ciudad:"Morelia, Mich.",
              facebook:"/PasteleriaPistrelo",
              telefono:'55444040'},

    //Aqui se almacenan los pedidos hechos en el formulario de la pagina Orden
    pedido:{},

    //Aqui se almacena el pedido hecho en el carrito de la tienda
    //cliente almacena los datos del cliente, pedido los productos que se quieren
    cart:{cliente:"",pedido:""},

    //Aqui estan los ingredientes que hay en la tienda. Maximo que debe haber, la existencia y la unidad
    Ingredientes:{
        Harina:{Total:20, Existencia:15, unit:"kg"},
        Leche:{Total:40, Existencia:25,unit:"lt"},
        Huevos:{Total:100, Existencia:53,unit:"uni"},
        Azucar:{Total:20, Existencia:17,unit:"kg"},
        Mantequilla:{Total:10, Existencia:7,unit:"kg"},
        PolvoHornear:{Total:10, Existencia:5,unit:"kg"},
        Sal:{Total:2, Existencia:1,unit:"kg"},
        Fondant:{Total:20,Existencia:10,unit:"kg"},
        Chantilly:{Total:10,Existencia:7,unit:"kg"},
        ExtractoVainilla:{Total:5, Existencia:4,unit:"kg"},
        Chocolate:{Total:5, Existencia:4,unit:"kg"},
        Cerezas:{Total:5, Existencia:4,unit:"kg"},
        Fresas:{Total:5, Existencia:4,unit:"kg"},
        Limon:{Total:5, Existencia:4,unit:"kg"},
        Naranja:{Total:5, Existencia:4,unit:"kg"},
        Arandano:{Total:5, Existencia:4,unit:"kg"},
        Nueces:{Total:5, Existencia:4,unit:"kg"},
        Almendras:{Total:5, Existencia:4,unit:"kg"},
        Platano:{Total:6, Existencia:2,unit:"kg"},
        Pasas:{Total:4, Existencia:3,unit:"kg"},
        Oreo:{Total:6, Existencia:3,unit:"kg"},
    },
    //Aqui estan almacenados los productos en venta
    Productos:{
      //Esto se repite para cada categoria de producto, solo se explicará con pasteles
      Pasteles:{
        //El estado determina si se muestra o no la categoria en la Tienda de la pagina
        Estado:true,
        //Aqui estan todos los sabores de una categoria disponibles
        Sabores:[
          //Aqui es una lista de objetos. 
          //Para cada sabor esta la key category del producto, el sabor,src es la ubicacion de la imagen y los precios variando el tamaño del pastel
          //la key "mostrador" es si se quiere que el producto aparezca en la pagina de inicio con el componente "showindex"
          //Esto solo si mostrador:true
          {category:"Pastel",sabor:"chocolate",mostrador:true, src:require("../assets/Productos/Pasteles/choco.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"vainilla",mostrador:false, src:require("../assets/Productos/Pasteles/vainilla.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"3 leches",mostrador:false,src:require("../assets/Productos/Pasteles/3leches.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"cajeta",mostrador:false, src:require("../assets/Productos/Pasteles/cajetacake.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"moka",mostrador:false, src:require("../assets/Productos/Pasteles/mokacake.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"zanahoria",mostrador:false, src:require("../assets/Productos/Pasteles/pastelzanahoria.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"piña",mostrador:true, src:require("../assets/Productos/Pasteles/piña.png"),
          precio:{chico:140,mediano:240,grande:320},},
          {category:"Pastel",sabor:"red velvet",mostrador:false, src:require("../assets/Productos/Pasteles/redvelvet.png"),
          precio:{chico:140,mediano:240,grande:320},},
        ]
      },
      Pays:{
        Estado:true,
        Sabores:[
            {category:"Pay",sabor:"frutos rojos",mostrador:false, src:require("../assets/Productos/Pays/frutos.png"),
            precio:{chico:40,mediano:60,grande:90},},
            {category:"Pay",sabor:"limon",mostrador:false, src:require("../assets/Productos/Pays/limonpay.png"),
            precio:{chico:50,mediano:70,grande:100},},
            {category:"Pay",sabor:"nuez",mostrador:false, src:require("../assets/Productos/Pays/nuez.png"),
            precio:{chico:45,mediano:65,grande:96},},
            {category:"Pay",sabor:"oreo",mostrador:true, src:require("../assets/Productos/Pays/oreo.png"),
            precio:{chico:45,mediano:65,grande:96},},
            {category:"Pay",sabor:"manzana",mostrador:false, src:require("../assets/Productos/Pays/paymanzana.png"),
            precio:{chico:40,mediano:60,grande:90},},
            {category:"Pay",sabor:"queso",mostrador:false, src:require("../assets/Productos/Pays/payqueso.png"),
            precio:{chico:40,mediano:60,grande:90},},
            {category:"Pay",sabor:"platano",mostrador:false, src:require("../assets/Productos/Pays/platano.png"),
            precio:{chico:50,mediano:70,grande:100},},
        ],
        Precios:{chico:140,mediano:240,grande:320}
      },
      Brownies:{
        Estado:true,
        Sabores:[
          {category:"Brownie",sabor:"almendra",mostrador:false, src:require("../assets/Productos/brownie/almendra.png"),
          precio:{'3pzs':30,'6pzs':55,'12pzs':100},},
          {category:"Brownie",sabor:"nuez",mostrador:false,src:require("../assets/Productos/brownie/nuez.png"),
          precio:{'3pzs':35,'6pzs':60,'12pzs':110},},
          {category:"Brownie",sabor:"oreo",mostrador:true, src:require("../assets/Productos/brownie/oreo.png"),
          precio:{'3pzs':40,'6pzs':75,'12pzs':125},},
        ]
      },
      Galletas:{
        Estado:true,
        Sabores:[
          {category:"Galleta",sabor:"almendra",mostrador:false, src:require("../assets/Productos/galletas/almendra.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Galleta",sabor:"arandano",mostrador:true,src:require("../assets/Productos/galletas/arandano.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Galleta",sabor:"avena chocolate",mostrador:false, src:require("../assets/Productos/galletas/avenachoc.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Galleta",sabor:"doble chocolate",mostrador:false,src:require("../assets/Productos/galletas/doblechoc.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Galleta",sabor:"polvorón",mostrador:false, src:require("../assets/Productos/galletas/polvoron.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},}, 
        ]
      },
      Muffin:{
        Estado:true,
        Sabores:[
          {category:"Muffin",sabor:"chocolate",mostrador:false, src:require("../assets/Productos/muffin/chocolat.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Muffin",sabor:"platano",mostrador:true, src:require("../assets/Productos/muffin/platano.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Muffin",sabor:"red velvet",mostrador:false, src:require("../assets/Productos/muffin/redv.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
          {category:"Muffin",sabor:"zanahoria",mostrador:false, src:require("../assets/Productos/muffin/zanahoria.png"),
          precio:{'3pzs':140,'6pzs':240,'12pzs':320},},
        ]
      }

    }
    
  },
  getters: {
    //las funciones "mostradorX" obtienen los productos que tienen la key mostrador:true
    //Cada funcion analiza una categoria en especifico
    //Envia los datos de estos sabores al componente "showindex"
    mostrador1(state){
    return state.Productos.Pasteles.Sabores.filter(producto => producto.mostrador);
    },
    mostrador2(state){
      return state.Productos.Pays.Sabores.filter(producto => producto.mostrador);
    },
    mostrador3(state){
      return state.Productos.Brownies.Sabores.filter(producto => producto.mostrador);
    },
    mostrador4(state){
      return state.Productos.Muffin.Sabores.filter(producto => producto.mostrador);
    },
    mostrador5(state){
      return state.Productos.Galletas.Sabores.filter(producto => producto.mostrador);
    },

    //Las funciones de precioXXXX reciben el sabor escogido del componente "formulario"
    //Recibe el sabor y busca los datos de ese sabor en especifico, luego envia los datos a 
    //componente de "formulario" para que el usuario pueda escoger el tamaño del producto
    precioPastel:(state) => (sabor) => {
      return state.Productos.Pasteles.Sabores.find(producto => producto.sabor===sabor);
    },
    precioPay:(state) => (sabor) => {
      return state.Productos.Pays.Sabores.find(producto => producto.sabor===sabor);
    },
    precioBrownie:(state) => (sabor) => {
      return state.Productos.Brownies.Sabores.find(producto => producto.sabor===sabor);
    },
    precioGalleta:(state) => (sabor) => {
      return state.Productos.Galletas.Sabores.find(producto => producto.sabor===sabor);
    },
    precioMuffin:(state) => (sabor) => {
      return state.Productos.Muffin.Sabores.find(producto => producto.sabor===sabor);
    },
    
  },
  mutations: {
    //Las funciones show sirven para ocultar las categorias y solo mostrar la que escogió el usuario
    //Cambia la key Estado que esta para cada categoria a false
    //Cuando Estado:false, no aparecen en el componente productView
    //la funcion showAlle hace que todas las categorias aparezcan de nuevo
    showAlle(state){
      state.Productos.Pasteles.Estado =true, state.Productos.Pays.Estado =true, state.Productos.Brownies.Estado =true, state.Productos.Galletas.Estado =true, state.Productos.Muffin.Estado =true
    },
    showPasteles(state){
      state.Productos.Pasteles.Estado =true, state.Productos.Pays.Estado =false, state.Productos.Brownies.Estado =false, state.Productos.Galletas.Estado =false, state.Productos.Muffin.Estado =false
    },
    showPays(state){
      state.Productos.Pasteles.Estado =false, state.Productos.Pays.Estado =true, state.Productos.Brownies.Estado =false, state.Productos.Galletas.Estado =false, state.Productos.Muffin.Estado =false
    },
    showBrownies(state){
      state.Productos.Pasteles.Estado =false, state.Productos.Pays.Estado =false, state.Productos.Brownies.Estado =true, state.Productos.Galletas.Estado =false, state.Productos.Muffin.Estado =false
    },
    showGalletas(state){
      state.Productos.Pasteles.Estado =false, state.Productos.Pays.Estado =false, state.Productos.Brownies.Estado =false, state.Productos.Galletas.Estado =true, state.Productos.Muffin.Estado =false
    },
    showMuffins(state){
      state.Productos.Pasteles.Estado =false, state.Productos.Pays.Estado =false, state.Productos.Brownies.Estado =false, state.Productos.Galletas.Estado =false, state.Productos.Muffin.Estado =true
    },

    //"agregaPedido recibe la variable "pedido" del componente "formulario", y manda este valor a la variable "pedido" que esta
    //en store.state
    //Ya almacenada ahi, el componente "pedido.vue" puede leerla y mostrarla 
    agregarPedido(state,pedido){
      state.pedido=pedido;
    },
    
    //"agregaCart" recibe la variable "pedido" e "info" del componente "productView", y manda este valor a la variable "Cart" que esta 
    //en store.state en las keys cliente y pedido
    //Ya almacenada ahi, el componente "pedido.vue" puede leerla y mostrarla 
    agregarCart(state,{info,pedido}){
      state.cart.cliente=info;
      state.cart.pedido=pedido;
      
    }

  },
  actions: {
    
  },
  modules: {
  }
})

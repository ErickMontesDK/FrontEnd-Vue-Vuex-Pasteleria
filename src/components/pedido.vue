<template>
    <!--Este componente muestra todos los pedidos recibidos ya sea en la Store o en el formulario-->
        <!--Contenedor-->
        <div class="board">
            <h3>Pedidos recibidos</h3>

            <!--Con el ciclo v-for se repite para cada pedido del formulario-->
            <!--pedido es una lista con objetos que almacena todas las variables de cada pedido-->
            <!--Fue creada por el componente formulario, enviada al state.store y recuperada aquí
            En script se llama a los datos en pedido, con Pedidos()-->
            <div v-for="(producto,index) in Pedidos" v-bind:key="pedido">
                <!--Con v-if, la info aparece siempre y cuando en el pedido este escrito el nombre del cliente-->
                <div class="listPedidos" v-if="producto.nombre">
                  <ul>
                      <span>Pedido numero {{index}}</span>
                      <!--Aqui van todos los datos del pedido. Mismo codigo que en el componente formulario-->
                    <li v-if="producto.CantPastel"><span>{{producto.CantPastel}}x</span> Pastel <span>{{producto.tamañoPastel}} de </span>
                    <span> sabor {{producto.saborPastel}}</span><span v-if="producto.saborPastel2"> con {{producto.saborPastel2}}</span>
                    <span v-if="producto.fondant"> decorado con fondant <span v-if="producto.chantilly">y chantilly</span></span><span v-else-if="producto.chantilly"> decorado con chantilly</span><br>
                    <span  v-if="producto.dedicatoria">con inscripción: {{producto.dedicatoria}}</span>
                    </li>
                    <li v-if="producto.CantPay"><span>{{producto.CantPay}}x</span><span>Pay {{producto.tamañoPay}}</span><span> de {{producto.saborPay}}</span></li>
                    <li v-if="producto.CantMuffin"><span>{{producto.CantMuffin}}x</span><span>Muffin {{producto.tamañoMuffin}}</span><span> de {{producto.saborMuffin}}</span></li>
                    <li v-if="producto.CantBrownie"><span>{{producto.CantBrownie}}x</span><span>Brownie {{producto.tamañoBrownie}}</span><span> de {{producto.saborBrownie}}</span></li>
                    <li v-if="producto.CantGalleta"><span>{{producto.CantGalleta}}x</span><span>Galletas {{producto.tamañoGalleta}}</span><span> de 
                    {{producto.saborGalleta}}</span></li>
                    <hr>
                    <!--Aqui van los datos del cliente-->
                    <span>Datos de compra:</span>
                    <li v-if="producto.nombre">*Pedido a nombre de {{producto.nombre}}</li>
                    <li v-if="producto.correo">*Correo: {{producto.correo}}</li>
                    <li v-if="producto.tel">*Teléfono: {{producto.tel}}</li>
                  </ul>
                </div>
            </div>
            
            <!--Aqui van los datos de los pedidos hechos en la tienda-->
            <!--La variable Cart es creada en el componenten productView, luego es enviada a store.state
            y aqui se recupera la informacion-->
            <!--Quien recupera la info es en la parte de script con Cart()-->
            <!--Solo aparece siempre y cuando en Cart esten los datos del cliente-->
            <div class="listPedidos" v-if="Cart.cliente">

                <ol>
                    <span>Pedido de store con</span><br>
                    <!--Muestra cantidad de articulos-->
                    <span>{{Cart.pedido.length}} artículos:</span><br>
                    <!--La variable Cart es un objeto que posee la key de pedido, donde estan todos los productos
                    agregados por el usuario, y la key cliente que almacena los datos del cliente-->
                    <!--Esto se repite para cada objeto (articulo) en Cart.pedido-->
                    <li v-for="producto in Cart.pedido">

                        <!--Muestra la info de cada producto en Cart.pedido-->
                        <span v-for="category in producto" ><span v-if="category.categoria">{{category.categoria}} de {{category.sabor}} tamaño {{category.tamaño}}</span></span>
                        
                    </li>
                </ol>
                    <hr>
                <ul>
                    <li>
                        <!--Muestra los datos del cliente en Cart.cliente-->
                        <span v-if="Cart.cliente.nombre">*A nombre de {{Cart.cliente.nombre}}</span><br>
                        <span v-if="Cart.cliente.correo">*Correo:<br>{{Cart.cliente.correo}}</span><br>
                        <span v-if="Cart.cliente.tel">*Telefono:{{Cart.cliente.tel}}</span>
                    </li>

                </ul>
            </div>

        </div>
    
</template>

<script>
export default {
    //nombre del componente
    name:"pedidoInfo",

    computed:{
        //Esto llama a los datos de store.state, para pedido y cart
        Pedidos(){return this.$store.state.pedido},
        Cart(){return this.$store.state.cart}
    }
}
</script>

<style scoped>
*{
    color: whitesmoke;
}

.board{
    
    background: rgba(00, 00, 00, .7);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
}
.board h3{
    width: 100%;
}
.listPedidos{
    min-height: 100px;
    width: 270px;
    background: #AC4C57;
    border:2px solid white;
    border-radius: 10px;
    margin: 5px 10px 5px 10px;
}

@media screen and (max-width:607px){
    .board{
        justify-content: center;
    }
}

</style>

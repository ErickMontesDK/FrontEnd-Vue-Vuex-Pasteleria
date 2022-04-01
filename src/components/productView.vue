<template>
<!--Este componente muestra todos los productos de la tienda, permite agregarlo a un carrito, te muestra la info y envia los datos
a store.state-->
    <!--Container de todo-->
    <div class="allemos">
        <!--Aqui se muestra la informacion de los productos agregados al carrito, siempre y cuando haya algo agregado-->
        <div class="cart" v-if="pedido[0]">
            <h3>Carrito de compras</h3>

            <ol>
                <!--Se repite para cada producto agregado. 
                Muestra la info seleccionada. Los productos se almacenan en la variable pedido, que solo trabaja localmente-->
                <!--pedido aqui no tiene que ver con la variable del formulario-->
                <li v-for="producto in pedido">{{producto.producto.categoria}} {{producto.producto.tamaño}} de {{producto.producto.sabor}} =${{producto.producto.precio}}</li>
                
            </ol>
            <!--Aquii se muestran los datos del cliente solo cuando ya se hayan rellenado los inputs-->
            <span v-if="nombre">Pedido a nombre de: {{nombre}}</span>
            <span v-if="tel">Teléfono: {{tel}}</span>
            <span v-if="correo">Correo electrónico: {{correo}}</span>

            <!--Este form posee los inputs de los datos del usuario
            Una vez enviado el boton submit, envia todos los datos del pedido y usuario en la variable Cart al store.state
            mediante la funcion agregarCart que esta en store.mutations-->
            <form @submit.prevent="agregarDatos">
                <div class="forms">
                    <!--Inputs con datos de cliente-->
                    <span v-if="!nombre">Nombre: <input type="text" id="nombre" name="nombre" placeholder="Nombre Apellido" v-model="nombre" required><br></span>
                    <span v-if="!tel">Telefono <input type="text" id="tel" name="tel" placeholder="Celular" maxlength="10" v-model="tel" required><br></span>
                    <span v-if="!correo">Correo <input type="text" id="correo" name="correo" placeholder="E-mail" v-model="correo" required></span>
                </div >
                
                
                <span >
                    <!--El boton de enviar envio aparece solo si ya se rellenaron los datos del cliente y el carro no esta vacio-->
                    <span v-if="!Cart[Cart.length-1]">
                        <span v-if="correo">
                            <span v-if="tel">
                                <span v-if="nombre">
                                    <!--llama a la funcion agregarCart en store.mutations, y envia el pedido-->
                                    <button type="submit" @click="$store.commit('agregarCart',pedido)" onclick="alert('Su orden fue enviada. Espere su confirmación en su correo');">Mandar datos</button>
                                </span>
                            </span>
                        </span>
                    </span>
                    <!--Cuando ya se haya enviado el pedido y este almacenado en la variable Cart en store.state, entonces aparece esta opcion-->
                    <!--Recarga la pagina para borrar el carro y poder enviar otro-->
                    <!--A diferencia del formulario, aqui solo se puede enviar un pedido y ya-->
                    <span v-if="Cart[Cart.length-1]"><input type="button" value="Hacer nuevo pedido" onclick="location.reload()"/></span>
                </span>
            </form>
            
        </div>
        <!--Aqui se muestran todos los productos-->
        <!--Crea un container para cada categoria de productos-->
        <!--Se repite por el ciclo v-for-->
        <div class="mostrador" v-for="Category in Productos" >

            <!--Cada categoria de producto tiene un estado booleano en store.state
            Si es true, aparece en la pagina. Si es false, no aparece
            En el index de store se explica mejor-->
            <div class="alle" v-if="Category.Estado" >
                <div  class="indarreng">

                    <!--COntenedor con la info de cada sabor de cada categoria de producto-->
                    <!--Se repite para cada sabor por el ciclo v-for-->
                    <div class="card" v-for='sabor in Category.Sabores'>

                        <!--Muestra la imagen del producto. La src esta almacenada en el store.state-->
                        <img :src="sabor.src">

                        <div class="info">
                            <!--Muestra la categoria y sabor-->
                            <span>{{sabor.category}} de {{sabor.sabor}} </span>

                            <!--Es la form del pedido. Al darle al boton de submit, llama la funcion "agregaPedido" que esta en
                            la parte de script. Ahi si explica mas-->
                            <form @submit.prevent="agregarPedido">
                                <span>

                                    <!--Input del tamaño del producto. Muestra el precio de cada producto dependiendo el sabor escogido-->
                                    <!--El tamaño seleccionado se almacena en v-model="(producto)"-->
                                    <select id="producto" v-model="(producto)">
                                        <option :value="{categoria:sabor.category,sabor:sabor.sabor,tamaño:index,precio:dinero}" v-for="(dinero,index) in sabor.precio">{{index}}<span> ${{dinero}}</span></option>
                                    </select>
                                    <!--Submit del form-->
                                    <button type="submit">Agregar</button>
                                </span>
                            </form>
                        </div>
                     </div>   
                </div>
            </div>
        
        </div >
    </div>
    
</template>

<script>
export default {
    //nombre del componente
    name:"productView",
    data(){
        return{
            //variables de los input
            producto:'',

            nombre:'',
            tel:'',
            correo:'',
            //aqui se almacena cada producto agregado al carrito, y luego se envia al store.state dentro de la variable cart
            pedido:[],
        }   
    },
    
    computed:{
        //llama a los datos en store.state. 
        //Produtos muestra los datos de todos los productos a la venta
        Productos(){return this.$store.state.Productos},
        //Cart regresa la informacion del pedido ya una vez enviada al store
        Cart(){return this.$store.state.cart},



    },
    methods:{
        //Esta funcion agrega el producto seleccionado a la variable pedido
        agregarPedido(){
      var data= {
          //la info con la info del producto agregado lo mete dentro de esta nueva variable
          producto:this.producto,

            };
            //mete la variable anterior a la variable de pedido, para recopilar todos los productos agregados
            this.pedido.push(data);
            //limpia la variable del producto agregado, para poder meter ahi el nuevo producto a agregar al carro
            this.producto='';
        },
        //Esta funcion agrega la info del cliente a la variable de pedido
        agregarDatos(){
            var data={
                //mete la info del cliente a estas nuevas variables
                nombre:this.nombre,
                tel:this.tel,
                correo:this.correo,
            };
            //la info en las nuevas variables de arriba las agrega a la variable de pedido
            this.pedido.push(data);
            //limpia las variables de los inputs de los datos
            this.nombre='';
            this.tel='';
            this.correo='';
        }
        

    },
    
    
}



</script>

<style scoped>
.allemos{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cart{
    width: 50%;
    background: #FFBCBC;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 0px 15px 15px;

}
.cart button{
    width: 200px;
}
.mostrador{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.alle{
    width: 93%;
    background: rgba(00, 00, 00, .3);
    margin: 10px;
    border-radius: 20px;
    border: 3px solid black;
}
.indarreng{
    width:100%;
    display: flex;
    flex-wrap: wrap ;
    justify-content: center;
}
.card{
    width: 200px;
    height: 200px;
    background-color: #A9D585;

    color: white;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 10px;
    margin: 10px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.card img:hover{
    width:90%; height:100%;
}
.forms{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.alle .card:nth-of-type(3n+2){
    background-color: #FFBCBC;
}
.alle .card:nth-of-type(3n+3){
    background-color: #B5EAEA;
}
.card img{
    height: 70%;
    width: 80%;
}
.card .info{
    width: 100%;
    height: 50px;
    background: rgba(00, 00, 00, .5);
    display: flex;
    flex-direction: column;
    justify-content: center;

}
</style>

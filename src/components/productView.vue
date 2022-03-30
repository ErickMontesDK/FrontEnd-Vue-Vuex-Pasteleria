<template>
    <div class="allemos">
        <div class="cart" v-if="pedido[0]">
            <h3>Carrito de compras</h3>
            <ol>
                <li v-for="producto in pedido">{{producto.producto.categoria}} {{producto.producto.tamaño}} de {{producto.producto.sabor}} =${{producto.producto.precio}}</li>
                
            </ol>
            <span v-if="nombre">Pedido a nombre de: {{nombre}}</span>
            <span v-if="tel">Teléfono: {{tel}}</span>
            <span v-if="correo">Correo electrónico: {{correo}}</span>
            <form @submit.prevent="agregarDatos">
                <div class="forms">
                    <span v-if="!nombre">Nombre: <input type="text" id="nombre" name="nombre" placeholder="Nombre Apellido" v-model="nombre" required><br></span>
                    <span v-if="!tel">Telefono <input type="text" id="tel" name="tel" placeholder="Celular" maxlength="10" v-model="tel" required><br></span>
                    <span v-if="!correo">Correo <input type="text" id="correo" name="correo" placeholder="E-mail" v-model="correo" required></span>
                </div >
                
                
                <span >
                    <span v-if="!Cart[Cart.length-1]">
                        <span v-if="correo">
                            <span v-if="tel">
                                <span v-if="nombre">
                                    <button type="submit" @click="$store.commit('agregarCart',pedido)" onclick="alert('Su orden fue enviada. Espere su confirmación en su correo');">Mandar datos</button>
                                </span>
                            </span>
                        </span>
                    </span>
                    <span v-if="Cart[Cart.length-1]"><input type="button" value="Hacer nuevo pedido" onclick="location.reload()"/></span>
                </span>
            </form>
            
        </div>
        <div class="mostrador" v-for="Category in Productos" >
            <div class="alle" v-if="Category.Estado" >
                <div  class="indarreng">
                    <div class="card" v-for='sabor in Category.Sabores'>
                        <img :src="sabor.src">
                        <div class="info">
                            <span>{{sabor.category}} de {{sabor.sabor}} </span>
                            <form @submit.prevent="agregarPedido">
                                <span>
                                    <select id="producto" v-model="(producto)">
                                        <option :value="{categoria:sabor.category,sabor:sabor.sabor,tamaño:index,precio:dinero}" v-for="(dinero,index) in sabor.precio">{{index}}<span> ${{dinero}}</span></option>
                                    </select>
                                    
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
    name:"productView",
    data(){
        return{
            producto:'',

            nombre:'',
            tel:'',
            correo:'',

            pedido:[],
        }   
    },
    
    computed:{
        Productos(){return this.$store.state.Productos},
        Cart(){return this.$store.state.cart},



    },
    methods:{
        agregarPedido(){
      var data= {
          producto:this.producto,

            };
            this.pedido.push(data);
            this.producto='';
        },
        agregarDatos(){
            var data={
                nombre:this.nombre,
                tel:this.tel,
                correo:this.correo,
            };
            this.pedido.push(data);
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
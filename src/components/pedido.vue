<template>
    
        <div class="board">
            <h3>Pedidos recibidos</h3>
            <div v-for="(producto,index) in Pedidos" v-bind:key="pedido">
                <div class="listPedidos" v-if="producto.nombre">
                  <ul>
                      <span>Pedido numero {{index}}</span>
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
                    <span>Datos de compra:</span>
                    <li v-if="producto.nombre">*Pedido a nombre de {{producto.nombre}}</li>
                    <li v-if="producto.correo">*Correo: {{producto.correo}}</li>
                    <li v-if="producto.tel">*Teléfono: {{producto.tel}}</li>
                  </ul>
                </div>
            </div>
            

            <div class="listPedidos" v-if="Cart[0]">

                <ul>
                    <span>Pedido de store con</span><br>
                    <span>{{Cart.length-1}} artículos:</span><br>
                    <li v-for="producto in Cart">
                        <span v-for="category in producto" ><span v-if="category.categoria">{{category.categoria}} de {{category.sabor}} tamaño {{category.tamaño}}</span></span>
                        
                        <span v-if="producto.nombre"><hr>*A nombre de {{producto.nombre}}</span><br>
                        <span v-if="producto.correo">*Correo:<br>{{producto.correo}}</span><br>
                        <span v-if="producto.tel">*Telefono:{{producto.tel}}</span>
                    </li>
                </ul>
            </div>

        </div>
    
</template>

<script>
export default {
    name:"pedidoInfo",
    computed:{
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
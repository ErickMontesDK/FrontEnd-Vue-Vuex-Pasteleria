<template>
<!--Este componente muestra las cantidades que hay de cada producto-->
    <!--Div contenedor-->
    <div class="inv">
        <h3>Inventario</h3>
        <!--Div con toda la info-->
        <div class="ingredientes">
            <!--Este div se usa para todos los ingredientes-->
            <!--Con el ciclo v-for, repite este div para cada ingrediente que este en store.state-->
            <div v-for="(ingrediente,index) in Ingred">

                <div class="card">
                    <!--Index es el nombre de la key-->
                    <span>{{index}}</span>
                    <!--unit es la unidad de medida del producto-->
                    <!--Existencia es el la cantidad de producto que hay-->
                    <!--Total es el maximo de deberia haber en bodega-->
                    <div><span>0{{ingrediente.unit}} </span><progress :value="ingrediente.Existencia" :max="ingrediente.Total">{{ingrediente.Existencia}}%</progress><span> {{ingrediente.Total}}{{ingrediente.unit}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"inventario",
    computed:{
        //llama a los datos en store.state
        Ingred(){return this.$store.state.Ingredientes},
        
    }
}
</script>

<style scoped>
.inv{
    width: 100%;
    background: rgba(00, 00, 00, .7);

    color: whitesmoke;    
}
h3{
    margin: 0px 0px 10px 0px;
}
.ingredientes{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card{
    height: 60px;
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
    border: 3px solid white;
}
.card div span{
    font-size: 12px;
    margin: 0px 2px 0px 2px;
}

@media screen and (max-width:491px){
    .ingredientes{
        justify-content: center;
    }
}
</style>

<template>
<!--Este componente muestra los productos que nosotros querramos en la pagina principal-->
    <!--Contenedor con todos los productos a mostrar-->
    <div class="mostrador"  >
            
                <div  class="indarreng">
                    <!--Esto se repite para cada categoria de producto-->
                    <!--Se podria hacer con un ciclo v-for, pero para cada categoria tenia que agregar el llamar a una funcion
                    en especifico ubicada en store.mutations-->
                    <!--Estas funciones se encargan de ocultar productos en la store dependiendo de que se seleccione-->

                    <!--La info viene de los datos en script, aqui es por Mostrador1, que muestra la info de los pasteles-->
                    <!--Llama a la funcion @click="$store.commit('showPasteles')", que oculta todo los productos en 
                    la Tienda excepto los pasteles-->
                    <div class="card" v-for="Category in Mostrador1" @click="$store.commit('showPasteles')">
                        <!--Aqui va el link hacia la tienda, ya mostrando solo los pasteles-->
                        <router-link to="/Store">
                            <!--Muestra la imagen del producto-->
                            <img :src="Category.src">
                            </router-link>
                            <div class="info">
                                <!--Muestra la categoria y el sabor -->
                                <span>{{Category.category}} de {{Category.sabor}} </span>
                                
                            </div>
                    <!--Se repite lo mismo con las demas categorias-->


                    </div>
                    <div class="card" v-for="Category in Mostrador2" @click="$store.commit('showPays')">
                        <router-link to="/Store">
                            <img :src="Category.src">
                            </router-link>
                            <div class="info">
                                <span>{{Category.category}} de {{Category.sabor}} </span>
                                
                            </div>
                        
                    </div>
                    <div class="card" v-for="Category in Mostrador3" @click="$store.commit('showBrownies')">
                        <router-link to="/Store">
                            <img :src="Category.src">
                            </router-link>
                            <div class="info">
                                <span>{{Category.category}} de {{Category.sabor}} </span>
                                
                            </div>
                        
                    </div>
                    <div class="card" v-for="Category in Mostrador4" @click="$store.commit('showGalletas')">
                        <router-link to="/Store">
                            <img :src="Category.src">
                            </router-link>
                            <div class="info">
                                <span>{{Category.category}} de {{Category.sabor}} </span>
                                
                            </div>
                        
                    </div>
                    <div class="card" v-for="Category in Mostrador5" @click="$store.commit('showMuffins')">
                        <router-link to="/Store">
                            <img :src="Category.src">
                            </router-link>
                            <div class="info">
                                <span>{{Category.category}} de {{Category.sabor}} </span>
                                
                            </div>
                        
                    </div>
                        
                    
                    
                </div>
            
        
        </div >
</template>

<script>
export default {
    name:"showIndex",
    
    computed:{
        //Aqui se obtienen los datos para cada categoria. Estos llaman a las funciones en store.getters.
        //Cada sabor en cada categoria se puede selecionar para mostrarse al inicio de la pagina
        //Las funciones en getters filtran cuales son las que se seleccionaron para mostrar
        //Aqui se llaman a los datos de solo las que se seleccionaron para cada categoria
        //Se explica más en store.getters
        Mostrador1(){
            return this.$store.getters.mostrador1},
        Mostrador2(){
            return this.$store.getters.mostrador2},
        Mostrador3(){
            return this.$store.getters.mostrador3},
        Mostrador4(){
            return this.$store.getters.mostrador4},
        Mostrador5(){
            return this.$store.getters.mostrador5},

    },
}
</script>

<style scoped>

*{
    text-decoration: none;
    color:whitesmoke;
}
.mostrador{
    width: 100%;
    height: 100%;
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
    justify-content: space-around;
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

.indarreng .card:nth-of-type(3n+2){
    background-color: #FFBCBC;
}
.indarreng .card:nth-of-type(3n+3){
    background-color: #B5EAEA;
}

.card img{
    height: 80%;
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

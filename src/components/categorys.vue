<template>
<!--Este elemento muestra todas las categorias de productos, conteniendo un link que los envia a la
tienda con la categoria seleccionada-->
    <div class="deco1"><!--Decoracion antes de la seccion/Separador-->
        <div>Nuestros productos</div>
    </div>

    <!--Contenedor-->
    <div class="mostrador"  >
            
                <div  class="indarreng">
                    <!--El siguiente formato se repite para cada categoria-->
                    <!--Primero es el enlace a la tienda-->
                    <!--@click llama a la función showPasteles que esta en store.mutations-->
                    <router-link to="/Store" @click="$store.commit('showPasteles')">
                        <!--Este es el contenedor de cada producto. Muestra imagen y nombre-->
                        <div class="card" >
                            <!--Selecciona la imagen del primer producto almacenado en la categoria-->
                            <!--Datos en store.state-->
                            <img :src="Productos.Pasteles.Sabores[0].src">
                            <div class="info">
                                <!--Nombre de la categoria-->
                                <span>{{Productos.Pasteles.Sabores[0].category}}</span>
                                
                            </div>
                        </div>  
                    </router-link>   

                    <!--Aqui es lo mismo, solo cambia dependiendo de la categoria-->
<!--Con un ciclo v-for se podria hacer en automatico este proceso, excepto que no supe como automatizar cada
función @click="store.commit(xxxx)". La forma mas practica fue repetir el codigo para cada categoria-->

                    <router-link to="/Store" @click="$store.commit('showPays')">
                        <div class="card" >
                            <img :src="Productos.Pays.Sabores[0].src">
                            <div class="info">
                                <span>{{Productos.Pays.Sabores[0].category}} de {{Productos.Pasteles.Sabores[0].sabor}}</span>
                                
                            </div>
                        </div>  
                    </router-link> 

                    <router-link to="/Store" @click="$store.commit('showBrownies')">
                        <div class="card" >
                            <img :src="Productos.Brownies.Sabores[0].src">
                            <div class="info">
                                <span>{{Productos.Brownies.Sabores[0].category}} de {{Productos.Pasteles.Sabores[0].sabor}}</span>
                                
                            </div>
                        </div>  
                    </router-link> 

                    <router-link to="/Store" @click="$store.commit('showGalletas')">
                        <div class="card" >
                            <img :src="Productos.Galletas.Sabores[0].src">
                            <div class="info">
                                <span>{{Productos.Galletas.Sabores[0].category}} de {{Productos.Pasteles.Sabores[0].sabor}}</span>
                                
                            </div>
                        </div>  
                    </router-link>       

                    <router-link to="/Store" @click="$store.commit('showMuffins')">
                        <div class="card" >
                            <img :src="Productos.Muffin.Sabores[0].src">
                            <div class="info">
                                <span>{{Productos.Muffin.Sabores[0].category}} de {{Productos.Pasteles.Sabores[0].sabor}}</span>
                                
                            </div>
                        </div>  
                    </router-link> 
                </div>
            
        
        </div >
</template>

<script>
export default {
    //nombre del componente
    name:"category",
    
    computed:{
        //aqui se obtienen todos los datos de los productos almacenados en store.state
        Productos(){return this.$store.state.Productos},
        
    },
}
</script>

<style scoped>
*{
    text-decoration: none;
    color:whitesmoke;
}
.deco1{
background-color: #D44D5C;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");

    color: whitesmoke;
     font-size: 35px;
    font-style: italic;

    display: flex;
    justify-content: center;
}
.deco1 div{
      height: 100%;
      width: 350px;
    background-color: #222222;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23ffffff' fill-opacity='.07' fill-rule='evenodd'/%3E%3C/svg%3E");


}

.mostrador{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(00, 00, 00, .5);
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23ffffff' fill-opacity='.3' fill-rule='evenodd'/%3E%3C/svg%3E");

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
    width: 400px;
    height: 200px;
    background-color: #B5EAEA;

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

.forms{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}



.card img{
    height: 70%;
    
}
.card img:hover{
     height:90%;
}
.card .info{
    width: 100%;
    height: 50px;
    background: rgba(00, 00, 00, .5);
    display: flex;
    flex-direction: column;
    justify-content: center;

}

@media screen and (max-width: 430px){
    .card{
        width:300px;
    }
    
}
</style>

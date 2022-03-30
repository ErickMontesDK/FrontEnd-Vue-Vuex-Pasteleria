<template>

    <div class="mostrador"  >
            
                <div  class="indarreng">
                    
                    <div class="card" v-for="Category in Mostrador1" @click="$store.commit('showPasteles')">
                        <router-link to="/Store">
                            <img :src="Category.src">
                            </router-link>
                            <div class="info">
                                <span>{{Category.category}} de {{Category.sabor}} </span>
                                
                            </div>
                        
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
        Productos(){return this.$store.state.Productos},
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
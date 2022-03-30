<template>
    <section class="header">
      <div class="headerBlack"></div>
      <div class="headerBlack"></div>
      <div class="headerBlack"></div>
      <div class="headerBlack"></div>
      
      <div class="containerHead">
        <router-link to="/">Inicio</router-link> 
        <router-link to="/Store">Tienda</router-link> 
        
          
      </div>
      <div class="containerHead">
          
        <router-link to="/Orden">Orden</router-link>  
          
        <router-link to="/Admin">Admin</router-link> 
      </div>
      <div class="imgblank"><img src="../assets/logo.jpg"></div>
      
    </section>
</template>


<script>
export default {
    name:"Header"
}
</script>



<style scoped>

*{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  font-weight: 600;
  color: #222222;
}

.header{
  position: relative;
  top: 20px;
  left: 0%;

  width: 100%;
  height: 61px;
  background: #d44d5c;

  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: 27% auto 27% ;
  grid-template-areas:
  'deco1 logo deco2'
  'cont1 logo cont2'
  'deco3 logo deco4';

  margin-bottom: 45px ;
}
.headerBlack{
  width: 100%;
  height: 100%;
  background: #222222;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");

}
.header .headerBlack:nth-child(1){
  grid-area: deco1;
  
}
.header .headerBlack:nth-child(2){
  grid-area: deco2;
  
}
.header .headerBlack:nth-child(3){
  grid-area: deco3;
  
}
.header .headerBlack:nth-child(4){
  grid-area: deco4;
  
}
.containerHead{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent; 
}
.header .containerHead:nth-child(5){
  grid-area: cont1;
  
}
.header .containerHead:nth-child(6){
  grid-area: cont2;
}

.imgblank{
  position: relative;
    height: 61px;
    grid-area: logo;
}
.imgblank img{
  position: absolute;
  width: 100%;
  left: 50%;
  top: -15px;
  transform: translate(-50%,0);
}
.search{
  display: flex;
}
.search input{
  width: 100px;
  border-radius: 5px;
  border-width: 0px;
}

@media screen and (max-width: 779px) {
  .header{
    
    grid-template-columns: 1fr auto 1fr;
  }
  .imgblank{
    width: 152px;
  }
  
}
@media screen and (max-width:430px){
  .imgblank{
    width:100px;
    
  }
  .imgblank img{
    top:0%;
  }
  .header{
    grid-template-areas:
  'deco1 deco1 deco2'
  'cont1 logo cont2'
  'deco3 logo deco4';
  }
}
</style>
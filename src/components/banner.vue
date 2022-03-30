<template>
    <div class="banner">
      <img :src="fondo">
        <h1 >{{title}}</h1>
        <p >{{msg}}</p>
        
        <div class="banbutton" v-if="btext"><router-link to="/Store">{{btext}}</router-link></div>
        
        
    </div>
  <div class="deco1"></div>
  <div class="deco2"></div>
</template>

<script>
export default {
    name:"banner",
    props: {
    title: String,
    msg: String,
    fondo: String,
    btext:String,
    
  }
    
  }


</script>

<style scoped>
*{
  text-decoration: none;
  color: white;
}
h1{
  background: rgba(22, 22, 22, .7);
  font-style: italic;
}
.banner{
  width: 100%;
  height: 450px;
  background: #222222;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-size: large;
  

  position: relative;
  
}
.banner .banbutton{
  width: 180px;
  height: 50px;
  border-radius: 10px;
  border: 0px;
  background: rgba(212, 77, 92, .9);

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: large;
  font-weight: bold;
  z-index: 1;

}
.banner h1{
  margin-top: 90px;
  z-index: 1;

}
.banner p{
  z-index: 1;
}
.deco1{
  width: 100%;
  height: 20px;
  background: #C64A58;
  
  
  
}
.deco2{
  width: 100%;
  height: 30px;
  background: #222222;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  
  
}
.banner img{
  position: absolute;
  width: 100%;
  height:100%;
  z-index: 0;
  overflow: hidden;
}

</style>
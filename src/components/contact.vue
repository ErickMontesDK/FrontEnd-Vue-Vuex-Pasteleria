<template>
<div class="saborea">
    <div class="deco1"></div>
    <span>Saborea la vida</span>
    <div class="deco1"></div>
</div>
  <div class="container">
      <div>
          <h3>CONTÁCTANOS</h3>
          <div class="text">
              <div>
                  <span>Escribenos por inbox a</span><span><img src="../assets/Icons/icons8-facebook-messenger-100.png" >{{contacto.facebook}}</span>
              </div>
              <div>
                  <span>O llamanos al</span><span><img src="../assets/Icons/icons8-mensaje-de-telefono-100.png">{{contacto.telefono}}</span>
              </div>
          </div>
      </div>
      <div class="ubicacion">
          <span>Ubicados en {{contacto.direccion}}</span>
          <span>{{contacto.ciudad}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"contact",
    computed:{
        contacto(){
            return this.$store.state.Contacto
            
        }
    },
}
</script>

<style scoped>
.container{
    width: 100%;
    
    background: #222222;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: whitesmoke;
    position: relative;
    padding: 10px 0px 20px 0px;
}
.container h3{
    margin: 5px;
    font-size: 25px;
}
.container img{
    height: 35px;
}
.text{
    display: flex;
}
.text div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    margin-right: 20px;
    margin-left: 20px;
}
.text div:first-child{
    border-right: 2px solid white;
    padding-right: 15px;
}
.text div :first-child{
    font-size: 15px;
    margin-bottom: 5px;
}
.text div :nth-child(2){
    font-style: italic;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.saborea{
    width: 100%;
    height:25px;
    background: #222222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: whitesmoke;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");

}
.deco1{
    width: 40%;
    height: 70%;
    background: #C64A58;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23e1e2ef' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");

}
.ubicacion{
    position: absolute;
    right: 20px;
    bottom:10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

@media screen and (max-width:1330px){
    .container{
        align-items:flex-start;
        
        background: #C64A58;
        
    }
    .ubicacion{
        width: 250px;
    }
    .container h3{
        font-size: 15px;
    }
    .text div{
    
    font-size: 15px;
    }
}
@media screen and (max-width:628px){
  .ubicacion{
      position: relative;
      right: 0%;
      width: 80%;
  }  
  .container{
    align-items:center;
        
    background: #C64A58;  
    }

    .container div{
        margin: 10px;
    }
    .deco1{
        width: 30%;
    }
}

</style>
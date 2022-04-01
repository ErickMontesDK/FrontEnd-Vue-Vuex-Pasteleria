<template>
<!--Este componente es el formulario de pedido. Te pide la información y luego te muestra para que puedas
corroborar tu pedido-->

<!--Contenedor de todos los formularios-->
<div class="formularios">
  <!--Form del pedido. Al mandar un submit, llama a la funcion "agregarPedido"-->
<form @submit.prevent="agregarPedido">  

  <!--Aqui esta el formulario con la info de los productos-->
  <div class="check">
    <!--Info del pastel-->
    <div class="pastel">

      <h2>Pedido de pastel</h2>

        <div class="container">
          <!--Input de tamaño de pastel-->
          <div><label for="TamañoPastel">Tamaño:</label>
            <select id="TamañoPastel" name="TamañoPastel" v-model="tamañoPastel">
                <option value="chico">Chico $150</option>
                <option value="mediano">Mediano $250</option>
                <option value="grande">Grande $250</option>
            </select>
          </div>

          <!--Input de cantidad con maximo de 5-->
          <div><label for="CantPastel">Cantidad</label>
            <input type="number" max="5" min="0" id=CantPastel v-model="CantPastel"></div>

          <!--Input de sabores-->
          <!--Los sabores aparecen por un ciclo v-for de todos los sabores en store.state.Pasteles-->  
          <div><label for="Sabores">Sabores: (hasta dos sabores)</label>
            <select id="Sabores" name="saborPastel" v-model="saborPastel" >
                <option :value="sabor.sabor" v-for="sabor in Pasteles">{{sabor.sabor}}</option> 
            </select>
            <!--Segundo sabor-->
            <select id="Sabores2" name="saborPastel2" v-model="saborPastel2" >
                <option :value="sabor.sabor" v-for="sabor in Pasteles">{{sabor.sabor}}</option> 
            </select></div>

          <!--Input de decoraciones-->  
          <div><span>Decoraciones</span>
            <div>
              <label for="fondant">Fondant</label><input type="checkbox" value="Fondant" id=fondant v-model="fondant">
              <label for="chantilly">Chantilly</label><input type="checkbox" value="Chantilly" id=chantilly v-model="chantilly">
              
            </div>
          </div>

          <!--Input de dedicatoria en el pastel. Maximo 31 letras-->
          <div>
            <label for="dedicatoria">Dedicatoria</label>
            <input type="text" id="dedicatoria" v-model="dedicatoria" maxlength="31">
          </div>
                
        </div>
              
    </div>
    
    <!--Contenedor con formulario del resto de productos-->
    <div class="extras">
      <h2>Otros productos</h2>
      <div>
          <!--Para acomodo de todo el formulario esta en una tabla-->
          <table>
            <tr>
                <th>Producto</th>
                <th>Sabor</th>
                <th>Tamaño</th>
                <th>Cantidad</th>
            </tr>
            <tr>
<!--El siguiente proceso se repite para cada categoria, solo se comenta esta-->
                <!--Nombre de categoria-->              
                <th>Pay</th>

                <th>
                    <!--Input del sabor del producto. Se guarda el sabor en la variable v-model="saborXXX"-->
                    <!--Cuando se selecciona el sabor, en script una funcion llama a los datos
                    del precio para ese sabor en especifico. Para este caso del Pay, la función se llama
                    preciosPays()-->
                    <select id="payS" name="payS" v-model="saborPay">
                        <!--Con un ciclo v-for se obtienen todos los sabores-->
                        <!--Abajo en script esta el llamado a los datos, en este caso, Pays()-->
                        <!--:value es el valor de esa opcion de sabor, que luego pasa a v-model-->
                        <option v-for="pay in Pays" :value="pay.sabor">{{pay.sabor}}</option>
                    </select></th>
                    
                    <!--El v-if hace que solo aparezca esta opcion si ya se selecciono el sabor del pay
                    Obtiene los datos del precio con la funcion preciosPays() y los muestra aqui-->
                <!--La opcion de tamaño se almacena aqui en v-model="tamañoXXX"-->    
                <th><select v-if="saborPay" id="payT" name="payT" v-model="tamañoPay">
                      <!--Con el ciclo v-for muestra cada uno de los tamaños y precios del sabor elegido-->
                      <option v-for="(precios,index) in preciosPays.precio" :value="index"> {{index}} <span> ${{precios}}</span></option>
                  </select></th>
                
                <!--Input de cantidad, con maximo de 5-->
                <th><input type="number" id="cant" name="cant" min="0" max="5" v-model="CantPay"></th>
            </tr>
<!--Aqui ya es lo mismo pero para cada categoria-->
            <tr>
                <th>Muffins</th>

                <th>
                    <select id="muffinS" name="muffinS" v-model="saborMuffin">
                        <option v-for="muffin in Muffins" :value="muffin.sabor">{{muffin.sabor}}</option>
                    </select></th>

                <th><select v-if="saborMuffin" id="muffinT" name="muffinT" v-model="tamañoMuffin">
                      <option v-for="(precios,index) in preciosMuffin.precio" :value="index"> {{index}} <span> ${{precios}}</span></option>
                  </select></th>
                
                <th><input type="number" id="cant" name="cant" min="0" max="5" v-model="CantMuffin"></th>
            </tr>
            <tr>
                <th>Brownie</th>

                <th>
                    <select id="brownieS" name="brownieS" v-model="saborBrownie">
                        <option v-for="brownie in Brownies" :value="brownie.sabor">{{brownie.sabor}}</option>
                    </select></th>

                <th><select v-if="saborBrownie" id="brownieT" name="brownieT" v-model="tamañoBrownie">
                      <option v-for="(precios,index) in preciosBrownies.precio" :value="index"> {{index}} <span> ${{precios}}</span></option>
                  </select></th>
                
                <th><input type="number" id="cant" name="cant" min="0" max="5" v-model="CantBrownie"></th>
            </tr>
            <tr>
                <th>Galletas</th>

                <th>
                    <select id="galletaS" name="galletaS" v-model="saborGalleta">
                        <option v-for="galleta in Galletas" :value="galleta.sabor">{{galleta.sabor}}</option>
                    </select></th>
                
                <th><select v-if="saborGalleta" id="galletaT" name="galletaT" v-model="tamañoGalleta">
                      <option v-for="(precios,index) in preciosGalletas.precio" :value="index"> {{index}} <span> ${{precios}}</span></option>
                  </select></th>
                
                <th><input type="number" id="cant" name="cant" min="0" max="5" v-model="CantGalleta"></th>
            </tr>
          </table>
          
        
        </div>
      </div>
  </div>      

  <!--Aqui va el formulario de los datos del cliente-->
  <div class="datos">
    <h2>Datos de usuario</h2>
    
      <div>
          <!--Inputs de texto para cada dato, que almacena con v-model. Tienen escrito un required para que
          el cliente tenga que rellenar los inputs obligatoriamente antes de enviar el pedido-->
          <span>Nombre: <input type="text" id="nombre" name="nombre" placeholder="Nombre Apellido" v-model="nombre" required><br></span>
          <span>Telefono <input type="number" id="tel" name="tel" placeholder="Celular" maxlength="10" v-model="tel" required><br></span>
          <span>Correo <input type="email" id="correo" name="correo" placeholder="E-mail" v-model="correo" required></span>

          <!--Este boton es el submit del formulario. Una vez dado click, ejecuta la funcion "agregarPedido" que esta abajo
          en el script. Se explica en el script-->
          <button type="submit">Revisar orden</button>
      </div>
    
  </div>
</form >

  <!--Aqui se muestra los datos del formulario, estos datos los obtiene de la variable "pedido"-->
  <div class="Confirmacion">
    <h2>Orden</h2>
    <div>
      <!--Se muestra solo si ya en el pedido se relleno el nombre del cliente-->
      <ul v-if="pedido[pedido.length-1].nombre">
        <!--Aqui va todo el pedido
        los v-if son para que en caso de que no se pidiera un producto, no se muestre ese campo-->
        <span>Pedido No.{{pedido.length-1}}</span>
        <li v-if="pedido[pedido.length-1].CantPastel"><span>{{pedido[pedido.length-1].CantPastel}}x</span> Pastel <span>{{pedido[pedido.length-1].tamañoPastel}} de </span>
        <span> sabor {{pedido[pedido.length-1].saborPastel}}</span><span v-if="pedido[pedido.length-1].saborPastel2"> con {{pedido[pedido.length-1].saborPastel2}}</span>
        <span v-if="pedido[pedido.length-1].fondant"> decorado con fondant <span v-if="pedido[pedido.length-1].chantilly">y chantilly</span></span><span v-else-if="pedido[pedido.length-1].chantilly"> decorado con chantilly</span><br>
        <span  v-if="pedido[pedido.length-1].dedicatoria">con inscripción: {{pedido[pedido.length-1].dedicatoria}}</span>
        </li>
        <li v-if="pedido[pedido.length-1].CantPay"><span>{{pedido[pedido.length-1].CantPay}}x</span><span>Pay {{pedido[pedido.length-1].tamañoPay}}</span><span> de {{pedido[pedido.length-1].saborPay}}</span></li>
        <li v-if="pedido[pedido.length-1].CantMuffin"><span>{{pedido[pedido.length-1].CantMuffin}}x</span><span>Muffin {{pedido[pedido.length-1].tamañoMuffin}}</span><span> de {{pedido[pedido.length-1].saborMuffin}}</span></li>
        <li v-if="pedido[pedido.length-1].CantBrownie"><span>{{pedido[pedido.length-1].CantBrownie}}x</span><span>Brownie {{pedido[pedido.length-1].tamañoBrownie}}</span><span> de {{pedido[pedido.length-1].saborBrownie}}</span></li>
        <li v-if="pedido[pedido.length-1].CantGalleta"><span>{{pedido[pedido.length-1].CantGalleta}}x</span><span>Galletas {{pedido[pedido.length-1].tamañoGalleta}}</span><span> de 
          {{pedido[pedido.length-1].saborGalleta}}</span></li>
          <hr>
          <!--Aqui muestra los datos del cliente-->
          <span>Datos de compra:</span>
        <li v-if="pedido[pedido.length-1].nombre">*Pedido a nombre de {{pedido[pedido.length-1].nombre}}</li>
        <li v-if="pedido[pedido.length-1].correo">*Correo: {{pedido[pedido.length-1].correo}}</li>
        <li v-if="pedido[pedido.length-1].tel">*Teléfono: {{pedido[pedido.length-1].tel}}</li>
        <hr><hr>
      </ul>
      
    </div>
    <!--Boton de submit. Cuando se da clic, se ejecuta la funcion "agregaPedido" ubicada en el store.Mutations, y le envia
    la variable pedido. Se explica en el index.js del store-->
    <button v-if="pedido[1]" @click="$store.commit('agregarPedido',pedido)" onclick="alert('Su orden fue enviada. Espere su confirmación en su correo');">Confirmar pedido</button>
    
  </div>
  
</div>

</template>

<script>


export default {
  //nombre del componente
  name: 'formulario',

  computed:{
    //Estos llaman a los datos de cada categoria de productos
    Pasteles(){return this.$store.state.Productos.Pasteles.Sabores},
    Pays(){return this.$store.state.Productos.Pays.Sabores},
    Muffins(){return this.$store.state.Productos.Muffin.Sabores},
    Brownies(){return this.$store.state.Productos.Brownies.Sabores},
    Galletas(){return this.$store.state.Productos.Galletas.Sabores},

    //Se ejecutan una vez seleccionado el sabor del producto
    //La función que hace esto esta en store.getters. 
    //Manda el sabor seleccionado y recibe todos los datos de ese sabor  
    preciosPays(){ return this.$store.getters.precioPay(this.saborPay)},
    preciosMuffin(){ return this.$store.getters.precioMuffin(this.saborMuffin)},
    preciosPasteles(){ return this.$store.getters.precioPastel(this.saborPastel)},
    preciosGalletas(){ return this.$store.getters.precioGalleta(this.saborGalleta)},
    preciosBrownies(){ return this.$store.getters.precioBrownie(this.saborBrownie)},

  },
  data(){
    return{
      //Estas son todas las variables de los inputs del pedido
      tamañoPastel:'',
      CantPastel:'',
      saborPastel:'',            
      saborPastel2:'',
      fondant:false,
      chantilly:false,
      dedicatoria:'',

      tamañoPay:'',
      CantPay:'',
      saborPay:'',

      tamañoMuffin:'',
      CantMuffin:'',
      saborMuffin:'',

      tamañoBrownie:'',
      CantBrownie:'',
      saborBrownie:'',

      tamañoGalleta:'',
      CantGalleta:'',
      saborGalleta:'',

      //Datos del cliente
      tel:'',
      correo:'',
      nombre:'',
      
      //Una vez enviado el submit, aqui se almacena todos los datos
      //Puede almacenar varios pedidos
      pedido:[{}],
      
    }
  },
  methods:{
    //Esta es la funcion ejecutada por el primer submit 
    agregarPedido(){
      var data= {
        //La funcion hace dos procesos. Envia las keys a la variable de pedido
        //y limpia todas las keys de los datos almacenados para que se pueda
        //enviar otro pedido

        //Aqui envia las keys ya con valores a estas otras keys.
        //Estas se definen como data
        tamañoPastel:this.tamañoPastel,
        CantPastel:this.CantPastel,
        saborPastel:this.saborPastel,
        saborPastel2:this.saborPastel2,
        fondant:this.fondant,
        chantilly:this.chantilly,
        dedicatoria:this.dedicatoria,

        tamañoPay:this.tamañoPay,
        CantPay:this.CantPay,
        saborPay:this.saborPay,

        tamañoMuffin:this.tamañoMuffin,
        CantMuffin:this.CantMuffin,
        saborMuffin:this.saborMuffin,

        tamañoBrownie:this.tamañoBrownie,
        CantBrownie:this.CantBrownie,
        saborBrownie:this.saborBrownie,

        tamañoGalleta:this.tamañoGalleta,
        CantGalleta:this.CantGalleta,
        saborGalleta:this.saborGalleta,

        correo:this.correo,
        nombre:this.nombre,
        tel:this.tel,
      };
      //Esta funcion envia los datos de aqui arriba,la data, a la variable de pedido
      this.pedido.push(data);

      //Aqui limpia a las variables originales con los mismos valores por defecto
      this.tamañoPastel='';
      this.CantPastel='';
      this.saborPastel='';
      this.saborPastel2='';
      this.fondant=false;
      this.chantilly=false;
      this.dedicatoria='';

      this.tamañoPay='';
      this.CantPay='';
      this.saborPay='';

      this.tamañoMuffin='';
      this.CantMuffin='';
      this.saborMuffin='';

      this.tamañoBrownie='';
      this.CantBrownie='';
      this.saborBrownie='';

      this.tamañoGalleta='';
      this.CantGalleta='';
      this.saborGalleta='';

      this.correo='';
      this.nombre='';
      this.tel='';
    },
    
  }

    
  }

</script>

<style scoped>
form{
  display: flex;
}
.formularios{
  width: 100%;
  
  background-color: #ffe6e6;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");

  position: relative;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  padding: 15px;
  color:whitesmoke;
}
h2{
  font-style: italic;
}
.formularios div{
  margin: 0px 10px 0px 10px;
}

.pastel{
  width: 470px;
  min-height: 250px;
  background: rgba(00, 00, 00, .7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  font-size: 15px;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container div{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45px;

  margin: 2px 5px 15px 5px;
}
.container div:nth-child(3){
  width: 240px;
  
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.container div:nth-child(4){
  width:240px;
}
.container div:nth-child(4) div{
  width: 100%;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
}

.pastel input{
  width:100px;
}
.pastel select{
  width: 100px;
}
#CantPastel{
  width: 40px;
}

.container{
  border: 2px solid black;
  border-radius: 10px ;
  margin-bottom: 5px;
}
button{
  border-radius: 4px;
  border: 1px solid white;
  background: #D44D5C;
  margin: 10px;

  width: 150px;
  height: 40px;

  font-weight: bold;
  color:gainsboro;
  }
.extras{
  width: 470px;
  min-height: 250px;
  background: rgba(00, 00, 00, .7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.extras div{
  display: flex;
  justify-content: center;
}
.extras select{
  width:60px;
}
.extras table{
  width: 400px;
  height: 150px;
  border: 2px solid black;
  border-radius: 10px;
}
.datos{
  width: 300px;
  height: 300px;
  background: rgba(00, 00, 00, .7);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.datos div{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.datos div span{
  margin-bottom: 10px;
}
.datos div button{
  position: relative;
  right: 50%;
  transform: translate(50%,0);
}
.Confirmacion{
  width: 300px;
  min-height: 200px;
  background: rgba(107, 107, 107, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: 100px;

  color:black;
  border: 2px solid black;
  text-align: left;
}

@media screen and (max-width: 845px){
  form{
    flex-direction: column;
    align-items: center;
  } 
}

@media screen and (max-width: 510px){
  .formularios{
    padding: 15px 0px 15px 0px;
  }

  .check div{
    width: 100%;
    
  }
}



</style>

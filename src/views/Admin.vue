<template>
<div class="alle">
  <div class="pedido">
    <pedidoInfo/> 
  </div>
  <div class="inven">
    <inventario/>
  </div>
</div> 
</template>

<script>
import pedidoInfo from '@/components/pedido.vue'
import inventario from '@/components/inventario.vue'

export default {
  name: 'Admin',
  components: {
    pedidoInfo,
    inventario
    } 
  }
</script>

<style scoped>
.alle{
    width: 100%;

    background-color: #ffe6e6;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 10px 0px 10px 0px;
}
.pedido{
  width: 44%;
 
}
.inven{
  width: 57%;
}
@media screen and (max-width: 871px){
  .alle{
    flex-direction: column;
    align-items: center;
  }
  .pedido{
    width: 100%;
  }
  .inven{
    width: 100%;
  }
}

</style>
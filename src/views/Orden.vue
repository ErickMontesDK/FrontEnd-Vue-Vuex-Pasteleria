<template>
<!--Aqui se muestra lo contenido en la pagina de Orden-->

<!--Este es el componente "formulario" que son los forms del pedido y datos del cliente, y muestra la info antes de enviar-->
<formulario/>
</template>

<script>
//componentes importados
import formulario from '@/components/formulario.vue'

export default {
  //nombre de la view
  name: 'Orden',
  components: {
    //componentes importados y que se exportaran a App.vue
    formulario
  }
}
 

</script>

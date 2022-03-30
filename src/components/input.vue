<template>
    <div>
      <input 
        type="text" 
        placeholder="pon un código de color"
        v-model="colorChange"
        >
        <span>El color es {{set}}</span>
    </div>
</template>

<script>
export default {
  name: 'ColorCode',
  computed: {
    colorChange: {
      get(){
        return this.$store.state.color +"webos";
      },
      set(color){
        this.$store.dispatch("colorChange",color);
      }
    }
  },
}
</script>
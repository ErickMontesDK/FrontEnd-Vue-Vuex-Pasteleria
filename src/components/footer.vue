<template>
<!--Este es un div con texto que sirve de footer-->
    <div class="footer">
        <span>Montes Enterprises</span>
        <span>Innovación Virtual</span>
        <span>LaunchX</span>
    </div>
</template>

<script>
export default {
    name:"footerd",
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 30px;
    background: #39393B;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:whitesmoke;
    font-size: 13px;
}

</style>

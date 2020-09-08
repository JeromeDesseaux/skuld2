<template>
    <div class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.281 145.82" data-v-13ffadbc="">
            <path d="M4221-1918.177s334.258-105.245,817.4-13.84,1103.883-108.889,1103.883-108.889v145.82H4221Z" transform="translate(-4221 2040.906)" :fill="backgroundColor" data-v-13ffadbc=""></path>
        </svg>
        <div :style="style" class="wave-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: "#0099CC"
        }
    },
    data() {
        return {
            // backgroundColor: "#fff",
        }
    },
    computed: {
        style: function() {
            return `background-color: ${this.backgroundColor}; margin-top:0;`;
        }
    }
}
</script>

<style scoped>
.svg-wrapper{
  display:flex;
  flex-direction: column;
  position: relative;
  column-gap: 0px;
  gap: 0px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  /* background: rgba(0,0,0,0.1) */
}
.wave-content {
    border: 0;
    margin-top: 0px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.svg-wrapper svg{
  margin-bottom: -1px;
}
</style>
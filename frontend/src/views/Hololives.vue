<template>
  <div id="hololives">
    <h3>This is a page for showing Holoives information</h3>
    <div id="hololive_img" :style="{'max-width': window_width+'px', 'max-height':img_height +'px'}">
        <!-- IMPORTANT remember styling needs unit e.g. px / % / rem. Otherwise, it does not work
        e.g 150 vs 150px. Only latter one works fine -->
      <img :style="{'max-width':'100%', 'max-height':'100%'}" src="https://i.imgur.com/GdRG8HK.jpg" alt="hololives images"/>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            img_height: window.innerHeight*65/100,
            window_width: window.innerWidth,
            empty_var: 0
        }
        
    }
};
</script>

<style scoped>
#hololive_img {
  position: relative;
}
#hololives{
    overflow: hidden;
}
</style>

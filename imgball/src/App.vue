<template lang="pug">
  .background
    img.background__img(src="./images/childblue.jpg")
    .ball
      .level__one(@mouseover="changeLevelOne()")
        .level__two(v-for="(item, i) in levelTwo" @mouseover="changeLevelTwo()" :key="i")
          //- .level__three(v-for="(item, i) in 4" @mouseover="changeLevelThree()" :key="i")
            //- .level__four(v-for="(item, i) in 4" @mouseover="changeLevelFour()" :key="i")
</template>
<script>
export default {
  name: 'imgball',

  data() {
    return {
      levelOne: true,
      levelTwo: [0, 0, 0, 0],
      levelThree: [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]],
    }
  },

  mounted () {
    document.body.style.margin = 0
  },

  methods: {
    changeLevelOne () {
      this.levelOne = false
      this.levelTwo = true
    },
    // changeLevelTwo () {
    //   this.levelTwo = false
    //   this.levelThree = true
    // },
  }
}
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>

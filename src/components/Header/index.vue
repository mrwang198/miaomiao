<template>
  <header id="header1">
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: "header1",
  props:{
    title:{
      type:String,
      default:'喵喵电影'
    }
  }
};
</script>

<style lang="scss" scoped>
#header1 {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
}
#header1 h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header1 i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>

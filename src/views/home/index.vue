<template>
  <div class="page-home">
    <header class="header">
      <h1 class="logo">
        <a href="/"
          ><img
            src="https://static.mkzcdn.com/mobile/img/h5_navlogo.png"
            alt="漫客栈"
        /></a>
      </h1>
      <a href="/search/"><i class="iconfont icon-sousuo"></i></a>
    </header>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
.page-home {
  height: 100%;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    line-height: 44px;
    font-size: 36px;
    background: #fff;
    z-index: 99;
    .logo {
      width: 71px;
      height: 29px;
      float: left;
      margin-top: 5px;
      margin-left: 12px;
      font-size: 0;
      img {
        width: 100%;
      }
    }
    .iconfont {
      display: block;
      float: right;
      margin-right: 12px;
      font-size: 44px;
      color: #ff7830;
      font-size:26px;
    }
  }
}
</style>

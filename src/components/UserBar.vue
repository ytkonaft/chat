<template>
  <div class="user-bar">
    <div
      class="user-pic"
      :style="{
        backgroundImage: `url(https://usern.tums.ac.ir/asset/UserPhoto/0.JPG)`
      }"
    />
    <div class="user-info">
      <strong>Username</strong>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-bar {
  display: block;
  width: 100%;
  padding: 15px 15px 10px;
  box-sizing: border-box;
  position: relative;
  .user-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto 5px;
    border: 2px solid #faf7f4;
    background-size: cover;
    background-position: center;
  }
  .user-info {
    padding: 0px 10px;
    text-align: center;
    color: #fff;
    strong {
      font-size: 14px;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
}
</style>

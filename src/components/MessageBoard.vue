<template>
  <div class="message-board">
    <div class="board-header">
      <div class="user-block">
        <div class="user-pic" />
        <div class="user-info">
          <span class="user-name">Consumer</span>
          <span class="user-status">last seen recently</span>
        </div>
      </div>
      <button class="more-btn"><i class="el-icon-more"></i></button>
    </div>
    <div class="board-body">
      ololo
    </div>
    <BoardFooter />
  </div>
</template>

<script>
import BoardFooter from "@/components/BoardFooter.vue";

export default {
  components: {
    BoardFooter
  }
};
</script>

<style lang="scss">
.message-board {
  display: flex;
  flex-direction: column;
  height: 100%;
  .board-header {
    padding: 10px 15px;
    background-color: #eee;
    flex-direction: row;
    display: flex;
    flex: 0 1 auto;
    height: 60px;
    box-sizing: border-box;
    justify-content: space-between;
    .user-block {
      display: flex;
      flex-direction: row;
    }
    .user-info {
      padding-left: 10px;
      flex-direction: column;
      display: flex;
      justify-content: flex-start;
      text-align: left;
    }
    .user-status {
      font-size: 11px;
    }
    .user-name {
      font-size: 13px;
      font-weight: 500;
    }
    .user-pic {
      background-color: #aeaeae;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .more-btn {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    line-height: 40px;
    padding: 0;
    font-size: 22px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #aeaeae;
    transition: all 0.3s ease-out;
    outline: none;
    i {
      position: relative;
      top: 1px;
    }
    &:hover {
      color: #333;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  .board-body {
    flex: 1 1 auto;
  }
}
</style>

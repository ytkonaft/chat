<template>
  <div class="chat-page">
    <div class="chat-wrp">
      <el-row class="height100">
        <el-col :span="8" class="height100">
          <ChatSidebar />
        </el-col>
        <el-col :span="16" class="height100">
          <MessageBoard />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ChatSidebar from "@/components/ChatSidebar.vue";
import MessageBoard from "@/components/MessageBoard.vue";

export default {
  name: "Chat",
  components: {
    ChatSidebar,
    MessageBoard
  }
};
</script>

<style lang="scss">
.chat-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-flow: column;
  .chat-wrp {
    display: block;
    width: 920px;
    min-height: 550px;
    height: 90%;
    background-color: #faf7f4;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

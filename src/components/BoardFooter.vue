<template>
  <div class="board-footer">
    <textarea
      v-model="message"
      class="message-field"
      placeholder="Type message here"
    />
    <div class="emoji-toggle-wrp">
      <button @click="handleShowEmoji" class="emoji-toggle"></button>
      <div class="emoji-wrp" v-if="showEmoji">
        <VEmojiPicker :pack="pack" @select="selectEmoji" />
      </div>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
import packData from "v-emoji-picker/data/emojis.json";

export default {
  components: {
    VEmojiPicker
  },
  data: () => ({
    message: "",
    showEmoji: false,
    pack: packData
  }),
  methods: {
    handleShowEmoji() {
      this.showEmoji = !this.showEmoji;
    },
    selectEmoji(dataEmoji) {
      this.message += dataEmoji.emoji;

      this.showEmoji = false;
      console.log(dataEmoji);
    }
  }
};
</script>

<style lang="scss">
.board-footer {
  // background-color: #80adb1;
  padding: 5px 5px;
  // height: 60px;
  flex: 0 1 auto;
  box-sizing: border-box;
  position: relative;
  .emoji-toggle-wrp {
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -17px;
    right: 17px;
    z-index: 999;
  }
  .emoji-toggle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: #235c61;
  }
  .emoji-wrp {
    right: 0;
    transition: translateX(-10px);
    bottom: 100%;
    z-index: 888;
    position: absolute;
  }
  .message-field {
    border-radius: 10px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    resize: none;
    background-color: #eeeeee;
    padding: 5px 10px;
    font-size: 14px;
    outline: none;
    height: 100%;
  }
}
</style>

<template>
  <div class="board-footer">
    <div class="board-footer_inner">
      <div class="emoji-toggle-wrp">
        <button
          @click="handleShowEmoji"
          :class="{ active: showEmoji }"
          class="emoji-toggle"
        >
          <icon-base width="30" height="30" viewBox="510" icon-name="Emoji">
            <icon-smile />
          </icon-base>
        </button>
        <div class="emoji-wrp" v-if="showEmoji">
          <VEmojiPicker :pack="pack" @select="selectEmoji" />
        </div>
      </div>
      <textarea v-model="message" class="message-field" placeholder="Message" />
      <button class="send-message">
        <icon-base width="30" height="30" viewBox="493.595" icon-name="Send">
          <IconPaperPlain />
        </icon-base>
      </button>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
import packData from "v-emoji-picker/data/emojis.json";

import IconBase from "@/components/IconBase.vue";
import IconSmile from "@/components/icons/IconSmile.vue";
import IconPaperPlain from "@/components/icons/IconPaperPlain.vue";

export default {
  components: {
    VEmojiPicker,
    IconBase,
    IconPaperPlain,
    IconSmile
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
  border-top: 1px solid #80adb1;
  padding: 10px 5px 15px 20px;
  // flex: 0 1 85px;
  height: 85px;
  display: block;
  box-sizing: border-box;
  position: relative;
  .board-footer_inner {
    display: flex;
    align-items: center;
  }
  .emoji-toggle-wrp {
    margin: 0 10px 0 0;
    position: relative;
    display: inline-block;
  }
  .send-message {
    height: 55px;
    width: 40px;
    color: #fff;
    background-color: #80adb1;
    margin-left: 15px;
    margin-right: 10px;
    padding: 0;
    border-radius: 5px;
    border: none;
    &:hover {
      background-color: #235b61;
    }
  }
  .emoji-toggle,
  .send-message {
    text-align: center;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
  }
  .emoji-toggle {
    height: 55px;
    width: 40px;
    color: #80adb1;
    border: none;
    border-bottom: 2px solid #80adb1;
    background-color: #eee;
    border-radius: 5px 5px 0 0;
    &:hover {
      color: #fff;
      background-color: #80adb1;
    }
    &.active {
      color: #fff;
      background-color: #80adb1;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .emoji-wrp {
    left: 0;
    transition: translateX(-10px);
    bottom: 100%;
    z-index: 888;
    position: absolute;
  }
  .message-field {
    border: none;
    border-bottom: 2px solid #80adb1;
    box-sizing: border-box;
    resize: none;
    flex: 1;
    border-radius: 5px 5px 0 0;
    background-color: #eeeeee;
    padding: 7px 10px 5px;
    font-size: 13px;
    overflow: hidden;
    outline: none;
    height: 55px;
  }
}
</style>

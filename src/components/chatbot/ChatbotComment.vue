<template>
    <div class="chat-container">
      <!-- 채팅 메시지 -->
      <div class="chat-box">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['chat-message', message.from]"
        >
          <div v-if="message.from === 'bot'" class="bot-icon-wrap">
            <img src="@/assets/icons/common/SnailAI.svg" class="bot-icon" />
          </div>
          <p class="chat-text">{{ message.text }}</p>
        </div>
      </div>
  
      <!-- 채팅 입력 -->
      <div class="chat-input">
        <img src="@/assets/icons/common/pluslogo.svg" class="input-icon" />
        <input
          v-model="inputMessage"
          type="text"
          placeholder="Write your message"
          @keydown.enter="sendMessage"
        />
        <img src="@/assets/icons/common/voiceLogo.svg" class="input-icon" />
        <img src="@/assets/icons/common/sendlogo.svg" class="input-icon" @click="sendMessage" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue'
  
  const emit = defineEmits(['message-sent'])
  
  const inputMessage = ref('')
  const messages = ref([])
  
  const sendMessage = () => {
    if (inputMessage.value.trim() === '') return
  
    messages.value.push({ from: 'user', text: inputMessage.value })
  
    // 부모에게 메시지 전송 이벤트 발생 
    emit('message-sent')
  
    setTimeout(() => {
      messages.value.push({ from: 'bot', text: '좋은 질문이에요! 조금만 기다려 주세요.' })
    }, 500)
  
    inputMessage.value = ''
  }
  </script>
  
  <style scoped>
  .chat-container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #fff; /* 핵심: 채팅 영역 고정 배경 */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.chat-box {
  flex: 1;
  overflow-y: auto;
  padding: 13px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.chat-message {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  max-width: 80%;
  word-break: break-word;
}

.chat-message.user {
  align-self: flex-end;
  background-color: #5661f6;
  color: #fff;
  border-radius: 20px 20px 4px 20px; /* 오른쪽 아래만 뾰족 */
  padding: 1px 14px;
  margin-right: 4px;
}

.chat-message.bot {
  align-self: flex-start;
  background-color: #f2f2f2;
  color: #000;
  border-radius: 20px 20px 20px 4px; /* 왼쪽 아래만 뾰족 */
  padding: 1px 14px;
  position: relative;
  margin-left: 4px;
}

.bot-icon-wrap {
  display: flex;
  justify-content: flex-start;
  margin-top: 4px;
  margin-left: 2px;
}

.bot-icon {
  width: 16px;
  height: 16px;
}

  .chat-text {
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
  }
  
  .chat-input {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: white;
    box-shadow: 0px 0px 8px 3px rgba(157, 157, 157, 0.2);
    border-radius: 30px;
    margin: 10px;
    margin-bottom: 30px;
  }
  
  .chat-input input {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    background: transparent;
  }
  
  .input-icon {
    width: 20px;
    height: 20px;
    margin: 0 6px;
    cursor: pointer;
  }
  </style>
  
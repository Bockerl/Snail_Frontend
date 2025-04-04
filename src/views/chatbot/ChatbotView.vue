<template>
    <div class="chatbot-wrapper">
      <!-- 소개 영역: 메시지 입력되면 숨김 -->
      <div v-if="!introHidden" class="chat-intro" :class="{ 'fade-out': introHidden }">
        <div class="chat-logo">
          <img src="@/assets/icons/common/SnailAI.svg" alt="SnailChat" class="snail-icon" />
          <img src="@/assets/icons/common/SnailChatlogo.svg" alt="SnailChatfont" class="snail-text" />
          <p>
            한국 생활을 좀 더 편리하게,<br /> 더 쉽게 만날 수 있도록 도와드릴게요.<br />
            궁금한 점이나 필요한 정보가 있으면 <br />언제든지 물어보세요.
          </p>
        </div>
  
        <div class="chat-example">
          <p>한국에서 집을 구할 때 어떤 절차를 거쳐야 하나요?</p>
          <p>비자 연장이나 변경 절차는 어떻게 진행되나요?</p>
          <p>근처에서 영어를 사용할 수 있는 병원이나 약국은 어디에 있나요?</p>
        </div>
      </div>
  
      <!-- 채팅창 컴포넌트 -->
      <ChatbotComment @message-sent="hideIntro" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ChatbotComment from '@/components/chatbot/ChatbotComment.vue'
  
  const introHidden = ref(false)
  
  const hideIntro = () => {
    introHidden.value = true
  }
  </script>

  <style scoped>
  .chatbot-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-color: #ffffff;
  }
  
  .chat-intro {
    padding: 20px 16px;
    flex-shrink: 0;
    border-radius: 16px;
    margin: 16px;
    transition: opacity 0.4s ease;
  }
  
  .fade-out {
    opacity: 0;
    pointer-events: none;
    height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

.chat-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  text-align: center;
}

.snail-icon {
  width: 40px;
}

.snail-text {
  width: 100px;
  margin-top: 6px;
}

.chat-intro p {
  margin-top: 10px;
  font-size: 11px;
  color: #6b6b6b;
  line-height: 1.5;
  
}

.chat-example {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 5px;
}

.chat-example p {
  padding: 10px 14px;
  background-color: #f3f4f6;
  border-radius: 100px;
  font-size: 11px;
  color: #666;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.chat-example p:hover {
  background-color: #e4e6ea;
}

  </style>
  
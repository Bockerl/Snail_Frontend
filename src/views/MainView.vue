<template>
    <div class="home-container">
      <!-- 유저 정보 -->
      <div class="user-info">
        <div class="profile-section">
          <img src="@/assets/icons/common/Profile.svg" class="profile-pic" />
          <div class="user-text">
            <p class="greeting">
            안녕하세요,<br /> <span class="username">{이름}</span> 님
            </p>
          </div>
          <div class="notification-container">
            <div class="notification-icon">
                <img src="@/assets/icons/common/alramlogo.svg" alt="알림" />
            </div>
            </div>
        </div>
    </div>
  
      <!-- 번역 렌즈 -->
      <div class="lens-header">
        <span class="lens-title">Snail <b>번역 렌즈</b></span>
        <img src="@/assets/icons/common/lenslogo.svg" class="lens-icon" />
      </div>
  
      <div class="lens-container">
        <div class="lens-option camera">
          <img src="@/assets/icons/common/cameralogo.svg" alt="Camera" />
          <p>카메라</p>
        </div>
        <div class="lens-option gallery">
          <img src="@/assets/icons/common/gallarylogo.svg" alt="Gallery" />
          <p>갤러리</p>
        </div>
      </div>
  
      <!-- Snail Chat -->
      <h2 class="question-title">무엇을 도와드릴까요?</h2>
      <div class="chat-logo">
        <img src="@/assets/icons/common/SnailAI.svg" alt="SnailChat" class="snail-icon" />
        <img src="@/assets/icons/common/SnailChatlogo.svg" alt="SnailChatfont" class="snail-text" />
      </div>
  
      <!-- 예시 질문 -->
      <div class="chat-example">
        <p> 한국에서 집을 구할 때 어떤 절차를 거쳐야 하나요?</p>
        <p> 비자 연장이나 변경 절차는 어떻게 진행되나요?</p>
        <p> 근처에서 영어를 사용할 수 있는 병원이나 약국은 어디에 있나요?</p>
      </div>
  
      <!-- 채팅 입력 -->
      <div class="chat-input">
        <img src="@/assets/icons/common/pluslogo.svg" alt="Plus" class="plus-icon" />
        <input type="text" placeholder="Write your message" />
        <img src="@/assets/icons/common/voiceLogo.svg" alt="Voice" class="voice-icon" />
        <img src="@/assets/icons/common/sendlogo.svg" alt="Send" class="send-icon" />
      </div>
    </div>
  </template>
  
  <style scoped>
  
  .home-container {
    height: 100vh - 64%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    max-width: 430px;
    margin: 0 auto;
    margin-top: 10px;
  }
  

  .user-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .profile-section {
    gap:10px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .profile-pic {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 15px;
  }

  
  .user-text {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  
  .greeting {
  font-size: 15px;
  color: #777;
  margin: 0;
  padding-right: 200px;
 }

 .username {
  font-size: 16px;
  font-weight: bold;
  color: #5D68F5;
 }
  
 .notification-container {
    display: flex;
    align-items: right;
}

.notification-icon {
    width: 34px;
    height: 34px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); 
    cursor: pointer;
}


.notification-icon img {
    width: 18px;
    height: 18px;
}

  .lens-header {
    margin-top: 30px;
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .lens-title {
    font-size: 16px;
    font-weight: bold;
    color: #717171;
  }
  
  .lens-icon {
    margin-left: 15px;
    background-color: #C7CAFF;
    width: 20px;
    height: 20px;
    box-shadow: 0px 0px 10px 5px rgba(199, 202, 255, 0.6);
    border-radius: 50%;
  }
  
  .lens-container {
    margin-top: 20px;
    display: flex;
    gap: 50px; 
    width: 100%;
    justify-content: center;
}
  
  .lens-option {
    width: 40%;
    height: 185px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
  
  .camera {
    background-color: #5661F6;
    color: white;
  }
  
  .gallery {
    background-color: #eee;
    color: #333;
  }
  
  .question-title {
    
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    color: #5661F6;
  }
  
  .chat-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .snail-icon {
    width: 30px;
  }
  
  .snail-text {
    width: 80px;
    margin-top: 5px;
  }
  
  .chat-example p {
    margin: 10px 0;
    background-color: #f3f4f6;
    padding: 8px;
    border-radius: 100px;
    text-align: center;
    width: 100%;
    font-size: 12px;
    color: #979696;
  }
  
  .chat-input {
    margin-top: 18px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 8px 3px rgba(157, 157, 157, 0.3);
    padding: 10px;
    border-radius: 24px;
    background-color: white;
    width: 100%;
  }
  
  .chat-input input {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px;
    font-size: 14px;
  }

  input::placeholder {
  color: #B0B3C0; 
  opacity: 1; 
}
  
  .plus-icon {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  .voice-icon{
    width: 25px;
    height: 25px;
    margin-right: 3px;
  }

  .send-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  </style>

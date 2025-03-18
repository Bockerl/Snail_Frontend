<template>
    <nav class="bottom-nav">
      <router-link to="/home" class="nav-item">
        <img src="@/assets/icons/common/Home.svg" alt="Home" />
        <span>Home</span>
      </router-link>
      <router-link to="/community" class="nav-item">
        <img src="@/assets/icons/common/communitylogo.svg" alt="Community" />
        <span>Community</span>
      </router-link>
      <router-link to="/chat" class="nav-item active">
        <img src="@/assets/icons/common/snailFooterlogo.svg" alt="SnailFooter" />
      </router-link>
      <router-link to="/messages" class="nav-item">
        <img src="@/assets/icons/common/messagelogo.svg" alt="Messages" />
        <span>Messages</span>
      </router-link>
      <router-link to="/mypage" class="nav-item">
        <img src="@/assets/icons/common/mypagelogo.svg" alt="MyPage" />
        <span>MyPage</span>
      </router-link>
    </nav>
  </template>
  
  <style scoped>
  .bottom-nav {
    height: 64px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    bottom: 0;
    border-top: 1px solid #ddd;
    padding: 5px 0;
    box-shadow: 0px 0px 10px 5px rgba(177, 177, 177, 0.4);
  }
  
  .nav-item {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: #666;
  }
  
  .nav-item img {
    width: 30px;
    height: 30px;
  }
  
  .nav-item.active {
    background-color: #5661F6;
    border-radius: 50%;
    padding: 15px;
  }
  </style>
  
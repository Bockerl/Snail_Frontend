<template>
    <header class="header">
      <img src="@/assets/icons/common/SnailHeaderlogo.svg" alt="Snail Logo" class="logo" />
    </header>
  </template>
  
  <style scoped>
  .header {
    height: 56px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 8px 3px rgba(86, 97, 246, 0.3);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .logo {
    height: 18px;
  }
  </style>
  
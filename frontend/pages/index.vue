<template>
    <div class="container text-center">
      <h1 class="title">Heritago Wisata</h1>
      <p class="subtitle">Explore & Share Your Journey</p>
  
      <!-- Gambar -->
      <img src="/static/a.png" alt="Heritago Wisata" class="img-fluid my-4" />
  
      <!-- Teks bawah -->
      <p class="text-bawah">Excited? Let's get into it!</p>
  
      <!-- Tombol -->
      <div class="button-container mt-3 d-flex justify-content-center gap-3">
        <NuxtLink to="/home" class="btn login">Login</NuxtLink>
        <button class="btn create">Create an Account</button>
      </div>
    </div>
  </template>
  
  <script setup>
  // Pakai layout khusus "landing"
  definePageMeta({
    layout: 'landing'
  })
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .title {
    font-family: 'Ravi Prakash', cursive;
    font-size: 50px;
    color: #4a5c2c;
    margin-top: 70px;
  }
  
  .subtitle {
    font-size: 14px;
    color: #5fb6f3;
    font-style: italic;
    margin-top: 5px;
  }
  
  .text-bawah {
    font-size: 11px;
    margin-top: 120px;
    color: #9ec3e0;
  }
  
  .button-container {
    margin-top: 15px;
    margin-bottom: 60px;
  }
  
  .btn {
    padding: 10px 25px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .btn.login {
    background: linear-gradient(to right, #7cb6f3, #aba8f9);
    color: white;
    border: none;
  }
  
  .btn.create {
    background-color: white;
    color: #2cd5c4;
    border: 2px solid #2cd5c4;
  }
  </style>
  
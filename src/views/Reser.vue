<template>
  <div class="home">
    <h1>💒예약 페이지</h1>
    <router-link to="/" class="btn">home</router-link>
    <router-link to="/review" class="btn">review</router-link>

  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: rgb(30, 30, 30);
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  margin-left: 10px;
}
</style>

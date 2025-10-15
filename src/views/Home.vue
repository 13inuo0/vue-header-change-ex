<template>
  <div class="home">
    <h1>💒홈 페이지</h1>
    <Router-Link to="/reser" class="btn">예약하러가기</Router-Link>
    <Router-Link to="/resercheck" class="btn">예약확인하기</Router-Link>
    <Router-Link to="/review" class="btn">리뷰보러가기</Router-Link>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>

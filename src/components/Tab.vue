<template>
  <div class="home">
    <div class="container">
      <!-- 탭메뉴 -->
      <div class="tabs">
        <button @click="activeTab = 'detaile'">상세정보</button>
        <button @click="activeTab = 'review'">리뷰</button>
      </div>
      <!-- 상세정보 -->
      <div class="content" v-if="activeTab === 'detaile'">상세정보 영역</div>
      <!-- 리뷰 -->
      <div class="content" v-if="activeTab === 'review'">리뷰 영역</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const activeTab = ref("detaile");
</script>
<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  .tabs {
    display: flex;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
    button {
      flex: 1;
      padding: 10px;
      border: none;
      background: #d3d3d3;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;
    }
  }
}
</style>

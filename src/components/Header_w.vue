<template>
  <header :class="[{ scrolled: isScrolled }, { dark: isDark }]">
    <div class="inner">
      <img src="/public/images/link.png" alt="링크 로고" class="logo" @click="goHome" />
      <div class="hamburger">
        <div class="line" v-for="n in 3" :key="n"></div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
// 스크롤 상태 저장
const isScrolled = ref(false);
// 스크롤 색상 변경
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; //50px이상 스크롤 하면 true로 변경 (색상 변경)
};
// 로고 클릭 시 홈 페이지로 이동하기
const router = useRouter();
const goHome = () => {
  router.push("/");
};
// 페이지를 켜질 때 감시 시작
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
// 부모 (App.vue)에서 받은 값
const props = defineProps(
    {isDark: Boolean,}
)
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 10;
  //   스크롤하면
  &.scrolled {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    img {
      filter: brightness(0) invert(1);
    }
  }
//   isDark dark가 더해지면
&.dark{
    background-color: #333;
    .line{
        background-color: #fff !important;
    }
    img{
        filter: brightness(0) invert(1);
    }
}
  .inner {
    max-width: 1280px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    .logo {
      cursor: pointer;
    }
    .hamburger {
      .line {
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 4px 0;
        border-radius: 2px;
        transition: all 0.3s;
      }
    }
  }
}
</style>

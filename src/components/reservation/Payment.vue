<template>
  <div class="card">
    <h2>예약 결제</h2>
    <p>이름: {{reservation.name}}</p>
    <p>날짜: {{reservation.date}}</p>
    <p>서비스 종류: {{reservation.service}}</p>
    <p>결제 금액: {{price.toLocaleString()}}원</p>
    <!-- 결제 버튼 : 클릭하면 pay 함수 가 실행 -->
    <button class="btn btn--secondary" @click="pay">결제하기</button>
  </div>
</template>
<script setup>
const props = defineProps({ 
    reservation: { type: Object, required: true } 
    });
    const emit = defineEmits(["next"]);
    // 결제금액
    const price = props.reservation.service === "짐 보관" ? 10000 : 20000
    const pay = ()=>{
emit("next", {...props.reservation, price, status: "결제 완료"})
// 스프레드 연산자 ...
    }
</script>
<style lang="scss" scoped>

</style>

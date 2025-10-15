<template>
  <div class="home">
    <h1>💒예약 페이지</h1>
    <router-link to="/" class="btn">home</router-link>
    <router-link to="/review" class="btn">review</router-link>
    <div class="section">
      <ReserForm v-if="step === 'form'" @next="goToPayment" />
      <Payment v-if="step === 'payment'" :reservation="reservation" @next="gotoConfirm" />
      <ReserComfirn v-if="step === 'confirm'" :reservation="reservation" @reset="resetReser"/>
    </div>
  </div>
</template>
<script setup>
import Payment from "@/components/reservation/Payment.vue";
import ReserComfirn from "@/components/reservation/ReserComfirn.vue";
import ReserForm from "@/components/reservation/ReserForm.vue";
import { ref } from "vue";
const step = ref("form");
const reservation = ref({});
const goToPayment = (data) => {
  console.log(data);
  reservation.value = data;
  step.value = "payment";
};
const gotoConfirm = (data) => {
  reservation.value = data;
  step.value = "confirm";
};
const resetReser=()=>{
  reservation.value = {};
  step.value = "form"
}
</script>
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

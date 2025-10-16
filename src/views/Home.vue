<template>
  <div class="home">
    <h1>💒홈 페이지</h1>
    <Router-Link to="/reser" class="btn">예약하러가기</Router-Link>
    <Router-Link to="/resercheck" class="btn">예약확인하기</Router-Link>
    <Router-Link to="/review" class="btn">리뷰보러가기</Router-Link>
    <!-- 상품 목록 -->
    <div class="product-wrap">
      <h2>상품 목록</h2>
      <div class="product-list">
        <div class="product" v-for="(product, i) in products" :key="product.id" :class="{ second: (i + 1) % 2 === 0 }">
          <!-- :class="{second:i===1}" -->
          <!-- :class="{ second: (i + 1) % 2 === 0 }" 짝수 -->
          <!-- :class="{second:[1,2].includes(i)}" 지정-->
          <img :src="product.image" :alt="product.name" @click="goToDetail(product.id)"/>
          <p>상품명 :{{ product.name }}</p>
          <p>금액 : {{ product.price.toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    image: "/images/product2.png",
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    image: "/images/product3.png",
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    image: "/images/product4.png",
  },
]);
const router = useRouter()
const goToDetail = (id)=>{
// console.log(id);
router.push(`/prodetail/${id}`)

}
</script>
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
  .product-list {
    display: flex;
    justify-content: center;
    gap: 10px;
    .product {
      cursor: pointer;
      &.second {
        background-color: red;
      }
    }
  }
}
</style>

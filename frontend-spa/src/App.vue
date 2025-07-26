<template>
  <div>
    <header class="p-3 bg-light border-bottom d-flex align-items-center">
      <span class="me-3">🚌</span>
      <strong class="me-auto">Binh Phuc Bus</strong>
      <nav v-if="token">
        <router-link to="/home">Trang chủ</router-link> |
        <router-link to="/schedule">Lịch trình</router-link> |
        <router-link to="/history">Lịch sử đặt vé</router-link> |
        <router-link to="/contact">Liên hệ</router-link> |
        <router-link to="/about">Về chúng tôi</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script setup>
import { getToken } from './utils/auth';
const token = getToken();
</script>

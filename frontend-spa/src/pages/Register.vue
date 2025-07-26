<template>
  <div>
    <h2>Đăng ký</h2>
    <input v-model="username" placeholder="Tài khoản" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Mật khẩu" />
    <button @click="register">Đăng ký</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../utils/api';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    await api.post('/auth/register', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    alert('Đăng ký thành công!');
    router.push('/login');
  } catch (err) {
    alert('Email đã tồn tại!');
  }
};
</script>

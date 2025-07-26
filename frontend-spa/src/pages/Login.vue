<template>
  <div class="login-page">
    <!-- Header -->
    <div class="header">
      <div class="container">
        <div class="logo-section">
          <div class="logo">
            <i class="fas fa-bus"></i>
            <span class="brand-name">Binh Phúc Bus Lines</span>
          </div>
          <p class="brand-slogan">CHẤT LƯỢNG LÀ DANH DỰ</p>
        </div>
        <div class="auth-button">
          <button class="btn-auth">
            <i class="fas fa-user"></i>
            Đăng nhập/Đăng ký
          </button>
        </div>
      </div>
    </div>

    <!-- Main Login Form -->
    <div class="main-content">
      <div class="login-container">
        <div class="login-card">
          <h2 class="login-title">Đăng nhập tài khoản</h2>

          <!-- Tab Navigation -->
          <div class="tab-navigation">
            <button class="tab-btn active">
              <i class="fas fa-phone"></i>
              ĐĂNG NHẬP
            </button>
            <button class="tab-btn" @click="goToRegister">ĐĂNG KÝ</button>
          </div>

          <!-- Login Form -->
          <div class="form-content">
            <div class="input-group">
              <i class="fas fa-phone input-icon"></i>
              <input v-model="email" type="email" placeholder="Nhập email" class="form-input" />
            </div>

            <div class="input-group">
              <i class="fas fa-lock input-icon"></i>
              <input
                v-model="password"
                type="password"
                placeholder="Nhập mật khẩu"
                class="form-input"
              />
              <i class="fas fa-eye-slash password-toggle"></i>
            </div>

            <button @click="login" class="login-btn">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <h3 class="footer-title">Kết nối Binh Phúc Group</h3>
      <p class="footer-text">
        Đa dạng hệ sinh thái Binh Phúc Group qua App BINH PHÚC: mua vé xe Bình Phúc, Xe Hợp Đồng, Xe
        Buýt, Giao hàng...
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../utils/api';
import { saveToken } from '../utils/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const res = await api.post('/auth/login', {
      email: email.value,
      password: password.value
    });
    saveToken(res.data.token);
    
    alert('Đăng nhập thành công!');
    router.push('/home');
  } catch (err) {
    alert('Sai email hoặc mật khẩu!');
  }
};

// ✅ Hàm chuyển sang trang đăng ký
const goToRegister = () => {
  router.push('/register');
};
</script>
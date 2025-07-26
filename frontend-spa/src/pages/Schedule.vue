<template>
  <div class="container mt-5">
    <h2 class="mb-4">Tìm tuyến xe</h2>
    
    <!-- Bộ lọc tìm kiếm -->
    <div class="row mb-4">
      <div class="col-md-5">
        <input v-model="search.departure" class="form-control" placeholder="Điểm đi">
      </div>
      <div class="col-md-5">
        <input v-model="search.destination" class="form-control" placeholder="Điểm đến">
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary w-100" @click="searchRoutes">Tìm kiếm</button>
      </div>
    </div>

    <!-- Bảng kết quả -->
    <table class="table table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>Điểm đi</th>
          <th>Điểm đến</th>
          <th>Loại xe</th>
          <th>Quãng đường</th>
          <th>Thời gian dự tính</th>
          <th>Giá vé</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="route in filteredRoutes" :key="route.id">
          <td>{{ route.departure }}</td>
          <td>{{ route.destination }}</td>
          <td>{{ route.vehicleType }}</td>
          <td>{{ route.distance }} km</td>
          <td>{{ route.duration }}</td>
          <td>{{ formatPrice(route.price) }}</td>
          <td><button class="btn btn-success btn-sm">Đặt vé</button></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <!-- Company Info -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="footer-logo">
                        <h3 class="text-orange fw-bold">Binh Phúc Bus</h3>
                        <p class="text-muted">Chất lượng là danh dự</p>
                    </div>
                    <div class="contact-info">
                        <div class="mb-2">
                            <i class="fas fa-phone"></i>
                            <strong>Tổng đài:</strong> 1900 6067
                        </div>
                        <div class="mb-2">
                            <i class="fas fa-envelope"></i>
                            <strong>Email:</strong> hotro@binhphucbus.vn
                        </div>
                        <div class="mb-2">
                            <i class="fas fa-map-marker-alt"></i>
                            <strong>Trụ sở:</strong> 272 Võ Thị Sáu, P.7, Q.3, TP.HCM
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5>Dịch vụ</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Xe khách</a></li>
                        <li><a href="#">Xe limousine</a></li>
                        <li><a href="#">Xe giường nằm</a></li>
                        <li><a href="#">Thuê xe</a></li>
                        <li><a href="#">Giao hàng</a></li>
                        <li><a href="#">Bảo hiểm</a></li>
                    </ul>
                </div>

                <!-- Support -->
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5>Hỗ trợ</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Hướng dẫn đặt vé</a></li>
                        <li><a href="#">Chính sách hoàn vé</a></li>
                        <li><a href="#">Điều khoản sử dụng</a></li>
                        <li><a href="#">Chính sách bảo mật</a></li>
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                        <li><a href="#">Liên hệ</a></li>
                    </ul>
                </div>

                <!-- Destinations -->
                <div class="col-lg-2 col-md-6 mb-4">
                    <h5>Tuyến phổ biến</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">HCM - Đà Lạt</a></li>
                        <li><a href="#">HCM - Nha Trang</a></li>
                        <li><a href="#">HCM - Đà Nẵng</a></li>
                        <li><a href="#">Cần Thơ - HCM</a></li>
                        <li><a href="#">Long Xuyên - HCM</a></li>
                        <li><a href="#">Xem tất cả</a></li>
                    </ul>
                </div>

                <!-- Download App -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5>Tải ứng dụng</h5>
                    <p class="text-muted mb-3">Đặt vé nhanh chóng, tiện lợi</p>
                    <div class="download-apps">
                        <img src="https://via.placeholder.com/140x40/333/fff?text=App+Store" alt="Download on App Store" class="img-fluid">
                        <img src="https://via.placeholder.com/140x40/333/fff?text=Google+Play" alt="Get it on Google Play" class="img-fluid">
                    </div>
                    
                    <div class="social-icons mt-4">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-zalo"></i></a>
                        <a href="#"><i class="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="row">
                    <div class="col-md-6">
                        <p>© 2024 Binh Phúc Bus Lines. Tất cả quyền được bảo lưu.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <p>GPKD số: 0123456789 - Ngày cấp: 01/01/2000</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import api from '../utils/api';

const routes = ref([]);
const search = ref({
  departure: '',
  destination: ''
});

const fetchRoutes = async () => {
  const res = await api.get('/routes'); // 🔗 gọi API backend
  routes.value = res.data;
};

onMounted(fetchRoutes);

const filteredRoutes = computed(() => {
  return routes.value.filter(route => {
    const depMatch = route.departure.toLowerCase().includes(search.value.departure.toLowerCase());
    const desMatch = route.destination.toLowerCase().includes(search.value.destination.toLowerCase());
    return depMatch && desMatch;
  });
});

const searchRoutes = () => {
  // logic lọc ngay trong computed
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};
</script>

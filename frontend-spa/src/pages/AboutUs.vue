<template>
  <div class="about-page">
    <!-- Header Section -->
    <div class="about-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="about-title">BÌNH PHÚC</h1>
            <p class="about-subtitle">"Chất lượng là danh dự"</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Company Introduction -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="intro-section">
            <p class="intro-text">
              Tập đoàn Bình Phúc - BINH PHÚC Group được thành lập năm 2001. Với hoạt động kinh doanh
              chính trong lĩnh vực vận tải hành khách, bất động sản và kinh doanh dịch vụ. Bình Phúc
              đã trở thành cái tên quen thuộc đồng hành cùng người Việt trên mọi lộ trình.
            </p>
            <p class="intro-text">
              Trải qua hơn 24 năm hình thành và phát triển đến khách hàng là trọng tâm, chúng tôi
              luôn tự hào để thành doanh nghiệp vận tải hàng đầu đóng góp tích cực vào sự phát triển
              chung của ngành vận tải nội địa và nền kinh tế đất nước nói chung. Luôn cải tiến mang
              đến chất lượng dịch vụ tối ưu nhất dành cho khách hàng, Công ty Bình Phúc được ghi
              nhận qua nhiều giải thưởng danh giá như: "Thương hiệu số 1 Việt Nam", "Top 1 Thương
              hiệu mạnh ASEAN 2024", "Top 5 Sản phẩm dịch vụ chất lượng ASEAN 2024" "Top 10 Thương
              hiệu uy tín đầu Việt Nam 2024", "Top 10 Thương hiệu mạnh Quốc gia 2024", "Top 10
              thương hiệu Uy tín hàng đầu ASEAN 2024", "Top 10 Thương hiệu Quốc gia hội nhập Châu Á
              – Thái Bình Dương 2024"…
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vision and Mission Section -->
    <div class="vision-mission-section py-5">
      <div class="container">
        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <div class="vision-illustration">
              <!-- SVG illustration for Vision -->
              <svg width="100%" height="300" viewBox="0 0 400 300" class="vision-svg">
                <defs>
                  <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #ff6200; stop-opacity: 0.8" />
                    <stop offset="100%" style="stop-color: #ffa500; stop-opacity: 0.6" />
                  </linearGradient>
                </defs>

                <!-- Background -->
                <rect width="100%" height="100%" fill="url(#visionGrad)" rx="15" />

                <!-- Business people illustration -->
                <g transform="translate(50, 50)">
                  <!-- Person 1 with telescope -->
                  <ellipse cx="80" cy="180" rx="25" ry="8" fill="#333" opacity="0.3" />
                  <rect x="70" y="120" width="20" height="60" fill="#4a90e2" rx="10" />
                  <circle cx="80" cy="110" r="15" fill="#fdbcb4" />
                  <rect x="95" y="105" width="30" height="5" fill="#8b4513" rx="2" />
                  <circle cx="125" cy="107" r="3" fill="#333" />

                  <!-- Person 2 with chart -->
                  <ellipse cx="200" cy="180" rx="25" ry="8" fill="#333" opacity="0.3" />
                  <rect x="190" y="120" width="20" height="60" fill="#e74c3c" rx="10" />
                  <circle cx="200" cy="110" r="15" fill="#fdbcb4" />
                  <rect
                    x="180"
                    y="90"
                    width="40"
                    height="25"
                    fill="#fff"
                    stroke="#333"
                    stroke-width="2"
                    rx="3"
                  />
                  <polyline
                    points="185,105 195,95 205,100 215,90"
                    stroke="#28a745"
                    stroke-width="2"
                    fill="none"
                  />

                  <!-- Person 3 with briefcase -->
                  <ellipse cx="270" cy="180" rx="25" ry="8" fill="#333" opacity="0.3" />
                  <rect x="260" y="120" width="20" height="60" fill="#f39c12" rx="10" />
                  <circle cx="270" cy="110" r="15" fill="#fdbcb4" />
                  <rect x="250" y="125" width="15" height="10" fill="#8b4513" rx="2" />

                  <!-- Success arrow -->
                  <path
                    d="M320,150 L340,130 L335,135 L360,110 L365,115 L340,140 L345,135 L325,155 Z"
                    fill="#28a745"
                  />

                  <!-- Target/Goal -->
                  <circle cx="320" cy="80" r="20" fill="#28a745" opacity="0.8" />
                  <circle cx="320" cy="80" r="15" fill="#fff" />
                  <circle cx="320" cy="80" r="10" fill="#28a745" />
                  <circle cx="320" cy="80" r="5" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-md-6">
            <div class="vision-content">
              <h2 class="section-title text-orange">TẦM NHÌN VÀ SỨ MỆNH</h2>
              <div class="mission-badge">BẢO ĐẢM TỔ QUỐC VÌ MỘT VIỆT NAM HÙNG CƯỜNG.</div>
              <p class="mission-subtitle">
                Trở thành Tập Đoàn uy tín và chất lượng hàng đầu Việt Nam với cam kết:
              </p>
              <ul class="mission-list">
                <li>
                  <i class="fas fa-check-circle text-orange"></i> Tạo môi trường làm việc năng động,
                  thân thiện.
                </li>
                <li>
                  <i class="fas fa-check-circle text-orange"></i> Phát triển từ lòng tin của khách
                  hàng.
                </li>
                <li>
                  <i class="fas fa-check-circle text-orange"></i> Trở thành tập đoàn đầu cầu chuyên
                  nghiệp.
                </li>
              </ul>
              <p class="mission-description">
                <strong>Bình Phúc</strong> luôn phấn đấu làm việc hiệu quả nhất, để luôn công hiến,
                đóng góp hết sức mạnh vì một Việt Nam hùng cường.
              </p>
            </div>
          </div>
        </div>

        <!-- Philosophy Section -->
        <div class="row align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="philosophy-illustration">
              <!-- SVG illustration for Philosophy -->
              <svg width="100%" height="300" viewBox="0 0 400 300" class="philosophy-svg">
                <defs>
                  <linearGradient id="philGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #28a745; stop-opacity: 0.8" />
                    <stop offset="100%" style="stop-color: #20c997; stop-opacity: 0.6" />
                  </linearGradient>
                </defs>

                <!-- Background -->
                <rect width="100%" height="100%" fill="url(#philGrad)" rx="15" />

                <!-- Philosophy illustration -->
                <g transform="translate(50, 30)">
                  <!-- Tree trunk -->
                  <rect x="180" y="180" width="20" height="60" fill="#8b4513" />

                  <!-- Tree leaves/crown -->
                  <circle cx="150" cy="160" r="40" fill="#228b22" />
                  <circle cx="210" cy="150" r="45" fill="#32cd32" />
                  <circle cx="190" cy="180" r="35" fill="#228b22" />

                  <!-- Businessman watering the tree -->
                  <ellipse cx="100" cy="230" rx="20" ry="6" fill="#333" opacity="0.3" />
                  <rect x="90" y="190" width="20" height="40" fill="#4a90e2" rx="10" />
                  <circle cx="100" cy="180" r="12" fill="#fdbcb4" />

                  <!-- Watering can -->
                  <ellipse cx="120" cy="195" rx="15" ry="8" fill="#666" />
                  <rect x="135" y="190" width="8" height="3" fill="#666" />

                  <!-- Water drops -->
                  <circle cx="140" cy="185" r="2" fill="#87ceeb" />
                  <circle cx="145" cy="180" r="2" fill="#87ceeb" />
                  <circle cx="150" cy="175" r="2" fill="#87ceeb" />
                  <circle cx="155" cy="170" r="2" fill="#87ceeb" />
                  <circle cx="160" cy="165" r="2" fill="#87ceeb" />

                  <!-- Growth arrows -->
                  <path
                    d="M250,200 L270,180 L265,185 L280,170 L285,175 L270,190 L275,185 L255,205 Z"
                    fill="#ffd700"
                  />
                  <path
                    d="M270,140 L290,120 L285,125 L300,110 L305,115 L290,130 L295,125 L275,145 Z"
                    fill="#ffd700"
                  />

                  <!-- Success symbols -->
                  <circle cx="280" cy="100" r="15" fill="#ffd700" />
                  <path d="M275,100 L280,105 L290,95" stroke="#fff" stroke-width="3" fill="none" />
                </g>
              </svg>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <div class="philosophy-content">
              <h2 class="section-title text-orange">TRIẾT LÝ</h2>
              <p class="philosophy-text">
                Hội nhập và phát triển góp phần vào sự thịnh vượng của đất nước. Nguồn nhân lực
                chính là nhân tố then chốt, là tài sản lớn nhất của Công ty Bình Phúc, chủ trọng tạo
                ra môi trường làm việc hiện đại, năng động, thân thiện và trao cơ hội phát triển
                nghề nghiệp và cá nhân viên. Sự hài lòng của khách hàng là minh chứng cho chất lượng
                dịch vụ của Bình Phúc, không ngừng hoàn thiện và phát triển năng lực kinh doanh,
                Bình Phúc thấu hiểu nhu cầu khách hàng, mang đến sản phẩm dịch vụ hoàn hảo, đáp ứng
                tốt đa dạng đời của khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Info Section -->
    <div class="footer-info-section py-5">
      <div class="container">
        <div class="row">
          <!-- Call Center -->
          <div class="col-md-4 mb-4">
            <div class="info-card text-center">
              <div class="info-icon mb-3">
                <i class="fas fa-phone-alt fa-3x text-orange"></i>
              </div>
              <h3 class="info-title">TRUNG TÂM TỔNG ĐÀI & CSKH</h3>
              <div class="hotline-large">1900 6789</div>
              <div class="company-info">
                <strong>CÔNG TY CỔ PHẦN XE KHÁCH BÌNH PHÚC - BINH PHÚC BUS LINES</strong><br />
                Địa chỉ:
                <span class="text-muted"
                  >123-125 Đường Nguyễn Văn Linh, Phường An Hòa, Quận Ninh Kiều, TP Cần Thơ, Việt
                  Nam.</span
                ><br />
                Email: <a href="mailto:hotro@binhphuc.vn">hotro@binhphuc.vn</a><br />
                Điện thoại: <span class="text-muted">02923456789</span> &nbsp;&nbsp;&nbsp; Fax:
                <span class="text-muted">02923456790</span>
              </div>

              <!-- Download Apps -->
              <div class="download-section mt-4">
                <h5>TẢI APP BINH PHÚC</h5>
                <div class="app-buttons">
                  <button class="btn btn-dark btn-sm me-2">
                    <i class="fab fa-google-play"></i> CH Play
                  </button>
                  <button class="btn btn-dark btn-sm">
                    <i class="fab fa-app-store"></i> App Store
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Services -->
          <div class="col-md-4 mb-4">
            <div class="info-card">
              <h4 class="text-orange mb-3">BINH PHÚC Bus Lines</h4>
              <ul class="service-list list-unstyled">
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Về chúng tôi</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Lịch trình</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Tuyến đường</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Tin tức & Sự kiện</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Mạng lưới văn phòng</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Support -->
          <div class="col-md-4 mb-4">
            <div class="info-card">
              <h4 class="text-orange mb-3">Hỗ trợ</h4>
              <ul class="service-list list-unstyled">
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Tra cứu thông tin đặt vé</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Câu hỏi thường gặp</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Hướng dẫn đặt vé trên Web</a>
                </li>
                <li>
                  <a href="#"><i class="fas fa-chevron-right"></i> Hướng dẫn nạp tiền trên App</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Media Section -->
    <div class="social-section py-4">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h5 class="mb-3"></h5>
            <div class="social-icons">
              <a href="#" class="social-icon me-3">
                <i class="fab fa-facebook fa-2x text-primary"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-youtube fa-2x text-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No special functionality needed for about page
</script>

<style scoped>
.about-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.about-header {
  background-color: #ff6200;
  color: white;
  padding: 60px 0;
  text-align: center;
}

.about-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.about-subtitle {
  font-size: 1.5rem;
  font-style: italic;
  margin: 0;
}

.text-orange {
  color: #ff6200 !important;
}

.intro-section {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;
  color: #333;
}

.vision-mission-section {
  background: white;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.mission-badge {
  background-color: #ff6200;
  color: white;
  padding: 15px 20px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 20px;
  display: inline-block;
}

.mission-subtitle {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #333;
}

.mission-list {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.mission-list li {
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.6;
}

.mission-list i {
  margin-right: 10px;
}

.mission-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
}

.vision-svg,
.philosophy-svg {
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.philosophy-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  color: #333;
}

.footer-info-section {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.info-card {
  padding: 30px 20px;
  height: 100%;
}

.info-icon {
  margin-bottom: 20px;
}

.info-title {
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hotline-large {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6200;
  margin-bottom: 20px;
}

.company-info {
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: left;
}

.company-info strong {
  color: #333;
}

.download-section h5 {
  color: #333;
  font-size: 1rem;
  margin-bottom: 15px;
}

.app-buttons .btn {
  font-size: 0.8rem;
  padding: 8px 15px;
}

.service-list li {
  margin-bottom: 10px;
}

.service-list a {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

.service-list a:hover {
  color: #ff6200;
}

.service-list i {
  margin-right: 8px;
  font-size: 0.8rem;
  color: #ff6200;
}

.social-section {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.social-icons .social-icon {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-icons .social-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }

  .about-subtitle {
    font-size: 1.2rem;
  }

  .intro-section {
    padding: 20px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .hotline-large {
    font-size: 2rem;
  }

  .company-info {
    text-align: center;
  }

  .mission-badge {
    font-size: 0.9rem;
    padding: 12px 18px;
  }
}
</style>

<template>
  <div class="modal">
    <h3>Đặt vé</h3>
    <input v-model="name" placeholder="Tên hành khách" />
    <input v-model="phone" placeholder="SĐT" />
    <button @click="book">Xác nhận</button>
    <button @click="$emit('close')">Hủy</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps(['route']);
const name = ref('');
const phone = ref('');

const book = async () => {
  await axios.post('http://localhost:3000/api/bookings', {
    user_id: 'usr1',
    route_id: props.route.id,
    seat_number: 1,
    booking_date: new Date().toISOString().slice(0, 10),
    passenger_name: name.value,
    passenger_phone: phone.value
  });
  alert('Đặt vé thành công');
  window.location.reload();
};
</script>

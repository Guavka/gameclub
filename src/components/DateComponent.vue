<template>
  <p>
    {{ days[date.getDay()] }} {{ date.getDate() }}
    {{ months[date.getMonth()] }}
  </p>
</template>

<script setup lang="ts">
const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]
const date = new Date()
</script>

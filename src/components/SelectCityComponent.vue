<template>
  <q-btn-dropdown :label="selectedValue?.name">
    <q-list emit-value>
      <q-item
        v-for="item in items"
        :key="item.id"
        clickable
        v-close-popup
        @click="onItemClick(item)"
      >
        <q-item-section>
          <q-item-label>{{ item.name.toUpperCase() }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = [
  { id: 1, name: 'Москва' },
  { id: 2, name: 'Мытищи' },
  { id: 3, name: 'Санкт-Петербург' },
  { id: 4, name: 'Краснодар' },
  { id: 5, name: 'Самара' },
]

const selectedValue = ref(items[0])
const onItemClick = (city: { id: number; name: string }) => (selectedValue.value = city)
</script>

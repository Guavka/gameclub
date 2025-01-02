<template>
  <q-page>
    <header>
      <div id="select-city">
        <select-city-component />
        <date-component />
      </div>
      <q-btn id="show-profile" round @click="profileVisible = true" color="primary">
        <q-avatar>
          <img :src="avatarIcon" alt="avatar" />
        </q-avatar>
      </q-btn>
      <profile-component v-if="profileVisible" @hide="profileVisible = false" />
    </header>
  </q-page>
</template>

<script setup lang="ts">
import DateComponent from 'src/components/DateComponent.vue'
import SelectCityComponent from 'src/components/SelectCityComponent.vue'
import ProfileComponent from 'src/components/ProfileComponent.vue'
import { ref, computed } from 'vue'

const profileVisible = ref(false)
const avatarIcon = computed(() => 'src/assets/account-logo.svg')
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  text-align: center;
  position: relative;

  #show-profile {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>

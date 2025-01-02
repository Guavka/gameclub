<template>
  <q-dialog persistent v-model="isShow" maximized
    ><q-card class="profile-card">
      <q-card-section id="profile-header">
        <q-avatar color="primary">
          <img :src="avatarIcon" alt="avatar" />
        </q-avatar>
        <h1>Алексей</h1>
        <h2>Guavka</h2>
        <div id="total-time">
          <q-icon name="schedule" />
          <p>Total: {{ totalTime }} мин</p>
        </div>
        <p>
          Дата регистрации: {{ registrationInfo.day }} {{ registrationInfo.month }}
          {{ registrationInfo.year }} г.
        </p>
        <q-btn id="hide-profile" icon="arrow_back" round @click="hideProfileDialog"> </q-btn>
        <q-btn id="edit-profile" icon="edit" round @click="openEditProfileDialog"> </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const avatarIcon = ref('src/assets/account-logo.svg')
const isShow = ref(true)
const totalTime = ref(5)
const registrationInfo = {
  day: 24,
  month: 'декабря',
  year: 2024,
}

const emit = defineEmits<{
  (event: 'hide'): void
}>()

const hideProfileDialog = () => emit('hide')
const openEditProfileDialog = () => console.log()
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.5em;
  margin: 5px;
  margin-block: 0px;
  line-height: 1.5em;
}
h2 {
  font-size: 1.2em;
  margin: 3px;
  margin-block: 0px;
  line-height: 1.5em;
}
p {
  line-height: 1em;
  margin: 0px;
}

#hide-profile,
#edit-profile {
  position: absolute;
  top: 10px;
}

#hide-profile {
  left: 10px;
}

#edit-profile {
  right: 10px;
}

#profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  #total-time {
    display: flex;
    padding: 10px;

    border: 1px solid #ff0000;
    border-radius: 10px;
    margin: 10px;
  }
}
</style>

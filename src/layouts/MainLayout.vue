<template>
  <q-layout view="lHh lpr lFf">
    <q-footer>
      <q-tabs>
        <q-route-tab icon="home" to="/" exact />
        <q-route-tab icon="shopping_cart" to="/order" exact />
        <q-route-tab icon="qr_code_scanner" to="/qr" exact />
        <q-route-tab icon="book_online" to="/booking" exact />
        <q-route-tab icon="leaderboard" to="/leaders" exact />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped></style>

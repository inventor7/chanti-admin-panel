<template>
  <!-- :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" -->
  <RouterView  />
  <Toaster />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'

</script>


<template>
    <div class="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 class="text-4xl font-bold text-primary">404</h1>
        <p class="text-lg font-medium text-muted-foreground">Page not found</p>
        <router-link to="/" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Go back home</router-link>
    </div>
</template>

<script setup>
definePage({
    name: '404',
    meta: {
        requiresGuest: false,
        requiresAuth: false,
    },
})


</script>

<style scoped>
/* Add your custom styles here */
</style>

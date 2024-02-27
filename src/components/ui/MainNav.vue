<script setup>
import { cn } from '@/lib/utils'
</script>

<template>
    <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
        <!-- <router-link to="/" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Overview
        </router-link> -->
        <router-link to="/categories"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Categories
        </router-link>
        <router-link to="/providers" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Providers
        </router-link>

        <router-link to="/clients" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Clients
        </router-link>

        <router-link to="/clientPosts"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            ClientPosts
        </router-link>
    </nav>
</template>
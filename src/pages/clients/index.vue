<template>
    <ClientLayout>
        <!-- <div class="md:hidden">
        <VPImage alt="Tasks" width="1280" height="1214" class="block" :image="{
            dark: '/examples/tasks-dark.png',
            light: '/examples/tasks-light.png',
        }" />
    </div> -->

        <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div class="flex items-center justify-between space-y-2">
                <div>
                    <h2 class="text-2xl font-bold tracking-tight">
                        Clinets List
                    </h2>
                    <p class="text-muted-foreground">
                        List of all Clients
                    </p>
                </div>
            </div>
            <Loading class=" h-[70vh] w-full " v-if="loading && !error.status" />
            <DataTable v-if="!loading && !error.status" :data="clients" :columns="columns" />
            <Error class=" h-full w-full " v-if="error.status && !loading" :message="error.message" />
        </div>
    </ClientLayout>
</template>


<script setup >
import { toRefs } from 'vue'
import DataTable from '@/components/ui/tabletank/DataTable.vue'
import { columns } from '@/components/ui/tabletank/columnsClients'
import { useClientStore } from '@/store/clientStore'
import { definePage } from 'vue-router/auto'

definePage({
    name: 'clients',
    meta: {
        requiresGuest: false,
        requiresAuth: true,
    },
})

// data 
const { loading, clients } = toRefs(useClientStore())
const error = reactive({
    message: '',
    status: false
})

onMounted(async () => {
    try {
        loading.value = true
        const result = await useClientStore().getAllClients().then((res) => {
        loading.value = false
        })
    } catch (err) {
        loading.value = false
        error.status = true
        error.message = err.response?.data?.message || 'An error occurred while fetching clients '
    }


})

</script>
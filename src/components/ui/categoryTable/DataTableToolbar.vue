<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import { type Task } from '@/assets/data/schemaCategories'
import { useRouter } from 'vue-router'

import { categories } from '@/assets/data/data'
import DataTableFacetedFilter from './DataTableFacetedFilter.vue'
import DataTableViewOptions from './DataTableViewOptions.vue'
import { Cross2Icon } from '@radix-icons/vue'

// data
const router = useRouter()

interface DataTableToolbarProps {
  table: Table<Task>
}



const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">

      <Input placeholder="Filter Providers..."
        :model-value="(table.getColumn('name')?.getFilterValue() as string) ?? ''" class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('name')?.setFilterValue($event.target.value)" />



      <DataTableFacetedFilter v-if="table.getColumn('categoryId')" :column="table.getColumn('categoryId')" title="Category"
        :options="categories" />

     



      <Button v-if="isFiltered" variant="ghost" class="h-8 px-2 lg:px-3" @click="table.resetColumnFilters()">
        Reset
        <Cross2Icon class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <DataTableViewOptions :table="table" />
  </div>
</template>

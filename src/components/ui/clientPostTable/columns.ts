import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'

import {  states , statuses  } from '@/assets/data/data'
import type { Task } from '@/assets/data/schemaClientsPost'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import { D } from 'unplugin-vue-router/dist/defineLoader-bde635fd'

// for the sake of simplicity, we're using a custom date formatter
function formatCustomDate(dateString: string): string {
  const inputDate = new Date(dateString);

  const op: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  return `${inputDate.toLocaleDateString('en-US', op)}`;
}

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox,
      { 'checked': table.getIsAllPageRowsSelected(), 'onUpdate:checked': (value: boolean) => table.toggleAllPageRowsSelected(!!value), 'ariaLabel': 'Select all', 'class': 'translate-y-0.5' }),
    cell: ({ row }) => h(Checkbox,
      { 'checked': row.getIsSelected(), 'onUpdate:checked': (value: boolean) => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'id' }),
    cell: ({ row }) => h('div', { class: ' text-xs w-24' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter:true,
  },
  {
    accessorKey: 'clientId',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'client Id' }),
    cell: ({ row }) => h('div', { class: ' text-xs w-24' }, row.getValue('clientId')),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter:true,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Status' }),

    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('status'),
      )

      if (!status)
        return null

      return h('span', { class: "flex w-[100px] items-center " + status.color }, [
        // status.color for the text color
        status.icon && h(status.icon, { class: "mr-2 h-4 w-4"}),
        h('span', status.label),
      ])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  
  {
    accessorKey: 'categoryId',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Category Id' }),
    cell: ({ row }) => h('div', { class: ' text-xs w-24' }, row.getValue('categoryId')),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter:true,
  },
   {
    accessorKey: 'subcategoryId',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'SubCategory Id' }),
    cell: ({ row }) => h('div', { class: ' text-xs w-100 whitespace-nowrap' }, row.getValue('subcategoryId')),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter:true,
  },
    {
      accessorKey: 'urgency',
      header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Urgency' }),
      cell: ({ row }) => h('div', { class: ' text-xs w-24' }, row.getValue('urgency')),
      enableSorting: false,
      enableHiding: false,
      enableColumnFilter:true,
    },
    {
      accessorKey: 'description',
      header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Description' }),
      cell: ({ row }) => h('div', { class: ' text-xs w-24' }, row.getValue('description')),
      enableSorting: false,
      enableHiding: false,
      enableColumnFilter:true,
    },
  {
    accessorKey: 'firstName',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'First Name' }),

    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [
        h('span', { class: 'max-w-[50px] truncate font-medium' }, row.getValue('firstName')),
      ])
    },
    enableColumnFilter:true,
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Last Name' }),

    cell: ({ row }) => {
    

      return h('div', { class: 'flex space-x-2' }, [
        h('span', { class: 'max-w-[50px] truncate font-medium' }, row.getValue('lastName')),
      ])
    },
    enableColumnFilter:true,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Email' }),
    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [ 
        h('span', { class: 'max-w-[50px] truncate font-medium' }, row.getValue('email')),
      ])
    },
  },
   {
    accessorKey: 'phoneNumber',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Phone Number' }),
    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [ 
        h('span', { class: 'max-w-[50px] truncate font-medium' }, row.getValue('phoneNumber')),
      ])
    },
  },
 
   {
    accessorKey: 'stateId',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'State' }),

    cell: ({ row }) => {
      const state = states.find(
        
        // the verification.value is a string, so we need to convert it to a number
        // to compare it with the row value
        state =>  Number(state.value) === row.getValue('stateId')
      )

      if (!state)
        return null

      return h('div', { class: 'flex w-[100px] items-center' }, [
        h('span', state.label),
      ])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Rating' }),
    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [ 
        h('span', { class: 'max-w-[100px] truncate font-medium' }, row.getValue('rating')||'no rating yet'),
      ])
    },
  },
  
   {
    accessorKey: 'createdAt',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Created At' }),
    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [ 
        h('span', { class: 'max-w-[50px] truncate font-medium' }, formatCustomDate(row.getValue('createdAt'))),
      ])
    },
  },
   {
    accessorKey: 'updatedAt',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Updated At' }),
    cell: ({ row }) => {
      return h('div', { class: 'flex space-x-2' }, [ 
        h('span', { class: 'max-w-[50px] truncate font-medium' }, formatCustomDate(row.getValue('updatedAt'))),
      ])
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]

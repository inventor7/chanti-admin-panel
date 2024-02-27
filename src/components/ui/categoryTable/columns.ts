import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { useLanguageStore } from '@/store/languageStore' 
import { categories  } from '@/assets/data/data'
import type { Task } from '@/assets/data/schemaCategories'
import DataTableColumnHeader from './DataTableColumnHeader.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
 // Import the $t function from the appropriate module

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
    cell: ({ row }) => h('div', { class: ' text-xs w-4' }, row.getValue('id')),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter:true,
  }, 
  {
    accessorKey: 'name',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Category Name' }),
    cell: ({ row }) => h('div', { class: ' text-xs w-24' }, useLanguageStore().getWord(row.getValue('name'))),
    enableSorting: false,
    enableHiding: false,
    enableColumnFilter:true,
  },
  {
    // render an image located in the public folder depending on the value of the  category Parent 
    accessorKey: 'image',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Image' }),
    cell: ({ row }) => {
      const category = categories.find(
        category => category.value === row.getValue('categoryId'),
      )

      if (!category)
        return null

      return h('img', { class: "w-16 h-16", src: `img/${category.label}.svg`, alt: category.label })
    },
   
  },
  {
    accessorKey: 'categoryId',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Parent Category' }),

    cell: ({ row }) => {
      const category = categories.find(
        category => category.value === row.getValue('categoryId'),
      )

      if (!category)
        return null

      return h('span', { class: "flex w-[30px] items-center " }, [
        h('span', category.color),
      ])
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]

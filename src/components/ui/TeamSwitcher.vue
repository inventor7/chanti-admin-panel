<script setup>
import { ref } from 'vue'
import CaretSortIcon from '~icons/radix-icons/caret-sort'
import CheckIcon from '~icons/radix-icons/check'
import PlusCircledIcon from '~icons/radix-icons/plus-circled'
import Globe from '~icons/radix-icons/globe'



</script>

<template>
    <Select v-model="$i18n.locale">
        <SelectTrigger class="w-[180px] text-start flex flex-row justify-start items-center gap-2 ">
            <Globe class="h-4 w-4 mr-2 " />
            <SelectValue class=" flex-1" placeholder="{{ $t('language')}}" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem value="ar">
                    <span>Arabic</span>
                </SelectItem>
                <SelectItem value="en">
                    <span>English</span>
                </SelectItem>
                <SelectItem value="fr">
                    <span>French</span>
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>
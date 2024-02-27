<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { computed, toRefs } from 'vue'
import { useProviderStore } from '@/store/providerStore'
import { taskSchema } from '@/assets/data/schema'
import { type Task } from '@/assets/data/schema'
import { DotsHorizontalIcon } from '@radix-icons/vue'
import { Button } from '@/components/ui/button'
import { useToast } from '../toast'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableRowActionsProps {
  row: Row<Task>
}
const props = defineProps<DataTableRowActionsProps>()

// data
const { toast } = useToast()
let provider = computed(() => props.row.original)
let isOpen = ref(false)

const task = computed(() => taskSchema.parse(props.row.original))

const setVerification = async (id: string, status: string) => {
  try {
    await useProviderStore().acceptVerification(id, status).then((res) => {
      console.log(res)
      isOpen.value = false
      toast({
        variant: 'success',
        title: 'Provider Verified',
        description: 'Provider has been verified successfully ' + 'status: ' + status,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      useProviderStore().getAllProviders()


    })

  } catch (err) {
    console.log(err)
    toast({
      variant: 'error',
      title: 'Provider Verification Failed',
      description: (err as any)?.response?.data?.message || 'An error occurred while verifying provider',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }
}

const getImageIdVer = async () => {
  useProviderStore().getImageIdendity(provider.value.idVerification)
  isOpen.value = true
}

const closeDi = () => {
  isOpen.value = false
}
</script>

<template>
  <div class=" flex flex-row items-center justify-end gap-6 w-full h-fit ">

    <Dialog :open="isOpen" v-on:update:open="closeDi()" >
      <DialogTrigger v-show="Number(provider.hasSentVerification) === 1 && Number(provider.verified) === 0" as-child>
        <Button @click="getImageIdVer()" variant="outline">
          Verify identity
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-2xl  min-h-fit  p-4 ">
        <DialogHeader>
          <DialogTitle>Verify Idendity</DialogTitle>
          <DialogDescription>
            verify the identity of the user based on the picture provided
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-2 py-2">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right">
              Name
            </Label>
            <span class="col-span-3"> {{ provider.firstName }} {{ provider.lastName }} </span>
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right">
              State
            </Label>
            <span class="col-span-3"> {{ provider.stateId }} </span>
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="email" class="text-right">
              Email
            </Label>
            <span class="col-span-3"> {{ provider.email }} </span>
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="phone" class="text-right">
              Phone
            </Label>
            <span class="col-span-3"> {{ provider.phoneNumber }} </span>
          </div>

          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="phone" class="text-right top-0 ">
              Picture
            </Label>
            <!-- Image Show  -->
            <span class="col-span-3">
              <Dialog>
                <DialogTrigger class=" h-24 w-24 cursor-pointer " as-child>
                  <Loading v-if="useProviderStore().loadingImage" class=" h-24 w-24  " />
                  <div v-else class=" flex flex-row justify-start items-center w-full gap-2 ">
                    <img :src="useProviderStore().providerImages[0]" alt="Provider" class="h-24 w-24 rounded-lg" />
                    <img v-if="useProviderStore().providerImages[1]" :src="useProviderStore()?.providerImages[1]"
                      alt="Provider" class="h-24 w-24 rounded-lg" />
                  </div>
                </DialogTrigger>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription>
                  </DialogDescription>
                </DialogHeader>
                <DialogContent
                  class=" flex flex-col justify-center items-center h-screen border-none text-white bg-transparent backdrop-blur w-screen p-6 ">
                  <Carousel class="relative w-full max-w-xl ">
                    <CarouselContent>
                      <CarouselItem>
                        <img :src="useProviderStore().providerImages[0]" alt="Provider" class="rounded-lg" />
                      </CarouselItem>
                      <CarouselItem v-if="useProviderStore().providerImages[1]">
                        <img :src="useProviderStore().providerImages[1]" alt="Provider" class=" rounded-lg" />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious v-if="useProviderStore().providerImages[1]" />
                    <CarouselNext v-if="useProviderStore().providerImages[1]" />
                  </Carousel>
                </DialogContent>
              </Dialog>
            </span>
          </div>

        </div>
        <DialogFooter>
          <Button @click="setVerification(provider.idVerification, 'declined')" variant="destructive" class="  ">
            Declined
          </Button>
          <Button @click="setVerification(provider.idVerification, 'accepted')">
            Verify
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


    <!--   -->

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon class="h-4 w-4" />
          <span class="sr-only">Open menu</span>
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-[160px]">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <!-- <DropdownMenuSub>
        <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup :value="task.label">
            <DropdownMenuRadioItem v-for="label in labels" :key="label.value" :value="label.value">
              {{ label.label }}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuSub> -->
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

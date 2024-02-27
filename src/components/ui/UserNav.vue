<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                <Avatar class="h-9 w-9">
                    <AvatarImage src="/logo.svg" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" align="end">
            <DropdownMenuLabel class="font-normal flex">
                <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">
                        {{ useAuthStore().user.email }}
                    </p>
                    <p class="text-xs leading-none text-muted-foreground">
                     Super Admin
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="logout()">
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup >
import { useAuthStore } from '@/store/authStore';
import { useToast } from './toast';
import { useRouter } from 'vue-router';

// data
const { toast } = useToast()
const router = useRouter()

const logout = () => {
    toast({
        variant: 'success',
        title: 'Logout ',
        description: 'You have successfully logged out',
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
    useAuthStore().logout()
    router.push('/auth')
    
}

</script>

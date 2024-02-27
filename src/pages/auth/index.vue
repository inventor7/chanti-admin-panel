<template>
    
    <div class=" flex flex-col justify-center items-center w-full h-screen ">
        <Card class=" w-full max-w-md ">
            <CardHeader class="space-y-1">
                <CardTitle class="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Sign in to your admin account
                </CardDescription>
            </CardHeader>
            <CardContent>

                <form @submit="onSubmit" class="grid gap-6">
                    <div class="grid gap-2">
                        <FormField v-slot="{ componentField }" name="role">
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <Select v-bind="componentField">
                                    <FormControl>
                                        <SelectTrigger class="w-full">
                                            <SelectValue placeholder="Select a Role" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                Role
                                            </SelectLabel>
                                            <SelectItem value="admin">
                                                Administrator
                                            </SelectItem>
                                            <SelectItem value="editor">
                                                Editor
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        </FormField>

                    </div>

                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="shadcn" v-bind="componentField" autocomplete="email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>


                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="******" v-bind="componentField"
                                    autocomplete="current-password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <Button class=" w-full " type="submit">
                        <span v-if="loading" class="animate-spin mr-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" stroke-width="4" class="opacity-25"></circle>
                                <path d="M12 8v4m0 4v.01" stroke="currentColor" stroke-width="4"></path>
                            </svg>
                        </span>
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>


    </div>
</template>

<script setup >
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { toRefs } from 'vue'
import * as z from 'zod'
import { FormField } from '@/components/ui/form'
import { useToast } from '@/components/ui/toast'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'vue-router'
import { definePage } from 'vue-router/auto'

definePage({
    meta: {
        requiresGuest: true,
        requiresAuth: false,
    },
})


// data
const router = useRouter()
const { toast } = useToast()
const { login } = useAuthStore()
const { loading } = toRefs(useAuthStore())


// methods
const formSchema = toTypedSchema(z.object({
    email: z.string().email(),
    password: z.string().min(6),
    // role: z.string().refine(value => value !== '', {
    //     message: 'Please select a role.',
    // })
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
    try {
        await login(values).then(() => {
            toast({
                variant: 'success',
                title: 'Login Success',
                description: 'You have successfully logged in',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            router.push('/')
        })
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Login Failed',
            status: 'error',
            duration: 3000,
            isClosable: true,
            // conditional description
            description: error.response?.data?.message || 'An error occurred while logging in',
        })
    }
})

</script>

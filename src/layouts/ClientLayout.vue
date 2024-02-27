<template>
    <div  class=" flex flex-col justify-center items-center w-full h-full p-3 ">
      <div class=" flex-col flex w-full h-full border rounded-xl min-h-screen  ">
            <div class="border-b">
                <div class="flex h-16 items-center px-4">
                    <TeamSwitcher />
                    <MainNav class="mx-6" />
                    <div class="ml-auto flex items-center space-x-4">
                        <!-- <Search /> -->
                        <UserNav />
                    </div>
                </div>
            </div>
        <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
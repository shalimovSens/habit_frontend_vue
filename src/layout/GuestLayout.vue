<script setup lang="ts">
import GuestHeader from '@/components/layout/guest/GuestHeader.vue';
import GuestFooter from '@/components/layout/guest/GuestFooter.vue';

</script>

<template>
    <GuestHeader />
    <main class="main">
        <slot />
    </main>
    <GuestFooter />
</template>

<style scoped lang="sass">
@import "@/assets/styles/main"


.main 
    margin: 80px 0 100px
    flex: 1 1 auto
    @media (max-width: 768px)
        margin: 60px 0 85px
    @media (max-width: 500px)
        margin: 50px 0 75px
</style>
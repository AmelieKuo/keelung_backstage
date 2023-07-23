<script setup>
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
    <div class="w-full h-full min-h-100vh grid grid-cols-[300px_1fr] grid-rows-[13%_1fr_50px] p-25px">
        <div class="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col justify-center items-center">
            <h1 class="text-26px font-bold">王大明</h1>
            <span class="text-12px color-[#666]">基隆市環保局</span>
        </div>
        <Sidebar class="col-start-1 col-end-2 row-start-2 row-end-3 p-r-30px"/>
        <router-view class="col-start-2 col-end-3 row-start-1 row-end-4 p-30px w-full h-full bg-white border rounded-md" :class="{'bg-gradient-to-b from-[#F9E2CE] from 0% to-[#EBF2FF] to-100%': $route.meta.layout === 'white'}"/>
        <span class="text-12px color-[#666] col-start-1 col-end-2 row-start-3 row-end-4 flex justify-center items-center">基隆市政府青年義工公益服務媒合平台</span>
    </div>
</template>

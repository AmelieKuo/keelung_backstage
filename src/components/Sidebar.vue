<script setup>
import { reactive } from 'vue';

const menuItems = reactive([
  {
    index: '1',
    title: '使用者授權管理',
    items: [
      { index: '1-1', label: '角色權限管理' },
      { index: '1-2', label: '會員權限管理' },
      {
        index: '1-3',
        label: '頁面管理',
        items: [
          { index: '1-3-1', label: '元件管理' },
          { index: '1-3-2', label: '模組管理' },
        ],
      },
    ],
  },
  {
    index: '2',
    title: '組織管理',
    items: [
      {
        index: '2-1',
        label: '政府單位管理',
        items: [
          { index: '2-1-1', label: '基本資料維護' },
          { index: '2-1-2', label: '人員檔案' },
        ],
      },
      { index: '2-2', label: '義工運用單位管理' },
      {
        index: '2-3',
        label: '地區義工管理',
        items: [
          { index: '2-3-1', label: '基隆市義工管理' },
        ],
      },
    ],
  },
  {
    index: '3',
    title: '義工服務管理',
    items: [
      { index: '3-1', label: '服務需求管理' },
      { index: '3-2', label: '義工媒合結果' },
      { index: '3-2', label: '義工服務狀態管理' },

    ],
  },
  {
    index: '4',
    title: '車輛管理',
    items: [
      { index: '4-1', label: '車輛基本資料管理' }],
  },
  {
    index: '5',
    title: '義工服務報表管理',
    items: [
      { index: '5-1', label: '報表輸出列印' }],
  },
  {
    index: '6',
    title: '前台管理',
    items: [
      { index: '6-1', label: '最新消息管理' },
      { index: '6-2', label: '主視覺區塊管理' },
      { index: '6-3', label: '常見問題管理' },
      { index: '6-4', label: '友站連結管理' },
      { index: '6-5', label: '客服資訊管理' }],
  },
]);

console.log(menuItems);
</script>

<template>
    <nav class="w-full">
      <el-menu
        background-color="transparent"
        unique-opened="true"
        menu-trigger="hover"
        active-text-color="#000000"
        class="border-transparent"
      >
        <!-- 第一層 -->
        <template v-for="(menuItem, index) in menuItems" :key="index">
          <el-sub-menu :index="menuItem.index" v-if="menuItem.items && menuItem.items.length > 0">
            <template #title>
              <span class="text-black font-bold text-18px">{{ menuItem.title }}</span>
            </template>
            <!-- 第二層 -->
            <template v-for="(groupItem, itemIndex) in menuItem.items" :key="itemIndex">
              <el-sub-menu :index="groupItem.index" v-if="groupItem.items && groupItem.items.length > 0">
                <template #title>
                  <span class="text-16px font-bold">{{ groupItem.label }}</span>
                </template>
                <!-- 第三層 -->
                <el-menu-item v-for="(item, itemIndex) in groupItem.items" :key="itemIndex" :index="item.index" class="text-18px hover:bg-[#F6E7DC] hover:rounded-6px">
                  <template #title>
                        <span class="text-14px font-bold">{{ item.label }}</span>
                    </template>
                </el-menu-item>
              </el-sub-menu>

              <!-- 第二層 -->
              <el-menu-item v-else :key="groupItem.index" :index="groupItem.index" class="hover:bg-[#F6E7DC] hover:rounded-6px">
                <template #title>
                  <span class="text-16px font-bold">{{ groupItem.label }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>

          <!-- 第一層 -->
          <el-menu-item :index="menuItem.index" class="hover:bg-[#F6E7DC] hover:rounded-6px" v-else>
            <span class="text-black font-bold text-18px font-bold">{{ menuItem.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </nav>
</template>

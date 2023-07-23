<script setup>
import { ref } from 'vue';

const parentBorder = ref(false);
const childBorder = ref(false);
const tableData = [
  {
    id: '01',
    event: '照顧長者',
    skill: '電腦文書編輯',
    list: '義工保險名單',
    content: [
      {
        name: '王爺爺照顧',
        startDate: '2023/06/10 09:00',
        endDate: '2023/06/10 10:00',
        register: '9',
        match: '2',
        demand: '6',
      },
      {
        name: '李奶奶照顧',
        startDate: '2023/06/10 10:00',
        endDate: '2023/06/10 11:00',
        register: '10',
        match: '3',
        demand: '12',
      },
    ],
  },
  {
    id: '02',
    event: '陪伴學童',
    skill: '教育輔導',
    list: '義工保險名單',
    content: [
      {
        name: '陳小明陪伴',
        startDate: '2023/06/12 14:00',
        endDate: '2023/06/12 16:00',
        register: '5',
        match: '4',
        demand: '8',
      },
      {
        name: '林小華陪伴',
        startDate: '2023/06/12 15:00',
        endDate: '2023/06/12 17:00',
        register: '6',
        match: '5',
        demand: '10',
      },
    ],
  },
  {
    id: '03',
    event: '環境保護',
    skill: '清潔整理',
    list: '環保志工',
    content: [
      {
        name: '張阿姨協助',
        startDate: '2023/06/14 08:00',
        endDate: '2023/06/14 10:00',
        register: '3',
        match: '3',
        demand: '5',
      },
      {
        name: '劉叔叔協助',
        startDate: '2023/06/14 09:00',
        endDate: '2023/06/14 11:00',
        register: '4',
        match: '2',
        demand: '6',
      },
    ],
  },
  {
    id: '04',
    event: '社區活動',
    skill: '活動籌備',
    list: '義工保險名單',
    content: [
      {
        name: '黃大大籌備',
        startDate: '2023/06/15 13:00',
        endDate: '2023/06/15 17:00',
        register: '8',
        match: '8',
        demand: '15',
      },
      {
        name: '林小玲籌備',
        startDate: '2023/06/15 14:00',
        endDate: '2023/06/15 18:00',
        register: '9',
        match: '7',
        demand: '20',
      },
    ],
  },
  {
    id: '05',
    event: '老人院關懷',
    skill: '陪伴聊天',
    list: '義工保險名單',
    content: [
      {
        name: '劉阿公陪伴',
        startDate: '2023/06/16 10:00',
        endDate: '2023/06/16 11:00',
        register: '2',
        match: '1',
        demand: '4',
      },
      {
        name: '黃阿嬤陪伴',
        startDate: '2023/06/16 11:00',
        endDate: '2023/06/16 12:00',
        register: '3',
        match: '2',
        demand: '6',
      },
      {
        name: '陳伯伯寫書法',
        startDate: '2023/06/12 13:00',
        endDate: '2023/06/12 16:00',
        register: '0',
        match: '1',
        demand: '2',
      },
    ],
  },
];

</script>

<template>
    <section>
        <el-row>
            <h2>服務媒合結果</h2>
            <el-button bg="true" size="large">新增</el-button>
        </el-row>
        <el-row>
            <div class="group">
                <label for="">活動時間</label>
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="請選擇"
                    size="large"
                />
                <span>~</span>
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="請選擇"
                    size="large"
                />
            </div>
            <div class="group">
                <label for="">報名時間</label>
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="請選擇"
                    size="large"
                />
                <span>~</span>
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="請選擇"
                    size="large"
                />
            </div>
        </el-row>
        <el-row>
            <el-select v-model="value" class="m-2" placeholder="啟用狀態" size="large">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
            </el-select>
            <el-select v-model="value" class="m-2" placeholder="專長" size="large">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
            </el-select>
            <el-input
                v-model="input1"
                class="w-50 m-2"
                placeholder="請輸入關鍵字"
                size="large"
                />
                <el-button bg="true" size="large">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" opacity="0.8" d="M21.7008 19.0237L17.4165 14.7394C17.2231 14.546 16.961 14.4386 16.686 14.4386H15.9855C17.1716 12.9216 17.8763 11.0137 17.8763 8.93815C17.8763 4.00068 13.8756 0 8.93815 0C4.00068 0 0 4.00068 0 8.93815C0 13.8756 4.00068 17.8763 8.93815 17.8763C11.0137 17.8763 12.9216 17.1716 14.4386 15.9855V16.686C14.4386 16.961 14.546 17.2231 14.7394 17.4165L19.0237 21.7008C19.4276 22.1047 20.0808 22.1047 20.4804 21.7008L21.6965 20.4847C22.1004 20.0808 22.1004 19.4276 21.7008 19.0237ZM8.93815 14.4386C5.90004 14.4386 3.43775 11.9806 3.43775 8.93815C3.43775 5.90004 5.89574 3.43775 8.93815 3.43775C11.9763 3.43775 14.4386 5.89574 14.4386 8.93815C14.4386 11.9763 11.9806 14.4386 8.93815 14.4386Z" fill="black"/>
                    </svg>
                </el-button>
            </el-row>
            <el-table :data="tableData" :show-header="false" style="width: 100%">
                <!-- 子選單 -->
                <el-table-column type="expand" class="childRow" :row-style="{ padding: '0px' }">
                    <template #default="props">
                        <el-table :data="props.row.content" class="childRow" :cell-style="{ borderColor: 'transparent', background: '#F6F6F6' }" :header-cell-style="{ borderColor: 'transparent', background: '#F6F6F6' }">
                            <el-table-column label="活動場次名稱" prop="name" />
                            <el-table-column label="活動起迄日期" prop="startDate,endDate">
                                <template #default="scope">
                                    {{ scope.row.startDate }} ~ {{ scope.row.endDate }}
                                </template>
                            </el-table-column>
                            <el-table-column label="報名人數" prop="register" />
                            <el-table-column label="已媒合 / 需求人數" prop="match,demand">
                                <template #default="scope">
                                    {{ scope.row.match }} / {{ scope.row.demand }}
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
            <el-table-column prop="id" label="ID">
                <template #default="scope">
                    ID：{{ scope.row.id }}
                </template>
            </el-table-column>
            <el-table-column prop="event" label="event">
                <template #default="scope">
                    活動名稱：{{ scope.row.event }}
                </template>
            </el-table-column>
            <el-table-column prop="skill" label="skill">
                <template #default="scope">
                    活動所需專長：{{ scope.row.skill }}
                </template>
            </el-table-column>
            <el-table-column prop="address" label="listBtn">
                <template #default="scope">
                    <el-button class="yellow" type="primary">義工保險名單</el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>

<style scoped>
h2{
    font-size: 22px;
    font-weight: bold;
}
.el-button{
    background: white;
    color:black;
    opacity: 1;
    border: transparent;
}

.el-button:hover{
    opacity: 0.8;
    background: rgb(158, 158, 158);
    color:black;
}
.el-row{
    margin-bottom: 30px;
    gap: 30px;
    align-items: center;
}
label{
    margin-right: 10px;
}
.yellow{
    background: #F8AE1A;
    color: white;
}
.yellow:hover{
    opacity: 0.8;
    background: #F8AE1A;
    color: white;
};
.el-table{
    border-radius: 6px;
}
.el-table__expanded-cell, .childRow{
    background: #F6F6F6;
    box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.25) inset;
}
.el-table tr{
    background: transparent;
}
</style>

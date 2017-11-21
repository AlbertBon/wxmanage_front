<template>
    <div class="welcome">
        <table-page
            :rowClick="rowClick"
            :sortChange="sortChange"
            :tableData="tableData"
            :pageSizes="pageSizes"
            :columns="columns"
        ></table-page>
    </div>
</template>

<script>
import page from '../common/Page'
import axios from 'axios'
export default {
    data() {
        return {
            code: 200,
            tableData: [],
            pageCount:10,
            pageSizes:[5,10,20],
        //   :fixed="column.fixed"
        //   :prop="column.value"
        //   :label="column.label"
        //   :key="column.value"
        //   :width="column.width"
        //   :sortable="column.sortable"
        //   :formatter="column.formatter"
        //   :class-name="column.className"
            columns:[
                {
                    label:"名称",
                    // fixed:"column.fixed",
                    value:"appName",
                    // width:"column.width",
                    // sortable:"column.sortable",
                    // formatter:"column.formatter",
                    className:"appName",
                }
            ]
        }
    },
    components: {
      'tablePage':  page,
    },
    computed: {
        
    },
    created() {
        console.log('加载wechatList')
        axios.get('http://localhost:8081/wxmanage/wechat/wechatList')
            .then(response => {
                console.log(response)
                this.response_code = response.data.response_code;
                this.tableData = response.data.content;
            })
    },
    methods: {
        selectWechat() {

        },
        sortChange(){

        },
        rowClick(){

        }
    }
}
</script>
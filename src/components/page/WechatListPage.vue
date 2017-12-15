<template>
    <div class="welcome">
        <table-page
            :rowClick="rowClick"
            :sortChange="sortChange"
            :tableData="tableData"
            :pageSizes="pageSizes"
            :columns="columns"
            :pageSize="params.pageSize"
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
            pageSizes:[10,20],
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
            ],
            params:{
                pageSize:5,
                pageNum:2
            }
        }
    },
    components: {
      'tablePage':  page,
    },
    computed: {
        
    },
    created() {
        console.log('加载wechatList')
        this.$axios.post('http://localhost:8081/wxmanage/wechat/wechatList',this.params)
        .then(response => {
                console.log(response)
                this.response_code = response.data.response_code;
                this.tableData = response.data.content.list;
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
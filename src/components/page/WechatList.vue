<template>
    <div class="welcome">

        <el-table :data="tableData" style="width:100%">
            <el-table-column label="名称" >
                <template slot-scope="scope">
                    <el-tag>{{scope.row.appName}} </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="appid">
                <template slot-scope="scope">
                    <p>{{scope.row.appId}} </p>
                </template>
            </el-table-column>
            <el-table-column label="appsecret">
                <template slot-scope="scope">
                    <p>{{scope.row.appSecret}} </p>
                </template>
            </el-table-column>
            <el-table-column label="创建日期" >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right">
                <template slot-scope="scope" >
                    <template v-if="scope.row.isCurrent==0">
                        <el-button size="mini" @click="selectWechat">激活 </el-button>
                    </template>
                    <template v-else>
                        <el-button size="mini" @click="selectWechat" disabled>激活 </el-button>
                    </template>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev,pager,next" :total="pageCount"></el-pagination>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            code: 200,
            tableData: [],
            pageCount:10
        }
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

        }
    }
}
</script>
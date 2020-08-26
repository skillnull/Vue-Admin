<template>
    <div class="login-box">
        <el-card class="box-card" shadow="never" :body-style="{padding: '40px 40px 20px'}">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="rule-form">
                <el-form-item label="用户" prop="username">
                    <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import {postRequest} from '../../services/request'
import {getUrl} from '../../config/urlConfig'

export default {
    data () {
        return {
            ruleForm: {
                username: '',
                pwd: ''
            },
            rules: {
                username: [
                    {trigger: 'blur', required: true, message: '请输入用户名'}
                ],
                pwd: [
                    {trigger: 'blur', required: true, message: '请输入密码'}
                ]
            }
        }
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    postRequest(getUrl('common', 'login'), {
                        username: this.ruleForm.username,
                        pwd: this.ruleForm.pwd
                    }, true).then((data) => {
                        if (data.status === 1) {
                            this.$router.push('/')
                        } else {
                            this.$message('登陆失败')
                        }
                    })
                } else {
                    return false
                }
            })
        },
        resetForm (formName) {
            this.$refs[formName].resetFields()
        }
    }
}
</script>
<style lang="scss" scoped>
    .login-box {
        width: 400px;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
    }
</style>

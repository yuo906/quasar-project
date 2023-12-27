<template>
    <div class="q-pa-md">
        <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Register" />
        </q-breadcrumbs>
    </div>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 600px">
        <form @submit.prevent.stop="registerUser" @reset.prevent.stop="onReset" class="q-gutter-md">
            <q-title class="text-h3 q-pb-md">Register</q-title>
            <q-input ref="name" filled v-model="formData.name" label="Your name *" hint="Name and surname" lazy-rules
                required />

            <q-input ref="email" filled type="email" v-model="formData.email" label="Your email *" lazy-rules required />

            <q-input ref="account" filled type="text" v-model="formData.account" label="Your account *" lazy-rules
                required />

            <q-input ref="password" filled type="password" v-model="formData.password" label="Your password *" lazy-rules
                required />

            <q-input ref="passwordConfirm" filled type="password" v-model="formData.passwordConfirm"
                label="Your password again *" lazy-rules required />

            <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                account: '',
                password: '',
                passwordConfirm: '',
            },
            formHasError: false,
        }
    },

    methods: {
        registerUser() {
            // 驗證資料
            if (!this.validateForm()) {
                // 如果表單驗證失敗，可以進行一些處理，例如顯示錯誤訊息或者標示錯誤的欄位
                this.formHasError = true;
                return;
            }

            // 表單驗證通過，準備將資料送到後端
            // 在這裡你可以使用 Axios 或其他 HTTP 客戶端庫將資料送到後端 API
            // 這裡僅是示範，請替換成實際的後端 API 請求邏輯
            console.log('準備註冊使用者', this.formData);

            // 清空表單資料
            this.formData = {
                name: '',
                email: '',
                account: '',
                password: '',
            };

            // 可以在這裡跳轉到成功註冊的頁面或顯示成功註冊的訊息
        },

        validateForm() {
            const { name, email, account, password } = this.formData

            if (!name || !email || !account || !password) {
                console.log('THERE are ALL REQUIRED');
                return false;
                // this.$q.notify({
                //     message: 'THERE IS ALL REQUIRED',
                // })
            }
            if (password !== passwordConfirm) {
                console.log('密碼不一致');
                return false;
            }

            return true
        },

        onReset() {
            this.formData = {}
            this.formHasError = false;
        }
    }
}
</script>

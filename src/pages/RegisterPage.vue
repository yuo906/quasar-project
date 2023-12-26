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
            },
            passwordConfirm: false,
            formHasError: false,
        }
    },

    methods: {
        registerUser() {

        },

        onReset() {
            this.formData = {};
        }
    }
}
</script>

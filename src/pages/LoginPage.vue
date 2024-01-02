<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Login" />
    </q-breadcrumbs>
  </div>
  <!-- <div class="q-pa-md q-gutter-sm" v-for="(msg, i) in data" :key='i'>
    <q-btn color="primary" :label="msg" />
  </div> -->

  <div class="q-pa-md">
    <q-form @submit="onSubmit">
      <q-card class="q-pa-xl text-center">
        <q-avatar size="100px" style="background-image:url('https://i.imgur.com/UDfWZmJ.jpg')">
          <img src="https://i.imgur.com/09cxJpj.png" />
        </q-avatar>
        <div class="q-gutter-md">
          <q-input label="Name" type="text" v-model="name" v-bind="nameAttrs" />
          <div>{{ errors.name }}</div>
          <q-input label="Email" type="email" v-model="email" v-bind="emailAttrs" />
          <div>{{ errors.email }}</div>

          <q-input label="Username" type="text" v-model="username" v-bind="usernameAttrs" />
          <div>{{ errors.username }}</div>

          <q-input label="Password" type="password" v-model="password" v-bind="passwordAttrs" />
          <div>{{ errorBag.password }}</div>

          <q-input label="Age" type="number" v-model="age" v-bind="ageAttrs" />
          <div>{{ errors.age }}</div>
          <q-btn color="primary" type="submit" label="Submit" />
          <q-btn type="button" @click="resetForm()" label="Reset" />
        </div>
      </q-card>
    </q-form>
  </div>

  <!-- <validation-observer ref="commentForm">
    <q-form action="" id="commentForm" style="max-width:500px;" @submit.stop="onSubmit">
      <q-card class="q-pa-xl text-center">
        <q-avatar size="100px" style="background-image:url('https://i.imgur.com/UDfWZmJ.jpg')">
          <img src="https://i.imgur.com/09cxJpj.png" />
        </q-avatar>

        <div class="flex column q-gutter-md">
          <validation-provider name="Name" rules="required" v-slot="{ errors }">
            <q-input label="Name" v-model="name" />
            {{ v }}
            <span v-if>{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider name="Age" rules="required">
            <q-input label="Age" v-model="age" />
            <span>{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider name="Email" rules="required">
            <q-input label="Email" v-model="email" />
            <span>{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider name="Username" rules="required">
            <q-input type="text" name="username" label="Username" v-model="username" />
          </validation-provider>
          <validation-provider name="Username" rules="required">
            <q-input type="password" name="password" label="Password" v-model="password" />
          </validation-provider>

          <q-btn type="submit" color="primary">Login</q-btn>
        </div>

        <div class="flex justify-between items-center">
          <q-checkbox v-model="right" label="Remember me" />
          <div>Forgot <a href="">password</a>?</div>
        </div>
      </q-card>
    </q-form>
  </validation-observer> -->
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
// import validateInput from './validateInput.vue';

const { errors, handleSubmit, defineField, resetForm, errorBag } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().min(6).required(),
    age: yup.number().min(0).max(100).required(),
  }),
});


// Creates a form context
// This component now acts as a form
// Usually you will destruct the form context to get what you need

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
},
  // ({ errors }) => {
  //   const firstError = Object.keys(errors)[0];
  //   const el = document.querySelector(`[name="${firstError}"]`);
  //   el?.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  //   el.focus();
  // }
)

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');
const [age, ageAttrs] = defineField('age');
</script>


<style lang="scss" scoped>
#commentForm {
  background-image: url('https://i.imgur.com/UDfWZmJ.jpg');
}
</style>





<script>
// import { defineComponent, ref, onMounted } from 'vue'

// export default defineComponent({

//   setup() {
//     const data = ref(null);
//     const name = ref(null);
//     const age = ref(null);
//     const email = ref(null);
//     const username = ref(null);
//     const password = ref(null);

//     onMounted(() => {
//       const url = 'https://api.openbrewerydb.org/breweries/5494';
//       fetch(url)
//         .then(response => response.json())
//         .then(result => {
//           data.value = result;
//         })
//         .catch(error => {
//           console.error('資料取得失敗:', error);
//         });
//     });

//     const onSubmit = () => {
//       let validateSuccess = await this.$refs.download_form.validate()
//       console.log('Form submitted');
//       this.$q.notify({
//         color: 'green-4',
//         textColor: 'white',
//         icon: 'cloud_done',
//         message: 'Form submitted'
//       })
//     };
//     return {
//       data,
//       slide: ref('style'),
//       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       name,
//       age,
//       email,
//       username,
//       password,
//       onSubmit,
//     }
//   },
// },
// )
// </script>


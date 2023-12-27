<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Login" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md q-gutter-sm" v-for="(msg, i) in data" :key='i'>
    <q-btn color="primary" :label="msg" />
  </div>


  <div class="q-pa-md" style="max-width: 300px">
    <q-input ref="input" filled v-model="model" :rules="[val => !!val || 'Field is required']" />

    <q-input filled v-model="model" label="Type here" bottom-slots hint="Max 3 characters"
      error-message="Please use maximum 3 characters" :error="!isValid" />

  </div>

  <q-separator class="q-my-md" />

  <q-form action="" id="commentForm" style="max-width:500px;">
    <q-card class="q-pa-xl text-center" >
      <q-avatar size="100px" style="background-image:url('https://i.imgur.com/UDfWZmJ.jpg')">
        <img src="https://i.imgur.com/09cxJpj.png" />
      </q-avatar>
      <div class="flex column q-gutter-md">
        <q-input type="text" name="username" id="username" label="Username" />
        <q-input type="password" name="password" id="password" label="Password" />
        <q-btn color="primary">Login</q-btn>
      </div>

      <div class="flex justify-between items-center">
        <q-checkbox v-model="right" label="Remember me" />
        <div>Forgot <a href="">password</a>?</div>
      </div>
    </q-card>
  </q-form>

  <q-separator class="q-my-md" />

  <q-form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
    <q-input ref="name" name="name" v-model="name" color="primary" label="Full name" filled clearable lazy-rules
      :rules="[val => !!val || 'Field is required']" />
    <q-input ref="phone" name="phone" v-model="phone" color="primary" label="Phone" filled clearable
      :rules="[val => val && val.length == 10 || 'Please type something.This is not a phone number']" />
    <q-input name="add" v-model="add" color="primary" label="Address" filled clearable />
    <div>
      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>

  <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
    <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
    <q-separator />
    <q-card-section class="row q-gutter-sm items-center">
      <div v-for="(item, index) in submitResult" :key="index"
        class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap">{{ item.name }} = {{
          item.value }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const data = ref(null);

    onMounted(() => {
      const url = 'https://api.openbrewerydb.org/breweries/5494';
      fetch(url)
        .then(response => response.json())
        .then(result => {
          data.value = result; // 將取得的資料放入 data 變數中
        })
        .catch(error => {
          console.error('資料取得失敗:', error);
        });
    });
    return {
      data,
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  data() {
    return {
      name: null,
      phone: null,
      add: '',
      submitResult: [],
      model: '',
      right: false,
    }
  },
  computed: {
    isValid() {
      return this.model.length <= 3
    }
  },
  methods: {
    onSubmit(evt) {

      this.$refs.name.validate()
      this.$refs.phone.validate()

      if (this.$refs.name.hasError || this.$refs.phone.hasError) {
        this.formHasError = true
      } else {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Submitted'
        })
      }

      const formData = new FormData(evt.target)

      for (const [name, value] of formData.entries()) {
        this.submitResult.push({
          name,
          value
        })
      }

      // console.log(this.submitResult);

      // this.submitResult = submitResult
    },
    onReset() {
      this.name = null,
        this.phone = null,

        this.$refs.name.resetValidation()
      this.$refs.phone.resetValidation()
    }
  }
},
)
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}

#commentForm {
  background-image: url('https://i.imgur.com/UDfWZmJ.jpg');
}
</style>

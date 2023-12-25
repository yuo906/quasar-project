<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Login" />
    </q-breadcrumbs>
  </div>
  {{ data.message }}
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
})
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>

<template>
    <q-input name="search" v-model="search" color="primary" filled clearable />
    <div class="row">
        <div class="q-pa-md q-gutter-md" v-for="(blog, i) in filteredBlogs" :key="i">
            <q-card class="my-card col">
                <img src="https://picsum.photos/300/200">

                <q-card-section>
                    <span>文章{{ blog.id }}</span>
                    <div class="text-h6 ellipsis">{{ blog.title }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none ellipsis-3-lines">
                    {{ blog.body }}
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
  
<script>
import searchMixin from '../mixins/searchMixin.js';

export default {
    mixins: [searchMixin],
    data() {
        return {
            blogs: [], // 初始化你的博客數據
        };
    },
    mounted() {
        const url = 'http://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.blogs = result; // 將取得的資料放入 data 變數中
            })
            .catch(error => {
                console.error('資料取得失敗:', error);
            });
    }
};
</script>

<style lang="scss" scoped>
.my-card {
    max-width: 300px;
    height: 400px;
}
</style>>

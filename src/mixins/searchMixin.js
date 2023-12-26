export default {
  data() {
    return {
      search: "", // 初始化搜索關鍵字
    };
  },
  computed: {
    filteredBlogs() {
      if (!this.search || !this.blogs) {
        return this.blogs;
      }
      const searchTerm = this.search.toLowerCase();
      return this.blogs.filter((blog) => {
        return (
          blog.title.includes(searchTerm) ||
          blog.body.toLowerCase().includes(searchTerm)
        );
      });
    },
  },
};

<template>
  <div>
    <h1>List</h1>
    <el-table
      :data="posts.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="Название"
      />

      <el-table-column label="Дата">
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span  style="margin-left: 10px">{{new Date(date).toLocaleString()}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Просмотры">
        <template slot-scope="{row: {views}}">
          <i class="el-icon-view"></i>
          <span  style="margin-left: 10px">{{views}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Комментарии">
        <template slot-scope="{row: {comments}}">
          <i class="el-icon-message"></i>
          <span  style="margin-left: 10px">{{comments.length}}</span>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot-scope="{row}">

          <el-button
            size="mini"
            class="btn-icon-mobile"
            @click="handleEdit(row._id)"
            circle
          >
            <i class="el-icon-edit"></i>
          </el-button>
          
          <el-button
            size="mini"
            class="btn-icon-desktop"
            @click="handleEdit(row._id)"
          >
            Редактировать
          </el-button>

          <el-button
            size="mini"
            type="danger"
            class="btn-icon-mobile"
            @click="handleDelete(row._id)"
            circle
          >
            <i class="el-icon-delete"></i>
          </el-button>

          <el-button
            size="mini"
            type="danger"
            class="btn-icon-desktop"
            @click="handleDelete(row._id)"
          >
            Удалить
          </el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],

  data() {
    return {
      search: ''
    }
  },

  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin')
    return {posts}
  },

  methods: {
    handleEdit(id) {
      this.$router.push(`/admin/post/${id}`)
    },

    async handleDelete(id) {
      try {
        await this.$confirm('Пост будет удалён. Продолжить?', 'Внимание', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отмена',
          type: 'warning'
        })

        await this.$store.dispatch('post/remove', id)
        this.posts = this.posts.filter(p => p._id !== id) // в массиве остются только те, что не равняются _id
        this.$message.success('Пост удалён')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@media screen and (max-width: 1024px)
  .el-button.btn-icon-mobile
    display: block
  .el-button.btn-icon-desktop
    display: none
@media screen and (min-width: 1025px)
  .el-button.btn-icon-mobile
    display: none
  .el-button.btn-icon-desktop
    display: block
</style>

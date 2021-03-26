<template>
  <div>
    <h2 class="title-table font-how-h2 mb2 mt3">Таблица постов</h2>

    <TableGridResultCh
      :data_tables="posts"
      :fixed_first_col="fixed_first_col"
      :fixed_last_col="fixed_last_col"
      :onlyNeedCenterCols="onlyNeedCenterCols"
    >
      <template #comments="{ cell }">
        <i class="el-icon-message"></i>
        <span  style="margin-left: 10px">{{cell.length}}</span>
      </template>
      <template #date="{ cell }">
        <i class="el-icon-time"></i>
        <span  style="margin-left: 10px">{{ cell | date('date') }}</span>
      </template>
      <template #views="{ cell }">
        <i class="el-icon-view"></i>
        <span  style="margin-left: 10px">{{ cell }}</span>
      </template>
    </TableGridResultCh>

    <el-table
      :data="posts"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="Название"
      />

      <el-table-column label="Дата">
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span  style="margin-left: 10px">{{date | date('date')}}</span>
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

      <el-table-column label="Действия" align="right">
        <template slot-scope="{row}">

          <el-tooltip class="item" effect="dark" content="Редактировать" placement="top">
            <el-button
              size="mini"
              @click="handleEdit(row._id)"
              icon="el-icon-edit"
              circle
            />
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="Удалить" placement="top-end">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(row._id)"
              circle
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </el-tooltip>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  head: {
    title: `Список постов | ${process.env.appName}`
  },
  layout: 'layout-main-challenges',
  middleware: ['admin-auth'],

  data() {
    return {
      fixed_first_col: { key: 'title', title: 'Название', sort: 'text' },
      fixed_last_col: { key: 'test', title: 'Действия' },
      onlyNeedCenterCols: [
        { key: 'date', title: 'Дата', sort: 'text', formatter: 'datetime'},
        { key: 'views', title: 'Просмотры', sort: 'numbers' },
        { key: 'comments', title: 'Комментарии', sort: 'numbers-length' },
      ],
    }
  },

  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
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

</style>

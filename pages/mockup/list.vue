<template>
  <div>
    <div class="title-block df fwrap jcsb">
      <h2 class="title-table font-how-h2 mb2 mt3">{{ modeShowTable ? 'Таблица опубликованных постов' : 'Таблица удаленных постов' }}</h2>
      <span @click="modeShowTable = !modeShowTable">{{ modeShowTable ? 'Показать удалённые посты' : 'Показать опубликованные посты' }}</span>
    </div>

    <TableGridResultCh
      :data_tables="modeShowTable ? posts : removedPosts"
      :fixed_first_col="fixed_first_col"
      :onlyNeedCenterCols="onlyNeedCenterCols"
      :fixed_last_col="fixed_last_col"
    >
      <!-- slots for center_cols -->
      <template #comments="{ cell }">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{cell.length}}</span>
      </template>
      <template #date="{ cell }">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ cell | date('date') }}</span>
      </template>
      <template #views="{ cell }">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ cell }}</span>
      </template>

      <!-- slot for fixed_last_col -->
      <template #operations="{ row_id }">
        <el-tooltip
          v-if="modeShowTable"
          class="item"
          effect="dark"
          content="Редактировать"
          placement="top"
        >
          <el-button
            size="mini"
            @click="handleEdit(row_id)"
            icon="el-icon-edit"
            circle
          />
        </el-tooltip>

        <el-tooltip
          v-if="modeShowTable"
          class="item"
          effect="dark"
          content="Удалить"
          placement="top-end"
        >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(row_id)"
            circle
          >
            <i class="el-icon-delete"></i>
          </el-button>
        </el-tooltip>

        <el-tooltip
          v-if="!modeShowTable"
          class="item"
          effect="dark"
          content="Восстановить"
          placement="top-end"
        >
          <el-button
            size="mini"
            @click="handleRecovery(row_id)"
            circle
          >
            <i class="el-icon-refresh"></i>
          </el-button>
        </el-tooltip>
      </template>
    </TableGridResultCh>
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
      modeShowTable: true, // 'allPost' || 'removedPosts'

      // props для таблиц
      fixed_first_col: { key: 'title', title: 'Название', sort: 'text', maxWidthDesktop: '.25fr', phoneUnfixed: true }, //
      fixed_last_col: { title: 'Действия', maxWidthTablet: '11rem', align: 'center', maxWidthDesktop: '.25fr', tabletUnfixed: true }, // если нет key, значит подставится slot с кнопками, maxWidthSmPhone: '3rem'
      onlyNeedCenterCols: [
        { key: 'date', title: 'Дата', sort: 'text', formatter: 'datetime', align: 'center' },
        { key: 'views', title: 'Просмотры', sort: 'numbers', align: 'center' },
        { key: 'comments', title: 'Комментарии', sort: 'numbers-length', align: 'center' },
      ],
    }
  },

  async asyncData({ store }) {
    let posts = await store.dispatch('post/fetchAdmin')
    let removedPosts = await store.dispatch('post/fetchAdminRemovedPosts')
    return { posts, removedPosts }
  },

  methods: {
    handleEdit(id) {
      this.$router.push(`/mockup/post/${id}`)
    },

    async handleDelete(id) {
      try {
        await this.$confirm('Пост будет удалён. Продолжить?', 'Внимание', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отмена',
          type: 'warning'
        })

        await this.$store.dispatch('post/remove', id)
        this.removedPosts.push(this.posts.find(p => p._id === id)) // копируем в локальный массив опубликованных постов
        this.posts = this.posts.filter(p => p._id !== id) // в массиве остются только те, что не равняются _id
        this.$message.success('Пост удалён')
      } catch (error) {
        console.log(error)
      }
    },
    async handleRecovery(id) {
      try {
        await this.$confirm('Пост будет Восстановлен. Продолжить?', 'Внимание', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отмена',
          type: 'warning'
        })

        await this.$store.dispatch('post/recovery', id)
        this.posts.push(this.removedPosts.find(p => p._id === id)) // копируем в локальный массив удаленных постов
        this.removedPosts = this.removedPosts.filter(p => p._id !== id) // в массиве остются только те, что не равняются _id
        this.$message.success('Пост восстановлен')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.title-block
  align-items: flex-end
  h2, span
    margin-bottom: 2rem
  span
    font-size: 1.4rem
    font-weight: normal
    // font-style: italic
    cursor: pointer
    color: $blue
</style>

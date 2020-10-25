<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>id: {{$route.params.id}}</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>Post with id: {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>

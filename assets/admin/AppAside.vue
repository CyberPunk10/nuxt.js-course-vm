<template>
  <el-menu
    router
    :default-active="$route.path"
    :style="{height: '100%'}"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Создать пост</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/users">
      <i class="el-icon-service"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-setting"></i>
      <span>Выйти</span>
    </el-menu-item>
    <el-menu-item index="/challenges">
      <i class="el-icon-back"></i>
      <span>Вернуться</span>
    </el-menu-item>
  </el-menu>
</template>

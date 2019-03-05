<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time">计划板</i>
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">
                首页
            </router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar/>
      </div>
      <!-- <div class="col-sm-9">
         <sidebar/>
      </div> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

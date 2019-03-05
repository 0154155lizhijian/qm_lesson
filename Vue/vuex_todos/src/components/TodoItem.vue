<template>
    <!-- 有三个状态 未完成 已完成 编辑中 -->
    <li class="todo" :class="{compled: todo.done,editing:editing}">
        <div class="view">
            <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo(todo)">
            <label for="" v-text="todo.text"></label>
        </div>
    </li>
</template>


<script>
import {mapActions} from 'vuex';
export default {
    props:['todo'],
    data(){
        return{
            editing:false
        }
    },
    methods:{
        ...mapActions(
            'toggleTodo'
        )
    }
}
</script>

<style>

</style>

	


    <template>
<!-- 状态：未完成 已完成 编辑中 -->
    <li class="todo" 
    :class="{completed: todo.done,editing: editing}">
    <!-- 动态输出类名 -->
        <div class="view">
            <input type="checkbox" class="toggle"
            :checked= "todo.done" @change="toggleTodo(todo)">
            <label v-text= "todo.text">
            </label>
        </div>
    </li>
</template>

<script>
import { mapActions } from 'vuex';
// mapActions是vue 的一个api
export default {
    props:['todo'],
    data() {
        return{
            editing:false
        }
    },
    methods: {
        ...mapActions([ //...展开运算符
            'toggleTodo'
        ])
    }
}
</script>


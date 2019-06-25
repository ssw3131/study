<template>
<div class="container todo">
  <h2>Todo List</h2>
  <div class="input-group p_create">
    <input type="text" class="form-control" placeholder="할일을 입력하세요" v-model="name" v-on:keyup.enter="createTodo(name);">
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" v-on:click="createTodo(name);">추가</button>
    </span>
  </div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(todo, k) in todos" v-bind:key="k">
      {{ todo }}
      <div class="btn-group pull-right p_delete">
        <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          더보기<span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#" v-on:click="deleteTodo(k);">삭제</a></li>
        </ul>
      </div>
    </li>
  </ul>
  <div class="">
    <button class="btn btn-default p_reset" type="button" v-on:click="reset();">초기화</button>
  </div>
</div>
</template>

<script>
const log = console.log;
// const axios = require('axios');

export default {
  name: 'TodoPage',
  data() {
    return {
      uuid: 0,
      name: null,
      todos: {}
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      // axios.get('static/todos.json')
      //   .then((r) => {
      //     this.todos = r.data.data;
      //   });
      log(this.todos = JSON.parse(localStorage.getItem('todos')) || {});
    },
    deleteTodo(id) {
      console.log(id);
      this.$delete(this.todos, id);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      // this.todos.splice(i, 1);
    },
    createTodo(name) {
      if (name != null) {
        this.uuid++;
        this.todos[this.uuid] = name;
        localStorage.setItem('todos', JSON.stringify(this.todos));

        // this.todos.push({
        //   name: name
        // });
        this.name = null;
      }
    },
    reset() {
      this.uuid = 0;
      this.todos = {};
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');

$gap: 10px;

h2 {
  font-family: 'Amatic SC', cursive;
  font-size: 120px;
}

.todo {
  .p_create {
    margin-bottom: $gap;
  }

  .p_delete {
    font-size: 12px;
    line-height: 1;
  }

  .p_reset {
    margin-bottom: $gap;
  }
}
</style>

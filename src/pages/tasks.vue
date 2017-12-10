
<template>
<div class="container col-sm-8 col-sm-offset-2">
  <div id="taskApp">
    <h1>Todo Task App</h1>
    &nbsp;

    <div class="panel panel-default">
      <form @submit="addTask">
        <div class="col-sm-8">
          <input type="text" class="from-control" v-model='tasks.name'>
        </div>
        <div class="col-sm-4">
          <input type="submit" value="Add Task" class="btn btn-primary btn-block">
        </div>
      </form>
    </div>
    <table class="table">
      <thead>
        <th>Done</th>
        <th>Task Name</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.index">
          <td> <input type="checkbox" v-model='task.done'></td>
          <td><span :class="{taskDone:task.done}">{{task.name}}</span></td>
          <td><button class="btn btn-danger btn-block" @click="deleteTask(task)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  naem: 'tasks',
  data () {
    return {
      tasks: [
        { name: 'task first', done: false },
        { name: 'food', done: false },
        { name: 'eat', done: false }
      ]
    }
  },
  methods: {

    addTask (e) {
      e.preventDefault()
      this.tasks.push({
        name: this.tasks.name,
        done: false
      })
    },

    deleteTask (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
}
</script>


<style scoped>
  .taskDone{
    text-decoration: line-through;
  }
</style>

<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
    <span class="label label-danger">Danger</span>
  </div>
</template>

<script>
  import { alert } from 'vue-strap'
//  import Alert from 'vue-strap/src/alert'
  import Toolbar from './components/Toolbar'
  import NotesList from './components/NotesList'
  import Editor from './components/Editor'
  import {initStore} from './store/actions'

  export default {
    vuex: {
      actions: {
        initStore
      }
    },
    components: {
      alert,
      Toolbar, NotesList, Editor
    },
    ready () {
      this.initStore()
    }
  }
</script>

<style>
  html, #app {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
</style>

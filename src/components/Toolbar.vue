<template>
  <div id="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png"></i>
    <i @click="newNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote && activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-cog"></i>
  </div>
</template>

<script>
  import {activeNote} from '../store/getters'
  import {activeNoteHandler} from '../store/actions'
  export default {
    vuex: {
      getters: {
        activeNote
      },
      actions: {
        newNote: activeNoteHandler
      }
    },
    data () {
      return {}
    },
    methods: {
      toggleFavorite () {},
      deleteNote () {}
    }
  }
</script>

<style scoped>
  #toolbar {
    padding: 35px 15px;
    height: 100%;
    width: 60px;
    float: left;
    background-color: #30414D;
    color: #767676;
  }

  .logo img {
    width: 30px;
    height: 30px;
  }
  .starred {
    color: #F7AE4F;
  }

  i {
    margin-bottom: 35px;
    font-size: 30px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  i:hover {
    opacity: 1;
  }
</style>

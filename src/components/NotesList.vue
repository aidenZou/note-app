<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | heavenru.com</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- all -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="toggleShow('all')"
                  :class="{active: show === 'all'}">All Notes
          </button>
        </div>

        <!-- favorites -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="toggleShow('favorite')"
                  :class="{active: show === 'favorite'}">Favorites
          </button>
        </div>
      </div>
    </div>

    <div class="tttttttt">{{activeNote.title}}</div>

    <!-- 渲染笔记列表 -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in notes"
           class="list-group-item" href="javascript:;"
           :class="{active: activeNote === note}"
           @click="activeNoteHandler(note)">
          <h4 class="list-group-item-heading">
            <!--{{note.title.trim().substring(0,30)}}-->
            {{note.title}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {notes, activeNote} from '../store/getters'
  import {activeNoteHandler} from '../store/actions'
  export default {
    vuex: {
      getters: {
        notes, activeNote
      },
      actions: {
        activeNoteHandler
      }
    },
    methods: {
      toggleShow () {}
    }
  }
</script>

<style scoped>
  #notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }

  #list-header {
    padding: 5px 25px 25px 25px;
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  .search {
    margin-top: 20px;
  }

  .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }

  .list-group-item {
    border: 0;
    border-radius: 0;
  }

  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
  }
</style>

<template>
  <div id="note-editor">
    <div class="form-group">
      <input type="text" v-model="count">

      <input type="text" name="title" class="title form-control" placeholder="请输入标题"
             v-model="currentNote.title"
             @input="updateNote">
      <textarea
        name="content" class="form-control" row="3" placeholder="请输入正文"
        v-model="currentNote.content" @input="updateNote"></textarea>
    </div>
  </div>
</template>

<script>
  import {activeNote, countNote} from '../store/getters'
  import {editNoteHandler} from '../store/actions'
  export default {
    vuex: {
      getters: {
        activeNote, countNote
      },
      actions: {
        editNoteHandler
      }
    },
    data () {
      return {
      }
    },
    computed: {
      // 通过计算属性得到的一个对象，这样子我们就能愉快的使用 v-model 了
//      currentNote: activeNote,
      currentNote: {
        get () {
//          return this.activeNote
          return Object.assign({}, this.activeNote)
        },
        set (val) {
          console.log('set', val)
          this.editNoteHandler(val)
          this.editNoteHandler(this.currentNote)
        }
      },
      count: {
        get () {
          return this.countNote
        },
        set (val) {
          console.log(val)
        }
      }
    },
    methods: {
      // 为什么这么做？ 因为在严格模式中不允许直接在模板层面去修改 state 中的值
      updateNote () {
        console.log(213123)
        this.editNoteHandler(this.currentNote)
      }
    }
  }
</script>

<style scoped>
  #note-editor {
    height: 100%;
    margin-left: 380px;
  }

  .form-group {
    height: 50%;
  }

  .title {
    border: 0;
  }

  textarea {
    height: 100%;
    border: 0;
    border-radius: 0;
    padding-top: 15px;
  }
</style>

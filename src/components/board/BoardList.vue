<template>
  <div>
      <table class="table table-sm">
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성일</th>
        </thead>
        <tbody>
          <tr v-for="item in list">
            <router-link :to="{ name: 'BoardDetail', params: { boardId: item.id }}"><td>{{item.id}}</td></router-link>
            <td>{{item.title}}</td>
            <td>{{item.writer}}</td>
            <td>{{item.date}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import jquery from "jquery";
import bootstrap from "bootstrap";
import axios from "axios";
export default {
  name: "board-list",
  data() {
    return {
      list: []
    };
  },
  created: function() {
    this._getBoardList();
  },
  methods: {
    _getBoardList: function() {
      //axios.get()
      for (let i = 1; i < 6; i++) {
        let obj = new Object();
        obj.id = i;
        obj.title = "title" + i;
        obj.writer = "writer" + i;
        obj.date = "2018-03-01";
        this.list.push(obj);
      }
    }
  }
};
</script>

<style>

</style>

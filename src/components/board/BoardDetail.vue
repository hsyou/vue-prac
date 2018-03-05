<template>
  <div>
      <table class="table table-sm">
        <tr>
            <td>번호</td>
            <td>{{item.id}}</td>
        </tr>
        <tr>
            <td>제목</td>
            <td>{{item.title}}</td>
        </tr>
        <tr>
            <td>글쓴이</td>
            <td>{{item.writer}}</td>
        </tr>
        <tr>
            <td>작성일</td>
            <td>{{item.date}}</td>
        </tr>
        <tr>
            <td>내용</td>
            <td>{{item.content}}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "board-detail",
  props: {boardId: 0},
  data() {
    return {
      item: undefined
    };
  },
  created: function() {
    this._getBoardDetail(this.boardId);
  },
  methods: {
    _getBoardDetail: function(id) {
      //axios
      let obj=new Object()
      obj.id = id;
      obj.title = "title" + id;
      obj.writer = "writer" + id;
      obj.date = "2018-03-01";
      obj.content = "ㅇㅇㅇㅇㅇㅇㅇㅇ";

      this.item=obj
    }
  }
};
</script>

<style>

</style>

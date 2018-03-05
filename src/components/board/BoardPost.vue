<template>
  <div>
    <form>
      <table class="table table-sm">
        <tr>
          <td>제목</td><td><input type="input" name="title"/></td>
        </tr>
        <tr>
          <td>내용</td><td><textarea name="content"></textarea></td>
        </tr>
        <tr>
          <td><button type="submit">작성</button></td>
        </tr>
        </table>
    </form>
  </div>
</template>

<script>
import jquery from "jquery";
import bootstrap from "bootstrap";
import axios from "axios";
export default {
  name: "board-post",
  data() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>

<style>

</style>

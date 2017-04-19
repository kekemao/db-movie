<template>
  <div>
    <!-- 主体切换 -->
    <div class="header">
      {{title}}
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
/* title: "电影" */
    }
  },
    /* props: {
        title: {
          type: Object
        }
      }, */
  props: ['left', 'title', 'right'],
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style>
.header{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    color: #fff;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
    background-color: #EE7000;
    font-size: 40px;
}
</style>

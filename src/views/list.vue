<template>
<div>
    <div class="page" v-if="!loadingData">
        <v-header :title="title"></v-header>
        <ul class="ui-list ui-list-link ui-border-tb list-one">
            <li class="ui-border-t" v-for="r in list" :key="r.id">
                <div class="ui-list-img">
                    <img :src="r.images.large" alt="">
                </div>
                <div class="ui-list-info">
                    <h4 class="ui-nowrap">{{r.title}}</h4>
                    <p class="ui-nowrap"></p>
                    <p class="ui-nowrap">{{r.genres.join(' ')}}</p>
                    <p class="ui-nowrap"><span v-for="cast in r.casts">{{cast.name}} </span></p>
                </div>
            </li>
        </ul>
    </div>
    <loading :show="loadingData"></loading>
    </div>
</template>

<script>
    import axios from 'axios'
    import header from '../components/HeaderBar.vue'
    import loading from '../components/Loading.vue'
export default {
  data () {
        return {
          title: '列表',
          list: [],
          page: 1,
          count: 10,
          type: '',
          more: true,
          load: false,
          loadingData: true
        }
  },
  components: {
        'v-header': header,
        'loading': loading
      },
  mounted: function () {
        axios({
          method: 'post',
          url: '/v2/movie/' + this.$route.query.type,
          data: {
            // count: 6
          }
        }).then(response => {
          document.title = this.title = response.data.title.split('-')[0]
          console.log(response.data.subjects)
          this.list = response.data.subjects
          this.loadingData = false
        }).catch(function (error) { // ES5用  function
          console.log(error)
        })
  }
}
</script>

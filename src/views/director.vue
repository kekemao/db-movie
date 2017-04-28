<template>
<div>
    <div v-if="!loadingData">
         <v-header :title="title"></v-header>
        <div class="banner">
            <div class="blur" :style="{backgroundImage: 'url('+ image +')'}"></div>
            <div class="info">
                <div class="img"><img :src="image" alt=""></div>
                <div class="txt">
                    <h1 class="ui-nowrap">{{title}}</h1>
                    <p class="ui-nowrap">性别：{{gender}}</p>
                    <p class="ui-nowrap">地区：{{born_place}}</p>
                </div>
            </div>
        </div>
        <section class="ui-panel summary">
            <h2><a>作品</a><span class="ui-panel-subtitle">{{works.length}} 个</span></h2>
            <ul class="ui-list ui-list-link ui-border-tb list-one">
                <li class="ui-border-t" v-for="r in works" :key="r.id">
                    <router-link class="ui-list-img" :to="{name: 'show', query: {id: r.subject.id}}">
                        <img :src="r.subject.images.large" alt="">
                    </router-link>
                   <div class="ui-list-info">
                       <h4 class="ui-nowrap">[{{r.roles}}]{{r.subject.title}}</h4>
                       <p class="ui-nowrap"><!-- <star :score="r.subject.rating.average"></star> --></p>
                       <p class="ui-nowrap">{{r.subject.genres.join(' ')}}</p>
                       <p class="ui-nowrap"><span v-for="cast in r.subject.casts">{{cast.name}} </span></p>
                   </div>
                </li>
            </ul>
        </section>
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
      title: '导演',
      image: '',
      gender: '',
      born_place: '',
      works: [],
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
      url: '/v2/movie/celebrity/' + this.$route.params.id,
      data: {
        // count: 6
      }
    }).then(response => {
      document.title = this.title = response.data.name
      this.image = response.data.avatars.large
      this.gender = response.data.gender
      this.born_place = response.data.born_place
      this.works = response.data.works
      this.loadingData = false
    }).catch(function (error) { // ES5用  function
      console.log(error)
    })
  }
}
</script>

<style>
li{
    list-style: none;
}
.list-one .ui-list-img, .list-one .ui-list-img img {
    width: 150px;
    height: 220px;
}
</style>

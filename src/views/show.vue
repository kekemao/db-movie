    <template>
    <div>
        <div v-if="!loadingDate">
            <v-header :title="title"></v-header>
                <div class="banner">
                    <div class="blur" :style="{backgroundImage: 'url('+ image +')'}"></div>
                    <div class="info">
                        <div class="img"><img :src="image" alt=""></div>
                        <div class="txt">
                            <h1 class="ui-nowrap">{{title}}</h1>
                            <p class="ui-nowrap"><!-- <star :score="score" size="large"></star> --></p>
                            <p class="ui-nowrap">类型：{{genres.join(' ')}}</p>
                            <p class="ui-nowrap">主演：<span v-for="cast in casts">{{cast.name}} </span></p>
                            <p class="ui-nowrap">地区：{{countries.join(' ')}}</p>
                        </div>
                    </div>
                </div>
                <section class="ui-panel summary">
                    <h2><a>剧情简介</a><span class="ui-panel-subtitle"></span></h2>
                    <div class="ui-whitespace ui-txt-justify ui-txt-sub ui-txt-info">{{summary}}</div>
                </section>
                <section class="ui-panel directors">
                    <h2 class="ui-arrowlink"><a>导演</a><span class="ui-panel-subtitle"></span></h2>
                    <div class="ui-row ui-whitespace">
                        <router-link class="ui-col ui-col-33" v-for="director in directors" :key="director.id" v-bind:to="{name: 'director', params: {id: director.id}}">
                            <img :src="director.avatars.large">
                            <h5 class="ui-nowrap ui-arrow">{{director.name}} <a>(查看)</a></h5>
                        </router-link>
                    </div>
                </section>
            </div>
            <loading :show="loadingDate"></loading>
        </div>
    </template>

<script>
import header from '../components/HeaderBar.vue'
import loading from '../components/Loading.vue'
export default {
  data () {
    return {
      id: this.$route.query.id,
      title: '',
      image: '',
      genres: [],
      casts: [],
      score: 0,
      countries: [],
      summary: '',
      directors: [],
      loadingDate: true
    }
  },
  components: {
    'v-header': header,
    loading
  },
  mounted: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + this.id).then((response) => {
      document.title = this.title = response.data.title
      this.image = response.data.images.large
      this.genres = response.data.genres
      this.casts = response.data.casts
      this.score = response.data.rating.average
      this.countries = response.data.countries
      this.summary = response.data.summary
      this.directors = response.data.directors
      this.loadingDate = false
    }, (response) => {
    // 响应错误回调
      alert('a')
    })
  }
}
</script>
<style>
.banner{
    margin-top: 100px;
}
.summary {
    padding-bottom: 10px;
}
.directors {
    padding-bottom: 10px;
}
.directors .ui-col {
    padding-left: 5px;
}
.directors img {
    width: 55%;
}
.directors .ui-row {
    padding-left: 5px;
}
.banner .blur {
    height: 480px;
    width: 120%;
    margin-left: -10%;
    margin-top: -20px;
    -webkit-filter: blur(5px);
    filter: blur(5px);
    background-position: top;
    background-size: cover;
}
.banner .info {
    position: absolute;
    width: 100%;
    height: 180px;
    top: 100px;
    left: 0px;
}
.banner .info .img {
    float: left;
    border: 2px solid #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin-left: 10px;
    margin-top: 20px;
}
a{
    color: #00a5e0;
}
.txt{
    font-size: 50px;
    color: #fff;
    padding-left: 333px;
}
.banner .info .img img {
    width: 280px;
    height: 400px;
    display: block;
    float: left;
}
</style>

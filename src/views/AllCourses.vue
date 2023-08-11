<template>
  <div class="">
    <div class="card">
      <img src="https://fakeimg.pl/180x20/" alt="" class="card-img">
      <div class="card-img-overlay d-flex justify-content-center  align-items-center">
        <h2 class="border-top border-bottom border-primary">
          課程列表
        </h2>
      </div>
    </div>
  </div>

  <!-- 搜尋 -->
  <div class="container mt-3 fs-8">
    <div class="row align-items-center g-2">
      <!-- 技能 -->
      <div class="col-12 col-lg-auto me-lg-1">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            <label for="selectCourseCategory" class="col-form-label">
              音樂技能：
            </label>
          </div>
          <div class="col-auto">
            <select class="form-select fs-8" aria-label="Default select example"
                  id="selectCourseCategory"
                  v-model="selectCourseCategory">
            <option value="" selected>請選擇</option>
            <option value="短笛">短笛</option>
            <option value="長笛">長笛</option>
            <option value="單簧管">單簧管</option>
            <option value="雙簧管">雙簧管</option>
            <option value="英國管">英國管</option>
            <option value="巴松管">巴松管</option>
            <option value="薩克斯風">薩克斯風</option>
            <option value="管風琴">管風琴</option>
            <option value="小號">小號</option>
            <option value="短號">短號</option>
            <option value="長號">長號</option>
            <option value="法國號">法國號</option>
            <option value="低音號">低音號</option>
            <option value="巴里東">巴里東</option>
            <option value="上低音號">上低音號</option>
            <option value="小提琴">小提琴</option>
            <option value="中提琴">中提琴</option>
            <option value="大提琴">大提琴</option>
            <option value="低音提琴">低音提琴</option>
            <option value="豎琴">豎琴</option>
            <option value="斑鳩琴">斑鳩琴</option>
            <option value="曼陀林">曼陀林</option>
            <option value="大鍵琴">大鍵琴</option>
            <option value="魯特琴">魯特琴</option>
            <option value="爵士鼓">爵士鼓</option>
            <option value="木箱鼓">木箱鼓</option>
            <option value="木琴">木琴</option>
            <option value="馬林巴琴">馬林巴琴</option>
            <option value="鋼琴">鋼琴</option>
            <option value="數位鋼琴(電鋼琴)">數位鋼琴(電鋼琴)</option>
            <option value="傳統電子琴">傳統電子琴</option>
            <option value="電子琴">電子琴</option>
            <option value="電子合成器">電子合成器</option>
            <option value="揚琴">揚琴</option>
            <option value="中國笛">中國笛</option>
            <option value="笙">笙</option>
            <option value="嗩吶">嗩吶</option>
            <option value="蕭">蕭</option>
            <option value="胡琴">胡琴</option>
            <option value="古箏">古箏</option>
            <option value="柳琴">柳琴</option>
            <option value="琵琶">琵琶</option>
            <option value="阮">阮</option>
            <option value="其他中國樂器">其他中國樂器</option>
            <option value="木吉他">木吉他</option>
            <option value="古典吉他">古典吉他</option>
            <option value="電吉他">電吉他</option>
            <option value="烏克麗麗">烏克麗麗</option>
            <option value="電貝斯">電貝斯</option>
            <option value="口琴">口琴</option>
            <option value="手風琴">手風琴</option>
            <option value="手碟鼓">手碟鼓</option>
            <option value="其它樂器">其它樂器</option>
            <option value="編曲">編曲</option>
            <option value="作曲">作曲</option>
            <option value="詞曲創作">詞曲創作</option>
            <option value="配樂">配樂</option>
            <option value="錄音">錄音</option>
            <option value="音效">音效</option>
            <option value="成音工程">成音工程</option>
            <option value="混音">混音</option>
            <option value="樂理">樂理</option>
            <option value="聽寫">聽寫</option>
            <option value="音樂理論">音樂理論</option>
            <option value="流行歌唱">流行歌唱</option>
            <option value="聲樂">聲樂</option>
            <option value="音樂劇">音樂劇</option>
            <option value="和聲">和聲</option>
            <option value="視唱">視唱</option>
            <option value="B-BOX">B-BOX</option>
            <option value="Acappella">Acappella</option>
            <option value="指揮">指揮</option>
            <option value="音樂治療">音樂治療</option>
            <option value="DJ">DJ</option>
            <option value="合奏指導">合奏指導</option>
            <option value="音樂軟體">音樂軟體</option>
            <option value="樂器製作">樂器製作</option>
            <option value="其它非樂器類">其它非樂器類</option>
            </select>
            <!-- <input type="text" id="selectCourseCategory" class="form-control w-75" aria-labelledby="selectCourseCategory"
            v-model="selectCourseCategory"> -->
            
          </div>

        </div>      
      </div>
      <!-- 地點 -->
      <div class="col-12 col-lg-auto me-lg-1">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            <label for="selectCityName" class="col-form-label">
              上課方式：
            </label>
          </div>
          <div class="col-auto">
            <select class="form-select fs-8" 
                    aria-label="Default select example"
                    id="selectCityName"
                    v-model="selectCourseMethod"
                    @change="selectCityNameCancel()">
              <option value="" selected>請選擇</option>
              <option v-for="item in courseMethod" 
                      :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="col-auto"
              v-if="selectCourseMethod === '在老師家' || selectCourseMethod === '在學生家'">
            <select class="form-select fs-8" aria-label="Default select example"
                    id="selectCityName"
                    v-model="selectCityName">
              <option value="" selected>請選擇地點</option>
              <option value="台北市">台北市</option>
              <option value="基隆市">基隆市</option>
              <option value="新北市">新北市</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="桃園市">桃園市</option>
              <option value="新竹市">新竹市</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗縣">苗栗縣</option>
              <option value="台中市">台中市</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="嘉義市">嘉義市</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="台南市">台南市</option>
              <option value="高雄市">高雄市</option>
              <option value="澎湖縣">澎湖縣</option>
              <option value="金門縣">金門縣</option>
              <option value="屏東縣">屏東縣</option>
              <option value="台東縣">台東縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="連江縣">連江縣</option>
            </select>
          </div>
        </div>
      </div>
      <!-- 名稱 -->
      <div class="col-12 col-sm-auto  col-lg-auto">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            <label for="selectCourseName" class="col-form-label">課程名稱：</label>
          </div>
          <div class="col-auto">
            <input type="search" id="selectCourseName" class="form-control fs-8" aria-labelledby="searchHelpInline"
            placeholder="請輸入課程名稱"
            v-model="selectCourseName">
          </div>
        </div>
      </div>
      <!-- 排序 -->
      <div class="col-auto ms-sm-auto">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            <label for="selectCityName" class="col-form-label">
              排序：
            </label>
          </div>
          <div class="col-auto">
            <select class="form-select fs-8" 
                    aria-label="Default select example"
                    id="selectCityName"
                    v-model="selectSortMethod"
                    @change="courseSort()">
              <option value="" selected>請選擇</option>
              <option v-for="item in sortMethod" 
                      :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 課程 -->
  <div class="container my-3">
    <div class="row"
     v-if="filterData.length == 0">
      <div class="col text-center fs-2 mt-5">
        很抱歉，沒有符合條件課程
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
            v-for="item in currentPageCoursesData" :key="item.id">
            <div class="card rounded-3 scale h-100"
            @click="getOneCoursesFirebaseData(item.id)">
          <div class="card-img overflow-hidden position-relative">
            <img :src="item.data.courseImg" alt="商品圖片" class="card-img-top filter-grayscale">
            <i class=""
              :class="bookmarkState(item.id)"
              @click.stop="toggleBookmark(item.id)"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item.data.courseCategory }}</span>
              <span class="">&ensp;{{ item.data.courseName }}</span>   
            </div>
            <div class="mt-auto">
              <div class="mb-1 text-primary">
                by {{ item.data.displayName }}
              </div>
              <div class="mb-1">
                <i class="bi bi-clock-fill"></i>
                {{ item.data.time }}
                <i class="bi bi-geo-alt-fill ms-2"></i>
                {{ item.data.cityName || '線上' }}
              </div>
              <!-- <div class="mb-1">
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[0]">
                  {{ item.data.courseMethod[0] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[1]">
                  {{ item.data.courseMethod[1] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[2]">
                  {{ item.data.courseMethod[2] }}
                </span>
              </div> -->
              <div class="mb-1">
                <span class="me-3">
                  NT$ {{ $filters.currency(item.data.price) }}
                </span>
                <span v-if="item.data.whoBuy">
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item.data.whoBuy.length}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- {{ currentPageCoursesData }} -->
  <PaginationCom />
</template>
  
<script>
import PaginationCom from '../components/PaginationCom.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import filterStore from '@/stores/filterStore'
// import goStore from '@/stores/goStore'

export default {
  components: { PaginationCom },
  computed: {
    ...mapState(dataStore, ['coursesData', 'bookmarkState', 'AllCoursesFirebaseData', 'onAuthStateChanged']),
    ...mapState(filterStore, ['filterData','courseMethod', 'sortMethod', 'currentPageCoursesData']),
    ...mapWritableState(filterStore, ['selectCityName', 'selectCourseCategory', 'selectCourseName','selectCourseMethod', 'selectSortMethod'])
  },
  methods: {
    ...mapActions(dataStore, ['toggleBookmark', 'getOneCoursesFirebaseData', 'getAllCoursesFirebaseData']),
    ...mapActions(filterStore, ['selectCityNameCancel', 'courseSort'])
  },
  created () {
    this.onAuthStateChanged()
    this.courseSort()
  }
}
</script>

<style lang="scss" scoped>
  .scale{
    cursor:pointer;
    &:hover{
      img{
        transform: scale(1.15);
      }
      .bookmark-off{
        top: -15px;
      }
      .filter-grayscale {
        -webkit-filter:grayscale(0);
      }
    }
  }
.card-img-top { 
  height: 180px;
  object-fit: cover;
  transition: 0.5s;
}
.bookmark-off {
  font-size: 40px;
  position: absolute;
  right: 5px;
  top: -55px;
  z-index: 10;
  transition: 0.5s;
}
.bookmark-on {
  font-size: 40px;
  position: absolute;
  right: 5px;
  top: -15px;
  z-index: 10;
}
.filter-grayscale {
  -webkit-filter:grayscale(0);
}
</style>
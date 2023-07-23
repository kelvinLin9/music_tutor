<template>
  <!-- {{ page.hasPrevPage }}
  {{ page.currentPage }}
  {{ page.pageNumBox }}
  {{ page.totalPage }}
  {{ page.hasNextPage }} -->
  <div class="container d-flex justify-content-center mt-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" 
            :class="{'disabled':!page.hasPrevPage}"
            v-if="page.totalPage > 0">
          <a class="page-link" href="#" 
            :data-page="page.currentPage - 1" 
            @click.prevent="changePage">
            <i class="bi bi-caret-left-fill"></i>
          </a>
        </li>
        

        <li class="page-item d-flex" 
            v-for="(item,index) in page.pageNumBox" :key="index" 
            :class="{'active': item === page.currentPage}">
          <a class="page-link" href="#" 
            :data-page="item" 
            @click.prevent="changePage">{{item}}
          </a>
        </li>

        <!-- 頁面數大於5才顯示最大頁數及指定頁數 -->
        <li class="page-item"
          v-if="page.totalPage > 5">
          <a class="page-link" href="#"
          @click.prevent="lastPage">
            ......{{page.totalPage}}</a>
        </li>

        <li class="page-item" 
            :class="{'disabled':!page.hasNextPage}"
            v-if="page.totalPage > 0">
          <a class="page-link" href="#" 
            :data-page="page.currentPage + 1" 
            @click.prevent="changePage">
            <i class="bi bi-caret-right-fill"></i>
          </a>
        </li>

        <li class="page-item" 
            :class="{'disabled':!page.hasNextPage}"
            v-if="page.totalPage > 5">
          <input class="form-control" type="text" placeholder="請輸入頁碼" aria-label="default input example"
          v-model="selPage">
        </li>
        <button type="button" class="btn btn-primary" 
                @click.prevent="select"
                v-if="page.totalPage > 5">
          確認
        </button>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import paginationStore from '@/stores/paginationStore'
import filterStore from '@/stores/filterStore'


export default {
  computed: {
    ...mapState(dataStore, ['coursesData']),
    ...mapState(paginationStore, ['page']),
    ...mapWritableState(paginationStore, []),
    ...mapState(filterStore, ['filterData']),
  },
  methods: {
    ...mapActions(paginationStore, ['pagination']),

    
  },
  created () {
    this.pagination(1,this.filterData)
  }
}
</script>

<style lang="scss" scoped>

</style>
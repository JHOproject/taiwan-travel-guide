<template>
  <div v-if="totalCount" class="pageBtnGroup">
    <div class="pageBtn" @click="minusPage"></div>
    <div
      v-for="num in SHOW_COUNT"
      :key="num"
      :class="{
        active: page === num + startIndex && num + startIndex <= totalCount,
        'border-none ': num + startIndex > totalCount,
        'cursor-pointer hover:bg-black hover:border-black hover:text-white':
          num + startIndex <= totalCount,
      }"
      class="
        inline-block
        w-10
        h-10
        mx-1
        text-center
        leading-9
        rounded-full
        border-2 border-deepGray
        transition
        duration-300
      "
      @click="
        onClickPage(num + startIndex > totalCount ? '' : num + startIndex)
      "
    >
      {{ num + startIndex > totalCount ? '' : num + startIndex }}
    </div>
    <div class="pageBtn transform rotate-180" @click="addPage"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class PaginationBar extends Vue {
  @Prop() page!: number
  @Prop() totalCount!: number

  SHOW_COUNT = 5
  COUNT_DIFF = 1
  startIndex = 0

  mounted() {
    this.startIndex = this.page - this.COUNT_DIFF
  }

  onClickPage(page: number) {
    !!page && this.$emit('onPageChange', page)
  }

  minusPage() {
    if (this.startIndex - this.SHOW_COUNT + this.COUNT_DIFF < 0) {
      this.startIndex = 0
      return
    }
    this.startIndex -= this.SHOW_COUNT
    this.$emit('onPageChange', this.startIndex + this.COUNT_DIFF)
  }

  addPage() {
    if (this.startIndex + this.SHOW_COUNT + this.COUNT_DIFF > this.totalCount)
      return
    this.startIndex += this.SHOW_COUNT
    this.$emit('onPageChange', this.startIndex + this.COUNT_DIFF)
  }

  init() {
    this.startIndex = 0
  }
}
</script>

<style scoped>
.pageBtnGroup {
  @apply flex items-center;
}
.pageBtnGroup > .active {
  @apply bg-black text-white border-black;
}

.pageBtn {
  @apply inline-block mx-5 cursor-pointer transition duration-300;
  border-width: 15px 20px 15px 0;
  border-color: transparent black transparent transparent;
}
.pageBtn:hover {
  border-right-color: #1eb893;
}
</style>
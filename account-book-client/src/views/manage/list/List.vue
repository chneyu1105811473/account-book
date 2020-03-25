<template>
  <div class="manage-list">
    <div class="content">
      <div class="header">管理</div>
      <div v-for="(manage, index) in manageList" 
        :key="`manage-item-${index}`"
        class="manage-item"
        @click="openManageItem(manage)">
        {{manage.name}}
      </div>
    </div>
    <footer-tab></footer-tab>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FooterTab from "../../../components/footerTab";

@Component({
  components: { FooterTab },
})
export default class List extends Vue {
  private manageList: object[] = [{name: "设置管理", skip: "setupManage"}];

  private openManageItem(data: any) {
    this.$router.push({
      name: data.skip,
    });
  }
}
</script>

<style lang="stylus" scoped>
  .manage-list
    width 100%
    height 100%
    display flex
    flex-direction column
    .content
      width 100%
      flex 1
      item-style()
        width 100%
        height 44px
        line-height 44px
      .header
        item-style()
        text-align center
        background-color #999999
        color #ffffff
      .manage-item
        item-style()
        background-color #fff
        padding-left 20px
</style>  
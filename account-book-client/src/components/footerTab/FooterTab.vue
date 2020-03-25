<template>
  <div class="footer-tab">
    <div
      v-for="(tab, index) in tabData"
      :key="`tab-item-${index}`"
      class="tab-item"
      :class="{'active': $router.currentRoute.name.includes(tab.skip)}"
      @click.stop="openTab(tab)"
    >
      <pagoda-icon
        :name="tab.icon"
        size="20"
      />
      <div>{{tab.name}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TAB_LIST } from "../../global/const";

@Component({})
export default class FooterTab extends Vue {
  @Prop({ default: () => TAB_LIST, type: Array })
  private tabData: object[];

  private openTab(data: any) {
    this.$router.push({
      name: data.skip,
    });
  }
}
</script>

<style lang="stylus">
    .footer-tab
        width 100%
        height 50px
        display flex
        align-items center
        justify-content space-around
        background-color #ffffff
        .tab-item
            display flex
            flex-direction column
            align-items center
        .active
            color rgba(120, 156, 72, 1)
</style>
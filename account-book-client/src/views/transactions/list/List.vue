<template>
  <div class="transactions">
    <pagoda-nav-bar
        title="记账本"
      >
        <pagoda-icon
          name="plus"
          slot="right"
          @click="add"
        />
      </pagoda-nav-bar>
    <div class="content">
      <pagoda-pull-refresh v-model="listStatus.isLoading" @refresh="onRefresh">
        <pagoda-list
          v-model="listStatus.loading"
          :finished="listStatus.finished"
          finished-text="没有更多了"
          :error.sync="listStatus.error"
          error-text="请求失败，点击重新加载"
          @load="requestData"
        >
          <pagoda-swipe-cell v-for="(item, index) in list"
            :key="`transaction-item-${index}`"> 
            <pagoda-cell-group @click.stop="edit(item)">
                <pagoda-cell :value="`${item.isExpense ? '-' : '+'}${item.amount}`" :class="[item.isExpense ? 'cell-top-expense' :'cell-top-income']">
                  <template slot="title">
                    <span class="circle"></span>
                    <span>{{item.categoryName}}</span>
                  </template>
                </pagoda-cell>
                <pagoda-cell :title="item.remark || ''" :value="item.date" class="cell-bottom"/>
            </pagoda-cell-group>
            <template slot="right">
              <pagoda-button square type="danger" text="删除" style="height: 96px" @click="handleDelete(item.transactionCode)"/>
            </template>
          </pagoda-swipe-cell>
        </pagoda-list>
      </pagoda-pull-refresh>
    </div>
    <footer-tab></footer-tab>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FooterTab from "../../../components/footerTab";
import { get, concat } from "lodash";
import { transactions } from "@/api/index";

interface IListStatus {
  finished: boolean;
  loading: boolean;
  error: boolean;
  isLoading: boolean;
}

interface IPageInfo {
  page: number;
  size: number;
}

@Component({
  components: { FooterTab },
})
export default class List extends Vue {
  private list: object[] = [];
  private listStatus: IListStatus = {
    loading: false,
    finished: false,
    error: false,
    isLoading: false,
  };
  private pageInfo: IPageInfo = {
    page: 1,
    size: 15,
  };
  private total: number = 0;

  private async requestData(status: string = 'load') {
    try {
      const res = await transactions.getList(this.pageInfo);

      const currList = get(res, "data.list") || [];
      this.list = status === 'refresh' ? currList : concat(this.list, currList);
      this.total = get(res, "data.pagination.total");

      Object.assign(this.listStatus, {
        loading: false,
        finished: this.list.length === this.total,
        isLoading: false,
      });
      if (!this.listStatus.finished) {
        this.pageInfo.page++;
      }
    } catch (error) {
      Object.assign(this.listStatus, {
        error: true,
        loading: false,
      });
      this.$toast(get(error, "message") || "请求出错");
    }
  }

  private onRefresh() {
    this.pageInfo.page = 1;
    this.requestData('refresh');
  }

  private handleDelete(code: number) {
    this.$dialog
      .confirm({
        title: "提示",
        message: "确认删除吗？",
      })
      .then(() => {
        this.confirmDelete(code);
      });
  }

  private async confirmDelete(code: number) {
    try {
      await transactions.remove(code);
      this.$toast("删除成功");
      this.onRefresh();
    } catch (e) {
      this.$toast(get(e, "message") || "请求失败，请稍后再试");
    }
  }

  private add() {
    this.$router.push({
      name: 'transactionsEdit',
      params: {
        mode: 'add',
      },
    });
  }

  private edit(item: object) {
    this.$router.push({
      name: 'transactionsEdit',
      params: {
        mode: 'amend',
      },
      query: {
        code: (item as any).transactionCode,
      },
    });
  }
}
</script>

<style lang="stylus">
  .transactions
    width 100%
    height 100%
    display flex
    flex-direction column

    .pagoda-nav-bar
          height 44px
          line-height 44px
          background-color #999999

        .pagoda-icon-plus
          color #ffffff
          font-size 18px

        .pagoda-nav-bar__title
          color #ffffff

    .content
      flex 1
      overflow-y auto
       
      .pagoda-cell:not(:last-child)::after
        border none 

      .pagoda-cell__value
        font-size 18px

      .cell-top-expense .pagoda-cell__value
        color #D9001B

      .cell-top-income .pagoda-cell__value
        color #70B603

      .cell-bottom .pagoda-cell__title
        color #AAAAAA
      
      .cell-bottom .pagoda-cell__value
        color #222

      .circle
        width 10px
        height 10px
        border-radius 100%
        display inline-block
        background-color #D9001B
        margin-right 8px

      .cell-top-income .circle
        background-color #70B603
</style>   
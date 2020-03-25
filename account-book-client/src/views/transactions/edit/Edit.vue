<template>
  <div>
    <pagoda-nav-bar
        title="记一笔"
        left-arrow
        @click-left="$router.back()"
        @click-right="handleSave"
    >
      <pagoda-icon name="success" slot="right" />
    </pagoda-nav-bar>
    <pagoda-cell-group>
      <pagoda-cell title="类型">
        <pagoda-radio-group v-model="status" class="edit-types">
          <pagoda-radio name="expense">支出</pagoda-radio>
          <pagoda-radio name="income">收入</pagoda-radio>
        </pagoda-radio-group>
      </pagoda-cell>
      <pagoda-cell
          title="分类"
          :value="currentCategory.categoryName"
          @click="showCategoryList=true"
          :arrow-direction="showCategoryList?'up':'down'"
      />
      <pagoda-cell
          title="日期"
          :value="dateText"
          @click="showDate=true"
          :arrow-direction="showDate?'up':'down'"
      />
      <pagoda-field
          label="金额"
          :required="true"
          input-align="right"
          :value="amount"
          @blur="handleAmountBlur"
          @input="handleChange('amount', $event)"
          :error-message="getErrorMessage('amount')"
      />
      <pagoda-field
          label="备注"
          input-align="right"
          :value="remark"
          type="textarea"
          show-counter
          maxlength="200"
          autosize
          placeholder="请输入备注，最多200字"
          @input="handleChange('remark', $event)"
          :error-message="getErrorMessage('remark')"
      />
    </pagoda-cell-group>
    <pagoda-popup
        position="bottom"
        v-model="showCategoryList"
    >
      <pagoda-picker
          show-toolbar
          :columns="categories"
          :default-index="defaultIndex"
          @cancel="showCategoryList=false"
          @confirm="pickCategory"
      />
    </pagoda-popup>

    <pagoda-popup
        position="bottom"
        v-model="showDate"
    >
      <pagoda-datetime-picker
          type="date"
          :value="date"
          @confirm="confirmDate"
          @cancel="showDate = false"
      />
    </pagoda-popup>

  </div>
</template>

<script lang="ts">
import {get, map, findIndex, find, indexOf, head, toString, toNumber, isNaN, set, delay, every, size} from 'lodash';
import {Vue, Component, Watch} from 'vue-property-decorator';
import {categories, transactions} from '@/api';
import {modelAdd} from '@/views/transactions/edit/validate-schema';
@Component
export default class Edit extends Vue {
  public status = 'expense';
  public categoryList = [];
  public validateErrors = {};
  public amount = '';
  public showDate = false;
  public date = new Date();
  public currentCategoryCode = 0;
  public showCategoryList = false;
  public remark = '';
  public created() {
    if (this.isAmend) {
      this.editInit(this.code);
    }
  }
  get dateText() {
    const year = this.date.getFullYear().toString();
    let month = (this.date.getMonth() + 1).toString();
    let date = this.date.getDate().toString();
    month = month.length < 2 ? '0' + month : month;
    date = month.length < 2 ? '0' + date : date;
    return `${year}/${month}/${(size(toString(date)) === 1) ? '0' : ''}${date}`;
  }
  get mode() {
    return get(this.$route, 'params.mode');
  }
  get isAdd() {
    return this.mode === 'add';
  }
  get isAmend() {
    return this.mode === 'amend';
  }
  get query() {
    return get(this.$route, 'query');
  }
  get code() {
    return toNumber(get(this.query, 'code'));
  }
  get categories() {
    return map(this.categoryList, (category) => get(category, 'categoryName'));
  }
  get currentCategory() {
    return find(this.categoryList, (category) => get(category, 'categoryCode') === this.currentCategoryCode) || {};
  }
  get defaultIndex() {
    return findIndex(this.categoryList, (category) => get(category, 'categoryCode') === get(this.currentCategory, 'categoryCode'));
  }
  public async editInit(code: number) {
    const res = await transactions.getTransactionDetail(code);
    const data = get(res, 'data', {});
    this.status = get(data, 'isExpense') ? 'expense' : 'income';
    this.amount = get(data, 'amount');
    this.currentCategoryCode = get(data, 'categoryCode');
    this.date = new Date(get(data, 'date'));
    this.remark = get(data, 'remark');
  }
  public confirmDate(val: Date) {
    this.date = val;
    this.showDate = false;
  }
  public getParams() {
    return {
      amount: toNumber(this.amount),
      categoryCode: this.currentCategoryCode,
      date: this.dateText,
      remark: this.remark,
    };
  }
  public checkParams() {
    this.validateErrors = modelAdd.check({
      amount: toNumber(this.amount),
      remark: this.remark,
    });
    return this.hasValidateError();
  }
  public hasValidateError() {
    const errorItem = find(this.validateErrors, (entry) => get(entry, 'hasError'));
    if (errorItem) {
      this.$toast(get(errorItem, 'errorMessage'));
      return true;
    } else {
      return false;
    }
  }
  public async handleSave() {
    if (this.checkParams()) { return; }
    try {
      if (this.isAdd) {
        await transactions.addTransaction(this.getParams());
      } else {
        await transactions.amendTransaction(this.code, this.getParams());
      }
      this.$toast.success('操作成功');
      delay(() => this.$router.back(), 500);
    } catch (e) {
      console.error(e);
      this.$toast.fail(get(e, 'message') || '操作失败');
    }
  }
  public async getCategoryList(status: string) {
    const res = await categories.getList({type: status});
    this.categoryList = get(res, 'data.list');
  }
  public handleAmountBlur(event: Event) {
    const amount = toNumber(get(event, 'target.value'));
    if (isNaN(amount)) { return; }
    this.amount = amount.toFixed(2);
  }
  public isCurrentInTheList(list: any[]) {
    return indexOf(map(list, (item) => item.categoryCode), this.currentCategoryCode) >= 0;
  }
  public handleChange(key: string, value: string) {
    set(this, key, value);
    this.validateField(key, {[key]: value});
  }
  public validateField(key: string, data: any) {
    const validateResult = get(modelAdd.check(data), key);
    this.validateErrors = {
      ...this.validateErrors,
      [key]: validateResult,
    };
  }
  public pickCategory(value: string, index: number) {
    this.currentCategoryCode = get(this.categoryList, `[${index}].categoryCode`);
    this.showCategoryList = false;
  }
  public getErrorMessage(key: string) {
    return get(this.validateErrors, `${key}.errorMessage`);
  }
  @Watch('status', {immediate: true})
  public async onStatusChange(val: string) {
    await this.getCategoryList(val);
    if (!this.isCurrentInTheList(this.categoryList)) {
      this.currentCategoryCode = get(head(this.categoryList), 'categoryCode') as unknown as number;
    }
  }
}
</script>

<style scoped>
.edit-types {
  display: flex;
  justify-content: space-around;
}
</style>

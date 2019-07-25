<template>
<div>
  <SearchBar
    v-bind:filterText='filterText' v-on:handleFiterText='handleFiterText'
    v-bind:inStockOnly='inStockOnly' v-on:handleInStockOnly='handleInStockOnly' />
  <ProductTable v-bind:products='PRODUCTS' v-bind:filterText='filterText' v-bind:inStockOnly='inStockOnly' />
</div>
</template>

<script>
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default {
  components: {
    SearchBar,
    ProductTable,
  },
  data() {
    return {
      PRODUCTS: PRODUCTS,
      filterText: '',
      inStockOnly: false
    }
  },
  methods: {
    handleFiterText(filterText) {
      this.filterText = filterText;
    },
    handleInStockOnly(inStockOnly) {
      this.inStockOnly = inStockOnly;
    }
  },
  beforeCreate() {
    // console.log('beforeCreate');
  },
  created() {
    // console.log('created');
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated() {
    // console.log('updated');
  }
}

setTimeout(() => PRODUCTS.pop(), 2000);
</script>

<style lang="scss" scoped>
</style>

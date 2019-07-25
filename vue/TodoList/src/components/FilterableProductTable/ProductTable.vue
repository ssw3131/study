<template>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <template v-for='(value, key) in cateObj'>
      <ProductCategoryRow v-bind:category='key' />
      <ProductRow v-for='obj in value' v-bind:key='obj.name' v-bind:price='obj.price' v-bind:stocked='obj.stocked' v-bind:name='obj.name' />
    </template>
  </tbody>
</table>
</template>

<script>
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default {
  components: {
    ProductCategoryRow,
    ProductRow,
  },
  props: ['products', 'filterText', 'inStockOnly'],
  computed: {
    cateObj() {
      const obj = {};
      let products = this.products;

      products = this.filterText === '' ?
        products :
        products.filter(obj => obj.name.indexOf(this.filterText) > -1);

      products = this.inStockOnly ?
        products.filter(obj => obj.stocked) :
        products;

      products.forEach((el, i) => {
        if (obj[el.category] === undefined) obj[el.category] = [];
        obj[el.category].push(el);
      });
      
      return obj;
    }
  }
}
</script>

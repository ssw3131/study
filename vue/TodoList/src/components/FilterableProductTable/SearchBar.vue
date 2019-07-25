<template>
<form>
  <input type="text" placeholder="Search..." v-bind:value='filterText' v-on:input='handleFiterText($event.target.value)' />
  <p><input type="checkbox" v-bind:checked='inStockOnly' v-on:input='handleInStockOnly($event.target.checked)' /> Only show products in stock</p>
</form>
</template>

<script>
export default {
  props: ['filterText', 'inStockOnly'],
	methods: {
		handleFiterText: function(txt) {
			this.$emit( 'handleFiterText', txt );
		},
		handleInStockOnly: function(bool) {
			this.$emit( 'handleInStockOnly', bool );
		}
  }
}
</script>

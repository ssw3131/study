<template>
<tr>
  <template v-if='stocked'>
    <td>{{name}}</td>
  </template>
  <template v-else>
    <td><span style="color: red;">{{name}}</span></td>
  </template>
  <td>{{price}}</td>
</tr>
</template>

<script>
export default {
  props: ['price', 'stocked', 'name']
}
</script>

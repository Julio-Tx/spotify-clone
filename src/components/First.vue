<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputContent: ''
    }
  }
}
</script>
<template>
<div>
    <h2>first component</h2>
    <input type="text" v-model="inputContent">
    <h1>this is the msg exported: {{ inputContent }}</h1>
</div>
</template>

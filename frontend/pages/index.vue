<template>
  <div>
    <h1>Nuxt-Nodeデータ受け渡しイメージ</h1>
    <h2>{{response_}}</h2>
    <button @click="test_api">データを送信する</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      response_:"ボタンを押して下さい",
    };
  },
  methods: {
    async test_api() {
      let api_response = await this.$api.postTest("データが送信されました")
      this.response_ = api_response.message
    },
  }
}

</script>

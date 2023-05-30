<script setup>
import { reactive } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const data = reactive({
  email: "",
  password: "",
});

const auth = getAuth();
const login = () => {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      alert("ログインに成功しました！");
    })
    .catch((err) => {
      console.log(err);
      alert("正しいログイン情報を入力してください");
    });
};
</script>

<template>
  <h1>Login Example</h1>

  <div class="container">

    <div class="input-area">
      <label for="email">メールアドレス</label>
      <input id="email" type="text" name="email" v-model="data.email">
    </div>
    <div class="input-area">
      <label for="password">パスワード</label>
      <input id="password" type="password" name="password" v-model="data.password">
    </div>
    <div class="submit-area">
      <button class="login" @click="login">ログイン</button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
  }
</style>
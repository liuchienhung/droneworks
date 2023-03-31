<template>
  <div class="login-container">
    <h1 class="login-title">登入頁面</h1>
    <form class="login-form" @submit.prevent="login">
      <div class="form-group">
        <label class="form-label">帳號</label>
        <input class="form-input" type="text" name="username" placeholder="請輸入帳號" v-model="user.username" required>
      </div>
      <div class="form-group">
        <label class="form-label">密碼：</label>
        <div class="password-input">
          <input class="form-input" :type="passwordType" name="password" placeholder="請輸入密碼" v-model="user.password" minlength="6" required>
          <button class="password-toggle" type="button" @click="togglePasswordVisibility">{{ passwordToggleLabel }}</button>
        </div>
      </div>
      <button class="login-btn" type="submit">登入</button>
    </form>
    <footer class="login-footer">
      © 2023 DroneWorks. All rights reserved.
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      passwordType: 'password',
      passwordToggleLabel: '顯示密碼'
    }
  },
  methods: {
    login() {
      // 模擬登入操作
      if (this.user.username === 'test' && this.user.password === '123456') {
        // 登入成功，導引到新頁面
        this.$router.push('/home')
      } else {
        // 登入失敗，彈出錯誤提示
        alert('使用者名稱或密碼錯誤')
      }
    },
    togglePasswordVisibility() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
        this.passwordToggleLabel = '隱藏密碼'
      } else {
        this.passwordType = 'password'
        this.passwordToggleLabel = '顯示密碼'
      }
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.login-image img {
  width: 60%;
  max-width: 400px;
}

.login-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-footer {
  font-size: 0.8rem;
  margin-top: 1rem;
  text-align: center;
  color: #aaa;
}


.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}

.form-label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.login-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #3e8e41;
}

@media (min-width: 768px) {
  .login-form {
    width: 40%;
  }
}
</style>

<!-- 
  這裡是 LoginPage 組件的注釋說明：
  - 使用一個 form 表單讓使用者輸入帳號密碼
  - 提供一個登入按鈕，點擊後進行登入驗證
  - 登入成功後導向首頁
  - 資料驗證及登入邏輯尚未實作
  - 表單樣式來自 Bootstrap
-->


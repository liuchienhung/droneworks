<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">修改密碼</h1>
    <form class="form" @submit.prevent="changePassword">
      <div class="form-group">
        <label class="form-label" for="oldPassword">舊密碼</label>
        <input
          type="password"
          class="form-control"
          id="oldPassword"
          v-model="oldPassword"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="newPassword">新密碼</label>
        <input
          type="password"
          class="form-control"
          id="newPassword"
          v-model="newPassword"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="confirmPassword">確認密碼</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    changePassword() {
      // 驗證新舊密碼
      if (this.newPassword !== this.confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      // 傳送 API 請求到後端修改密碼
      // TODO: replace with actual API call
      console.log("Old Password:", this.oldPassword);
      console.log("New Password:", this.newPassword);
      console.log("Confirm Password:", this.confirmPassword);

      // 清空輸入框
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
  },
};
</script>
<style>
.container {
  max-width: 500px;
  margin: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/*
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  display: block;
  width: 100%;
  margin-top: 2rem;
}
*/
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  display: block;
  width: 25%;
  margin-top: 2rem;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
</style>

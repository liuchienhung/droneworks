<template>
  <div class="profile">
    <h2>帳號設定</h2>
    <form>
      <div class="avatar-preview">
        <img v-if="preview" :src="preview" alt="avatar preview" />
        <span v-else class="no-avatar">未上傳頭像</span>
      </div>
      <div>
        <label for="avatar">上傳頭像：</label>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          @change="onAvatarChange"
        />
      </div>
      <div>
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">電子郵件：</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="gender">性別：</label>
        <select id="gender" v-model="gender">
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">其他</option>
        </select>
      </div>
      <div>
        <label for="birthday">生日：</label>
        <input type="date" id="birthday" v-model="birthday" />
      </div>
      <button type="submit" @click.prevent="saveProfile">儲存</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "劉建宏",
      email: "test@gmail.com",
      gender: "male",
      birthday: "2023-03-28",
      avatar: null, // 新增 avatar 資料
      preview: null, // 新增 preview 資料
    };
  },
  methods: {
    saveProfile() {
      // 將資料提交到後端或進行其他操作
      console.log("Profile saved!");
    },
    onAvatarChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      // 預覽圖片
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.preview = reader.result;
      };
      // 存儲圖片
      this.avatar = file;
    },
  },
};
</script>
<style scoped>
.profile {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.profile h2 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.profile form div {
  margin-bottom: 10px;
}

.profile label {
  display: inline-block;
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.profile input,
.profile select {
  width: 250px;
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.profile button[type="submit"] {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.profile form div {
  margin-bottom: 10px;
  display: flex; /* 新增的 */
  align-items: center; /* 新增的 */
}

.profile label {
  width: auto; /* 修改的 */
  margin-right: 10px;
}

.profile .avatar-preview {
  display: flex;
  align-items: center;
  justify-content: center; /* 新增的 */
  height: 200px; /* 新增的 */
}

.profile .avatar-preview img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.profile .no-avatar {
  font-size: 18px;
  color: #999;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px dashed #ccc;
  text-align: center;
  flex: 1; /* 新增的 */
}
</style>

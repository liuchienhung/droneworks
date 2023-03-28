<template>
  <div class="profile">
    <h2>Profile Information</h2>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" v-model="birthday">
      </div>
      <button type="submit" @click.prevent="saveProfile">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '劉建宏',
      email: 'test@gmail.com',
      gender: 'male',
      birthday: '2023-03-28'
    }
  },
  methods: {
    saveProfile() {
      // 將資料提交到後端或進行其他操作
      console.log('Profile saved!');
    }
  }
}
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
</style>
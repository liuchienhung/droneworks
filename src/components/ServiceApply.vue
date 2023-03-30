<template>
  <div class="service-application">
    <h2>無人機服務申請表格</h2>
    <form>
      <div class="form-group">
        <label for="service-type">服務類型:</label>
        <select id="service-type" name="service-type">
          <option value="aerial-photography">航拍</option>
          <option value="mapping-surveying">測量</option>
          <option value="inspection">巡檢</option>
        </select>
      </div>
      <div class="form-group">
        <label for="location">申請地點:</label>
        <input type="text" id="location" name="location" required>
      </div>
      <div class="form-group">
        <label for="date">申請日期:</label>
        <input type="date" id="date" name="date" required>
      </div>
      <div class="form-group">
        <label for="duration">服務時長:</label>
        <input type="number" id="duration" name="duration" required>
        <label for="duration">小時</label>
      </div>
      <div class="form-group">
        <label for="description">服務描述:</label>
        <textarea id="description" name="description" rows="5" required></textarea>
      </div>
      <button type="submit">提交申請</button>
    </form>
  </div>
</template>

<style scoped>
.service-application {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.service-application form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.service-application input[type="text"],
.service-application input[type="email"],
.service-application select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.service-application select {
  background-color: #fff;
}

.service-application label {
  font-weight: bold;
  margin-bottom: 10px;
}

.service-application input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.service-application input[type="submit"]:hover {
  background-color: #0069d9;
}

</style>

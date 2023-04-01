<template>
  <div class="admin-page">
    <h1 class="page-title">無人機飛行員作業資訊</h1>
    <table>
      <thead>
        <tr>
          <th>明細</th>
          <th>帳號</th>
          <th>名稱</th>
          <th>真實姓名</th>
          <th>總任務</th>
          <th>已完成任務</th>
          <th>分鐘</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pilot, index) in pilots" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ pilot.username }}</td>
          <td>{{ pilot.name }}</td>
          <td>{{ pilot.realname }}</td>
          <td>{{ pilot.total_tasks }}</td>
          <td>{{ pilot.completed_tasks }}</td>
          <td>{{ pilot.minutes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
  data() {
    return {
      pilots: [
        {
          username: "pilot01",
          name: "Pilot One",
          realname: "John Doe",
          total_tasks: 10,
          completed_tasks: 5,
          minutes: 120,
        },
        {
          username: "pilot02",
          name: "Pilot Two",
          realname: "Jane Doe",
          total_tasks: 8,
          completed_tasks: 3,
          minutes: 90,
        },
        {
          username: "pilot03",
          name: "Pilot Three",
          realname: "James Smith",
          total_tasks: 12,
          completed_tasks: 8,
          minutes: 180,
        },
      ],
    };
  },
};
</script>

<style scoped>
.admin-page {
  margin: 40px auto;
  max-width: 800px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f5f5f5;
}
</style>

<template>
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h2 class="dashboard-title">儀表板</h2>
      </div>
      <div class="dashboard-content">
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            <h3 class="dashboard-card-title">訂單總數</h3>
          </div>
          <div class="dashboard-card-body">
            <p class="dashboard-card-text">{{ orderCount }}</p>
          </div>
        </div>
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            <h3 class="dashboard-card-title">營業額</h3>
          </div>
          <div class="dashboard-card-body">
            <p class="dashboard-card-text">{{ revenue }}</p>
          </div>
        </div>
        <div class="dashboard-card">
          <div class="dashboard-card-header">
            <h3 class="dashboard-card-title">訂單完成率</h3>
          </div>
          <div class="dashboard-card-body">
            <p class="dashboard-card-text">{{ orderCompletionRate }}%</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DroneServiceApplication',
    data() {
      return {
        orderCount: 100,
        revenue: '$10,000',
        completedOrders: 85
      }
    },
    computed: {
      orderCompletionRate() {
        return Math.round((this.completedOrders / this.orderCount) * 100);
      }
    }
  }
  </script>
  
  <style scoped>
  .dashboard-container {
    margin: 2rem;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .dashboard-title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .dashboard-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .dashboard-card {
    flex-basis: 30%;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }
  
  .dashboard-card-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
  }
  
  .dashboard-card-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .dashboard-card-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dashboard-card-text {
    font-size: 2rem;
    font-weight: bold;
  }
  </style>
  
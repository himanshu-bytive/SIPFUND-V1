export default {
  apiBaseUrl: 'http://103.252.169.2:8084/api',
  apiSocketUrl: 'http://moclass.in:3008',
  uploadPath: 'http://moclass.in/LaundryPlusImages',
  groupIds: {
    superadmin: '5ed1ed6dae6acd0278cc4b83',
    admins: '5ed1ed8dae6acd0278cc4b85',
    users: '5ed1ed98ae6acd0278cc4b86',
    vendors: '5ed1eda6ae6acd0278cc4b87',
    deliveryboys: '5ed1edb1ae6acd0278cc4b88',
  },
  showStatusBar: true,
  title: 'iLaundry',
  googleMap: 'AIzaSyB_zZZJR2C867GHH4jBbNs0IDsWX8lKMAw',
  messageStatus: {
    0: 'New Orders',
    1: 'Waiting For Customer',
    2: 'Pickup Orders',
    3: 'Work Progress',
    4: 'Drop Orders',
    5: 'Complete Orders',
    6: 'Cancel Orders',
    AssignToPickup: 'Waiting for Pickup',
    AcceptByPickup: 'Accept From Customer',
    AcceptFromCustomer: 'Delivery To Vender',
    AssignToDrop: 'Waiting for Drop',
    AcceptByDrop: 'Accept From Vender',
    AcceptFromVender: 'Delivery To Customer',
    CompleteOrder: 'Complete Order',
  },
}
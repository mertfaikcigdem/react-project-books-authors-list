const userData = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
export default userData;

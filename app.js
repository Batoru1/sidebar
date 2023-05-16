// variables
const toggle = document.querySelector('.toggle-btn');
const close = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
// add sidebar
toggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});
// hide sidebar
close.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId, mainId) =>{
  const toggle = document.getElementById(toggleId),
  sidebar = document.getElementById(sidebarId),
  main = document.getElementById(mainId)

  if(toggle && sidebar && main){
      toggle.addEventListener('click', ()=>{
          /* Show sidebar */
          sidebar.classList.toggle('show-sidebar')
          /* Add padding main */
          main.classList.toggle('main-pd')
          // toggle.classList.toggle('header-active')
      })
  }
}
showSidebar('header-toggle','sidebar', 'main')

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar_link')

function linkColor(){
   sidebarLink.forEach(l => l.classList.remove('active-link'))
   this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))


$(document).ready(function () {    // 等待页面加载完成
  var path = window.location.pathname;  // 获取当前页面路径
  // 根据路径更改导航栏标题背景色
  if (path === '/' || path === '/index.html') {
    $('#home').addClass('active-link');
  } else if (path === '/about.html') {
    $('#about').addClass('active-link');
  } else if (path === '/project.html') {
    $('#project').addClass('active-link');
  } else if (path === '/contact.html') {
    $('#contact').addClass('active-link');
  } else if (path === '/test.html') {
    $('#test').addClass('active-link');
  }
});

// 获取系统亮暗模式
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

// 获取网页根元素
const root = document.documentElement;

// 获取切换按钮
const modeToggle = document.getElementById('mode-toggle');

// 定义一个函数，根据系统亮暗模式设置网页亮暗模式
function setThemeBySystem() {
    if (systemTheme.matches) {
        // 如果系统是暗模式，设置网页为暗模式
        root.setAttribute('data-theme', 'dark');
        modeToggle.classList.add('ri-moon-line');
    } else {
        // 如果系统是亮模式，设置网页为亮模式
        root.removeAttribute('data-theme');
        modeToggle.classList.add('ri-sun-line');
    }
}

// 定义一个函数，根据用户点击切换网页亮暗模式
function toggleThemeByUser() {
    if (root.hasAttribute('data-theme')) {
        // 如果网页是暗模式，切换为亮模式
        root.removeAttribute('data-theme');
        modeToggle.classList.toggle('ri-moon-line');
        modeToggle.classList.toggle('ri-sun-line');
    } else {
        // 如果网页是亮模式，切换为暗模式
        root.setAttribute('data-theme', 'dark');
        modeToggle.classList.toggle('ri-sun-line');
        modeToggle.classList.toggle('ri-moon-line');
    }
}

// 在网页加载时，根据系统亮暗模式设置网页亮暗模式
window.addEventListener('load', setThemeBySystem);

// 当系统亮暗模式改变时，根据系统亮暗模式设置网页亮暗模式
systemTheme.addEventListener('change', setThemeBySystem);

// 当用户点击切换按钮时，根据用户点击切换网页亮暗模式
modeToggle.addEventListener('click', toggleThemeByUser);
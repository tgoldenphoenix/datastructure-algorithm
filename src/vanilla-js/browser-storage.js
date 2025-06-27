// Khởi tạo local storage
localStorage.setItem('key', 'value');
// hoặc
localStorage.key = 'value';
// hoặc
localStorage['key'] = 'value';

// Lấy giá trị từ local storage
localStorage.getItem('key');
// hoặc
localStorage.key;

// xóa 1 biến trong local storge
localStorage.removeItem(key);

// ========= Syntax sử dụng session storage giống local storage=========

// ================ Cookies ========================

// tạo cookie
document.cookie = 'username=Ted Mosby';

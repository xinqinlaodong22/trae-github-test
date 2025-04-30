/* 文件头注释 */
/* 文件名：script.js */
/* 描述：蛋主题网页的交互脚本 */

/* 文件级注释 */
/* 该文件包含网页的交互逻辑 */

// 图片数据
const eggImages = [
    'https://example.com/egg1.jpg',
    'https://example.com/egg2.jpg',
    'https://example.com/egg3.jpg'
];

// 函数级注释
/**
 * 初始化图片库
 */
function initGallery() {
    const gallery = document.querySelector('.gallery');
    eggImages.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = '蛋的图片';
        gallery.appendChild(img);
    });
}

// 页面加载时初始化
window.onload = initGallery;

/* 文件尾注释 */
/* 脚本结束 */
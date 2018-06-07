/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<footer>    <ul>        <li class=\"active\"><a href=\"index.html\"><i>&#xe634;</i>首页</a></li>        <li><a href=\"./list.html\"><i>&#xe635;</i>商品</a></li>        <li><a href=\"./cart.html\"><i>&#xe65c;</i>购物袋</a></li>        <li><a href=\"./mine.html\"><i>&#xe637;</i>我的</a></li>    </ul></footer>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const indexController = {
    footerAction(){
        const pagelist = ['index.html', 'list.html','cart.html','mine.html']
        $('footer li').on('click',function(){
            // console.log($(this).index());
            location.href = pagelist[$(this).index()]
        })
        let pathname = location.pathname.substr(1)
        let curIndex = pagelist.indexOf(pathname)
        curIndex = curIndex > 0 ? curIndex : 0;
        $('footer li').eq(curIndex).addClass("active").siblings().removeClass("active")
    }
}

module.exports = indexController

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(0)
const footerTpl = __webpack_require__(1)
const listTpl = __webpack_require__(9)
const brandTpl = __webpack_require__(10)
// console.log(brandTpl);

const indexController = __webpack_require__(2)
const listController = __webpack_require__(11)

$('#root').html(indexTpl)
$('.container').html(listTpl + footerTpl)
$('.container main').html(brandTpl)

var swiper = new Swiper(".swiper-container",{
    loop:true,
    autoplay:true,
    pagination:{
        el:".swiper-pagination"
    }
})

// $("header li").on("click",function(){
//     $(this).addClass("selected").siblings().removeClass("selected")
// })
// ;(async ()=>{
//     await listController.render(492)
//     $("main nav ul li").on("click",function(){
//         $(this).addClass("selected").siblings().removeClass("selected");
//         let data = $(this).attr("c_id")
//         listController.render(data)
//     })
// })()
;(async () => {
    await listController.renderBrand()
})()

indexController.footerAction()


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<header>    <ul>        <li class=\"selected\"><a href=\"###\">分类</a></li>        <li><a href=\"###\">品牌</a></li>    </ul>    <i>&#xe64d;</i></header><main>    <!-- <nav>        <ul>            <li c_id=\"492\" class=\"selected\">热门</li>            <li c_id=\"498\">男装</li>            <li c_id=\"474\">女装</li>            <li c_id=\"476\">儿童</li>            <li c_id=\"486\">鞋履</li>            <li c_id=\"480\">箱包</li>            <li c_id=\"763\">配饰</li>        </ul>    </nav>    <div class=\"content\"></div> -->    </main>"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<nav>    <ul>        <li class=\"selected\">热门</li>        <li>男装</li>        <li>女装</li>        <li>儿童</li>        <li>鞋履</li>        <li>箱包</li>        <li>配饰</li>    </ul></nav><div class=\"swiper-container\">    <div class=\"swiper-wrapper\">        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/misu.jpg\" alt=\"\"></a></div>        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/fhgs.jpg\" alt=\"\"></a></div>        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160905/mango.jpg\" alt=\"\"></a></div>        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/bjj.jpg\" alt=\"\"></a></div>        <div class= \"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/qpl.jpg\" alt=\"\"></a></div>    </div>    <div class=\"swiper-pagination\"></div></div><div class=\"hotBrand\">    <p>热门品牌</p>    <div>        <ul class=\"hotBrandWrap\">            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_01.jpg\" alt=\"\"></a></li>            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_02.jpg\" alt=\"\"></a></li>            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_04.jpg\" alt=\"\"></a></li>            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_05.jpg\" alt=\"\"></a></li>            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/20180129/a_ppmlqs.jpg\" alt=\"\"></a></li>        </ul>    </div></div><div class=\"brandList\">    <p>品牌列表</p>    <dl>            </dl></div>"

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const list = __webpack_require__(12)
const posListBoxTpl = __webpack_require__(13)
const posListBrandTpl = __webpack_require__(14)

const listController = {
    async render(data){
        let result = await list.find(data)
        let finalResult = result.data[0];
        // console.log(finalResult.children)
        var html = template.render(posListBoxTpl, finalResult)
        // console.log(html);
        var htmlArr = htmlArr + html;

        // console.log(htmlArr);
        let finalhtml = htmlArr.substr(9)
        $('.content').html(finalhtml);
        // return htmlArr

    },
    async renderBrand(){
        let result = await list.findBrand()
        console.log(result);
        var html = template.render(posListBrandTpl, result)
        console.log(html);
        // var htmlArr = htmlArr + html;

        // // console.log(htmlArr);
        // let finalhtml = htmlArr.substr(9)
        // $('.content').html(finalhtml);
        // // return htmlArr

    },
    
}
module.exports = listController

/***/ }),
/* 12 */
/***/ (function(module, exports) {

const list = {
    find(data){
        // this.find_cid();
        return fetch('/showList/list-category/getCateRelChild.shtml?cate_id='+data)
        .then(response => response.json())
        .then(result => {
            return result
        });
    },
    findBrand(){
        return fetch('/showList/list-brand/getAssortBrandInfo.shtml')
        .then(response => response.json())
        .then(result => {
            return result
        });
    }
}

module.exports = list

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "{{each children}}<p>{{$value.site_cate_name}}</p><span>    <a href=\"\">        <img src=\"{{$value.icon}}\" alt=\"\">    </a></span><ul>    {{each $value.children}}    <li>        <a href=\"\">            <img src=\"{{$value.icon}}?x-oss-process=image/resize,m_pad,w_160,h_160\" alt=\"\">            <span>{{$value.site_cate_name}}</span>        </a>    </li>    {{/each}}</ul>{{/each}}"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "{{each data}}<dt>{{$value.key}}</dt>{{/each}}"

/***/ })
/******/ ]);
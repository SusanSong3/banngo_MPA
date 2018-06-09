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

module.exports = "<footer>    <ul>        <li class=\"active\"><a><i>&#xe634;</i>首页</a></li>        <li><a><i>&#xe635;</i>商品</a></li>        <li><a><i>&#xe65c;</i>购物袋</a></li>        <li><a><i>&#xe637;</i>我的</a></li>    </ul></footer>"

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
//list页
const listTpl = __webpack_require__(9)
const brandTpl = __webpack_require__(10)
const classifyTpl = __webpack_require__(11)

const posListBoxTpl = __webpack_require__(12)
const posListBrandTpl = __webpack_require__(13)
const posListBrandPageTpl = __webpack_require__(14)

const indexController = __webpack_require__(2)
const listController = __webpack_require__(15)

$('#root').html(indexTpl)
$('.container').html(listTpl + footerTpl)
$('main').html(classifyTpl)


//点击【商品】就渲染【列表页】;点击导航栏 就 渲染数据
;(async () => {
    let html = await listController.render("/showList/list-category/getCateRelChild.shtml?cate_id=",492,posListBoxTpl)
    $(".classify_content").html(html)
    $("nav ul li").on("click",async function(){
        let data = $(this).attr("c_id")
        let hasStorage = "c_id="+data;
        if(sessionStorage.getItem(hasStorage) === null){
            html = await listController.render("/showList/list-category/getCateRelChild.shtml?cate_id=",data,posListBoxTpl)
        }else{
            storage = sessionStorage.getItem("c_id="+data);
            html = await listController.render("",data,posListBoxTpl)
        }
        $(".classify_content").html(html)
    })
})()

//点击品牌就切换到 【 品牌页 】
 $("header li").on("click",async function(){
    $(this).addClass("selected").siblings().removeClass("selected")
     if(($(this).attr("id") == "classify")){
        $('main').html(classifyTpl)
     }else if($(this).attr('id' == "brand")){
        await $('main').html(brandTpl)
        // if(sessionStorage.getItem(brandList) === null){
            let posListBrandPage = await listController.render('/showList/list-brand/getAssortBrandInfo.shtml',"",posListBrandTpl)
        // }else{
            // storage = sessionStorage.getItem("brandList")
            // console.log(storage);
            // html = await listController.render("",data,posListBrandTpl)
            $('.brandList dl').html(posListBrandPage)
        // }
        
        
        
        
        // console.log(posListBrandPage);
        
     }
      var swiper = await new Swiper(".swiper-container",{
         loop:true,
         autoplay:true,
         pagination:{
             el:".swiper-pagination"
         }
     })
    



 })













//品牌页面加载
listController.navAction()
indexController.footerAction()


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<header>    <ul>        <li class=\"selected\" id=\"classify\"><a href=\"###\">分类</a></li>        <li id=\"brand\"><a href=\"###\">品牌</a></li>    </ul>    <i>&#xe64d;</i></header><main> </main>"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand_center\">        <nav class=\"brand\">                <ul>                    <li c_id=\"492\" class=\"selected\">热门</li>                    <li c_id=\"498\">男装</li>                    <li c_id=\"474\">女装</li>                    <li c_id=\"476\">儿童</li>                    <li c_id=\"486\">鞋履</li>                    <li c_id=\"480\">箱包</li>                    <li c_id=\"763\">配饰</li>                </ul>            </nav>            <!-- 品牌页面 -->            <div class=\"brand_content\">                                <!-- 热门页面 -->                <div class=\"swiper-container\">                    <div class=\"swiper-wrapper\">                        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/misu.jpg\" alt=\"\"></a></div>                        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/fhgs.jpg\" alt=\"\"></a></div>                        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160905/mango.jpg\" alt=\"\"></a></div>                        <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/bjj.jpg\" alt=\"\"></a></div>                        <div class= \"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/20160914-wx/qpl.jpg\" alt=\"\"></a></div>                    </div>                    <div class=\"swiper-pagination\"></div>                </div>                <div class=\"hotBrand\">                    <p>热门品牌</p>                    <div>                        <ul class=\"hotBrandWrap\">                            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_01.jpg\" alt=\"\"></a></li>                            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_02.jpg\" alt=\"\"></a></li>                            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_04.jpg\" alt=\"\"></a></li>                            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/APP/71030aprm_05.jpg\" alt=\"\"></a></li>                            <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/20180129/a_ppmlqs.jpg\" alt=\"\"></a></li>                        </ul>                    </div>                </div>                <div class=\"brandList\">                    <p>品牌列表</p>                    <dl>                                            </dl>                </div>            </div>            </div>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"classify\">    <ul>        <li c_id=\"492\" class=\"selected\">热门</li>        <li c_id=\"498\">男装</li>        <li c_id=\"474\">女装</li>        <li c_id=\"476\">儿童</li>        <li c_id=\"486\">鞋履</li>        <li c_id=\"480\">箱包</li>        <li c_id=\"763\">配饰</li>    </ul></nav><div class=\"classify_content\"></div>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "{{each children}}<p>{{$value.site_cate_name}}</p><span>    <a href=\"\">        <img src=\"{{$value.icon}}\" alt=\"\">    </a></span><ul>    {{each $value.children}}    <li>        <a href=\"\">            <!-- ?x-oss-process=image/resize,m_pad,w_160,h_160 -->            <img src=\"{{$value.icon}}?x-oss-process=image/resize,m_pad,w_160,h_160\" alt=\"\">            <span>{{$value.site_cate_name}}</span>        </a>    </li>    {{/each}}</ul>{{/each}}"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "{{each data}}<dt>{{$index}}</dt>{{each $value}}<dd>{{$value.name}}</dd>{{/each}}{{/each}}"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brandListPage\">    <ul>        {{each data}}        <li>            <a href=\"\">                <img src=\"{{$value.image_url}}\" alt=\"\">            </a>        </li>        {{/each}}    </ul></div>"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const list = __webpack_require__(16)

const listController = {

    async render(url,data,templateBox){
        // console.log(data);
        if(url === "") {//证明有缓存
            let storage = "c_id="+data
            let result = sessionStorage.getItem(storage);
            result = JSON.parse(result)
            var finalResult = result.data[0];
        }else if(url !== ""){
            result = await list.find(url,data)
            finalResult = result.data[0];
        }
        if(data == ""){
            finalResult = await list.find(url,data)
            // console.log(finalResult);
        }
        var html = template.render(templateBox, finalResult)
        // console.log(html);
        return html
    },
    navAction(){
        $('nav li').on('click',function(){
            $(this).addClass("selected").siblings().removeClass("selected")
        })
    },
    
}
module.exports = listController

/***/ }),
/* 16 */
/***/ (function(module, exports) {

const list = {
    find(url,data){
        return fetch(url+data)
        .then(response => response.json())
        .then(result => {
            if(data !== ""){
                sessionStorage.setItem("c_id="+data,JSON.stringify(result))
            }else{
                sessionStorage.setItem("brandList",JSON.stringify(result))
            }
            
            return result
        });
    },
}

module.exports = list

/***/ })
/******/ ]);
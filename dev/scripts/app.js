'use strict';

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 0);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    var indexTpl = __webpack_require__(1);
    var headerTpl = __webpack_require__(2);
    var footerTpl = __webpack_require__(3);
    var homeTpl = __webpack_require__(4);

    var homeController = __webpack_require__(5);
    var indexController = __webpack_require__(8);

    $('#root').html(indexTpl);
    $('.container').html(headerTpl + homeTpl + footerTpl);

    homeController.render(function (html) {
        $('#poslist').html(html);
        // console.log(1);
    });
    homeController.renderBox(function (result) {

        // console.log(result);
    });

    indexController.footerAction();

    /***/
},
/* 1 */
/***/function (module, exports) {

    module.exports = "<div class=\"container\"></div>";

    /***/
},
/* 2 */
/***/function (module, exports) {

    module.exports = "<header>    <div class=\"search\">        <i>&#xe64d;</i><span>夏季新品</span>    </div></header>";

    /***/
},
/* 3 */
/***/function (module, exports) {

    module.exports = "<footer>    <ul>        <li class=\"active\"><a href=\"\"><i>&#xe634;</i>首页</a></li>        <li><a href=\"\"><i>&#xe635;</i>商品</a></li>        <li><a href=\"\"><i>&#xe65c;</i>购物袋</a></li>        <li><a href=\"\"><i>&#xe637;</i>我的</a></li>    </ul></footer>";

    /***/
},
/* 4 */
/***/function (module, exports) {

    module.exports = "<main>    <!-- 轮播图 -->    <div class=\"swiper-container\">        <div class=\"swiper-wrapper\">            <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180531lb_01.jpg\" alt=\"\"></a></div>            <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180531lb_02.jpg\" alt=\"\"></a></div>            <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180528lb_01.jpg\" alt=\"\"></a></div>            <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180529lb_01.jpg\" alt=\"\"></a></div>            <div class=\"swiper-slide\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180531lb_04.jpg\" alt=\"\"></a></div>        </div>        <div class=\"swiper-pagination\"></div>    </div>    <!-- 导航 -->    <div class=\"custom_box\">        <ul>            <li><a href=\"\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180601icon_01.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            <li><a href=\"\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180601icon_02.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            <li><a href=\"\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180601icon_03_1.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            <li><a href=\"\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180601icon_04.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            <li><a href=\"\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180601icon_05.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>        </ul>    </div>     <!-- 精品推荐 -->    <div class=\"panner_box\">        <!-- 热门品牌 -->        <div class=\"hot_brand\">            <div class=\"title\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/999999/repin121901.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></div>            <div class=\"plate\">                <ul>                    <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/2018rmpp/sypp0412_1.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a>  </li>                    <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/2018rmpp/sypp0412_2.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                    <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/999999/remn22_03.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                    <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/999999/0529_03_04.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                </ul>            </div>        </div>        <!-- 邦购精选 -->        <div class=\"banggo_perfect\">            <div class=\"title\">                <a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/999999/0518-1.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a>            </div>            <div class=\"plate\">                <div>                    <a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180531bgjx_02.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a>                    <div>                        <a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180531bgjx_03_01.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a>                        <a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/app_180531bgjx_03_02.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a>                    </div>                </div>                <div>                    <a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/999999/05185.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a>                </div>            </div>        </div>        <!-- 男生热门品类 -->        <div class=\"man_hot_brand\">            <div class=\"title\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_01.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></div>            <img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_02.jpg?x-oss-process=image/quality,Q_90\" alt=\"\">            <ul>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_03.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_04.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_05.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_06.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_07.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_08.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_09.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_10.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            </ul>        </div>        <!-- 女生热门品类 -->        <div class=\"woman_hot_brand\">            <div class=\"title\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_11.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></div>            <img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_12.jpg?x-oss-process=image/quality,Q_90\" alt=\"\">            <ul>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_13.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_14.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_15.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_16.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_17.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_18.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_19.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_20.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            </ul>        </div>        <!-- 儿童热门品类 -->        <div class=\"children_hot_brand\">            <div class=\"title\"><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_21.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></div>            <img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_22.jpg?x-oss-process=image/quality,Q_90\" alt=\"\">            <ul>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_23.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_24.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_25.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_26.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_27.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_28.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_29.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>                <li><a href=\"###\"><img src=\"http://img.banggo.com/sources/cms/banggo2017/APP/wap-20180508fl_30.jpg?x-oss-process=image/quality,Q_90\" alt=\"\"></a></li>            </ul>        </div>    </div>    <!-- 热销商品 -->    <div class=\"top_products\">        <div class=\"title\"> —— 热销商品  ——</div>        <div class=\"products_list\">            <ul id=\"poslist\">                <!-- <li>                    <a href=\"###\" class=\"products_pic\"><img src=\"http://pic.banggo.com/sources/images/goods/MB/226251/226251_00.jpg?x-oss-process=image/resize,m_fill,w_300,h_410\" alt=\"\"></a>                    <p class=\"products_title\">Metersbonwe  男常年款净色V领T恤</p>                    <p class=\"products_price\">¥35</p>                </li> -->            </ul>            <footer>                <nav>                    <span>                        <a href=\"###\">登录</a>                        <span>|</span>                        <a href=\"###\">注册</a>                    </span>                    <span>                        <a href=\"###\">顶部</a>                        <i>&#xe504;</i>                    </span>                </nav>                <section>                    CopyRight &copy; 2000-2018 banggo.com                </section>            </footer>        </div>    </div></main>";

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    var model = __webpack_require__(6);
    var poslistTpl = __webpack_require__(7);

    var homeController = {
        render: function render(cb) {
            model.find(function (result) {
                // console.log(result);
                var html = template.render(poslistTpl, result);
                cb(html);
            });
        },
        renderBox: function renderBox(cb) {
            model.customBox(function (result) {
                // console.log(1);
                // console.log(result);
                cb(result);
            });
        }
    };

    module.exports = homeController;

    /***/
},
/* 6 */
/***/function (module, exports) {

    var model = {
        find: function find(cb) {
            // console.log(1);
            fetch('/plate/goods-list.shtml?productIds=226251%2C661231%2C226250%2C601898%2C602052%2C518437%2CA03833%2C241339%2C756236%2C753401%2C661265%2C246418%2CA03849%2C602027%2C602796%2C601204%2C661244%2CA03851%2C748019%2C661304%2C726419%2C602551%2CA01480%2C246417%2C661248%2C753405%2C602807%2C252166%2C602810%2C246423%2C753155%2C753447%2C661012%2C753306%2C246444%2C602009%2C602553%2C753147%2C756190%2C602094%2C252253%2C602764%2C226720%2C226589%2C202499%2C202353%2C201072%2C202671%2C202200%2C271447%2C202239%2C299097%2C&timestamp=').then(function (response) {
                return response.json();
            }).then(function (result) {
                // console.log(result);
                cb(result);
            });
        },
        customBox: function customBox(cb) {
            // console.log(1);
            fetch('/plate/GetPlateContent?_ksTS=1528245982089_78&callback=jsonp79&mark=wap_index&plate_id=375').then(function (res) {
                //response => response.json()
                //    console.log(typeof res.text());
                return res.text();
            }).then(function (result) {
                console.log(result);
                cb(result);
            });
        }
    };

    module.exports = model;

    /***/
},
/* 7 */
/***/function (module, exports) {

    module.exports = "{{each data}}<li>    <a class=\"products_pic\"><img src=\"http://pic.banggo.com/sources/images/goods/MB/661012/661012_00.jpg?x-oss-process=image/resize,m_fill,w_300,h_410\" /></a>    <p class=\"products_title\">{{$value.product_name}}</p>    <p class=\"products_price\">¥{{$value.sales_price}}</p></li>{{/each}}";

    /***/
},
/* 8 */
/***/function (module, exports) {

    var indexController = {
        footerAction: function footerAction() {
            var pagelist = ['index.html', 'list.html', 'cart.html', 'mine.html'];
            $('footer li').on('click', function () {
                location.href = pagelist[$(this).index()];
            });
            var pathname = location.pathname.substr(1);
            var curIndex = pagelist.indexOf(pathname);
            $('footer li').eq(curIndex).addClass('active').siblings().removeClass('avtive');
        }
    };

    module.exports = indexController;

    /***/
}]
/******/);
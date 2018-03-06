var app = angular.module('cvSite', ['ngRoute', 'ngResource']);
const TMP_URL = 'js/app/templates/';

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './' + TMP_URL + 'main.html',
            controller: 'MainPageController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// ######################################

app.controller('AppController', AppController);

function AppController() {
    this.templatesUrl = '/' + TMP_URL;
    this.currentYear = (new Date()).getFullYear();
};

// ######################################

app.controller('MainPageController', MainPageController);
function MainPageController($sce) {
    this.templatesUrl = '/' + TMP_URL;

    this.trustHtml = function (html) {
        return $sce.trustAsHtml(html);
    };

    this.skills = [
        {
            name: 'HTML5/CSS3',
            power: '95',
            points: 5,
        },
        {
            name: 'SASS/LESS',
            power: '92',
            points: 5,
        },
        {
            name: 'Bootstrap',
            power: '92',
            points: 5,
        },
        {
            name: 'Foundation',
            power: '81',
            points: 5,
        },
        {
            name: 'PHP',
            power: '93',
            points: 5,
        },
        {
            name: 'Laravel',
            power: '93',
            points: 4,
        },
        {
            name: 'Yii',
            power: '93',
            points: 4,
        },
        {
            name: 'JavaScript',
            power: '90',
            points: 5,
        },
        {
            name: 'AngularJS 1',
            power: '92',
            points: 5,
        },
        {
            name: 'jQuery',
            power: '96',
            points: 5,
        },
        {
            name: '<a href="https://www.gnu.org/software/easejs/" title="Click, if You want to know more about it!" target="_blank">easejs</a>',
            power: '96',
            points: 5,
        },
        {
            name: 'TypeScript',
            power: '96',
            points: 2,
        },
        {
            name: 'Lodash (Underscore)',
            power: '96',
            points: 5,
        },
        {
            name: 'RequireJS',
            power: '96',
            points: 5,
        },
        {
            name: 'Ajax',
            power: '96',
            points: 5,
        },
        {
            name: 'Smarty',
            power: '96',
            points: 5,
        },
        {
            name: 'SQL',
            power: '96',
            points: 5,
        },
        {
            name: 'PostgreSQL',
            power: '96',
            points: 5,
        },
        {
            name: 'Git',
            power: '96',
            points: 5,
        },
        {
            name: 'XML',
            power: '96',
            points: 5,
        },
    ];

    this.skills2 = [
        {
            name: 'Node.js',
            power: '95',
            points: 2,
        },
        {
            name: 'Gulp',
            power: '95',
            points: 2,
        },
        {
            name: 'Webpack',
            power: '95',
            points: 2,
        },
        {
            name: 'MVC Pattern',
            power: '95',
            points: 5,
        },
        {
            name: 'Rest API',
            power: '95',
            points: 5,
        },
        {
            name: 'UML',
            power: '95',
            points: 4,
        },
        {
            name: 'ModX',
            power: '95',
            points: 5,
        },
        {
            name: 'Joomla',
            power: '95',
            points: 5,
        },
        {
            name: 'Wordpress',
            power: '95',
            points: 5,
        },
        {
            name: 'WooCommerce',
            power: '95',
            points: 3,
        },
        {
            name: 'OpenCart',
            power: '95',
            points: 3,
        },
        {
            name: 'Magento',
            power: '95',
            points: 3,
        },
        {
            name: 'ShopScript/Webasyst',
            power: '95',
            points: 5,
        },
        {
            name: 'eCommerce',
            power: '95',
            points: 5,
        },
        {
            name: 'Scrum',
            power: '95',
            points: 5,
        },
        {
            name: 'MacOS/Linux',
            power: '95',
            points: 5,
        },
    ];

    this.projects = [
        {
            name: 'be.ge',
            url: 'be.ge',
            cases: [
                'Html makeup and fixes',
                'adaptive design for main page',
                'export data from database to pdf',
                '<a href="//www.unisender.com/">UniSender</a> service integration',
                '<a href="//www.criteo.com/">Criteo</a> service integration',
                'breadcrumbs with category list (<a href="//www.watchbuy.ru/Edwin/AutomatED/z1002-03.html">example</a>)',
                'updating the goods links by the cron',
                'fix cart processing',
                'backup script'
            ]
        },
        {
            name: 'baby-protection.com.ua',
            url: 'baby-protection.com.ua',
            cases: [
                'Html makeup and fixes',
                'fix broken functionalities',
                'rewrite cart plugin',
                'creating plugin for <a href="https://baby-protection.com.ua/shop/product_barriers">fences selection</a>',
                'rewrite brand view by categories (<a href="https://baby-protection.com.ua/shop/detskie-brendy/babydan/">example</a>)',
                'other plugins for admin section',
                'posting products to Facebook via cron',
                'setting meta tags for social networks (facebook.com, vk.ru)',
                'plugin for exporting products to hotline.ua',
                'plugin for exporting products to Yndex.Market',
                'plugin for exporting products to Prom.ua',
                'backup script',
                '<a href="//prom.ua">Prom.ua</a> service integration. <br>' +
                    'Plugin for synchronization and order management on prom.ua. <br>' +
                    'Export products to xml for prom.ua',
                    'move to a new hosting'
            ]
        },
        {
            name: 'buggy-shop.com.ua',
            url: 'buggy-shop.com.ua',
            cases: [
                'Html makeup and fixes',
                'baby carriages kits plugin (<a href="https://buggy-shop.com.ua/kolyaska-dlya-detey-pogodok-donkey-duo/">example</a>)',
                'move to a new hosting'
            ]
        },
        {
            name: 'child-bike.com.ua',
            url: 'child-bike.com.ua',
            cases: [
                'Html makeup and fixes',
                'refactoring and rewrite products list for adaptive design',
                'build a plugin for creating sitemap tree page (<a href="//child-bike.com.ua/sitemap_tree/">example</a>)',
                'build a plugin for filter products on category page (<a href="//child-bike.com.ua/katalog/velosipedi/params/kolichestvo-koles-dvuhkolesnyy/">example</a>)',
                'build a plugin which create a custom sitemap with specific urls. This url are used in category filters (<a href="//child-bike.com.ua/sitemap-params.xml">example</a>)',
                'localization (ru , ua)',
                'move to a new hosting'
            ]
        },
        {
            name: 'watchbuy.ru',
            url: 'watchbuy.ru',
            cases: [
                'Html makeup and fixes',
                'breadcrumbs with category list (<a href="//www.watchbuy.ru/Edwin/AutomatED/z1002-03.html">example</a>)',
            ]
        },
        {
            name: 'argodoor.ru',
            url: 'argodoor.ru',
            cases: [
                'Html makeup and fixes',
                'door kits',
                'other plugins for admin section',
            ]
        },
        {
            name: 'scoutmr.ru',
            url: 'scoutmr.ru',
            cases: [
                'Html makeup and fixes',
                'move site to a new hosting',
            ]
        },
        {
            name: 'ru-chef.ru',
            url: 'ru-chef.ru',
            cases: [
                'Html makeup and fixes',
                '<a href="//dadata.ru">DaData</a> service integration',
                '<a href="//pickpoint.ru/">PickPoint</a> service integration',

            ]
        },
        {
            name: 'kupilekarstva.ru',
            url: 'kupilekarstva.ru',
            cases: [
                'Html makeup and fixes',
                'export/import products to/from CSV',
            ]
        },
        {
            name: 'boxru.ru',
            url: 'boxru.ru',
            cases: [
                'Html makeup and fixes',
                'backup script',
                'extend export functionality to Yandex.Market',
                'fix cart processing'
            ]
        }


    ];
};
MainPageController.$inject = ['$sce'];

// ######################################

app.directive('starComponent', function() {
    return {
        restrict: 'E',
        template: '<span class="stars_wrapper"></span>',
        controller: StarComponentController,
        controllerAs: 'vm',
        scope: {
           starsCount: '='
        },
    }
});

function StarComponentController($scope, $element) {
    const starsCount = $scope.starsCount;
    const starEl = '<i class="fi-star"></i>';
    const starLightEl = '<i class="fi-star light"></i>';
    var starWrap = $element.find('.stars_wrapper');
    var less = 5 - starsCount;
    for (var i = 0; i < starsCount; i++) {
        starWrap.append(starEl);
    }
    if (less) {
        for (var i = 0; i < less; i++) {
            starWrap.append(starLightEl);
        }
    }
}
StarComponentController.$inject = ['$scope', '$element'];
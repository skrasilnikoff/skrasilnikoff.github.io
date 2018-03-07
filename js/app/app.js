var app = angular.module('cvSite', ['ngRoute', 'ngResource']);
const TMP_URL = 'js/app/templates/';

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './' + TMP_URL + 'main.html',
      controller: 'MainPageController',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});
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
      power: '99',
      points: 5
    },
    {
      name: 'SASS/LESS',
      power: '90',
      points: 5
    },
    {
      name: 'Bootstrap',
      power: '90',
      points: 5
    },
    {
      name: 'Foundation',
      power: '80',
      points: 5
    },
    {
      name: 'PHP',
      power: '90',
      points: 5
    },
    {
      name: 'Laravel',
      power: '50',
      points: 2
    },
    {
      name: 'Yii 2',
      power: '50',
      points: 2
    },
    {
      name: 'JavaScript',
      power: '90',
      points: 5
    },
    {
      name: 'AngularJS',
      power: '90',
      points: 5
    },
    {
      name: 'Angular 2+',
      power: '70',
      points: 4
    },
    {
      name: 'Angular Material',
      power: '90',
      points: 4
    },
    {
      name: 'jQuery',
      power: '100',
      points: 5
    },
    {
      name: 'Lodash (Underscore)',
      power: '100',
      points: 5
    },
    {
      name: 'Smarty',
      power: '100',
      points: 5
    },
    {
      name: 'SQL',
      power: '90',
      points: 5
    },
    {
      name: 'PostgreSQL',
      power: '90',
      points: 4
    },
    {
      name: 'Git',
      power: '98',
      points: 5
    }
  ];

  this.skills2 = [
    {
      name: 'Node.js',
      power: '50',
      points: 2
    },
    {
      name: 'Webpack',
      power: '80',
      points: 2
    },
    {
      name: 'MVC Pattern',
      power: '95',
      points: 5
    },
    {
      name: 'RESTful API',
      power: '100',
      points: 5
    },
    {
      name: 'UML',
      power: '95',
      points: 4
    },
    {
      name: 'ModX',
      power: '100',
      points: 5
    },
    {
      name: 'Joomla',
      power: '100',
      points: 5
    },
    {
      name: 'Wordpress',
      power: '100',
      points: 5
    },
    {
      name: 'WooCommerce',
      power: '100',
      points: 5
    },
    {
      name: 'OpenCart',
      power: '100',
      points: 5
    },
    {
      name: 'Magento',
      power: '48',
      points: 3
    },
    {
      name: 'ShopScript/Webasyst',
      power: '100',
      points: 5
    },
    {
      name: 'eCommerce',
      power: '100',
      points: 5
    },
    {
      name: 'MacOS/Linux',
      power: '100',
      points: 5
    }
  ];

  this.projects = [
    {
      name: 'baby-protection.com.ua',
      url: 'baby-protection.com.ua',
      cases: [
        'Html makeup and fixes',
        'Redesign',
        'fix broken functionality',
        'rewrite cart plugin',
        'creating plugin for <a href="https://baby-protection.com.ua/shop/product_barriers">fences selection</a>',
        'rewrite brand view by categories (<a href="https://baby-protection.com.ua/shop/detskie-brendy/babydan/">example</a>)',
        'other plugins for admin section',
        'posting products to Facebook and VK via cron',
        'setting meta tags for social networks (facebook.com, vk.ru)',
        'plugin for exporting products to the hotline.ua',
        'plugin for exporting products to the Yndex.Market',
        'plugin for exporting products to the Prom.ua',
        'backup script',
        '<a href="//prom.ua">Prom.ua</a> service integration. <br>Plugin for synchronizat' +
        'ion and order management on prom.ua. <br>Export products to xml for prom.ua',
        'move to a new hosting'
      ]
    },
    {
      name: 'kamielenco.be',
      url: 'kamielenco.be/online-babyshop/',
      cases: [
        'Html makeup and fixes',
        'Custom functional - "a wish list"',
        "Lots of other fixes"
      ]
    },
    {
      name: 'ttc.kz',
      url: 'ttc.kz/ru/',
      cases: [
        'Html makeup and fixes',
        "Create an admin side panel and integrate it with a client side via API",
        "Localisation (en, kz, ru)"
      ]
    },
    {
      name: 'molodost.globalsummit.by',
      url: 'molodost.globalsummit.by',
      cases: [
        "Create WP plugin to synchronise data with VK to organise competition (<a href='http://molodost.globalsummit.by/vk-konkurs/'>example</a>)"
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
        'Html makeup and fixes', 'refactoring and rewrite products list for adaptive design', 'build a plugin for creating sitemap tree page (<a href="//child-bike.com.ua/site' +
        'map_tree/">example</a>)',
        'build a plugin for filter products on category page (<a href="//child-bike.com.u' +
        'a/katalog/velosipedi/params/kolichestvo-koles-dvuhkolesnyy/">example</a>)',
        'build a plugin which create a custom sitemap with specific urls. This url are us' +
        'ed in category filters (<a href="//child-bike.com.ua/sitemap-params.xml">example' +
        '</a>)',
        'localization (ru, ua)',
        'move to a new hosting'
      ]
    },
    {
      name: 'candy-fantaziya.lviv.ua',
      url: 'candy-fantaziya.lviv.ua',
      cases: [
        'Html makeup and fixes',
        'Rewrite theme to custom functionality',
        'Custom functional for admin section. For example it\'s "Place an order with a deferred payment',
        'localization (ru, ua)'
      ]
    },
    {
      name: 'sigarety.online',
      url: 'sigarety.online',
      cases: [
        'Html makeup and fixes',
        'Rewrite theme to custom functionality',
        'localization (ru, ua)'
      ]
    },
    {
      name: 'sex-store.com.ua',
      url: 'sex-store.com.ua',
      cases: [
        'Html makeup and fixes'
      ]
    },
    {
      name: 'anfisa.ua',
      url: 'anfisa.ua',
      cases: [
        'Html makeup and fixes'
      ]
    },
    {
      name: 'watchbuy.ru',
      url: 'watchbuy.ru',
      cases: [
        'Html makeup and fixes', 'breadcrumbs with category list (<a href="http://www.watchbuy.ru/Edwin/AutomatED/' +
        'z1002-03.html">example</a>)'
      ]
    },
    {
      name: 'argodoor.ru',
      url: 'argodoor.ru',
      cases: ['Html makeup and fixes', 'door kits', 'other plugins for admin section']
    },
    {
      name: 'scoutmr.ru',
      url: 'scoutmr.ru',
      cases: ['Html makeup and fixes', 'move site to a new hosting']
    },
    {
      name: 'ru-chef.ru',
      url: 'ru-chef.ru',
      cases: ['Html makeup and fixes', '<a href="//dadata.ru">DaData</a> service integration', '<a href="//pickpoint.ru/">PickPoint</a> service integration']
    },
    {
      name: 'kupilekarstva.ru',
      url: 'kupilekarstva.ru',
      cases: ['Html makeup and fixes', 'export/import products to/from CSV']
    },
    {
      name: 'boxru.ru',
      url: 'boxru.ru',
      cases: ['Html makeup and fixes', 'backup script', 'extend export functionality to Yandex.Market', 'fix cart processing']
    },
    {
      name: 'transsline.com',
      url: 'transsline.com',
      cases: ['Implement google maps with destinations']
    },
    {
      name: 'be.ge',
      url: 'be.ge',
      cases: [
        'Html makeup and fixes',
        'adaptive design for main page',
        'export data from database to pdf',
        '<a href="//www.unisender.com/">UniSender</a> service integration',
        '<a href="//www.criteo.com/">Criteo</a> service integration',
        'updating the goods links by the cron',
        'fix cart processing',
        'backup script'
      ]
    },


  ];
};
MainPageController.$inject = ['$sce'];

// ######################################

app.directive('starComponent', function () {
  return {
    restrict: 'E',
    template: '<span class="stars_wrapper"></span>',
    controller: StarComponentController,
    controllerAs: 'vm',
    scope: {
      starsCount: '='
    }
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

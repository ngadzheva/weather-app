(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _min_max_temperature_min_max_temperature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./min-max-temperature/min-max-temperature.component */ 8473);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/location.service */ 5434);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/weather.service */ 1125);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _ui_tabs_ui_tabs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui-tabs/ui-tabs.module */ 985);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_2__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_3__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent, _min_max_temperature_min_max_temperature_component__WEBPACK_IMPORTED_MODULE_5__.MinMaxTemperatureComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _ui_tabs_ui_tabs_module__WEBPACK_IMPORTED_MODULE_10__.UITabsModule, _app_routing__WEBPACK_IMPORTED_MODULE_8__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.production
  })],
  providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_6__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_7__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 8189:
/*!****************************************!*\
  !*** ./src/app/config/cache.config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CACHE_EXPIRATION_TIME: () => (/* binding */ CACHE_EXPIRATION_TIME),
/* harmony export */   CACHE_KEYS: () => (/* binding */ CACHE_KEYS)
/* harmony export */ });
var CACHE_KEYS;
(function (CACHE_KEYS) {
  CACHE_KEYS["CURRENT_CONDITIONS"] = "current";
  CACHE_KEYS["FORECAST"] = "forecast";
})(CACHE_KEYS || (CACHE_KEYS = {}));
;
// Cache expiration time in miliseconds
const CACHE_EXPIRATION_TIME = 2 * 60 * 60 * 1000;

/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/weather.service */ 1125);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/location.service */ 5434);
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cache-service */ 7617);
/* harmony import */ var _config_cache_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/cache.config */ 8189);
/* harmony import */ var _utils_with_unsubscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/with-unsubscribe */ 2846);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let CurrentConditionsComponent = class CurrentConditionsComponent extends (0,_utils_with_unsubscribe__WEBPACK_IMPORTED_MODULE_6__.WithUnsubscribe)() {
  constructor() {
    super();
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
    this.cacheService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_cache_service__WEBPACK_IMPORTED_MODULE_4__.CacheService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    // Subscribe to the locations observable and listen for its events
    this.locationService.getLocation().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$)).subscribe(location => {
      if (location.action === _services_location_service__WEBPACK_IMPORTED_MODULE_3__.Action.ADD) {
        if (!this.currentConditionsByZip().find(conditions => conditions.zip === location.zipcode)) this.weatherService.addCurrentConditions(location.zipcode);
      } else if (location.action === _services_location_service__WEBPACK_IMPORTED_MODULE_3__.Action.REMOVE) {
        const {
          zipcode
        } = location;
        this.weatherService.removeCurrentConditions(zipcode);
        // Remove the location from the cache as well
        this.cacheService.removeItem(_config_cache_config__WEBPACK_IMPORTED_MODULE_5__.CACHE_KEYS.CURRENT_CONDITIONS, zipcode);
        this.cacheService.removeItem(_config_cache_config__WEBPACK_IMPORTED_MODULE_5__.CACHE_KEYS.FORECAST, zipcode);
      }
    });
    // Load the locations after we have
    // subscribed to the location observable
    this.locationService.loadLocations();
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  // Remove location from the list by the index
  // of the tab which close button is clicked
  removeLocation(index) {
    this.locationService.removeLocation(index);
  }
  // Helper method for setting the zipcode to the url hash
  extractHash(tabTitle) {
    const matches = tabTitle?.match(/\(([^)]+)\)/);
    return matches ? matches[1] : '';
  }
  static #_ = this.ctorParameters = () => [];
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/weather.service */ 1125);
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cache-service */ 7617);
/* harmony import */ var _config_cache_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/cache.config */ 8189);
/* harmony import */ var _utils_with_unsubscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/with-unsubscribe */ 2846);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ForecastsListComponent = class ForecastsListComponent extends (0,_utils_with_unsubscribe__WEBPACK_IMPORTED_MODULE_5__.WithUnsubscribe)() {
  constructor(weatherService, route, cacheService, location) {
    super();
    this.weatherService = weatherService;
    this.cacheService = cacheService;
    this.location = location;
    this.zipcode = route.snapshot.params['zipcode'];
    this.loadForecast();
  }
  goBack() {
    this.location.back();
  }
  /**
   * Helper method for fetching the 5-day forecast weather
   * First, we check for stored forecast in the cache
   * If it is available, we use it for initializing forecast
   * Otherwise, we fetch the udpated forecast from the API and update the cache
   */
  loadForecast() {
    const cachedForecast = this.cacheService.getItem(_config_cache_config__WEBPACK_IMPORTED_MODULE_4__.CACHE_KEYS.FORECAST, this.zipcode);
    if (cachedForecast) {
      this.forecast = cachedForecast.data;
    } else {
      this.weatherService.getForecast(this.zipcode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$)).subscribe(data => {
        this.forecast = data;
        this.cacheService.setItem(_config_cache_config__WEBPACK_IMPORTED_MODULE_4__.CACHE_KEYS.FORECAST, {
          id: this.zipcode,
          data
        });
      });
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
  }, {
    type: _services_cache_service__WEBPACK_IMPORTED_MODULE_3__.CacheService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 8473:
/*!**********************************************************************!*\
  !*** ./src/app/min-max-temperature/min-max-temperature.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinMaxTemperatureComponent: () => (/* binding */ MinMaxTemperatureComponent)
/* harmony export */ });
/* harmony import */ var _min_max_temperature_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min-max-temperature.component.html?ngResource */ 2940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MinMaxTemperatureComponent = class MinMaxTemperatureComponent {
  constructor() {
    this.withHyphen = false;
  }
  static #_ = this.propDecorators = {
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    withHyphen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
MinMaxTemperatureComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-min-max-temperature',
  template: _min_max_temperature_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MinMaxTemperatureComponent);


/***/ }),

/***/ 7617:
/*!*******************************************!*\
  !*** ./src/app/services/cache-service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _config_cache_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/cache.config */ 8189);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CacheService = class CacheService {
  /**
   * Stores items into browser's local storage with expiration date
   * @param key - the key with wich the data will be accessed from the local storage
   * @param value - the data which we will store
   */
  setItem(key, data) {
    const cachedData = this.getCachedData(key);
    const currentTime = new Date().getTime();
    const dataWithExpiration = {
      ...data,
      expiration: new Date(currentTime + _config_cache_config__WEBPACK_IMPORTED_MODULE_0__.CACHE_EXPIRATION_TIME)
    };
    cachedData.push(dataWithExpiration);
    localStorage.setItem(key, JSON.stringify(cachedData));
  }
  /**
   * Retrieves items from browser's local storage by given key and id
   * - If there is some data stored under the given key:
   *   - Checks whether the data is not expired and needs refresh
   * @param key - the key with which data will be searched in the local storage
   * @returns the cached data if it is not expired, otherwise, returns null
   */
  getItem(key, id) {
    const cachedData = this.getItems(key);
    const cachedItem = cachedData.find(data => data.id === id);
    return cachedItem;
  }
  /**
   * Removes item from local storage by key
   * @param key - the key with which the data we want to remove is stored in local storage
   */
  removeItem(key, id) {
    const cachedData = this.getCachedData(key);
    const updatedData = cachedData.filter(data => data.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedData));
  }
  getItems(key) {
    const cachedData = this.getCachedData(key);
    const notExpired = cachedData.filter(data => new Date(Date.parse(data.expiration)) >= new Date());
    return notExpired;
  }
  getCachedData(key) {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }
};
CacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], CacheService);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = 'locations';
var Action;
(function (Action) {
  Action[Action["ADD"] = 0] = "ADD";
  Action[Action["REMOVE"] = 1] = "REMOVE";
})(Action || (Action = {}));
;
let LocationService = class LocationService {
  constructor() {
    this.locations = [];
    // Subject for locations changes
    this.location$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) this.locations = JSON.parse(locString);
  }
  loadLocations() {
    for (let loc of this.locations) {
      // Emit add event
      this.location$.next({
        action: Action.ADD,
        zipcode: loc
      });
    }
  }
  addLocation(zipcode) {
    // If the location is already added, do not duplicate it
    if (this.locations.includes(zipcode)) {
      return;
    }
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    // Emit add event
    this.location$.next({
      action: Action.ADD,
      zipcode
    });
  }
  removeLocation(index) {
    const zipcode = this.locations[index];
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      // Emit remove event
      this.location$.next({
        action: Action.REMOVE,
        zipcode
      });
    }
  }
  // Export the location subject as observable
  // in order to be able to subscribe for the updates
  getLocation() {
    return this.location$.asObservable();
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-service */ 7617);
/* harmony import */ var _config_cache_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/cache.config */ 8189);
/* harmony import */ var _utils_with_unsubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/with-unsubscribe */ 2846);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;






let WeatherService = class WeatherService extends (0,_utils_with_unsubscribe__WEBPACK_IMPORTED_MODULE_2__.WithUnsubscribe)() {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor(http, cacheService) {
    super();
    this.http = http;
    this.cacheService = cacheService;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    // If there is some cached data, we fetch it and
    // initialize the currentConditions array with it
    this.cachedConditions = this.cacheService.getItems(_config_cache_config__WEBPACK_IMPORTED_MODULE_1__.CACHE_KEYS.CURRENT_CONDITIONS);
    if (this.cachedConditions) {
      this.cachedConditions.forEach(cache => {
        this.currentConditions.update(conditions => {
          const cachedData = {
            zip: cache.id,
            data: cache.data
          };
          return [...conditions, cachedData];
        });
      });
    }
  }
  addCurrentConditions(zipcode) {
    // We first check for cached conditions
    const cachedZipConditions = this.cachedConditions.find(conditions => conditions.id === zipcode);
    // If there are already saved conditions in the cache for the given zipcode,
    // we use them for updating the currentConditions array
    // Otherwise, we fetch the current conditions from the API and update the cache
    if (cachedZipConditions) {
      this.currentConditions.update(conditions => [...conditions, {
        zip: zipcode,
        data: cachedZipConditions.data
      }]);
    } else {
      // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
      this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$)).subscribe(data => {
        this.currentConditions.update(conditions => [...conditions, {
          zip: zipcode,
          data
        }]);
        this.cacheService.setItem(_config_cache_config__WEBPACK_IMPORTED_MODULE_1__.CACHE_KEYS.CURRENT_CONDITIONS, {
          id: zipcode,
          data
        });
      });
    }
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) conditions.splice(+i, 1);
      }
      return conditions;
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + 'art_storm.png';else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + 'art_rain.png';else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + 'art_light_rain.png';else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + 'art_snow.png';else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + 'art_clouds.png';else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + 'art_fog.png';else return WeatherService_1.ICON_URL + 'art_clear.png';
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], WeatherService);


/***/ }),

/***/ 9577:
/*!*************************************************************!*\
  !*** ./src/app/ui-tabs/click-stop-propagation.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickStopPropagation: () => (/* binding */ ClickStopPropagation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ClickStopPropagation = class ClickStopPropagation {
  onClick(event) {
    event.stopPropagation();
  }
  static #_ = this.propDecorators = {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }]
  };
};
ClickStopPropagation = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[click-stop-propagation]'
})], ClickStopPropagation);


/***/ }),

/***/ 7697:
/*!**************************************************************!*\
  !*** ./src/app/ui-tabs/ui-tab-item/ui-tab-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UITabItemComponent: () => (/* binding */ UITabItemComponent)
/* harmony export */ });
/* harmony import */ var _ui_tab_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-tab-item.component.html?ngResource */ 5512);
/* harmony import */ var _ui_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-tab-item.component.css?ngResource */ 5636);
/* harmony import */ var _ui_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let UITabItemComponent = class UITabItemComponent {
  constructor() {
    this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.active = false;
  }
  static #_ = this.propDecorators = {
    tabTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    closeTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
UITabItemComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-ui-tab-item',
  template: _ui_tab_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ui_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UITabItemComponent);


/***/ }),

/***/ 9356:
/*!**********************************************!*\
  !*** ./src/app/ui-tabs/ui-tabs.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UITabsComponent: () => (/* binding */ UITabsComponent)
/* harmony export */ });
/* harmony import */ var _ui_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-tabs.component.html?ngResource */ 8347);
/* harmony import */ var _ui_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-tabs.component.css?ngResource */ 6592);
/* harmony import */ var _ui_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ui_tab_item_ui_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-tab-item/ui-tab-item.component */ 7697);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let UITabsComponent = class UITabsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngAfterContentChecked() {
    // Set the last active tab using the url hash
    // If there is no hash, activate the first tab
    if (this.route.snapshot.fragment && this.tabs.length > 0) {
      const fragment = this.route.snapshot.fragment;
      this.activeTab = this.tabs.find(tab => this.extractHash(tab.tabTitle) === fragment);
      this.setActiveTab();
    } else {
      this.activeTab = this.tabs.first;
      this.setActiveTab();
      this.setActiveTabHash();
    }
  }
  removeTab(tabIndex) {
    const tab = this.tabs.get(tabIndex);
    // Emit the tab index to remove
    // the corresponding location as well
    tab?.closeTab.emit(tabIndex);
    const wasActive = tab?.active;
    // If the removed tab was active
    // we set the previous one or the next one
    // (if it was the first tab) to active
    if (wasActive) {
      // If it was the only tab, remove the hash from the url
      if (this.tabs.length === 1) {
        this.router.navigateByUrl('/');
      }
      this.activeTab = this.tabs.get(tabIndex > 0 ? tabIndex - 1 : tabIndex + 1);
      this.setActiveTab();
      this.setActiveTabHash();
    }
  }
  // Activate the current tab and show its content
  selectTab(tab) {
    this.tabs.forEach(tab => {
      tab.active = false;
    });
    this.activeTab = tab;
    this.setActiveTab();
    this.setActiveTabHash();
  }
  // Helper method for remembering the selected tab with a hash in the url
  setActiveTabHash() {
    if (this.activeTab) {
      this.router.navigateByUrl('#' + this.extractHash(this.activeTab.tabTitle));
    }
  }
  setActiveTab() {
    if (this.activeTab) {
      this.activeTab.active = true;
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
  static #_2 = this.propDecorators = {
    extractHash: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [_ui_tab_item_ui_tab_item_component__WEBPACK_IMPORTED_MODULE_2__.UITabItemComponent]
    }]
  };
};
UITabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-ui-tabs',
  template: _ui_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_ui_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], UITabsComponent);


/***/ }),

/***/ 985:
/*!*******************************************!*\
  !*** ./src/app/ui-tabs/ui-tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UITabsModule: () => (/* binding */ UITabsModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ui_tab_item_ui_tab_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-tab-item/ui-tab-item.component */ 7697);
/* harmony import */ var _ui_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-tabs.component */ 9356);
/* harmony import */ var _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-stop-propagation.directive */ 9577);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let UITabsModule = class UITabsModule {};
UITabsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_ui_tabs_component__WEBPACK_IMPORTED_MODULE_1__.UITabsComponent, _ui_tab_item_ui_tab_item_component__WEBPACK_IMPORTED_MODULE_0__.UITabItemComponent, _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_2__.ClickStopPropagation],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
  exports: [_ui_tabs_component__WEBPACK_IMPORTED_MODULE_1__.UITabsComponent, _ui_tab_item_ui_tab_item_component__WEBPACK_IMPORTED_MODULE_0__.UITabItemComponent]
})], UITabsModule);


/***/ }),

/***/ 2846:
/*!*******************************************!*\
  !*** ./src/app/utils/with-unsubscribe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithUnsubscribe: () => (/* binding */ WithUnsubscribe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);

function WithUnsubscribe() {
  return class Base {
    constructor() {
      this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  };
}

/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(locationService) {
    this.locationService = locationService;
  }
  addLocation(zipcode) {
    this.locationService.addLocation(zipcode.value);
    zipcode.value = '';
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wrapper {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

.flex {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".wrapper {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5636:
/*!**************************************************************************!*\
  !*** ./src/app/ui-tabs/ui-tab-item/ui-tab-item.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.body {
    width: 600px;
    height: 300px;
    border: 1px solid black;
    padding: 25px;
}`, "",{"version":3,"sources":["webpack://./src/app/ui-tabs/ui-tab-item/ui-tab-item.component.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,aAAa;AACjB","sourcesContent":[".body {\r\n    width: 600px;\r\n    height: 300px;\r\n    border: 1px solid black;\r\n    padding: 25px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6592:
/*!**********************************************************!*\
  !*** ./src/app/ui-tabs/ui-tabs.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-x: auto;
    width: 600px;
}

.title.active {
    border-bottom: 5px solid lightblue;
}

.title {
    background-color: #617aa0;
    color: white;
    padding: 15px;
    border: 1px solid black;
    width: -moz-fit-content;
    width: fit-content;
    margin-right: 15px;
    flex-shrink: 0;
}

.title:hover {
    cursor: pointer;
}

.close {
    cursor: pointer;
    color: white;
    margin-left: 15px;
}`, "",{"version":3,"sources":["webpack://./src/app/ui-tabs/ui-tabs.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAkB;IAAlB,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":[".tab {\r\n    display: flex;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    overflow-x: auto;\r\n    width: 600px;\r\n}\r\n\r\n.title.active {\r\n    border-bottom: 5px solid lightblue;\r\n}\r\n\r\n.title {\r\n    background-color: #617aa0;\r\n    color: white;\r\n    padding: 15px;\r\n    border: 1px solid black;\r\n    width: fit-content;\r\n    margin-right: 15px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.title:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.close {\r\n    cursor: pointer;\r\n    color: white;\r\n    margin-left: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\">\r\n  <app-ui-tabs [extractHash]=\"extractHash\">\r\n    <ng-container *ngFor=\"let location of currentConditionsByZip()\"\r\n      (click)=\"showForecast(location.zip)\"\r\n    >\r\n      <app-ui-tab-item \r\n        tabTitle=\"{{ location.data.name }} ({{ location.zip }})\"\r\n        (closeTab)=\"removeLocation($event)\"\r\n      >\r\n        <div class=\"well flex\">\r\n          <div>\r\n            <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\r\n            <h4>Temperatures today:</h4>\r\n            <p>\r\n              Current {{ location.data.main.temp | number:'.0-0' }}\r\n              <app-min-max-temperature\r\n                [min]=\"location.data.main.temp_min\"\r\n                [max]=\"location.data.main.temp_max\"\r\n              ></app-min-max-temperature>\r\n            </p>\r\n            <p>\r\n              <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast for {{ location.data.name }}</a>\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\"/>\r\n          </div>\r\n        </div>\r\n      </app-ui-tab-item>\r\n    </ng-container>\r\n  </app-ui-tabs>\r\n</div>\r\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city?.name }}</h3>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d' }}:\r\n        {{ dailyForecast.weather[0].main }}\r\n        <app-min-max-temperature\r\n          [min]=\"dailyForecast.temp.min\"\r\n          [max]=\"dailyForecast.temp.max\"\r\n          [withHyphen]=\"true\"\r\n        ></app-min-max-temperature>\r\n\r\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\"/>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" (click)=\"goBack()\">< Back to main page</button>\r\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <app-zipcode-entry></app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n</div>\r\n";

/***/ }),

/***/ 2940:
/*!***********************************************************************************!*\
  !*** ./src/app/min-max-temperature/min-max-temperature.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container>\r\n    {{ withHyphen ? '- ' : ''}}Min: {{ min | number:'.0-0' }}\r\n    {{ withHyphen ? '- ' : ''}}Max: {{ max | number:'.0-0' }}\r\n</ng-container>";

/***/ }),

/***/ 5512:
/*!***************************************************************************!*\
  !*** ./src/app/ui-tabs/ui-tab-item/ui-tab-item.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"body\" [hidden]=\"!active\">\r\n    <!-- Tab body content will be projected here -->\r\n    <ng-content></ng-content>\r\n</div>\r\n";

/***/ }),

/***/ 8347:
/*!***********************************************************!*\
  !*** ./src/app/ui-tabs/ui-tabs.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n    <ul class=\"tab\">\r\n        <li [ngClass]=\"tab.active ? 'active' : ''\" class=\"title\"  *ngFor=\"let tab of tabs; index as i\" (click)=\"selectTab(tab)\">\r\n          {{tab.tabTitle}}\r\n          <span click-stop-propagation class=\"close\" (click)=\"removeTab(i)\">&times;</span>\r\n        </li>\r\n    </ul>\r\n    <!-- Tab Content will be projected here (the list of custom-tab-body components) -->\r\n    <ng-content></ng-content>\r\n</div>";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\r\n  <br/>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode)\" >\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
"use strict";

$(function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчнию: «широта, долгота».
      center: [55.790327, 37.501348],
      // Уровень масштабирования. Допустимые значения:
      zoom: 12,
      // Элементы управления
      controls: ['zoomControl', // Ползунок масштаба
      'rulerControl', // Линейка
      'routeButtonControl', // Панель маршрутизации
      'trafficControl', // Пробки
      'typeSelector', // Переключатель слоев карты
      'fullscreenControl' // Полноэкранный режим
      ]
    });
    var myPlacemark = new ymaps.Placemark([55.790327, 37.501348], {
      // Хинт показывается при наведении мышкой на иконку метки.
      hintContent: 'г. Москва, ул. Маршала Бирюзова 2, этаж 2, офис 6.'
    }); // После того как метка была создана, добавляем её на карту.

    myMap.geoObjects.add(myPlacemark);
  }
});
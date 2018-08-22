'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var URLLoad = 'https://js.dump.academy/code-and-magick/data';

  window.backend = {
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad();
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 1000;
      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
        console.log(xhr.response);
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 10000;
      xhr.open('GET', URLLoad);
      xhr.send();

    }
  };
})();


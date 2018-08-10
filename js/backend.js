(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var URLLoad = 'https://js.dump.academy/code-and-magick/data';

  window.backend = {
    save: function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
    },
    load: function(){

    }
  };
})();


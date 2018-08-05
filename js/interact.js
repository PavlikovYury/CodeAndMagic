'use strict';

//  Работа с POPUP
(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;


  window.dialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.dialog.querySelector('.setup-close');
  var userName = document.querySelector('.setup-user-name');
  var submit = window.dialog.querySelector('.setup-submit');
  var coatWizard = window.dialog.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var eyesWizard = window.dialog.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var fireBall = window.dialog.querySelector('.setup-fireball-wrap');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.dialog.style.top = 80 + 'px';
    window.dialog.style.left = 50 + '%';
    window.dialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.dialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  userName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });


  submit.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      document.forms.wizardForm.submit();

    }
  });

  coatWizard.addEventListener('click', function () {
    coatWizard.style.fill = window.setup.COATCOLORS[Math.floor(Math.random() * window.setup.COATCOLORS.length)];
  });
  eyesWizard.addEventListener('click', function () {
    eyesWizard.style.fill = window.setup.EYESCOLORS[Math.floor(Math.random() * window.setup.EYESCOLORS.length)];
  });

  fireBall.addEventListener('click', function () {
    fireBall.style.backgroundColor = window.setup.EYESCOLORS[Math.floor(Math.random() * window.setup.EYESCOLORS.length)];
  });

})();

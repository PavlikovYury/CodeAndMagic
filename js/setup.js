'use strict';

// Отрисовка магов

(function () {


  var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.setup = {
    COATCOLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYESCOLORS: ['black', 'red', 'blue', 'yellow', 'green']
  };

  var similarListElement = window.dialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  var makeWizardsObjects = function () {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      var wizardObject = {
        name: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
        coatColor: window.setup.COATCOLORS[Math.floor(Math.random() * window.setup.COATCOLORS.length)],
        eyesColor: window.setup.EYESCOLORS[Math.floor(Math.random() * window.setup.EYESCOLORS.length)]
      };
      wizards.push(wizardObject);
    }
    return wizards;
  };

  var wizardsArray = makeWizardsObjects();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.dialog.querySelector('.setup-similar').classList.remove('hidden');
  }, function (message) {
    console.log(message);
  });

  var form = window.dialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.classList.add('hidden');
    }, function (message) {
      var alert = message;
      alert();
    });
    evt.preventDefault();
  });

})();

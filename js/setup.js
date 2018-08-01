'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var submit = setup.querySelector('.setup-submit');
var coatWizard = setup.querySelector('.setup-wizard').querySelector('.wizard-coat');
var eyesWizard = setup.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var fireBall = setup.querySelector('.setup-fireball-wrap');


var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var makeWizardsObjects = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var wizardObject = {
      name: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
      coatColor: COATCOLORS[Math.floor(Math.random() * COATCOLORS.length)],
      eyesColor: EYESCOLORS[Math.floor(Math.random() * EYESCOLORS.length)]
    };
    wizards.push(wizardObject);
  }
  return wizards;
};

var wizardsArray = makeWizardsObjects();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsArray.length; i++) {
  fragment.appendChild(renderWizard(wizardsArray[i]));
}
similarListElement.appendChild(fragment);

//setup.classList.remove('hidden');

setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userName.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    document.removeEventListener('keydown', onPopupEscPress);
  }
});

submit.addEventListener('keydown', function(evt){
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.forms["wizard-form"].submit();

  }
});

coatWizard.addEventListener('click', function() {
  coatWizard.style.fill = COATCOLORS[Math.floor(Math.random() * COATCOLORS.length)];
          });
eyesWizard.addEventListener('click', function() {
  eyesWizard.style.fill = EYESCOLORS[Math.floor(Math.random() * EYESCOLORS.length)];
          });

fireBall.addEventListener('click', function() {
  fireBall.style.backgroundColor = EYESCOLORS[Math.floor(Math.random() * EYESCOLORS.length)];
          });
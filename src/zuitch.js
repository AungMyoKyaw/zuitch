const domready = require('domready');
const knayi = require('knayi-myscript');
const style = require('./style.js');

const convertor = isUni => {
  let elementList = window.document.querySelectorAll('body *');
  elementList.forEach(element => {
    let conv = element.childElementCount == 0;
    let isTextBox = element.isContentEditable;
    if (conv && !isTextBox) {
      let Zawgyi;
      if (element.innerHTML) {
        Zawgyi = knayi.fontDetect(element.innerHTML) == 'zawgyi';
      }
      if (isUni && Zawgyi) {
        try {
          element.innerHTML = knayi.fontConvert(element.innerHTML, 'unicode');
        } catch (e) {
          console.log(e.message);
        }
      }

      if (!isUni && !Zawgyi) {
        try {
          element.innerHTML = knayi.fontConvert(element.innerHTML, 'zawgyi');
        } catch (e) {
          console.log(e.message);
        }
      }
    }
  });
};

const elementCreator = (name, styleID, value) => {
  let element = window.document.createElement(name);
  Object.keys(style[styleID]).forEach(key => {
    element.style[key] = style[styleID][key];
  });
  if (value) {
    element.innerHTML = value;
  }
  return element;
};

const checkLocalStorage = () => {
  try {
    window.localStorage.setItem('zuitch_test', true);
    window.localStorage.removeItem('zuitch_test');
    return true;
  } catch (e) {
    return false;
  }
};

const setOption = option => {
  window.localStorage.setItem('isUni', option);
};

const options = () => {
  let body = window.document.getElementsByTagName('body')[0];
  let overlay = elementCreator('div', 'zuitch_152_overlay');
  let box = elementCreator('div', 'zuitch_152_box');
  let header = elementCreator('p', 'zuitch_152_header', 'Can you read this?');
  let content = elementCreator(
    'p',
    'zuitch_152_content',
    'သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေးဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။'
  );
  let unicode = elementCreator('p', 'zuitch_152_unicode', 'YES');
  let zawgyi = elementCreator('p', 'zuitch_152_zawgyi', 'NO');
  box.append(header);
  box.append(content);
  box.append(unicode);
  box.append(zawgyi);
  body.append(overlay);
  body.append(box);

  unicode.onclick = () => {
    overlay.remove();
    box.remove();
    convertor(true);
    setOption(true);
    showOptions();
  };

  zawgyi.onclick = () => {
    overlay.remove();
    box.remove();
    convertor(false);
    setOption(false);
    showOptions();
  };
};

const showOptions = () => {
  let body = window.document.getElementsByTagName('body')[0];
  let floating = elementCreator('div', 'zuitch_152_floating');
  let floatingContent = elementCreator(
    'div',
    'zuitch_152_floating_content',
    '<=>'
  );
  floating.append(floatingContent);
  body.append(floating);

  floating.onclick = () => {
    floating.remove();
    options();
  };
};

domready(() => {
  let option = window.localStorage.getItem('isUni');
  let isLocalStorage = checkLocalStorage();
  if (isLocalStorage && option) {
    convertor(option === 'true');
    showOptions();
  } else {
    options();
  }
});

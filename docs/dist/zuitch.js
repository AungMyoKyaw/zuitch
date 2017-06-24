(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {
    /*!
      * domready (c) Dustin Diaz 2014 - License MIT
      */
    !function (name, definition) {

      if (typeof module != 'undefined') module.exports = definition();else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);else this[name] = definition();
    }('domready', function () {

      var fns = [],
          listener,
          doc = document,
          hack = doc.documentElement.doScroll,
          domContentLoaded = 'DOMContentLoaded',
          loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

      if (!loaded) doc.addEventListener(domContentLoaded, listener = function () {
        doc.removeEventListener(domContentLoaded, listener);
        loaded = 1;
        while (listener = fns.shift()) listener();
      });

      return function (fn) {
        loaded ? setTimeout(fn, 0) : fns.push(fn);
      };
    });
  }, {}], 2: [function (require, module, exports) {
    var knayi = kny = function () {
      'use strict';

      /** Knayi Myanmar JavaScirpt font library **/

      var whitespace = '[\\x20\\t\\r\\n\\f]';
      var fontTypes = {
        unicode: "unicode",
        uni: "unicode",
        zawgyi: "zawgyi",
        zaw: "zawgyi"
      };

      var library = {};

      var mmCharacterRange = /[\u1000-\u109F]/;

      /** DETECTION Libarary **/
      library.detect = {
        unicode: ['\u103e', '\u103f', '\u100a\u103a', '\u1014\u103a', '\u1004\u103a', '\u1031\u1038', '\u1031\u102c', '\u103a\u1038', '\u1035', '[\u1050-\u1059]', '^([\u1000-\u1021]\u103c|[\u1000-\u1021]\u1031)'],
        zawgyi: ['\u102c\u1039', '\u103a\u102c', whitespace + '(\u103b|\u1031|[\u107e-\u1084])[\u1000-\u1021]', '^(\u103b|\u1031|[\u107e-\u1084])[\u1000-\u1021]', '[\u1000-\u1021]\u1039[^\u1000-\u1021]', '\u1025\u1039', '\u1039\u1038', '[\u102b-\u1030\u1031\u103a\u1038](\u103b|[\u107e-\u1084])[\u1000-\u1021]', '\u1036\u102f', '[\u1000-\u1021]\u1039\u1031', '\u1064', '\u1039' + whitespace, '\u102c\u1031', '[\u102b-\u1030\u103a\u1038]\u1031[\u1000-\u1021]', '\u1031\u1031', '\u102f\u102d', '\u1039$']
      };

      // Populate Detect library as RegExps
      Object.keys(library.detect).forEach(type => {
        for (var i = 0; i < library.detect[type].length; i++) {
          library.detect[type][i] = new RegExp(library.detect[type][i], 'g');
        }
      });

      /** Converting Libarary **/
      library.convert = {
        unicode: {
          zawgyi: {
            oneTime: [[/([\u1000-\u1021](\u1039[\u1000-\u1021]|[\u103b\u103c\u103d]+)[\u102d\u102e\u1031\u1032\u1036\u1037\u103e]*)\u102f/g, "$1\u1033"], [/([\u1000-\u1021](\u1039[\u1000-\u1021]|[\u103b\u103c\u103d]+)[\u102d\u102e\u1031\u1032\u1036\u1037\u103e]*)\u1030/g, "$1\u1034"], [/([\u1000-\u1021](\u1039[\u1000-\u1021]|[\u103b\u103c\u103d]+)[\u102d\u102e\u1031\u1032\u1036\u1037\u103e]*)\u1037/g, "$1\u1094"], [/([\u1000-\u1021])\u103b([\u103d][\u103e]*)/g, "$1\u107d$2"], [/([\u102f\u1030])[\u1037\u1094]/g, "$1\u1095"], [/([\u1000-\u1021])\u103c/g, "\u103c$1"], [/([\u1000-\u1021][^\u1000-\u1021]*)\u1031/g, "\u1031$1"], [/\u103c\u1031/g, "\u1031\u103c"], [/\u1014\u103d/g, "\u108f\u103d"], [/\u104e\u1004\u103a\u1038/g, "\u104e"], [/\u102b\u103a/g, "\u105a"], [/\u103f/g, "\u1086"], [/\u1039\u101c/g, "\u1085"], [/\u1039\u1019/g, "\u107c"], [/\u1039\u1018/g, "\u107b"], [/\u1039\u1017/g, "\u107a"], [/\u1039\u1016/g, "\u1079"], [/\u1039\u1016/g, "\u1079"], [/\u1039\u1015/g, "\u1078"], [/\u1039\u1014/g, "\u1077"], [/\u1039\u1013/g, "\u1076"], [/\u1039\u1012/g, "\u1075"], [/\u1039\u1011/g, "\u1073"], [/\u1039\u1010/g, "\u1071"], [/\u1039\u100f/g, "\u1070"], [/\u100e\u1039\u100d/g, "\u106f"], [/\u100f\u1039\u100d/g, "\u1091"], [/\u100d\u1039\u100d/g, "\u106e"], [/\u1039\u100c/g, "\u106d"], [/\u1039\u100b/g, "\u106c"], [/\u1009/g, "\u106a"], [/\u1039\u1005\u103b/g, "\u1069"], [/\u1039\u1007/g, "\u1068"], [/\u1039\u1006/g, "\u1066"], [/\u1039\u1005/g, "\u1065"], [/\u1039\u1003/g, "\u1063"], [/\u100c/g, "\u1092"], [/\u1039\u1002/g, "\u1062"], [/\u1039\u1001/g, "\u1061"], [/\u103d\u103e/g, "\u108a"], [/\u103e\u1030/g, "\u1089"], [/\u1039\u1000/g, "\u1060"], [/\u100b\u1039\u100b/g, "\u1097"], [/\u1004\u103a\u1039/g, "\u1064"], [/\u103e\u102f/g, "\u1088"], [/\u1037/g, "\u1037"], [/\u103a/g, "\u1039"], [/\u103b/g, "\u103a"], [/\u103c/g, "\u103b"], [/\u103d/g, "\u103c"], [/\u103e/g, "\u103d"]],
            asFoundAs: [[/([\u103b\u103c\u103d\u103e])\u1031/g, "\u1031$1"], [/\u103b([\u1000\u1003\u1006\u100f\u1010\u1011\u1018\u101a\u101c\u101e\u101f\u1021])/g, "\u107e$1"], [/\u103b([\u1000-\u1021](\u103c\u103d|\u108a|\u103c)[\u102d\u102e])/g, "\u1083$1"], [/\u107e([\u1000-\u1021](\u103c\u103d|\u108a|\u103c)[\u102d\u102e])/g, "\u1084$1"], [/\u103b([\u1000-\u1021][\u102d\u102e])/g, "\u107f$1"], [/\u107e([\u1000-\u1021][\u102d\u102e])/g, "\u1080$1"], [/\u103b([\u1000-\u1021][\u103c])/g, "\u1081$1"], [/\u107e([\u1000-\u1021][\u103c])/g, "\u1082$1"]]
          }
        },
        zawgyi: {
          unicode: {
            oneTime: [[/([^\u1040-\u1049\+\-\*\/])?\u1040([^\u1040-\u1049\+\-\*\/])?/g, '$1\u101d$2'], [/\u103d|\u1087/g, '\u103e'], [/\u103c/g, '\u103d'], [/[\u103b\u107e-\u1084]/g, '\u103c'], [/[\u103a\u107d]/g, '\u103b'], [/\u1039/g, '\u103a'], [/[\u1094-\u1095]/g, '\u1037'], [/[\u107b\u1093]/g, '\u1039\u1018'], [/\u1033/g, '\u102f'], [/\u1034/g, '\u1030'], [/\u1088/g, '\u103e\u102f'],
            // [/\u1064/g, '\u1004\u103a\u1039'],
            [/\u1089/g, '\u103e\u1030'], [/\u108a/g, '\u103d\u103e'], [/\u1061/g, '\u1039\u1001'], [/\u108f/g, '\u1014'], [/\u1062/g, '\u1039\u1002'], [/\u1063/g, '\u1039\u1003'], [/\u1065/g, '\u1039\u1005'], [/\u1066/g, '\u1039\u1006'], [/\u1068/g, '\u1039\u1007'], [/\u1069/g, '\u1039\u1005\u103b'], [/\u106a/g, '\u1009'], [/\u106b/g, '\u100a'], [/\u106c/g, '\u1039\u100b'], [/\u106d/g, '\u1039\u100c'], [/\u106e/g, '\u100d\u1039\u100d'], [/\u106f/g, '\u100e\u1039\u100d'], [/\u1070/g, '\u1039\u100f'], [/\u1071/g, '\u1039\u1010'], [/\u1073/g, '\u1039\u1011'], [/\u1075/g, '\u1039\u1012'], [/\u1076/g, '\u1039\u1013'], [/\u1077/g, '\u1039\u1014'], [/\u1078/g, '\u1039\u1015'], [/\u1079/g, '\u1039\u1016'], [/\u1079/g, '\u1039\u1016'], [/\u107a/g, '\u1039\u1017'], [/\u107c/g, '\u1039\u1019'], [/\u1085/g, '\u1039\u101c'], [/\u1086/g, '\u103f'], [/\u1090/g, '\u101b'], [/\u1091/g, '\u100f\u1039\u100d'], [/\u1092/g, '\u100c'], [/\u1097/g, '\u100b\u1039\u100b'], [/\u1060/g, '\u1039\u1000'], [/\u105a/g, '\u102b\u103a'], [/\u104e/g, '\u104e\u1004\u103a\u1038'], [/\u1025\u103a/g, '\u1009\u103a'], [/([\u1000-\u1021])\u108b/g, '\u1064$1\u102d'], [/([\u1000-\u1021])\u108c/g, '\u1064$1\u102e'], [/([\u1000-\u1021])\u108d/g, '\u1064$1\u1036'], [/\u108e/g, '\u102d\u1036'], [/\u103c([\u1000-\u1021])/g, '$1\u103c'], [/\u1031([\u1000-\u1021])/g, '$1\u1031'], [/([\u103b\u103c\u103d])(\u1064)/g, '$2$1'], [/\u1031(\u1064)/g, '$1\u1031'], [/([\u1000-\u1021])(\u1064)/g, '$2$1'], [/\u0020(\u1039[\u1000-\u1021])/g, '$1'], [/\u1064/g, '\u1004\u103a\u1039']],
            asFoundAs: [[/([\u102b\u102c\u102d\u102e\u1031\u102f\u1030\u1032\u1036\u1037\u1038])([\u103b\u103c\u103d\u103e])/g, "$2$1"], [/\u103d([\u103b\u103c])/g, "$1\u103d"], [/\u103e([\u103b\u103c\u103d])/g, "$1\u103e"], [/([\u102f\u1030])([\u102d\u102e])/g, "$2$1"], [/\u1036([\u102d\u102e\u102f\u1030])/g, "$1\u1036"], [/\u1037([\u1031\u102c\u102b\u102f\u1030\u1032])/g, "$1\u1037"], [/([\u1031\u102b\u102c])(\u1039[\u1000-\u1021])/g, "$2$1"], [/([\u102b\u102c])(\u1004\u103a\u1039)/g, "$2$1"]]
          }
        }
      };

      /** Syllable Libarary **/
      library.syllable = {
        zawgyi: [[/([\u1000-\u1021\u1023-\u1027\u1029\u102a\u104c-\u104f\u1086\u108f-\u1092])/g, '\u200B$1'], [/([\u1031][\u103b\u107e-\u1084]|[\u1031\u103b\u107e-\u1084])/g, '\u200B$1'], [/([\u1031\u103b\u107e-\u1084])\u200B([\u1000-\u1021\u1025\u1029\u106A\u106B\u1086\u108F\u1090])/g, '$1$2'], [/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014])\u200B([\u1000-\u1021\u1031\u103b\u1025\u1029\u106A\u106B\u107e-\u1084\u1086\u108F\u1090])/g, '$1$2'], [/\u200B([\u1000-\u1021\u1025\u1029\u106A\u106B\u1086\u108F\u1090]\u1039)/g, '$1'], [/(\s|\n)\u200B([\u1000-\u1021\u1023-\u1027\u1029\u102a\u104c-\u104f\u1086\u108f-\u1092])/g, '$1$2'], [/([\u1000-\u1021])\u200B([\u1000-\u1021\u1031\u103b\u107e-\u1084])/g, '$1$2']],
        unicode: [[/(\u103A)(\u1037)/g, "$2$1"], [/([\u1000-\u1021\u1023-\u1027\u1029\u102a\u103f\u104c-\u104f])/g, "\u200B$1"], [/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1021])/g, "$1$2"], [/\u200B(\u1004\u103A\u1039)/g, "$1"], [/\u200B([\u1000-\u1021]\u103A)/g, "$1"], [/(\s|\n)\u200B([\u1000-\u1021\u1023-\u1027\u1029\u102a\u103f\u104c-\u104f])/g, "$1$2"], [/([\u1000-\u1021])\u200B([\u1000-\u1021])/g, "$1$2"]]
      };

      /** Spelling Check Libarary **/
      library.spellingFix = {
        unicode: "\u102b \u102c \u102d \u102e \u102f \u1030 \u1031 \u1032 \u1036 \u1037 \u1038 \u103a \u103b \u103c \u103d \u103e \u1039".split(" "),
        zawgyi: "\u102b \u102c \u102d \u102e \u102f \u1030 \u1031 \u1032 \u1033 \u1034 \u1036 \u1037 \u1038 \u1039 \u103a \u103b \u103c \u103d \u105a \u1060 \u1061 \u1062 \u1063 \u1064 \u1065 \u1066 \u1067 \u1068 \u1069 \u106a \u106b \u106c \u106d \u1070 \u1071 \u1072 \u1073 \u1074 \u1075 \u1076 \u1077 \u1078 \u1079 \u107a \u107b \u107c \u107d \u107e \u107f \u1080 \u1081 \u1082 \u1083 \u1084 \u1085 \u1087 \u1088 \u1089 \u108a \u108b \u108c \u108d \u108e \u1093 \u1094 \u1095 \u1096".split(" ")
      };

      // Populate Spelling Check
      library.spellingFix.unicode = library.spellingFix.unicode.map(function (exp) {
        return [new RegExp(`[${exp}]{2,}`, 'g'), exp];
      });
      library.spellingFix.zawgyi = library.spellingFix.zawgyi.map(function (exp) {
        return [new RegExp(`[${exp}]{2,}`, 'g'), exp];
      });

      /**
       * Font Type Detector agent
       * @param content Text to make a detection
       * @param def Default return format;
       * @return unicode ? zawgyi
       */
      function fontDetect(content, def) {
        if (!content) throw new Error('Content must be specified on knayi.fontDetect');

        if (content === '') return content;

        if (!mmCharacterRange.test(content)) return def;

        content = content.trim().replace(/\u200B/g, '');
        def = def || 'zawgyi';

        var match = {};

        for (var type in library.detect) {
          match[type] = 0;

          for (var i = 0; i < library.detect[type].length; i++) {
            var rule = library.detect[type][i];
            var m = content.match(rule);
            match[type] += m && m.length || 0;
          }
        }

        if (match.unicode > match.zawgyi) {
          return 'unicode';
        } else if (match.unicode < match.zawgyi) {
          return 'zawgyi';
        } else {
          return def;
        }
      };

      /**
       * Font Converter agent
       * @param content Text that you want to convert
       * @param to Type of font to convert. Default: "unicode";
       * @param from Type of font of content text
       * @return converted text
       */
      function fontConvert(content, to, from) {
        if (!content) throw new Error('Content must be specified on knayi.fontConvert');

        if (content === '' || !mmCharacterRange.test(content)) return content;

        if (!to) throw new Error('convertTo must be specified on knayi.fontConvert');

        content = content.trim().replace(/\u200B/g, '');
        to = fontTypes[to];
        from = fontTypes[from];

        if (!to) {
          console.error('Convert library dosen\'t this fontType to convert');
          return content;
        } else if (!from) {
          from = fontDetect(content);
        }

        if (to === from) {
          return content;
        }

        content = spellingFix(content, from);
        var refLib = library.convert[from][to];

        for (var i = 0; i < refLib.oneTime.length; i++) {
          var rule1 = refLib.oneTime[i];
          content = content.replace(rule1[0], rule1[1]);
        }

        for (var j = 0; j < refLib.asFoundAs.length; j++) {
          var rule2 = refLib.asFoundAs[j];
          while (rule2[0].test(content)) {
            content = content.replace(rule2[0], rule2[1]);
          }
        }

        return content;
      };

      /**
       * Syllable-Break agent
       * @param content Text content
       * @param language Language of content 'zawgyi' ? 'my'
       * @param breakpoint Default is '\u200B'
       * @return edited text
       */
      function syllBreak(content, fontType, breakpoint) {
        if (!content) throw new Error('Content must be specified on knayi.fontConvert');

        if (content === '' || !mmCharacterRange.test(content)) return content;

        content = content.trim().replace(/\u200B/g, '');

        if (!fontType) fontType = fontDetect(content);

        if (!breakpoint) breakpoint = '\u200B';

        var lib = library.syllable[fontType];

        for (var i = 0; i < lib.length; i++) {
          content = content.replace(lib[i][0], lib[i][1]);
        };

        return content;
      };

      /**
       * Spelling Check agent
       * @param content Text to process
       * @param fontType Type of font of content
       * @return edited text
       */
      function spellingFix(content, fontType) {
        if (!content) throw new Error('Content must be specified on knayi.fontConvert');

        if (content === '' || !mmCharacterRange.test(content)) return content;

        if (!fontType) fontType = fontDetect(content);

        content = content.trim().replace(/\u200B/g, '');

        switch (fontType) {
          case 'zawgyi':
            for (var i = 0; i < library.spellingFix.zawgyi.length; i++) {
              var rule = library.spellingFix.zawgyi[i];
              content = content.replace(rule[0], rule[1]);
            }
            return content;
          case 'unicode':
          default:
            for (var i = 0; i < library.spellingFix.unicode.length; i++) {
              var rule = library.spellingFix.unicode[i];
              content = content.replace(rule[0], rule[1]);
            }
            return content;
        }
      };

      var knayi = {
        fontDetect: fontDetect,
        fontConvert: fontConvert,
        syllBreak: syllBreak,
        spellingFix: spellingFix
      };

      if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = knayi;
      } else {
        if (typeof define === 'function' && define.amd) {
          define([], function () {
            return knayi;
          });
        } else {
          window.knayi = knayi;
          window.kny = knayi;
          return knayi;
        }
      }
    }();
  }, {}], 3: [function (require, module, exports) {
    const zuitch_152_overlay = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      backgroundColor: 'black',
      opacity: '.8',
      zIndex: '1519999'
    };

    const zuitch_152_box = {
      position: 'fixed',
      left: '50%',
      top: '30%',
      transform: 'translate(-50%,-50%)',
      width: '20em',
      border: '.2em solid #9E9E9E',
      borderRadius: '1em',
      background: 'black',
      zIndex: '1520000'
    };

    const zuitch_152_header = {
      textAlign: 'center',
      padding: '0.4em',
      margin: '0',
      borderBottom: '.1em solid white',
      fontSize: '1.2em',
      fontWeight: 'bolder',
      color: 'white'
    };

    const zuitch_152_content = {
      margin: '0',
      padding: '0.8em',
      textAlign: 'center',
      color: 'white',
      borderBottom: '0.1em solid white'
    };

    const zuitch_152_unicode = {
      textAlign: 'center',
      float: 'right',
      width: '20%',
      padding: '1em',
      border: '.1em solid green',
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      margin: '.2em 1em',
      borderRadius: '1em'
    };

    const zuitch_152_zawgyi = {
      textAlign: 'center',
      float: 'left',
      width: '20%',
      padding: '1em',
      border: '.1em solid red',
      backgroundColor: 'red',
      color: 'white',
      cursor: 'pointer',
      margin: '.2em 1em',
      borderRadius: '1em'
    };

    const zuitch_152_floating = {
      position: 'fixed',
      right: '0',
      bottom: '0',
      margin: '1em',
      width: '2em',
      height: '2em',
      background: '#2196F3',
      color: 'white',
      padding: '1em',
      borderRadius: '50%',
      textAlign: 'center',
      cursor: 'pointer',
      boxShadow: '0px 0px 10px 2px #9E9E9E'
    };

    const zuitch_152_floating_content = {
      position: 'relative',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    };

    module.exports = {
      zuitch_152_overlay,
      zuitch_152_box,
      zuitch_152_content,
      zuitch_152_header,
      zuitch_152_unicode,
      zuitch_152_zawgyi,
      zuitch_152_floating,
      zuitch_152_floating_content
    };
  }, {}], 4: [function (require, module, exports) {
    const domready = require('domready');
    const knayi = require('knayi-myscript');
    const style = require('./style.js');

    const convertor = isUni => {
      let elementList = window.document.querySelectorAll('body *');
      elementList.forEach(element => {
        let conv = element.childElementCount == 0;
        let isTextBox = element.isContentEditable;
        if (conv && !isTextBox) {
          let Zawgyi = knayi.fontDetect(element.innerText) == 'zawgyi';
          if (isUni && Zawgyi) {
            element.innerHTML = knayi.fontConvert(element.innerText, 'unicode');
          }

          if (!isUni && !Zawgyi) {
            element.innerHTML = knayi.fontConvert(element.innerText, 'zawgyi');
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
      let content = elementCreator('p', 'zuitch_152_content', 'သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေးဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။');
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
      let floatingContent = elementCreator('div', 'zuitch_152_floating_content', '<=>');
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
  }, { "./style.js": 3, "domready": 1, "knayi-myscript": 2 }] }, {}, [4]);

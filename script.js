// Generated by CoffeeScript 1.12.7
(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;

  styles = "/*\n * \"a love letter to Jumi💗\" v5.2.1\n * for my lover\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...hello?            \n *\n * 亲爱的Jumi            \n * 我是轩豪～         \n * 弹指一挥间 \n * 从第一次在乐乐直播间相见到现在也过去一个多月了\n * 今天是你生日🎂，首先祝Jumi你生日快乐呀～～     \n * 我总是打开一个框框写代码，就像现在这样 ๑乛◡乛๑\n */\n\npre { \n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * 知道我为啥喜欢vscode编程吗，因为他的代码总是花花绿绿的(‧_‧?)       \n * 也就是代码高亮～       \n * 你没发现上面👆的代码都是一个颜色嘛           \n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * 现在看起来舒服多了～       \n * 不过我还是更习惯把代码框放在右边 →_→             \n */ \n\npre { left: 50%; width: 45%}\n\n\n/* \n * 我是真的没想到你的生日竟然和我差不多 \n * 刚知道那天我很是兴奋( ´･ω･)ﾉ  \n * 你总是说我容易被乐乐忽悠 (._.`)    \n * 其实我更愿意被你忽悠\n * 我更想把我氪在我自己游戏里的钱花在你身上 \n * 因为我想让你的号也留下我的印记 */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* 你问我爱你有多深，代码代表我的心 * \n * (●′ω`●) */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* 现在我的心属于你啦～ */\n\n#heart i::before {\n  content: 'Jumi💗';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/* \n * Jumi宝贝，我是真的喜欢你\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * 什么，感觉我不真心？\n * 那是你没听到我的心跳？     \n * 你再靠近一点 \n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n/* \n * 你靠这么近干嘛～           \n */\n\n#heart, #echo {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n/* \n * 我都脸红了～嘿嘿   \n * 你看这颗心是不是在动，就像我现在的心    \n */\n\n/* \n * 这颗小心心送你 `(*^﹏^*)′  \n * Jumi宝贝，我是真的喜欢你 \n * 可以做我女朋友吗 \n*/ ";

  openComment = false;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, openComment ? 60 : 5);
      }), interval);
    }
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

  time = 60;

  writeStyles(styles, 0, time);


  /*
  Changelog:
  1.0.0: i exist!
  1.0.1: heart instead of circle
  1.0.2: including standard CSS3 transforms and animations
  	was only using `-webkit` to be less verbose (standard transforms dont work in safari)
  	now works in FF
  1.0.3: crossbrowser echo 
  	nested `scale()` styles (scaled in scaled) only worked in chrome
  	moved echo out of heart to fix
  1.0.4: more efficient animations
  	`0%, 100% {}` instead of duplicated keyframes
  1.0.5: overflwo fix
    `overflow: auto` on the `pre`
   */

}).call(this);

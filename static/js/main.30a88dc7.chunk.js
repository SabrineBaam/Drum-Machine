(this.webpackJsonpdummachine=this.webpackJsonpdummachine||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(1),c=t.n(r),m=(t(12),t(3)),s=t(4),i=t(6),d=t(5),u=(t(13),t(14),[{key:"Q",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"W",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{key:"E",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{key:"A",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{key:"S",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{key:"D",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{key:"Z",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"X",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{key:"C",mp3:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),p=function(){return o.a.createElement("div",{id:"display",className:"display"},o.a.createElement("h1",null,"Play a Sound"),u.map((function(e,a){return o.a.createElement(l,{text:e.key,key:a,audio:e.mp3})})))},l=function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).playSound=function(){n.audio.current.play();var e=n.audio.current.id,a=n.audio.current.parentNode;a.classList.add("active"),a.parentNode.querySelector("h1").innerText="".concat(e," is playing")},n.audio=o.a.createRef(),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.audio.current.addEventListener("ended",(function(e){e.target.parentNode.classList.remove("active")}))}},{key:"render",value:function(){var e=this.props,a=e.text,t=e.audio;return o.a.createElement("div",{className:"drum-pad",onClick:this.playSound,id:"drum-".concat(a)},a,o.a.createElement("audio",{ref:this.audio,src:t,className:"clip",id:a}))}}]),t}(o.a.Component);document.addEventListener("keydown",(function(e){var a=e.key.toUpperCase(),t=document.getElementById(a);if(t){t.currentTime=0;var n=t.parentNode;n.classList.add("active"),n.parentNode.querySelector("h1").innerText="".concat(a," is playing"),t.play()}})),c.a.render(o.a.createElement(p,null),document.getElementById("drum-machine"));var h=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("drum-machine")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.30a88dc7.chunk.js.map
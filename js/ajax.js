var script_loaded=!1;function loadJSscripts(){console.log("Loading scripts 18000ms"),setTimeout(function(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)t[i].getAttribute("data-src")!==null&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)e[i].getAttribute("data-href")!==null&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);let scripts=document.getElementsByClassName("deferredScript");for(script in scripts)script.type="text/javascript";setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}},9e3)}function loadJSscriptsNow(){if(!script_loaded){console.log("now ..."),script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)t[i].getAttribute("data-src")!==null&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)e[i].getAttribute("data-href")!==null&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);let scripts=document.getElementsByClassName("deferredScript");for(script in scripts)script.type="text/javascript";setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading")),document.dispatchEvent(new CustomEvent("StartKernelLoading"))},400)}}var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];activityEvents.forEach(function(eventName){window.addEventListener(eventName,loadJSscriptsNow,!1)}),document.addEventListener("load",loadJSscripts,!1),document.addEventListener("onload",loadJSscripts,!1),window.addEventListener!=null?window.addEventListener("load",loadJSscripts,!1):window.attachEvent!=null?window.attachEvent("onload",loadJSscripts):window.onload=loadJSscripts;
//# sourceMappingURL=/cdn/shop/t/2/assets/ajax.js.map?v=156078876342948409111712080085

(function(e){var t=e.getElementsByTagName("script"),n=t[t.length-1],i=n.getAttribute("src").replace(/[^\/]+$/,"save.php");window.canvas2png=function(t){var n=t.tagName.toLowerCase();if("canvas"===n)if("undefined"!=typeof FlashCanvas)FlashCanvas.saveImage(t);else{var a=e.createElement("form"),r=e.createElement("input");a.setAttribute("action",i),a.setAttribute("method","post"),r.setAttribute("type","hidden"),r.setAttribute("name","dataurl"),r.setAttribute("value",t.toDataURL()),e.body.appendChild(a),a.appendChild(r),a.submit(),a.removeChild(r),e.body.removeChild(a)}}})(document);
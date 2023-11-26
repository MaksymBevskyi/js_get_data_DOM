var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),n=document.querySelector(".average-population"),o=Array.from(t).map(function(t){return t.textContent?+Array.from(t.textContent).filter(function(t){return/\d/.test(t)}).join(""):0}),r=o.reduce(function(t,e){return t+e}),u=r/o.length;e.textContent=r.toLocaleString(),n.textContent=u.toLocaleString();//# sourceMappingURL=index.4124db8e.js.map

//# sourceMappingURL=index.4124db8e.js.map

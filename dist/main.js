!function(){"use strict";class e{constructor(e){this.targetElement=e,this.title=e.dataset.title,this.content=e.dataset.content,this.create()}create(){this.element=document.createElement("div"),this.element.className="popover",this.element.innerHTML=`\n    <h3 class="popover-header">${this.title}</h3>\n    <div class="popover-body">${this.content}</div>\n    <div class="arrow"></div>\n    `,document.body.appendChild(this.element),this.pos(),window.addEventListener("resize",this.pos.bind(this))}pos(){const{top:e,left:t}=this.targetElement.getBoundingClientRect();this.element.style.left=window.scrollX+t+this.targetElement.offsetWidth/2-this.element.offsetWidth/2+"px",this.element.style.top=window.scrollY+e-this.element.offsetHeight-8+"px"}delete(){document.body.removeChild(this.element),window.removeEventListener("resize",this.pos)}}!function(){const t=document.querySelector(".btn");let s;t.addEventListener("click",(()=>{t.dataset.tooltipVisible?(s.delete(),t.dataset.tooltipVisible=""):(s=new e(t),t.dataset.tooltipVisible="yes")}))}()}();
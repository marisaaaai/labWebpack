fetch("./imageCard.html").then((t=>t.text())).then((t=>function(t){class e extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=t;const n=document.createElement("link");n.setAttribute("rel","stylesheet");n.setAttribute("href","./components/image-card/imageCard.css"),e.appendChild(n)}connectedCallback(){const{shadowRoot:t,shadowDOM:e}=this;console.log("Custom component element added to page.");let n="https://www.launch-marketing.com/wp-content/uploads/2018/07/GettyImages-1134023751.jpg",i="Nuevos lanzamientos",a="New Description for the Image",s="New Subtitle",o="",l="https://www.wikipedia.com",d="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_mailto";this.hasAttribute("data-title")&&(i=this.getAttribute("data-title")),this.hasAttribute("data-description")&&(a=this.getAttribute("data-description")),this.hasAttribute("data-image")&&(n=this.getAttribute("data-image")),this.hasAttribute("data-subtitle")&&(s=this.getAttribute("data-subtitle")),this.hasAttribute("data-link1")&&(l=this.getAttribute("data-link1")),this.hasAttribute("data-link2")&&(d=this.getAttribute("data-link2")),this.hasAttribute("templateStyle")&&(o=this.getAttribute("templateStyle")),t.getElementById("image1").src=n,t.getElementById("title").innerText=i,t.getElementById("description").innerText=a,t.getElementById("subtitle").innerText=s;let m=t.getElementById("link1");m.href=l,m.innerText="Action 1";let c=t.getElementById("link2");c.innerText="Action 2",c.href=d;let r=document.createElement("style");r.textContent=o,t.appendChild(r)}disconnectedCallback(){console.log("Custom component element removed from page.")}adoptedCallback(){console.log("Custom component element moved to new page.")}attributeChangedCallback(t,e,n){console.log("Custom component element attributes changed.")}}customElements.define("my-card",e)}(t)));
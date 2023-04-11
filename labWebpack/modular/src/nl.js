fetch("./imageCard.html")
  .then((stream) => stream.text())
  .then((htmlFile) => renderComponent(htmlFile));

function renderComponent(htmlFile) {
  class ImageCard extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: "open" });
      shadowDOM.innerHTML = htmlFile;

      // Import CSS
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      let style = "./components/image-card/imageCard.css";
 
      link.setAttribute("href", style);
      shadowDOM.appendChild(link);
      
    }

    // Callback
    connectedCallback() {
      const { shadowRoot, shadowDOM } = this;
      console.log('Custom component element added to page.');
      // entry parameters
      let image = "https://www.launch-marketing.com/wp-content/uploads/2018/07/GettyImages-1134023751.jpg";
      let title = "Nuevos lanzamientos";
      let description = "New Description for the Image";
      let subtitle = "New Subtitle";

      let templateStyle = ""


      let link1 = "https://www.wikipedia.com";

      let link2 = "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_mailto";

      if (this.hasAttribute("data-title")) {
        title = this.getAttribute("data-title");
      }
      else{
        title = title;
      }
      if (this.hasAttribute("data-description")) {
        description = this.getAttribute("data-description");
      }
      else{
        description = description;
      }

      if (this.hasAttribute("data-image")) {
        image = this.getAttribute("data-image");
      }
      else{
        image = image;
      }
      if (this.hasAttribute("data-subtitle")) {
        subtitle = this.getAttribute("data-subtitle");
      }
      else{
        subtitle = subtitle;
      }

      if (this.hasAttribute("data-link1")) {
        link1 = this.getAttribute("data-link1");
      }
      else{
        link1 = link1;
      }

      if(this.hasAttribute("data-link2")) {
        link2 = this.getAttribute("data-link2"); 
      }
      else{
        link2 = link2;
      }

      if(this.hasAttribute("templateStyle")){
        templateStyle = this.getAttribute("templateStyle");
      }


      let img1 = shadowRoot.getElementById('image1');
      img1.src = image;

      let title1 = shadowRoot.getElementById('title');
      title1.innerText = title;
      
      let description1 = shadowRoot.getElementById('description');
      description1.innerText = description;
      
      let subtitle1 = shadowRoot.getElementById('subtitle');
      subtitle1.innerText = subtitle;
      
      let link11 = shadowRoot.getElementById('link1');
      link11.href = link1;
      link11.innerText = "Action 1"

      let link21 = shadowRoot.getElementById('link2');
      link21.innerText = "Action 2"
      link21.href = link2;

      let container1 = document.createElement("style")
      container1.textContent = templateStyle;
      shadowRoot.appendChild(container1)
    }

    disconnectedCallback() {
      
      console.log("Custom component element removed from page.");

    }

    adoptedCallback() {
      console.log("Custom component element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("Custom component element attributes changed.");
      
    }
  }

  customElements.define("my-card", ImageCard);
}

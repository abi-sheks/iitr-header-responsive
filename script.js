if (window.innerWidth <= 1200) {
    let currentlySelected = null;
    let hamburger = document.getElementById("hamburger");
    let sidebar = document.getElementById("left-menu");
    let contentarea = document.getElementById("content-container")
    hamburger.addEventListener("click", () => {
      console.log('click')
      if (
        window.getComputedStyle(sidebar).getPropertyValue("display") == "none"
      ) {
        sidebar.style.display = "flex";
      } else if (
        window.getComputedStyle(sidebar).getPropertyValue("display") == "flex"
      ) {
        if(currentlySelected)
        {
        currentlySelected.style.backgroundColor = "white"
        currentlySelected = null;
        contentarea.visibility = "hidden"
        removeContent()
        }
        sidebar.style.display = "none";
      }
    });
    let navs = document.getElementsByClassName("dropdown-selector-mobile");
    const count = navs.length;
  
    for (let i = 0; i < count; i++) {
      navs[i].addEventListener("click", () => {
        if (currentlySelected) {
          if (currentlySelected === navs[i]) {
            navs[i].style.backgroundColor = "#F0F1F6";
          } else {
            currentlySelected.style.backgroundColor = "white";
            navs[i].style.backgroundColor = "#F0F1F6";
            createContent(navs[i])
            currentlySelected = navs[i];
            
          }
          
        }
        else
        {
          currentlySelected = navs[i]
          navs[i].style.backgroundColor = "#F0F1F6"
          createContent(navs[i])
        }
      });
    }
    function createContent(nav)
  {
      if(nav !== currentlySelected)
      {
          removeContent()
      }
      contentarea.style.visibility = "visible"
      const counter = nav.childNodes.length
      console.log(counter)
      for(let i = 1; i < counter; i+=2)
      {
          console.log(nav.childNodes[i])
          if(nav.childNodes[i].nodeType === 1)
          {
          contentarea.innerHTML = contentarea.innerHTML + `<div class = "expanded-content"><a href = "#">${nav.childNodes[i].innerHTML}</a></div>`
          }
      }
  }
   function removeContent()
   {
      contentarea.innerHTML = ""
   }
  }
  
  
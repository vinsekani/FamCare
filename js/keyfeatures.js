

const accordionContent = document.querySelectorAll(".accordion-content")
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header")
    header.addEventListener("click", () => {
      item.classList.toggle("open")  

      let description = item.querySelector(".description")
      if(item.classList.contains("open")){
        description.style.height = `${description.scrollHeight
        }px`
        item.querySelector("i").classList.replace("fa-plus", "fa-minus")
      }else{
        description.style.height = "0px"
        item.querySelector("i").classList.replace("fa-minus", "fa-plus")
      }

      
    removeOpen(index)
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open")

            let des = item2.querySelector(".description")
            des.style.height = "0px"
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus")
        }
    })
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('active');
}

function toggleOptions(button) {
  if (button.innerHTML.includes('Hospital')) {
    button.innerHTML = 'Login/Register';
  } else {
    button.innerHTML = `
      Login/Register
      <div class="sub-buttons">
        <button class="hospital-btn"><a href="regester.html">Hospital</a></button>
        <button class="individual-btn"><a href="individual.html">Individual</a></button>
      </div>
    `;
  }
}


function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}


// This fetch allows the nav menu to be generated on any html page via the class name
// Like so: <nav class="nav-component"></nav>

fetch("/html/components/nav.html")
  .then((response) => response.text())
  .then((component_html) => {
    let list_of_elements = document.getElementsByClassName("nav-component");
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });

// This fetch allows the footer menu to be generated on any page via the class name
// Like so: <nav class="footer-component"></nav>

fetch("/html/components/footer.html")
  .then((response) => response.text())
  .then((component_html) => {
    let list_of_elements = document.getElementsByClassName("footer-component");
    for (let element of list_of_elements) {
      element.innerHTML = component_html;
    }
  });

// This next code serves the searchbar on the classes page and allows users to filter
// class cards by their chosen search terms.

function search_class() {
  let input = document.getElementById("searchbar").value;
  let searchTerm = document.getElementsByClassName(`classes`);

  for (i = 0; i < searchTerm.length; i++) {
    if (!searchTerm[i].innerHTML.toLowerCase().includes(input)) {
      searchTerm[i].style.display = "none";
    } else {
      searchTerm[i].style.display = "list-item";
    }
  }
}

// This code serves the collapsible menus on the form page and provides the onclick functionality

var collapsibleSection = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsibleSection.length; i++) {
  collapsibleSection[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

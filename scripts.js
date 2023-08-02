// Variables
const portfolioCards = document.querySelectorAll(".portfolio-card");
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("btn-menu");
const navItems = document.querySelectorAll(".nav-item");
const barsBtn = document.getElementById("bars-btn");
const closeBtn = document.getElementById("close-btn");

// Set portfolio card backgrounds
portfolioCards.forEach((card, index) => {
  const style = card.style;
  style.background = `url("./assets/portfolio-${index}.png")`;
  style.backgroundSize = "cover";
  style.backgroundPosition = "center";
  style.backgroundRepeat = "no-repeat";
});

// Change the icon of the menu button (open/close)
const showBarsIcon = () => {
  barsBtn.style.display = "block";
  closeBtn.style.display = "none";
};

const showCloseIcon = () => {
  barsBtn.style.display = "none";
  closeBtn.style.display = "block";
};

// Toggle the mobile menu when the menu button was clicked
const toggleMenu = () => {
  const classList = nav.classList;
  if (classList.contains("close")) {
    showCloseIcon();
    classList.replace("close", "open");
  } else {
    showBarsIcon();
    classList.replace("open", "close");
  }
};

// Close the mobile menu when the nav items were clicked
const onNavItemClicked = () => {
  const classList = nav.classList;
  if (classList.contains("open")) {
    classList.replace("open", "close");
    showBarsIcon();
  }
};

// Event listeners
navItems.forEach(item => {
  item.addEventListener("click", onNavItemClicked);
});

menuBtn.addEventListener("click", toggleMenu);

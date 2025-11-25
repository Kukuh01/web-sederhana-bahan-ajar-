
// mengambil elemen dari index.html
document.getElementById("idElement");          // berdasarkan ID
document.getElementsByClassName("judul")       // berdasrkan class name
document.getElementsByTagName("p")             // berdasarakan taq pada html ( p, h1. a, dll.. )
document.querySelector(".judul");              // berdasarkan class
document.querySelectorAll(".box-berita p");    // banyak elemen yang bisa di masukin

let judul = document.querySelector(".judul");

// manipulasi content
judul.textContent = "Judul Berita Terbaru!"; // Mengubah teks
console.log(judul.textContent); // Mengambil teks

// manipulasi style (css)
judul.style.color = "tomato";
judul.style.fontSize = "22px";

// manipulasi atribut
let heroImg = document.querySelector(".hero img");
heroImg.src = "asset/belajar.jpeg";

// Event Listener
judul.addEventListener("click", function () {
  judul.textContent = "Judul sudah di clik!!!";
});

// Dark Mode Toggle
let isDark = false;

function toggleDarkMode() {
  isDark = !isDark;
  document.body.classList.toggle("dark-mode");

  if (isDark) {
    document.querySelector("header").style.backgroundColor = "#1a1a1a";
    document.querySelector(".navbar").style.backgroundColor = "#2a2a2a";
  } else {
    document.querySelector("header").style.backgroundColor = "";
    document.querySelector(".navbar").style.backgroundColor = "";
  }
}

// Search Bar Interaktif
let searchInput = document.querySelector('input[type="text"]');

searchInput.addEventListener("focus", function () {
  this.style.borderColor = "#e31e24";
  this.style.boxShadow = "0 0 10px rgba(227, 30, 36, 0.3)";
});

// Popup detail berita -> alert
let boxBerita = document.querySelectorAll(".box-berita");

boxBerita.forEach(function (box, index) {
  box.addEventListener("click", function () {
    let teks = box.querySelector("p").innerText;
    alert("Berita ke-" + (index + 1) + "\n\n" + teks);
  });

  // Efek hover card berita
  box.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.05)";
    this.style.cursor = "pointer";
  });

  box.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});

// Sidebar Toggle
let isSidebarVisible = true;

function toggleSidebar() {
  isSidebarVisible = !isSidebarVisible;
  let sidebar = document.querySelector(".sidebar");

  if (isSidebarVisible) {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

// Scroll to Top Button
window.addEventListener("scroll", function () {
  let scrollBtn = document.getElementById("scroll-top");

  if (window.pageYOffset > 300) {
    if (scrollBtn) scrollBtn.style.display = "block";
  } else {
    if (scrollBtn) scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


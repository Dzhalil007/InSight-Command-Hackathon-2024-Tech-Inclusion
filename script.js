document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const currentUrl = window.location.href;
  
        if (currentUrl.includes(targetId)) {
          e.preventDefault();
          const targetSection = document.getElementById(targetId.substring(1));

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      });
    });
  
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath.substring(currentPath.lastIndexOf("/"))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  
  const sections = document.querySelectorAll(".section");
  
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      } else {
        entry.target.classList.remove("fade-in-up");
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
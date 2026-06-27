   fetch("components/navbar1.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

       fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

    fetch("components/admin-navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("admin-navbar").innerHTML = data;
    });

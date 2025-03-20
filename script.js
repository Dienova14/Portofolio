var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function openLinks(tabName) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-links");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-links");
            document.getElementById(tabName).classList.add("active-tab");
        }

        var openbar = document.getElementById("bar");

        function openBar() {
            openbar.style.right = "0";
        }
        function closeBar() {
            openbar.style.right = "-200px";
        }

// Fungsi untuk membuka popup dan mengisi data dari card yang diklik
function openPopup(title, description, summary) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-summary").innerText = summary;
    // document.getElementById("popup").style.display = "block";
    // document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").classList.add('show');
    document.getElementById("popup").classList.add('show');
}

// Fungsi untuk menutup popup
function closePopup() {
    // document.getElementById("popup").style.display = "none";
    // document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").classList.add("hide");
    document.getElementById("popup").classList.add("hide");

// Wait for the animation to finish, then hide completely
setTimeout(function() {
    document.getElementById("overlay").classList.remove("show", "hide");
    document.getElementById("popup").classList.remove("show", "hide");
}, 400); // Match the duration of the animation (0.4s)
}

// Menambahkan event listener ke semua tombol Read More
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah reload halaman
        const title = this.getAttribute("data-title");
        const description = this.getAttribute("data-description");
        const summary = this.getAttribute("summary");
        openPopup(title, description, summary);
    });
});
let noticeCheck = document.getElementById("noticeCheck");
let galleryCheck = document.getElementById("galleryCheck");
let notice = document.getElementById("notice");
let gallery = document.getElementById("gallery")

noticeCheck.addEventListener('click', function () {
    gallery.style.display = "none";
    notice.style.display = "block";
})

galleryCheck.addEventListener('click', function () {
    gallery.style.display = "block";
    notice.style.display = "none";
})

let popUp = document.getElementById('popUp');
let modal = document.getElementById('modal');
popUp.addEventListener("click", function () {
    modal.style.display = "block";

})

function closeModal() {
    modal.style.display = "none";
}
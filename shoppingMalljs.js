// 넘기는 함수 >> 3초마다 실행
// 넘기는 함수(){
//     반복문을 써서 다 지우기
//     특정 번호만 보이기
//     n ++;
//     n이 한계치일때 원점을 돌려주기
// }



let slideImg = document.getElementsByClassName("slideImg");
let now = 1;

setInterval(function () {
    for (let i = 0; i < slideImg.length; i++) {
        slideImg[i].style.opacity = 0;
    }
    slideImg[now].style.opacity =1;

    now++;

    if (now == slideImg.length) {
        now = 0;
    }
}, 2500)
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

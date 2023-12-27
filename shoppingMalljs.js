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
        slideImg[i].style.display = "none";
    }
    slideImg[now].style.display = "block";

    now++;

    if (now == slideImg.length) {
        now = 0;
    }
}, 2500)

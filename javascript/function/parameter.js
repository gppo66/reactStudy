//함수의 기본 파라미터 
function calculateCircleArea(r = 1) {
    // const radius = r || 1; 
    // r 이 주어지지 않았을 경우의 방식
    return Math.PI * r * r;
}
// NaN = Not a Number 
const area = calculateCircleArea(4);
console.log(area);

//화살표 함수
const calcuCircleArea = (r = 1) => {
    Math.PI * r * r;
}
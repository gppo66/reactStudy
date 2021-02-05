function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0)
}
console.log('start');
work((ms) => {
    console.log('end');
    console.log(ms + 'ms 걸렸어요');
});
console.log('next');


//   start
//   next
//   519ms
//   end
//   519ms 걸렸어요

// AJAX Web API 요청 시 사용
// 파일 읽기 시 사용
// 암호화/복호화 시 사용
// 작업 예약 시
function solution(s) {
    if (s.length%2 === 0) {
    return s.substr(s.length/2 - 1, 2);
    }
    else {
    return s.substr(s.length/2 , 1);
    }
}



// 짝수랑 홀수 구분은 %2로 간단하게 가능 나눠서 1이 나오면 홀수
// substr string.substring(startIndex, endIndex), String.substr(startIndex, 문자개수) 메소드 활용하면 가운데 문자열을 추출 가능하다.
// https://programmers.co.kr/learn/courses/30/lessons/12903
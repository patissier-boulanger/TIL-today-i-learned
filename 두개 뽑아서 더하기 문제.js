https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    let answer = [];
    for(i = 0; i < numbers.length; i++) {
        for(j = 0; j < numbers.length; j++) {
            if(i !== j){
               answer.push(numbers[i]+numbers[j])
            }
        }
    }
    answer = answer.filter((elem, index) => answer.indexOf(elem) === index).sort((a,b) => a-b);
    return answer;
};
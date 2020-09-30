// https://programmers.co.kr/learn/courses/30/lessons/42576
// 해시테이블 자료구조 공부 필요

function solution(participant, completion) {
    for(let i in participant) {
        for(let j in completion) {
            if(participant[i] === completion[j]) {
            participant[i] = 'goal';
            completion[j] = 'goal';
            }
        }
    }
    // while(participant.indexOf('goal') !== -1) {
    // participant.splice(participant.indexOf('goal'), 1);
    // }
    let answer = participant.filter((element) => element !== 'goal');
    return answer[0];
};

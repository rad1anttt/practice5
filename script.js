//1
function buttonClick1() {
    let p1 = document.getElementById('p1');
    p1.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}
//2
function buttonClick2() {
    let p2 = document.getElementById('p2');
    p2.innerHTML = '<h3>Абзац превратился в h3!</h3>'
}
//3
function buttonClick3() {
    let p3 = document.getElementById('p3');
    p3.innerHTML = '<h3>' + p3.innerHTML + '</h3';
}
//4
function buttonClick4() {
    let input1 = +document.getElementById('input1').value;
    let input2 = +document.getElementById('input2').value;
    let result = document.getElementById('result');
    result.innerHTML = input1 + input2;
}
//5
function buttonClick5() {
    let p5 = document.getElementsByTagName('a');
    for (let i = 0; i < p5.length; i++){
        p5[i].innerHTML = i;
    }
}
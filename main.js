'use script';
{
    let count = 0;
    const countUpBtn = document.getElementById('count_up_btn');
    const countDownBtn = document.getElementById('count_down_btn');
    const initValueBtn = document.getElementById('count_ini_val');

    update();
    function update() {
        const result = document.getElementById('result');
        result.textContent = count;
    }
    countUpBtn.addEventListener('click', ()=> {
        console.log('clicked');
    },false);
    countDownBtn.addEventListener('click',()=> {
        console.log('clicked');
    },false);
    initValueBtn.addEventListener('click',()=> {
        console.log('clicked');
    },false);

}
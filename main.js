'use script';
{
    let count = 0;
    const result = document.getElementById('result');
    const countUpBtn = document.getElementById('count_up_btn');
    const countDownBtn = document.getElementById('count_down_btn');
    const initValueBtn = document.getElementById('count_ini_val');

    update();
    function update() {
        result.textContent = count;
    }
    countUpBtn.addEventListener('click', ()=> {
        ++count;
        update();
    },false);
    countDownBtn.addEventListener('click',()=> {
        --count;
        update();
    },false);
    initValueBtn.addEventListener('click',()=> {
       count = 0;
        update();
    },false);

}
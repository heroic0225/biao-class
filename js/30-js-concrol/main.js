
var age_element = document.querySelector('#age');


age_element.addEventListener('change',
    function () {

        /*读取到input中的值*/
        var age = age_element.value.trim();
        /* 将字符串转换为数字类型*/
        age = parseInt(age)

        if (!age) {
              console.log('年龄不能为空');
        } else if (age < 1) {
              console.log('Are you kidding me ?');
        } else if (age == 18) {
              console.log('刚成年');
        } else if (age > 18 && age < 40) {
              console.log('青年');
        } else {
              console.log('yo');
        }

    });


var name_element = document.querySelector('#name');

name_element.addEventListener('change', function () {
    var name = name_element.value.trim();
    switch (name) {
        case '王花花':
            console.log('王花花你好');
            break;
        case '李拴蛋':
            console.log('mmp');
            break;
        case '刘备备':
            console.log('还我钱');
            break;
        case '赵可爽':
            console.log('最近好么');
            break;
        default:
            console.log('不约');
            break;

    }
})

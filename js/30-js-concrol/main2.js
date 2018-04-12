// var name_element = document.querySelector('#name');

// name_element.addEventListener('change',
//     function(){
//         var name = name_element.nodeValue.trim()

//         console.log(name + '你好啊')
//     })





var age_element = document.querySelector('#age');

age_element.addEventListener('change',
    function() {
        /*函数内容，首先读取input的值*/
        var age = age_element.value.trim()

        /*将字符串转换为数字类型*/
        age = parseInt(age)

        if (!age) {
            console.log('年龄不能为空');
        } else if (age < 1) {
            console.log('Are you kidding me ?');
        } else if (age < 18) {
            console.log('未成年');
        } else if (age == 18) {
            console.log('刚成年');
        } else if (age >18 && age < 40){
            console.log('大叔')
        } else if (age >= 40) {
            console.log('Yo')   
        }

        
    })


var name_element = document.querySelector('#name');

name_element.addEventListener('change',
    function() {
        var name = name_element.value.trim()
        
        switch (name) {
            case '王花花':
                console.log('王花花你好')
                break;
            case '李栓蛋':
                console.log('MMP')
                break;
            case '刘备备':
                console.log('还我钱啊兄dei')
                break;
            case '赵可爽':
                console.log('最近还好么')
                break;
            default:
                console.log(name + '你好啊')
        }

    })


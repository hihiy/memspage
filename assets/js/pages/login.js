/**
 * Created by yxt on 17/2/22.
 */


var Login = function () {

    function examForm() {
        $('form').submit(function () {
            var $name = $('#name').val();
            var $password = $('#password').val();
            var d = new Object();
            d.email = $name;
            d.password = $password;
            alert($name+'  '+$password);
            $.ajax({
                type: 'POST',
                async: false,
                url: url_login,
                contentType: 'application/json',
                dataType:'json',
                crossDomain:true,
                data:JSON.stringify(d),
                success:function(data){

                    if(data.status==200){
                        alert("welcome "+data.userName);
                    }else {
                        alert("wrong username or password ");
                    }
                },
                error:function (data,textStatus) {
                    alert(textStatus);
                }
            });

        });


    }
    //返回数据格式
    // {
    //     "status": 200,
    //     "email": "test@example.com",
    //     "gender": "male",
    //     "userName": "测试",
    //     "authority": 3,
    //     "type": "2",
    //     "photo": "world.JPG",
    //     "selfIntro": "随便"
    // }

    return{
        init:function () {
            examForm()
        }
    }
}();
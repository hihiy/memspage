/**
 * Created by yxt on 17/2/22.
 */
var Login = function () {

    function examForm() {
        $('form').submit(function () {
            var $name = $('#name').val();
            var $password = $('#password').val();

            alert($name+$password);
        });


    }


    return{
        init:function () {
            examForm()
        }
    }
}();
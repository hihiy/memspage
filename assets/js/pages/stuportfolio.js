/**
 * Created by yxt on 17/3/5.
 */


var phdlist;
var masterlist;
var idindex=1;
var d={'memberType':'1'};
$.ajax({
    type: 'POST',
    async: false,
    url: 'http://api.yanxiaotian.com.cn/api/member',
    contentType: 'application/json',
    dataType:'json',
    crossDomain:true,
    data:JSON.stringify(d),
    success:function(data){

        if(data!=[]){
            // alert(data.length);
            phdlist=data;

        }else {
            // alert("no one ");
        }
    },
    error:function (data,textStatus) {
        alert(textStatus);
    }
});
var d={'memberType':'2'};
$.ajax({
    type: 'POST',
    async: false,
    url: 'http://api.yanxiaotian.com.cn/api/member',
    contentType: 'application/json',
    dataType:'json',
    crossDomain:true,
    data:JSON.stringify(d),
    success:function(data){

        if(data!=[]){
            // alert(data.length);
            masterlist=data;

        }else {
            // alert("no one ");
        }
    },
    error:function (data,textStatus) {
        alert(textStatus);
    }
});
/*[
    {
        "status": 200,
        "email": "World@example.com",
        "gender": "male",
        "userName": "无二的",
        "type": "1",
        "photo": "http://api.yanxiaotian.com.cn/photo/world.JPG",
        "selfIntro": "第三方"
    },
    {
        "status": 200,
        "email": "yxt@example.com",
        "gender": "male",
        "userName": "严孝天",
        "type": "1",
        "photo": "http://api.yanxiaotian.com.cn/photo/yxt.jpg",
        "selfIntro": "最帅"
    }
]*/
var i;
for(i in phdlist){
    var row = $('#template').clone();

    row.find('strong').text(phdlist[i].userName);
// row.find('i').text('hahah');
    row.find('img').attr('src', phdlist[i].photo);
    row.attr('class', 'phd');
    row.attr('data-id', 'id-' + idindex);
    row.removeAttr('id');
    row.appendTo($('ul.portfolio'));
    idindex+=1;
}
for(i in masterlist){
    var row = $('#template').clone();

    row.find('strong').text(masterlist[i].userName);
// row.find('i').text('hahah');
    row.find('img').attr('src', masterlist[i].photo);
    row.attr('class', 'master');
    row.attr('data-id', 'id-' + idindex);
    row.removeAttr('id');
    row.appendTo($('ul.portfolio'));
    idindex+=1;
}
/*
var row = $('#template').clone();
var i = 1;
row.find('strong').text('yxt');
// row.find('i').text('hahah');
row.find('img').attr('src', 'assets/plugins/portfolioSorting/img/2.jpg');
row.attr('class', 'phd');
row.attr('data-id', 'id-' + i);
row.removeAttr('id');
row.appendTo($('ul.portfolio'));
*/

$('#template').remove();

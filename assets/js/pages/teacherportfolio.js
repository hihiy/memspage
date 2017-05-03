/**
 * Created by yxt on 17/4/24.
 */


var professorlist;
var assprofessorlist;
var lecturerlist;
var idindex=1;
var d={'memberType':'3'};
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
            professorlist=data;

        }else {
            // alert("no one ");
        }
    },
    error:function (data,textStatus) {
        alert(textStatus);
    }
});
var d={'memberType':'4'};
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
            assprofessorlist=data;

        }else {
            // alert("no one ");
        }
    },
    error:function (data,textStatus) {
        alert(textStatus);
    }
});
var d={'memberType':'5'};
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
            lecturerlist=data;

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
for(i in professorlist){
    if(professorlist[i].userName == null){break;}
    var row = $('#template').clone();

    row.find('strong').text(professorlist[i].userName);
// row.find('i').text('hahah');
    row.find('img').attr('src', professorlist[i].photo);
    row.attr('class', 'professor');
    row.attr('data-id', 'id-' + idindex);
    row.removeAttr('id');
    row.appendTo($('ul.portfolio'));
    idindex+=1;
}
for(i in assprofessorlist){
    if(assprofessorlist[i].userName == null){break;}
    var row = $('#template').clone();

    row.find('strong').text(assprofessorlist[i].userName);
// row.find('i').text('hahah');
    row.find('img').attr('src', assprofessorlist[i].photo);
    row.attr('class', 'associate_professor');
    row.attr('data-id', 'id-' + idindex);
    row.removeAttr('id');
    row.appendTo($('ul.portfolio'));
    idindex+=1;
}
for(i in lecturerlist){

    if(lecturerlist[i].userName == null){break;}
    var row = $('#template').clone();

    row.find('strong').text(lecturerlist[i].userName);
// row.find('i').text('hahah');
    row.find('img').attr('src', lecturerlist[i].photo);
    row.attr('class', 'lecturer');
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

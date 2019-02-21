/**
 * Created by LiuHe on 2018/4/17.
 */

function changemain(url) {
    $.get(url, function (data) {
        $('#J_iframe').html(data.data);
    });
}
$(function(){
    $('#admin_login').on('submit',function(){
        var data=$(this).serializeArray()
        $.post("/admin/auth/login",data,function(result){
            if(result.code){
                window.location.href="/admin/"
            }else {
                alert(result.msg)
            }
        });
        return false;
    })

})

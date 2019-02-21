$(function(){
    //菜单点击
    $(".J_menuItem").on('click',function(){
        url=$(this).data('url')
        changemain(url)
        return false;
    });
    function changemain(url){
        $.get(url, function(data){
            $('#J_iframe').html(data.data);
        });
    }
});
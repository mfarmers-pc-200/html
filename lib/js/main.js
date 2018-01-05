initW();
do_include();
/**
 * 监听窗口改变
 */
$(window).resize(function () {
    initW();
});
/**
 * 初始化页面宽度
 */
function initW(){
    var w;
    w = $('body').width();
    $('#left-box').width(w - 415);
}

/**
 * 模拟include
 */
function do_include(){
    $('include').each(function(){
        var obj = $(this);
        var url = obj.attr('src');
        $.get(url,function(html){
            obj.append(html);
        })
    })
}
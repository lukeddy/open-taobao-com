/**
 * Created by liuc on 2017/2/3.
 */
function roll(id, aId) {
    var lis = $(id).children();
    var as = $(aId).find('a');
    var w = lis.first().width();
    var now = 0;

    setInterval(function () {
        now++;
        $(id).css('transition', '1s');
        as.css('transition', '1s');
        $(id).css('left', -now * w);
        if (now == lis.length - 1) {
            setTimeout(function () {
                now = 0;
                $(id).css('transition', 'none');
                $(id).css('left', 0);
            }, 1005);
            as.removeClass('active');
            as.eq(0).addClass('active');
        } else {
            as.removeClass('active');
            as.eq(now).addClass('active');
        }
    }, 3000);
}


function advance(id, aId) {
    var lis = $(id).children();
    var titles = $(id).find(aId);
    titles.on('mouseenter', function (e) {
        lis.removeClass('active-li');
        var $li = $(e.target).closest('li');
        $li.addClass('active-li');
    });
}


//banner无缝滚动
roll('#baner-imgList', '#baner-btnList');

//优势能力
advance('#main-advance-list', '.title');
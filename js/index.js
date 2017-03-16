$(function () {
    var page = 1;
    var i = 3; //每版放4个图片
    //向后 按钮
    $(".car_next").click(function () {    //绑定click事件
        var $parent = $(this).parents("div.car_menu");//根据当前点击元素获取到父元素
        var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);   //只要不是整数，就往大的方向取最小的整数
        if (!$v_show.is(":animated")) {    //判断“视频内容展示区域”是否正在处于动画
            if (page == page_count) {  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $v_show.animate({left: '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
            } else {
                $v_show.animate({left: '-=' + v_width}, "slow");  //通过改变left值，达到每次换一个版面
                page++;
            }
        }
    });
    //往前 按钮
    $(".car_prev").click(function () {
        var $parent = $(this).parents("div.car_menu");//根据当前点击元素获取到父元素
        var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i);   //只要不是整数，就往大的方向取最小的整数
        if (!$v_show.is(":animated")) {    //判断“视频内容展示区域”是否正在处于动画
            if (page == 1) {  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
                $v_show.animate({left: '-=' + v_width * (page_count - 1)}, "slow");
                page = page_count;
            } else {
                $v_show.animate({left: '+=' + v_width}, "slow");
                page--;
            }
        }

    });
});

$("#center li").each(function () {
    $(this).hover(
        function () {
            //$(this).children().show("normal");
            //$(this).children().fadeIn("normal");
            $(this).children().animate({height: 'toggle', opacity: 'toggle'}, 'normal')
            //$(this).children().animate({
            //   height: '290px', opacity: 'show'
            // }, 'normal');
        },
        function () {
            $(this).children().hide();
        }
    );
});
//导航
$(document).ready(function () {
    var $nav = $('.navigation li');
    $nav.find('a.home').click(function () {
        $.scrollTo(0, 1000);
    });
    $nav.find('a.about_us').click(function () {
        $.scrollTo(451, 1000);
    });//451
    $nav.find('a.center').click(function () {
        $.scrollTo(746, 1000);
    });//846
    $nav.find('a.case').click(function () {
        $.scrollTo(1621, 1000);
    });//1721
    $nav.find('a.news').click(function () {
        $.scrollTo(3017, 1000);
    });//2449
    $nav.find('a.contact').click(function () {
        $.scrollTo(3591, 1000);
    });//2868
    $(".navigation li").click(function(){
        $(this).addClass('current')
        .siblings().removeClass('current');
		return false;
    })
    // $(window).scroll(function () {
    //     $('.navigation li.current').removeClass('current');
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 450) {//450
    //         $('a.home').parent().addClass('current');
    //     } else if (scroll < 745) {//845
    //         $('a.about_us').parent().addClass('current');
    //     } else if (scroll < 1615) {//1715
    //         $('a.center').parent().addClass('current');
    //     } else if (scroll < 3074) {//2445
    //         $('a.case').parent().addClass('current');
    //     } else if (scroll < 3591) {//2565
    //         $('a.news').parent().addClass('current');
    //     } else if (scroll < 3661) {//3000
    //         $('a.contact').parent().addClass('current');
    //     } else {
    //         $('.navigation li').removeClass('current');
    //     }
    // });
});
$(".opdiv").live('click', function () {
    $("#divSCA").OpenDiv();
    var ex = $(this).children(".add_html").html();
    var ex2 = $(".open_div").children().html()
    if (ex2 != null) {
        return this;
    } else {
        $(".open_div").append(ex);
    }
});
$(".closebtn").live('click', function () {
    $("#divSCA").CloseDiv();
    $(".open_div").children().remove();
});
function openDiv() {
    $("#divSCA").OpenDiv();
    var ex = $(this).children(".add_html").html();
    var ex2 = $(".open_div").children().html()
    if (ex2 != null) {
        return this;
    } else {
        $(".open_div").append(ex);
    }

}
function closeDiv() {
    $("#divSCA").CloseDiv();
    $(".open_div").children().remove();
}
function nextDiv() {
    nextNum = String(parseInt($(this).parent().parent().attr("class")) + 1);
    if (nextNum > 6) {//
        alert("已是最后一项产品");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().parent().fadeOut("slow");
        $(this).parent().parent().remove();
        var ex3 = $(".open_div").append("<div class=" + nextNum + "></div>");
        $(".open_div").children("." + nextNum).append($(".add_html").children("." + nextNum).html());
    }
}
function prevDiv() {

    prevNum = String(parseInt($(this).parent().parent().attr("class")) - 1);
    if (prevNum < 1) {//
        alert("已是第一项产品");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().fadeOut("slow");
        $(this).parent().remove();
        var ex3 = $(".open_div").append("<div class=" + prevNum + "></div>");
        $(".open_div").children("." + prevNum).append($(".add_html").children("." + prevNum).html());
    }
}


function openDiv_2() {
    $("#divSCA").OpenDiv();
    var ex = $(this).children(".add_html_2").html();
    var ex2 = $(".open_div").children().html()
    if (ex2 != null) {
        return this;
    } else {
        $(".open_div").append(ex);
    }

}
function closeDiv_2() {
    $("#divSCA").CloseDiv();
    $(".open_div").children().remove();
}
function nextDiv_2() {
    nextNum = String(parseInt($(this).parent().parent().attr("class")) + 1);
    if (nextNum > 3) {//
        alert("已是最后一项案例");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().parent().fadeOut("slow");
        $(this).parent().parent().remove();
        var ex3 = $(".open_div").append("<div class=" + nextNum + "></div>");
        $(".open_div").children("." + nextNum).append($(".add_html_2").children("." + nextNum).html());
    }
}
function prevDiv_2() {
    prevNum = String(parseInt($(this).parent().parent().attr("class")) - 1);
    if (prevNum < 1) {//
        alert("已是第一项案例");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().fadeOut("slow");
        $(this).parent().remove();
        var ex3 = $(".open_div").append("<div class=" + prevNum + "></div>");
        $(".open_div").children("." + prevNum).append($(".add_html_2").children("." + prevNum).html());
    }
}

function openDiv_3() {
    $("#divSCA").OpenDiv();
    var ex = $(this).children(".add_html_3").html();
    var ex2 = $(".open_div").children().html()
    if (ex2 != null) {
        return this;
    } else {
        $(".open_div").append(ex);
    }

}
function closeDiv_3() {
    $("#divSCA").CloseDiv();
    $(".open_div").children().remove();
}
function nextDiv_3() {
    nextNum = String(parseInt($(this).parent().parent().attr("class")) + 1);
    if (nextNum > 4) {//
        alert("已是最后一项案例");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().parent().fadeOut("slow");
        $(this).parent().parent().remove();
        var ex3 = $(".open_div").append("<div class=" + nextNum + "></div>");
        $(".open_div").children("." + nextNum).append($(".add_html_3").children("." + nextNum).html());
    }
}
function prevDiv_3() {
    prevNum = String(parseInt($(this).parent().parent().attr("class")) - 1);
    if (prevNum < 1) {//
        alert("已是第一项案例");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().fadeOut("slow");
        $(this).parent().remove();
        var ex3 = $(".open_div").append("<div class=" + prevNum + "></div>");
        $(".open_div").children("." + prevNum).append($(".add_html_3").children("." + prevNum).html());
    }
}

function openDiv_4() {
    $("#divSCA").OpenDiv();
    var ex = $(this).children(".add_html_4").html();
    var ex2 = $(".open_div").children().html()
    if (ex2 != null) {
        return this;
    } else {
        $(".open_div").append(ex);
    }

}
function closeDiv_4() {
    $("#divSCA").CloseDiv();
    $(".open_div").children().remove();
}
function nextDiv_4() {
    nextNum = String(parseInt($(this).parent().parent().attr("class")) + 1);
    if (nextNum > 5) {//
        alert("已是最后一项案例");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().parent().fadeOut("slow");
        $(this).parent().parent().remove();
        var ex3 = $(".open_div").append("<div class=" + nextNum + "></div>");
        $(".open_div").children("." + nextNum).append($(".add_html_4").children("." + nextNum).html());
    }
}
function prevDiv_4() {
    prevNum = String(parseInt($(this).parent().parent().attr("class")) - 1);
    if (prevNum < 1) {//
        alert("已是第一项案例");
        return this;
    } else {
        $(".open_div").children().remove();
        $(this).parent().fadeOut("slow");
        $(this).parent().remove();
        var ex3 = $(".open_div").append("<div class=" + prevNum + "></div>");
        $(".open_div").children("." + prevNum).append($(".add_html_4").children("." + prevNum).html());
    }
}


//最新资讯
// $(function () {
//     var $this = $(".list");
//     var scollTimer = null;
//     $this.hover(function () {
//         clearInterval(scollTimer);
//     }, function () {
//         scollTimer = setInterval(function () {
//             scrollNews($this);
//         }, 3000)
//     }).trigger("mouseleave")
// })
// function scrollNews(obj) {
//     var $self = obj.find("ul:first");
//     var lineHeigh = $self.find("li:first").height();
//     $self.animate({"marginTop": -lineHeigh + "px"}, 600, function () {
//         $self.css({marginTop: 0}).find("li:first").appendTo($self);
//     })
// }

//地图弹框
function openMap() {
    $("#divMAP").OpenDiv();
}
function closeMap() {
    $("#divMAP").CloseDiv();
}
//创建和初始化地图函数：
function initMap() {
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap() {
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(120.343666,31.573737), 11);
}
function setMapEvent() {
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target, window) {
    target.addEventListener("click", function () {
        target.openInfoWindow(window);
    });
}
function addMapOverlay() {
    var markers = [
        {
            content: "无锡市新区太湖国际科技园大学科技园清源路530大厦A栋8层",
            title: "无锡总部",
            imageOffset: {width: -46, height: -21},
            position: {lat: 31.485983, lng: 120.383179}
        }
    ];
    for (var index = 0; index < markers.length; index++) {
        var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
        var marker = new BMap.Marker(point, {
            icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(20, 25), {
                imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)
            })
        });
        var label = new BMap.Label(markers[index].title, {offset: new BMap.Size(25, 5)});
        var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
        marker.setLabel(label);
        addClickHandler(marker, infoWindow);
        map.addOverlay(marker);
    }
    ;
}
//向地图添加控件
function addMapControl() {
    var scaleControl = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: true});
    map.addControl(overviewControl);
}
var map;
initMap();
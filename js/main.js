
// slickの設定
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
});


// スムーススクロールの設定
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

$(function () {
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// 下記の説明　ハンバーガーメニュー

$('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
});

$('.menu__item a').on('click', function () {
    $('.menu').removeClass('active');
    $('.menu a').toggleClass('active-close');
  });

  // 更新時アニメーション //
  $(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

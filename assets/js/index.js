/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

      //   //分享
      //     var bhead = $(document.head);
      //     var config = {
      //      url: location.href,
      //      site_url: location.origin,
      //      source: bhead.find('[property="og:site_name"]').attr('content') || document.title,
      //      title: bhead.find('[property="og:title"]').attr('content') || document.title,
      //      description: bhead.find('[property="og:description"]').attr('content') || '',
      //      image: bhead.find('[property="og:image"]').attr('content') || '',
      //      imageSelector: undefined,
       //
      //      weiboKey: '',
       //
      //      wechatQrcodeTitle: '微信扫一扫：分享',
      //      wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
      //      wechatQrcodeSize: 100,
       //
      //      mobileSites: [],
      //      sites: ['weibo','qq','wechat','tencent','douban','qzone'],
      //      disabled: ['linkedin','diandian','facebook','twitter','google']
      //     //  initialized: false
      //  };
       //
       $('.social-share').share();

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

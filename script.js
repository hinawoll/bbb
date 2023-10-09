$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('#js-hamburger').on('click',function() {
      // #headerにopenクラスが存在する場合
      if ($('#header').hasClass('open')) {
        // openクラスを削除
        // openクラスを削除すると、openクラスのCSSがはずれるため、
        // メニューが非表示になる
        $('#header').removeClass('open');
  
      // #headerにopenクラスが存在しない場合
      } else {
        // openクラスを追加
        // openクラスを追加すると、openクラスのCSSが適応されるため、
        // メニューが表示される
        $('#header').addClass('open');
      }
    });

    $('.left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらslide-leftクラスを追加
        $(this).stop().addClass('slide-left');
      }
    });
    // BBBが選ばれる理由（スライド右）
    $('.right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらslide-rightクラスを追加
        $(this).stop().addClass('slide-right');
      }
    });

    $('.review').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if(isInView){
        // 要素が表示されたらballoonクラスを追加
        $(this).stop().addClass('balloon');
      }
    });

  });
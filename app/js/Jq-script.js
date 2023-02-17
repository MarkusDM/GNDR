"use strict";



$(document).ready(function () {
    $('.input-file input[type=file]').on('change', function(){
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    // инпут для скачивания файла 


    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut();
        }
    });


    // селекты

    
$(".cost__block").each(function() {

    let more = $(this).find(".cost__block-inner");
    let hide = $(this).find(".cost__content");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.toggleClass('active');
    });
         
		
        
    
});



$(".schedule__block").each(function() {

    let more = $(this).find(".schedule__block-inner");
    let hide = $(this).find(".schedule__wrap");
    hide.hide();
    more.click(function() {
        hide.slideToggle();
        more.toggleClass('active');
    });
         
		
        
    
});


$('.hospitalization__item').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.hospitalization__content[data-tab="'+ id +'"]');
    
    $('.hospitalization__item.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.hospitalization__content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

   
   
});



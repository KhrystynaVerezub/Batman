$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event){/*задаем видимость скрытым элементам*/ 
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        
        
        $('.tabs-item-active').toggleClass('tabs-item-active');/*Чтоб цветы выключался при переключении элемента*/ 
        $(this).toggleClass('tabs-item-active');/*присваивание цвета активному элементу*/ 
    });
});
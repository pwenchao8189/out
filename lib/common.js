    var path_nameArr=window.location.pathname.split('/');
    var nav_lis=$('.nav-list ul li');
    for(var i = 0 ; i < nav_lis.length ; i++){
        for(var j = 0 ; j < path_nameArr.length ; j++){
            if($(nav_lis[i]).attr('data-value') == path_nameArr[j]){
                $(nav_lis[i]).addClass('active').siblings().removeClass('active')
            }
        }
    }

    var lang_spec=$('.language span');
    var local_lang_name=window.localStorage.getItem('lang_name');
    if(local_lang_name){
        $(lang_spec).text(local_lang_name);
    }
    $(lang_spec).on('click' , function(){
        if($(this).text() == 'CN'){
            $(this).text('EN');
        }else{
            $(this).text('CN');
        }
        window.localStorage.setItem('lang_name' , $(this).text());
    })
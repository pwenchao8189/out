    var path_nameArr=window.location.pathname.split('/');
    var nav_lis=$('.nav-list ul li');
    var path_search=window.location.search;

    function getParamer(paramer){
        var url=window.location.href.split("?")[1];              
        if(url && url.indexOf("&")>0){                                      
            urlParamArry=url.split("&");                            
            for(var i=0; i<urlParamArry.length; i++){
                var paramerName=urlParamArry[i].split("=");   
                if(paramer==paramerName[0]){                     
                        return paramerName[1];                           
                }
            }
        }else{                                                              
            var paramerValue=url.split("=")[1];
            return paramerValue;
        }
      
    }
    for(var i = 0 ; i < nav_lis.length ; i++){
        for(var j = 0 ; j < path_nameArr.length ; j++){
            if($(nav_lis[i]).attr('data-value') == path_nameArr[j] || $(nav_lis[i]).attr('data-value') == 'trans02_new.html' && path_nameArr[j] == 'transDetails.html'){
                $(nav_lis[i]).addClass('active').siblings().removeClass('active')
                
            }
            if(window.location.href.split("?")[1]){
                if(getParamer('id') == 1 && $(nav_lis[i]).attr('data-value') == 'invest02_new.html'){
                    $(nav_lis[i]).addClass('active').siblings().removeClass('active')
                    // return
                }
                if(getParamer('id') == 2 && $(nav_lis[i]).attr('data-value') == 'trans02_new.html'){
                    $(nav_lis[i]).addClass('active').siblings().removeClass('active')
                }
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
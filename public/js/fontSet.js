;(function(){
    function getSize(){
        let iW=document.documentElement.clientWidth;
        iW=iW>640?640:iW;
        let iSize=(iW/320)*20;
        document.getElementsByTagName('html')[0].style.fontSize=iSize+'px';
    }
    getSize()
    window.addEventListener('resize',getSize,false)
}())
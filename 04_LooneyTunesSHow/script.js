let flag = 1;
function estiloCircular(){
    linkCss = document.getElementById("estilo");

    if(flag == 1){
        linkCss.setAttribute("href", "styleBlack.css");
        flag = 2;
    }
    else{
        linkCss.setAttribute("href", "style.css");
        flag = 1;
    }
}
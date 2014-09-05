//<!--
browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);

condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ; 

if (condition == true  )
    CanAnimate = true;
else
    CanAnimate = false;

function openchild(thisurl){
if ( CanAnimate ){
        msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=no,menubar=no,resizable=yes,width=510,height=420');
        msgWindow.focus();
        msgWindow.location.href = thisurl;
}
else {
        msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=no,menubar=no,resizable=yes,width=510,height=420');
}

}

function showhelp(comp, tsc, parent_comp, iso_grp, isocert_text, isovalidupto)
{
	window.location = "/view.mp?comp="+ comp +"&tsc="+ tsc +"&parent_comp="+ parent_comp +"&iso_grp="+ iso_grp +"&isocert_text="+ isocert_text +"&isovalidupto="+ isovalidupto;
	
}
//-->

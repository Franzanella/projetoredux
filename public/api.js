function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var nLink = JSON.parse(this.responseText);
        montaPagina(nLink);
      }
    };
  xhttp.open("GET","https://www.linkedin.com/oauth/v2/access_token=AQX8GNwkEcz72uG9pat2ETZb3uI1HL3IXwCsVk3pRtUBAJNtzhG4FDeKZOkYP8YTYDk6BlGBTKp1pxQqUV0xeES2DdceMYfJ9S4AsLYkgHRdBHCVC5p6SYMcYj7GLZu0GJabCUgR_C_M-naCL3S04Dp11reGyTScq-31m2yExnOKlIeNbAYih3wDkfi9v0GjRYC0DFv82k9OOQOhDM1-U0QhfFBf_lPC9mUgjq952rw8h8RoWeBDXas43PFIW9ViS8xri7SvDxgimEOpBAB6gbKuFh-eNiSZYOHJLz-5CyGNeGq_X9_wZYuk6z-VvlMvf3fTPCUbiz_tv3mn2KkbzISrpQKfDQ", true);
  xhttp.send();
}

function teste(){
    sendReq();
}
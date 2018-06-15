function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var nLink = JSON.parse(this.responseText);
        montaPagina(nLink);
      } 
    };
  xhttp.open("GET","https://api.linkedin.com/v1/people/~?oauth2_access_token=AQX8GNwkEcz72uG9pat2ETZb3uI1HL3IXwCsVk3pRtUBAJNtzhG4FDeKZOkYP8YTYDk6BlGBTKp1pxQqUV0xeES2DdceMYfJ9S4AsLYkgHRdBHCVC5p6SYMcYj7GLZu0GJabCUgR_C_M-naCL3S04Dp11reGyTScq-31m2yExnOKlIeNbAYih3wDkfi9v0GjRYC0DFv82k9OOQOhDM1-U0QhfFBf_lPC9mUgjq952rw8h8RoWeBDXas43PFIW9ViS8xri7SvDxgimEOpBAB6gbKuFh-eNiSZYOHJLz-5CyGNeGq_X9_wZYuk6z-VvlMvf3fTPCUbiz_tv3mn2KkbzISrpQKfDQ", true);
  xhttp.send();
}

function montaPagina(nLink){
  var div = document.createElement("div");
  var divName = document.createElement("div");
  var divHead = document.createElement("div");
  var divId = document.createElement("div");
  var divLast = document.createElement("div");
  var divStRq = document.createElement("div");
  divName.innerHTML = nLink.data.firstName;
  divHead.innerHTML = nLink.data.headline;
  divId.innerHTML = nLink.data.id;
  divLast.innerHTML = nLink.data.lastName;
  divStRq.innerHTML = nLink.data.siteStandardProfileRequest;
  div.appendChild(divName);
  div.appendChild(divHead);
  div.appendChild(divId);
  div.appendChild(divLast);
  div.appendChild(divStRq);
  document.body.appendChild(div);
}

function ready(){
    sendReq();
}
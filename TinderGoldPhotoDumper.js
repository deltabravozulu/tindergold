//bookmarklet:
//javascript:var stringz;var jason;var xhr=new XMLHttpRequest();var tokez=localStorage.getItem("TinderWeb/APIToken");var url="https://api.gotinder.com/v2/fast-match/teasers?locale=en";xhr.withCredentials=true;xhr.open("GET",url);xhr.setRequestHeader("accept","application/json");xhr.setRequestHeader("content-type","application/json; charset=utf-8");xhr.setRequestHeader("x-auth-token",tokez);xhr.setRequestHeader("tinder-version","2.35.0");xhr.setRequestHeader("platform","web");xhr.onreadystatechange=function(){if(this.readyState==4&&this.status==200){stringz=this.responseText;jasonTransform(stringz);return stringz;}};xhr.send();function jasonTransform(stringz){var jasonstring=JSON.parse(stringz);var jasonstrung=jasonstring.data.results.map(x=>x.user.photos.map(y=>y.url));jason=JSON.stringify(jasonstrung,null,4);console.log(jason);return jason;}jasonReturns=JSON.parse(jason);jasonLong=jasonReturns.length;function jasonX(){for(var i=0;i<jasonLong;i++){window.open(jasonReturns[i],'_blank'+i);}}jasonX();

var stringz;
var jason;
var xhr = new XMLHttpRequest();
var tokez = localStorage.getItem("TinderWeb/APIToken");
var url = "https://api.gotinder.com/v2/fast-match/teasers?locale=en";
//var url = "https://api.gotinder.com/{like|pass}/{_id}"
//var url = "https://api.gotinder.com/user/5e8d4231370407010088281b";
xhr.withCredentials = true;
xhr.open("GET", url);
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
xhr.setRequestHeader("x-auth-token", tokez);
xhr.setRequestHeader("tinder-version", "2.35.0");
xhr.setRequestHeader("platform", "web");
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // the response arrives here
        stringz = this.responseText;
        // JSON transform after response arrives
        jasonTransform(stringz);
        return stringz;
    }
};
xhr.send();

function jasonTransform(stringz) {
    //Turn the xhr response into a JSON string
    var jasonstring = JSON.parse(stringz);
    //Grab the URLs
    var jasonstrung = jasonstring.data.results.map(x => x.user.photos.map(y => y.url));
    //Turn the URLs into a nicely formatted JSON string
    jason = JSON.stringify(jasonstrung, null, 4);
    //See what we got
    console.log(jason);
    return jason;
}
jasonReturns = JSON.parse(jason);
jasonLong = jasonReturns.length;

function jasonX() {
    for (var i = 0; i < jasonLong; i++) {
        window.open(jasonReturns[i], '_blank' + i);
    }
}
jasonX();



/*Old-------
var xhr = new XMLHttpRequest();
var tokez = localStorage.getItem("TinderWeb/APIToken");
var url = "https://api.gotinder.com/v2/fast-match/teasers?locale=en";
//var url = "https://api.gotinder.com/{like|pass}/{_id}"
//var url = "https://api.gotinder.com/user/5e8d4231370407010088281b";
xhr.withCredentials = true;
xhr.open("GET", url);
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
//xhr.setRequestHeader("user-agent", "Mozilla/5.0 (X11; CrOS x86_64 12871.76.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.103 Safari/537.36");
xhr.setRequestHeader("x-auth-token", tokez);
//xhr.setRequestHeader("app-version", "1023500");
xhr.setRequestHeader("tinder-version", "2.35.0");
xhr.setRequestHeader("platform", "web");

xhr.send();


//old way to do this
//xhr.onreadystatechange = (e) => {
//var stringz = xhr.responseText;
//var jason = JSON.stringify(stringz, null, 4);
//  console.log(jason);
//};

//xhr.onreadystatechange = function() {
//    if (xhr.readyState == 4 && xhr.status == 200) {
//        var stringz = xhr.responseText;
//        var jasonstring = JSON.parse(stringz);
//        var jason = JSON.stringify(jasonstring, null, 4);
//        console.log(jason);
//    }
//};
var stringz;
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        stringz = xhr.responseText;
        return stringz;
    }};

    

  var jasonstring = JSON.parse(stringz);
 // var jasonstrung = JSON.stringify(jasonstring, null, 4);
  var jasonstrung = jasonstring.data.results.map( x => x.user.photos.map(y => y.url));
//  var jason = jasonstrung.data.results.map( x => x.user.photos.map(y => y.url));
//  var jasonpicz = JSON.stringify(jason,null,4);
var jason = JSON.stringify(jasonstrung,null,4);
console.log(jason);
*/



/*old bookmarklet*/
/*javascript:var xhr = new XMLHttpRequest();var tokez = localStorage.getItem("TinderWeb/APIToken");var url="https://api.gotinder.com/v2/fast-match/teasers?locale=en";xhr.withCredentials = true ;xhr.open("GET", url);xhr.setRequestHeader("accept", "application/json");xhr.setRequestHeader("content-type", "application/json; charset=utf-8");xhr.setRequestHeader("x-auth-token", tokez);xhr.setRequestHeader("tinder-version", "2.35.0");xhr.setRequestHeader("platform", "web");xhr.send();xhr.onreadystatechange = (e) => {console.log(xhr.responseText)}*/

/*new bookmarklet*/
/*javascript:void function(){var e=new XMLHttpRequest,t=localStorage.getItem("TinderWeb/APIToken"),a="https://api.gotinder.com/v2/fast-match/teasers?locale=en";e.withCredentials=!0,e.open("GET",a),e.setRequestHeader("accept","application/json"),e.setRequestHeader("content-type","application/json; charset=utf-8"),e.setRequestHeader("x-auth-token",t),e.setRequestHeader("tinder-version","2.35.0"),e.setRequestHeader("platform","web"),e.send(),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=e.responseText,a=JSON.parse(t),s=JSON.stringify(a,null,4);console.log(s)}}}();*/
(function(){var d="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,g=function(a,b){if(b){var c=f;a=a.split(".");for(var e=0;e<a.length-1;e++){var h=a[e];h in c||(c[h]={});c=c[h]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&d(c,a,{configurable:!0,writable:!0,value:b})}};
g("Array.from",function(a){return a?a:function(b,c,e){c=null!=c?c:function(aa){return aa};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var m=0;!(l=b.next()).done;)h.push(c.call(e,l.value,m++))}else for(l=b.length,m=0;m<l;m++)h.push(c.call(e,b[m],m));return h}});var k=this||self,ba=/^[\w+/_-]+[=]{0,2}$/,n=null;var r=function(a,b){this.f=a===p&&b||"";this.c=q},q={},p={};var t;a:{var u=k.navigator;if(u){var v=u.userAgent;if(v){t=v;break a}}t=""};var w=function(a,b){if(!ca()){var c=Math.random();if(c<b)return c=da(),a[Math.floor(c*a.length)]}return null},da=function(){if(!k.crypto)return Math.random();try{var a=new Uint32Array(1);k.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},ca=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return-1!=t.indexOf("Google Web Preview")||1E-4>Math.random()});var ea=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(e){}return!0}(k,!1)?"https:":"http:";var x={i:1,g:4,h:5,j:6},y={b:"40004006",a:"40004007"};function fa(){return{1:.5,4:.005,5:.001,6:.2}}function ha(){var a=z,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in x)if(b=a[x[c]],"number"!=typeof b||0>b||1<b)return!1;return!0};function ia(){var a=k.dcmads;return null!=a.eids?a.eids:k==k.top&&"srcdoc"in k.document.createElement("iframe")?(a=w([y.b,y.a],a.expts[4]))?"4|"+a:"":""};try{k.dcmads=k.dcmads||{};k.dcmads.startTime=(new Date).getTime();var ja=k.dcmads,A=k.dcmads.version,B={loader:144};if(A)if(B.experiment=A.experiment,53==A.number||"p"==A.number)B.number=53;else if(53==A.number||"c"==A.number)B.number=53;if(!B.number){var C=w([53,53],0);B.experiment=!!C;B.number=C||53}ja.version=B;var ka=k.dcmads,D,z=k.dcmads.expts,E;E=void 0===E?fa:E;D=ha()?z:E();ka.expts=D;k.dcmads.eids=ia();var la="4|"+y.a,F,G=k.dcmads.version,H=G.number,I="";G.experiment&&53==H&&(I="?rxp=53x53");
var ma="impl_v"+H+".js"+I,J=k.document,K=J.currentScript||Array.from(J.getElementsByTagName("script")).pop();F=(0==(K&&K.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+ma;if(k.dcmads.eids==la){var L=k.document,M=L.createElement("script"),N=new r(p,F,null);M.src=N instanceof r&&N.constructor===r&&N.c===q?N.f:"type_error:TrustedResourceUrl";var O;if(null===n)a:{var P=k.document,Q=P.querySelector&&P.querySelector("script[nonce]");if(Q){var R=Q.nonce||Q.getAttribute("nonce");
if(R&&ba.test(R)){n=R;break a}}n=""}(O=n)&&M.setAttribute("nonce",O);var S=L.getElementsByTagName("script")[0];S&&S.parentNode&&S.parentNode.insertBefore(M,S)}else k.document.write('<script src="'+F+'">\x3c/script>')}catch(a){if(.01>Math.random()){var T="";try{var U,V=a.toString();a.name&&-1==V.indexOf(a.name)&&(V+=": "+a.name);a.message&&-1==V.indexOf(a.message)&&(V+=": "+a.message);if(a.stack){var W=a.stack,X=V;try{-1==W.indexOf(X)&&(W=X+"\n"+W);for(var Y;W!=Y;)Y=W,W=W.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
"$1");V=W.replace(/\n */g,"\n")}catch(b){V=X}}U=V;U=U.substring(0,1024);T=encodeURIComponent(U)}catch(b){T="extr"}var Z=k.dcmads.eids;k.document.write('<img style="display:none" src="'+(ea+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=144&context=554"+((Z?"&eids="+Z:"")+"&msg="+T))+'"></img>')}};}).call(this);

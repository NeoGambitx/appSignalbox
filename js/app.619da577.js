(function(e){function r(r){for(var a,n,s=r[0],c=r[1],u=r[2],d=0,l=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(r);while(l.length)l.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,r=0;r<i.length;r++){for(var t=i[r],a=!0,n=1;n<t.length;n++){var s=t[n];0!==o[s]&&(a=!1)}a&&(i.splice(r--,1),e=c(c.s=t[0]))}return e}var a={},n={1:0},o={1:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2:"b6583bed",3:"9ba4ab7a",4:"b0c4a6c9",5:"e7772a01",6:"c9aad5f7",7:"03a334bb",8:"c7a23e5c",9:"69fc7728",10:"a31c84e0",11:"8c0945a8",12:"7fa3d030",13:"ab5e3d31"}[e]+".js"}function c(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var r=[],t={2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=new Promise((function(r,t){for(var a="css/"+({}[e]||e)+"."+{2:"55aab1d1",3:"9254f9eb",4:"5f338669",5:"e2f1bc42",6:"b959e07f",7:"3bcbb512",8:"93455c5a",9:"91c06b1a",10:"e8085262",11:"bfad05a5",12:"11cf44f7",13:"31d6cfe0"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return r()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===o)return r()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=r,m.onerror=function(r){var a=r&&r.target&&r.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],m.parentNode.removeChild(m),t(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(r,t){a=o[e]=[r,t]}));r.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(r){d.onerror=d.onload=null,clearTimeout(m);var t=o[e];if(0!==t){if(t){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,t[1](l)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(r)},c.m=e,c.c=a,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)c.d(t,a,function(r){return e[r]}.bind(null,a));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var m=d;i.push([0,0]),t()})({0:function(e,r,t){e.exports=t("2f39")},"2f39":function(e,r,t){"use strict";t.r(r);var a={};t.r(a),t.d(a,"rotGetter",(function(){return N})),t.d(a,"rotCovidGetter",(function(){return R})),t.d(a,"getNoticias",(function(){return P})),t.d(a,"AuthName",(function(){return I})),t.d(a,"getAppLabel",(function(){return E})),t.d(a,"getFullScreen",(function(){return S})),t.d(a,"getAdmin",(function(){return U})),t.d(a,"getActualizacion",(function(){return L})),t.d(a,"getVoto",(function(){return x})),t.d(a,"getNovedadesHs",(function(){return z})),t.d(a,"getNovedadesNotas",(function(){return D})),t.d(a,"getPrimerMensaje",(function(){return M})),t.d(a,"getLinea",(function(){return T})),t.d(a,"getNombreLinea",(function(){return F})),t.d(a,"getReclamos",(function(){return B})),t.d(a,"getRegistro",(function(){return H})),t.d(a,"getAutorizacion",(function(){return Q})),t.d(a,"getIosUser",(function(){return j})),t.d(a,"getNombre",(function(){return k})),t.d(a,"getSector",(function(){return G}));var n={};t.r(n),t.d(n,"setLoggedIn",(function(){return O})),t.d(n,"setCurrentUser",(function(){return J})),t.d(n,"setCurrentUserMail",(function(){return Y})),t.d(n,"setCurrentUserPhoto",(function(){return V})),t.d(n,"setAppLabel",(function(){return X})),t.d(n,"setRot",(function(){return q})),t.d(n,"setRotCovid",(function(){return W})),t.d(n,"setFullScreen",(function(){return Z})),t.d(n,"paintRot",(function(){return K})),t.d(n,"actRot",(function(){return _})),t.d(n,"setAdmin",(function(){return $})),t.d(n,"paintRotCovid",(function(){return ee})),t.d(n,"cargarNoticias",(function(){return re})),t.d(n,"cargarReclamos",(function(){return te})),t.d(n,"setNombre",(function(){return ae})),t.d(n,"setSector",(function(){return ne})),t.d(n,"resetReclamos",(function(){return oe})),t.d(n,"reclamosRegistrarUsuario",(function(){return ie})),t.d(n,"reclamosAutorizarUsuario",(function(){return se})),t.d(n,"actRotCovid",(function(){return ce})),t.d(n,"reiniciarRot",(function(){return ue})),t.d(n,"votarJuegos",(function(){return de})),t.d(n,"setPreloader",(function(){return le})),t.d(n,"setNovedadesHsSuma",(function(){return me})),t.d(n,"setNovedadesHsResta",(function(){return fe})),t.d(n,"setNovedadesNota",(function(){return Ae})),t.d(n,"restoreNotas",(function(){return he})),t.d(n,"restoreHsExtra",(function(){return ge})),t.d(n,"setIosUser",(function(){return pe})),t.d(n,"setLinea",(function(){return ye})),t.d(n,"setPrimerMensaje",(function(){return we})),t.d(n,"setNombreLinea",(function(){return ve}));t("e6cf"),t("5319"),t("7d6e"),t("e54f"),t("573e"),t("985d"),t("31cd");var o=t("2b0e"),i=t("1f91"),s=t("42d2"),c=t("b05d"),u=t("18d6"),d=t("2a19");o["a"].use(c["a"],{config:{},lang:i["a"],iconSet:s["a"],plugins:{LocalStorage:u["a"],Notify:d["a"]}});var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},m=[],f=t("ded3"),A=t.n(f),h=t("2f62"),g={name:"App",methods:A()({},Object(h["b"])("auth",["handleAuthStateChange"])),mounted(){this.handleAuthStateChange()}},p=g,y=t("2877"),w=Object(y["a"])(p,l,m,!1,null,null,null),v=w.exports;function b(e,r){return new Date(r,e,0).getDate()}var C=function(){return{loggedIn:!1,user:"",mail:"",photo:"",ios:!1,noticias:void 0,appLabel:"",fullScreen:!0,admin:!1,preloader:!0,reclamos:[],nombre:"",tipo:void 0,zona:void 0,sector:void 0,registrado:!1,autorizado:!1,linea:void 0,nombreLinea:void 0,primerMensaje:!1,actualizacion:{existe:!0,link:"https:google.com.ar",version:"v1.2.5"},voto:!1,rotCovid:[[new Array(b(1,2021)),new Array(b(2,2021)),new Array(b(3,2021)),new Array(b(4,2021)),new Array(b(5,2021)),new Array(b(6,2021)),new Array(b(7,2021)),new Array(b(8,2021)),new Array(b(9,2021)),new Array(b(10,2021)),new Array(b(11,2021)),new Array(b(12,2021))],[new Array(b(1,2022)),new Array(b(2,2022)),new Array(b(3,2022)),new Array(b(4,2022)),new Array(b(5,2022)),new Array(b(6,2022)),new Array(b(7,2022)),new Array(b(8,2022)),new Array(b(9,2022)),new Array(b(10,2022)),new Array(b(11,2022)),new Array(b(12,2022))],[new Array(b(1,2023)),new Array(b(2,2023)),new Array(b(3,2023)),new Array(b(4,2023)),new Array(b(5,2023)),new Array(b(6,2023)),new Array(b(7,2023)),new Array(b(8,2023)),new Array(b(9,2023)),new Array(b(10,2023)),new Array(b(11,2023)),new Array(b(12,2023))]],rot:[[new Array(b(1,2021)),new Array(b(2,2021)),new Array(b(3,2021)),new Array(b(4,2021)),new Array(b(5,2021)),new Array(b(6,2021)),new Array(b(7,2021)),new Array(b(8,2021)),new Array(b(9,2021)),new Array(b(10,2021)),new Array(b(11,2021)),new Array(b(12,2021))],[new Array(b(1,2022)),new Array(b(2,2022)),new Array(b(3,2022)),new Array(b(4,2022)),new Array(b(5,2022)),new Array(b(6,2022)),new Array(b(7,2022)),new Array(b(8,2022)),new Array(b(9,2022)),new Array(b(10,2022)),new Array(b(11,2022)),new Array(b(12,2022))],[new Array(b(1,2023)),new Array(b(2,2023)),new Array(b(3,2023)),new Array(b(4,2023)),new Array(b(5,2023)),new Array(b(6,2023)),new Array(b(7,2023)),new Array(b(8,2023)),new Array(b(9,2023)),new Array(b(10,2023)),new Array(b(11,2023)),new Array(b(12,2023))]],novedadesHs:[[new Array(b(1,2021)),new Array(b(2,2021)),new Array(b(3,2021)),new Array(b(4,2021)),new Array(b(5,2021)),new Array(b(6,2021)),new Array(b(7,2021)),new Array(b(8,2021)),new Array(b(9,2021)),new Array(b(10,2021)),new Array(b(11,2021)),new Array(b(12,2021))],[new Array(b(1,2022)),new Array(b(2,2022)),new Array(b(3,2022)),new Array(b(4,2022)),new Array(b(5,2022)),new Array(b(6,2022)),new Array(b(7,2022)),new Array(b(8,2022)),new Array(b(9,2022)),new Array(b(10,2022)),new Array(b(11,2022)),new Array(b(12,2022))],[new Array(b(1,2023)),new Array(b(2,2023)),new Array(b(3,2023)),new Array(b(4,2023)),new Array(b(5,2023)),new Array(b(6,2023)),new Array(b(7,2023)),new Array(b(8,2023)),new Array(b(9,2023)),new Array(b(10,2023)),new Array(b(11,2023)),new Array(b(12,2023))]],novedadesNotas:[[new Array(b(1,2021)),new Array(b(2,2021)),new Array(b(3,2021)),new Array(b(4,2021)),new Array(b(5,2021)),new Array(b(6,2021)),new Array(b(7,2021)),new Array(b(8,2021)),new Array(b(9,2021)),new Array(b(10,2021)),new Array(b(11,2021)),new Array(b(12,2021))],[new Array(b(1,2022)),new Array(b(2,2022)),new Array(b(3,2022)),new Array(b(4,2022)),new Array(b(5,2022)),new Array(b(6,2022)),new Array(b(7,2022)),new Array(b(8,2022)),new Array(b(9,2022)),new Array(b(10,2022)),new Array(b(11,2022)),new Array(b(12,2022))],[new Array(b(1,2023)),new Array(b(2,2023)),new Array(b(3,2023)),new Array(b(4,2023)),new Array(b(5,2023)),new Array(b(6,2023)),new Array(b(7,2023)),new Array(b(8,2023)),new Array(b(9,2023)),new Array(b(10,2023)),new Array(b(11,2023)),new Array(b(12,2023))]]}};function N(e){return e.rot}function R(e){return e.rotCovid}function P(e){return e.noticias}function I(e){return e.user}function E(e){return e.appLabel}function S(e){return e.fullScreen}function U(e){return e.admin}function L(e){return e.actualizacion}function x(e){return e.voto}function z(e){return e.novedadesHs}function D(e){return e.novedadesNotas}function M(e){return e.primerMensaje}function T(e){return e.linea}function F(e){return e.nombreLinea}function B(e){return e.reclamos}function H(e){return e.registrado}function Q(e){return e.autorizado}function j(e){return e.ios}function k(e){return e.nombre}function G(e){return e.sector}t("a434");const O=(e,r)=>{e.loggedIn=r},J=(e,r)=>{e.user=r},Y=(e,r)=>{e.mail=r},V=(e,r)=>{e.photo=r},X=(e,r)=>{e.appLabel=r},q=(e,r)=>{e.rot=r},W=(e,r)=>{e.rotCovid=r},Z=(e,r)=>{e.fullScreen=r},K=(e,r)=>{e.rot[r.year][r.month][r.day]=r.paintColor},_=(e,r)=>{e.rot[r.year][r.month][r.startDay]=r.rotAct},$=(e,r)=>{e.admin=r},ee=(e,r)=>{e.rotCovid[r.year][r.month][r.day]=r.paintColor},re=(e,r)=>{let t=[];r.forEach((e=>{t.splice(0,0,e.data())})),e.noticias=t},te=(e,r)=>{let t=[];r.forEach((e=>{let r=e.data();r.id=e.id,t.splice(0,0,r)})),e.reclamos=t},ae=(e,r)=>{e.nombre=r},ne=(e,r)=>{e.sector=r},oe=e=>{e.reclamos=[]},ie=(e,r)=>{e.registrado=r},se=(e,r)=>{e.autorizado=r},ce=(e,r)=>{e.rotCovid[r.year][r.month][r.startDay]=r.rotAct},ue=(e,r)=>{if("covid"==r)for(let t=0;t<e.rotCovid.length;t++)for(let r=0;r<e.rotCovid[t].length;r++)for(let a=0;a<e.rotCovid[t][r].length;a++)e.rotCovid[t][r].splice(a,1,void 0);else if("normal"==r)for(let t=0;t<e.rot.length;t++)for(let r=0;r<e.rot[t].length;r++)for(let a=0;a<e.rot[t][r].length;a++)e.rot[t][r].splice(a,1,void 0),e.novedadesHs[t][r].splice(a,1,void 0),e.novedadesNotas[t][r].splice(a,1,void 0)},de=(e,r)=>{e.voto=r},le=(e,r)=>{e.preloader=r},me=(e,r)=>{void 0==e.novedadesHs[r.year][r.month][r.day]&&(e.novedadesHs[r.year][r.month][r.day]=0),18!=e.novedadesHs[r.year][r.month][r.day]&&(e.novedadesHs[r.year][r.month][r.day]+=1)},fe=(e,r)=>{void 0!=e.novedadesHs[r.year][r.month][r.day]&&(e.novedadesHs[r.year][r.month][r.day]-=1,0==e.novedadesHs[r.year][r.month][r.day]&&(e.novedadesHs[r.year][r.month][r.day]=void 0))},Ae=(e,r)=>{e.novedadesNotas[r.year][r.month][r.day]=r.data},he=(e,r)=>{e.novedadesNotas=r},ge=(e,r)=>{e.novedadesHs=r},pe=(e,r)=>{e.ios=r},ye=(e,r)=>{e.linea=r},we=(e,r)=>{e.primerMensaje=r},ve=(e,r)=>{let t="";0==r?t="Mitre":1==r?t="Urquiza":2==r?t="Roca":3==r?t="San Martín":4==r?t="Belgrano Sur":5==r&&(t="Sarmiento"),e.nombreLinea=t};var be=t("d093"),Ce={namespaced:!0,state:C,getters:a,mutations:n,actions:be};o["a"].use(h["a"]);var Ne=function(){const e=new h["a"].Store({modules:{auth:Ce},strict:!1});return e},Re=t("8c4f");const Pe=[{path:"/",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"b71a"))},{path:"/help",component:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"d804"))},{path:"/login",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"c6f7"))},{path:"/covid",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"171c"))},{path:"/noticias",component:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"6cc8"))},{path:"/convenio",component:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"6f25"))},{path:"/torneos",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"9dc2"))},{path:"/admin",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"de12"))},{path:"/reclamos",component:()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"312b"))},{path:"/fcm",component:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"7985"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"e51e"))}];var Ie=Pe;o["a"].use(Re["a"]);var Ee=function(){const e=new Re["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Ie,mode:"hash",base:""});return e},Se=async function(){const e="function"===typeof Ne?await Ne({Vue:o["a"]}):Ne,r="function"===typeof Ee?await Ee({Vue:o["a"],store:e}):Ee;e.$router=r;const t={router:r,store:e,render:e=>e(v),el:"#q-app"};return{app:t,store:e,router:r}},Ue=t("9483");Object(Ue["a"])("service-worker.js",{registrationOptions:{scope:"./"},ready(){},registered(){},cached(){},updatefound(){d["a"].create("Nueva version de la app disponible, Cierre la aplicación, (Proceso Inlcuido) y vuelva a abrirla para ver los cambios de la versión v1.4")},updated(){},offline(){},error(){}});var Le=t("fc1b"),xe=({router:e})=>{e.beforeEach(((e,r,t)=>{let a=u["a"].getItem("loggedIn"),n=u["a"].getItem("admin");a||"/login"===e.path?(n||"/admin"!=e.path)&&(n||"/fcm"!=e.path)?t():(t("/"),console.log("Acceso al panel DENEGADO")):t("/login")}))};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(0).then(t.t.bind(null,"a0db",7));const ze="";async function De(){const{app:e,store:r,router:t}=await Se();let a=!1;const n=e=>{a=!0;const r=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,""),s=[Le["default"],xe];for(let u=0;!1===a&&u<s.length;u++)if("function"===typeof s[u])try{await s[u]({app:e,router:t,store:r,Vue:o["a"],ssrContext:null,redirect:n,urlPath:i,publicPath:ze})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new o["a"](e)}De()},"31cd":function(e,r,t){},d093:function(e,r,t){"use strict";t.r(r),t.d(r,"loginUser",(function(){return c})),t.d(r,"setAppLabel",(function(){return u})),t.d(r,"handleAuthStateChange",(function(){return d})),t.d(r,"logoutUser",(function(){return l})),t.d(r,"subirNoticia",(function(){return m})),t.d(r,"updatePass",(function(){return f})),t.d(r,"updateProfile",(function(){return A})),t.d(r,"registrarFcm",(function(){return h})),t.d(r,"borrarFcm",(function(){return g})),t.d(r,"fcmAdmin",(function(){return p})),t.d(r,"paintRot",(function(){return y})),t.d(r,"cambiarRot",(function(){return w})),t.d(r,"paintRotCovid",(function(){return v})),t.d(r,"cambiarRotCovid",(function(){return b})),t.d(r,"reiniciarRot",(function(){return C})),t.d(r,"setFullScreen",(function(){return N})),t.d(r,"votarJuegos",(function(){return R})),t.d(r,"setPreloaderScreen",(function(){return P})),t.d(r,"novedadesSumarHs",(function(){return I})),t.d(r,"novedadesRestarHs",(function(){return E})),t.d(r,"agregarNota",(function(){return S})),t.d(r,"resetRegistroReclamos",(function(){return U})),t.d(r,"reclamoRegistar",(function(){return L})),t.d(r,"subirReclamo",(function(){return x})),t.d(r,"agregarNovedades",(function(){return z})),t.d(r,"configurarLinea",(function(){return D})),t.d(r,"mostrarDialogLinea",(function(){return M}));t("5319");var a=t("fc1b"),n=t("18d6"),o=t("260b"),i=t("2a19"),s=t("0967");function c({commit:e},r){if(n["a"].has("unicoUsuario")){const e=n["a"].getItem("unicoUsuario");if(e!=r.email.toLowerCase())return void i["a"].create("No se puede ingresar con más de 1 cuenta por dispositivo, el mail vinculado a este dispositivo es: "+e)}a["b"].signInWithEmailAndPassword(r.email,r.password).then((r=>{if(n["a"].set("unicoUsuario",r.user.email.toLowerCase()),n["a"].has("linea")?n["a"].has("linea")&&(e("setLinea",n["a"].getItem("linea")),e("setNombreLinea",n["a"].getItem("linea"))):e("setPrimerMensaje",!0),!s["b"].is.cordova&&o["a"].messaging.isSupported()){e("setIosUser",!1);let t=o["a"].messaging();const i=r.user;t.getToken({vapidKey:"BP9DgX8fd_YBSwpAEaNamlN3XKJsmcztap7aaHz0mhft_ZYkOpzsEO7t4NgyS3Q9slPV8JPeTESMdJOtEZMaN5g"}).then((e=>{if(e){let r={fcmG:e,mail:i.email,uid:i.uid};a["c"].collection("users").doc(i.uid).set(r).then((()=>{n["a"].set("registradoFcm",!0),n["a"].set("token",e)}))}})).catch((e=>{}))}})).catch((e=>{var r=e.code,t=e.message;let a=t;"auth/user-not-found"==r?a="Usuario Inexistente":"auth/user-disabled"==r?a="Cuenta deshabilitada por un administrador":"auth/wrong-password"==r?a="Contraseña Incorrecta":(r="auth/network-request-failed")&&(a="Error de conexion a la base de datos. Revise su conexion a Internet"),i["a"].create(a)}))}function u({commit:e},r){e("setAppLabel",r)}function d({commit:e}){a["b"].onAuthStateChanged((r=>{if(r){if(e("setLoggedIn",!0),n["a"].set("loggedIn",!0),e("setAppLabel","Calendario"),n["a"].has("linea")?n["a"].has("linea")&&(e("setLinea",n["a"].getItem("linea")),e("setNombreLinea",n["a"].getItem("linea"))):e("setPrimerMensaje",!0),s["b"].is.cordova&&(n["a"].has("externalId")||window.plugins.OneSignal.setExternalUserId(r.email,(e=>{e.push&&e.push.success&&n["a"].set("externalId",!0)}))),o["a"].messaging.isSupported()){let e=o["a"].messaging();e.onMessage((e=>{const r=e.notification.title,t=e.notification.body;i["a"].create(r+" : "+t)}))}if(n["a"].has("registradoFcm")){let t=n["a"].getItem("registradoFcm");if(!t&&o["a"].messaging.isSupported()){e("setIosUser",!1);let t=o["a"].messaging();t.getToken({vapidKey:"BP9DgX8fd_YBSwpAEaNamlN3XKJsmcztap7aaHz0mhft_ZYkOpzsEO7t4NgyS3Q9slPV8JPeTESMdJOtEZMaN5g"}).then((e=>{if(e){let t={fcmG:e,mail:r.email};a["c"].collection("users").doc(r.uid).set(t).then((()=>{n["a"].set("registradoFcm",!0),n["a"].set("token",e)}))}})).catch((e=>{}))}}o["a"].messaging.isSupported()||e("setIosUser",!0);const t=n["a"].getItem("voto");if(e("votarJuegos",!!t),"federicobertachi@hotmail.com"==r.email||"federicobertachi@gmail.com"==r.email?(n["a"].set("admin",!0),e("setAdmin",!0)):(e("setAdmin",!1),n["a"].set("admin",!1)),n["a"].has("savedRot")&&e("setRot",n["a"].getItem("savedRot")),n["a"].has("savedRotCovid")&&e("setRotCovid",n["a"].getItem("savedRotCovid")),n["a"].has("saveNovedadesNotas")&&e("restoreNotas",n["a"].getItem("saveNovedadesNotas")),n["a"].has("saveNovedadesHs")&&e("restoreHsExtra",n["a"].getItem("saveNovedadesHs")),n["a"].has("registrado")&&(e("reclamosRegistrarUsuario",n["a"].getItem("registrado")),a["c"].collection("usersReclamos").doc(r.uid).onSnapshot((r=>{if(1==r.data().autorizado){if(e("reclamosAutorizarUsuario",!0),n["a"].set("autorizado",!0),!n["a"].has("primerCargaReclamos")){let r;r=n["a"].getItem("ordenes")?"zona":"sector";const t=n["a"].getItem("sector");a["c"].collection("reclamos").where(r,"==",t).onSnapshot((r=>{e("cargarReclamos",r.docs),n["a"].set("primerCargaReclamos",!0)}))}}else e("reclamosAutorizarUsuario",!1),n["a"].set("autorizado",!1)}))),n["a"].has("autorizado")&&(e("reclamosAutorizarUsuario",n["a"].getItem("autorizado")),e("setNombre",n["a"].getItem("nombre")),e("setSector",n["a"].getItem("sector")),1==n["a"].getItem("autorizado"))){let r;r=n["a"].getItem("ordenes")?"zona":"sector";const t=n["a"].getItem("sector");a["c"].collection("reclamos").where(r,"==",t).onSnapshot((r=>{e("cargarReclamos",r.docs),console.log("CARGA DE RECLAMOS DESDE LISTENER USUARIO")}))}a["d"].ref("users/"+r.uid+"/profile.jpg").getDownloadURL().then((r=>{e("setCurrentUserPhoto",r)})).catch((r=>{e("setCurrentUserPhoto","data:image/png;base64,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")})),null==r.displayName?e("setCurrentUser","Sin Nombre"):e("setCurrentUser",r.displayName),e("setCurrentUserMail",r.email);let c=n["a"].getItem("pushNoticia");c?(this.$router.push("/noticias").catch((e=>{})),e("setFullScreen",!1),e("setAppLabel","Noticias"),n["a"].set("pushNoticia",!1)):(e("setFullScreen",!0),this.$router.push("/").catch((e=>{})))}else e("setLoggedIn",!1),e("setCurrentUser","Inicie Sesion"),e("setCurrentUserMail",""),e("setAppLabel","Inicie Sesión"),n["a"].set("loggedIn",!1),this.$router.replace("/login").catch((e=>{}));a["c"].collection("noticias").onSnapshot((r=>{e("cargarNoticias",r.docs)}))}))}function l({commit:e}){a["b"].signOut(),e("setAppLabel","Inicie Sesión"),e("setFullScreen",!0)}function m({},e){a["c"].collection("noticias").doc(e.id).set(e).then((()=>{i["a"].create("Noticia Subida con éxito")}))}function f({commit:e},r){var t=a["b"].currentUser;const n=o["a"].auth.EmailAuthProvider.credential(t.email,r.oldPass);t.reauthenticateWithCredential(n).then((function(){t.updatePassword(r.newPass).then((function(){i["a"].create("Contraseña Cambiada exitosamente"),e("setAppLabel","Inicie Sesión"),e("setFullScreen",!0),a["b"].signOut()})).catch((function(e){i["a"].create("Error al cambiar su contraseña, revise su conexión a internet")}))})).catch((function(e){i["a"].create("Contraseña actual incorrecta. Verifiquela")}))}function A({commit:e},r){var t=a["b"].currentUser;r.file&&void 0!=r.file.name&&(i["a"].create("Subiendo Imagen de Perfil"),a["d"].ref("users/"+t.uid+"/profile.jpg").put(r.file).then((function(){a["d"].ref("users/"+t.uid+"/profile.jpg").getDownloadURL().then((r=>{i["a"].create("Imagen de Perfil Actualizada"),e("setCurrentUserPhoto",r)}))})).catch((e=>{i["a"].create("Error al subir la imagen de Perfil, revise el formato de la imagen y su conexion a internet")}))),""!=r.name&&t.updateProfile({displayName:r.name}).then((function(){e("setCurrentUser",t.displayName),e("setCurrentUserMail",t.email),i["a"].create("Nombre de Perfil actualizado")})).catch((function(e){i["a"].create(e)}))}function h(){let e=a["b"].currentUser;if(o["a"].messaging.isSupported()){let r=o["a"].messaging();r.getToken({vapidKey:"BP9DgX8fd_YBSwpAEaNamlN3XKJsmcztap7aaHz0mhft_ZYkOpzsEO7t4NgyS3Q9slPV8JPeTESMdJOtEZMaN5g"}).then((r=>{if(r){let t={fcmG:r,mail:e.email};a["c"].collection("users").doc(e.uid).set(t).then((()=>{n["a"].set("registradoFcm",!0),n["a"].set("token",r),i["a"].create("Registrado Correctamente al canal general de notificaciones")}))}})).catch((e=>{i["a"].create("Hubo un error al registrarse, revise su conexión a internet y verifique si esta registrado al reabrir la app")}))}}function g(){let e=a["b"].currentUser;a["c"].collection("users").doc(e.uid).delete().then((()=>{n["a"].set("registradoFcm",!1),i["a"].create("Dado de baja Correctamente")}))}function p({},e){a["c"].collection("fcmAdmin").doc(e.id).set(e).then((()=>{i["a"].create("Subido con éxito")}))}function y({commit:e},r){e("paintRot",r)}function w({commit:e},r){e("actRot",r)}function v({commit:e},r){e("paintRotCovid",r)}function b({commit:e},r){e("actRotCovid",r)}function C({commit:e},r){e("reiniciarRot",r)}function N({commit:e},r){e("setFullScreen",r)}function R({commit:e},r){let t=a["b"].currentUser;a["c"].collection("juegos").doc(t.email).set(r).then((()=>{e("votarJuegos",!0),n["a"].set("voto",!0),i["a"].create("¡Votos Recibidos! ¡Muchas Gracias!")})).catch((e=>{i["a"].create("Error al enviar los votos, revise su conexión a internet")}))}function P({commit:e},r){e("setPreloader",r),setTimeout((()=>{e("setPreloader",!1)}),1500)}function I({commit:e},r){e("setNovedadesHsSuma",r)}function E({commit:e},r){e("setNovedadesHsResta",r)}function S({commit:e},r){e("setNovedadesNota",r)}function U({commit:e}){n["a"].set("registrado",!1),n["a"].set("autorizado",!1),e("resetReclamos"),n["a"].set("primerCargaReclamos",!1),i["a"].create("Inscripción reestablecida, Reinicie la app por favor y podrá cargar los datos nuevamente. ")}function L({commit:e,state:r},t){let o="";n["a"].has("token")&&(o=n["a"].getItem("token"));let s=a["b"].currentUser,c={nombre:t.nombre,fcm:o,mail:s.email,sector:t.topic,autorizado:!1,registrar:!1,usuarioIos:r.ios,uid:s.uid};a["c"].collection("usersReclamos").doc(s.uid).set(c).then((()=>{e("reclamosRegistrarUsuario",!0),n["a"].set("registrado",!0),1==t.tipo?n["a"].set("ordenes",!0):n["a"].set("ordenes",!1),n["a"].set("sector",t.topic),n["a"].set("nombre",t.nombre),e("setNombre",t.nombre),e("setSector",t.topic),i["a"].create("Registro Completo, en breve estaremos verificando los datos y procediendo con la autorización"),a["c"].collection("usersReclamos").doc(s.uid).onSnapshot((r=>{if(1==r.data().autorizado){if(e("reclamosAutorizarUsuario",!0),n["a"].set("autorizado",!0),!n["a"].has("primerCargaReclamos")){let r;r=1==t.tipo?"zona":"sector",a["c"].collection("reclamos").where(r,"==",t.topic).onSnapshot((r=>{e("cargarReclamos",r.docs),n["a"].set("primerCargaReclamos",!0)}))}}else e("reclamosAutorizarUsuario",!1),n["a"].set("autorizado",!1)}))})).catch((e=>{i["a"].create("Error al enviar el formulario, revise su conexión a internet")}))}function x({commit:e},r){if(n["a"].has("primerCargaReclamos")&&!n["a"].getItem("primerCargaReclamos")){let r;r=n["a"].getItem("ordenes")?"zona":"sector";const t=n["a"].getItem("sector");a["c"].collection("reclamos").where(r,"==",t).onSnapshot((r=>{e("cargarReclamos",r.docs),console.log("carga de reclamos DESDE SUBIRRECLAMOS() - Lugar incorrecto - "),n["a"].set("primerCargaReclamos",!0)}))}console.log("Subir Reclamo LLAMADA"),a["c"].collection("reclamos").doc().set(r).then((()=>{i["a"].create("Reclamo Cargado con éxito")})).catch((e=>{i["a"].create("Error al crear el reclamo, revise su conexión a internet")}))}function z({},e){const r={accion:e.accion,autor:e.autor,fecha:e.fecha,hora:e.hora};a["c"].collection("reclamos").doc(e.id).update({estado:e.estado,novedades:o["a"].firestore.FieldValue.arrayUnion(r)}).then((()=>{i["a"].create("Reclamo actualizado con éxito")}))}function D({commit:e},r){e("setLinea",r),e("setNombreLinea",r),e("setPrimerMensaje",!1),n["a"].set("linea",r)}function M({commit:e},r){e("setPrimerMensaje",r)}},fc1b:function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"d",(function(){return s})),t.d(r,"c",(function(){return c}));var a=t("260b"),n=(t("ea7b"),t("588e"),t("e71f"),t("741f"),t("8934"),{apiKey:"AIzaSyDN3SKBgiTQFdW4YpPWCBvMhniPKzSFDZw",authDomain:"web-asfa.firebaseapp.com",databaseURL:"https://web-asfa.firebaseio.com",projectId:"web-asfa",storageBucket:"web-asfa.appspot.com",messagingSenderId:"1087915219836",appId:"1:1087915219836:web:58be643ccfe2f2d37c62f9",measurementId:"G-CGPMX0897N"});let o=a["a"].initializeApp(n),i=o.auth(),s=o.storage(),c=o.firestore()}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0977":function(t,e,a){"use strict";a("c850")},"1d2f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reglas text-center"},[s("h2",{staticClass:"tituloInscripcion"},[t._v("Torneo Individual de:")]),s("img",{staticClass:"imgTorneo",attrs:{src:a("694b"),alt:""}}),t.getTruco2022?s("div",{staticClass:"q-pa-md"},[s("h4",{staticClass:"tituloInscripcion",staticStyle:{color:"green"}},[t._v("usted ya se inscribió al torneo, muchas gracias"),s("q-icon",{staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{left:"",size:"1em",name:"check"}})],1)]):s("div",[s("q-btn",{attrs:{"no-caps":"",color:"primary"},on:{click:function(e){t.modalInscripcion=!0}}},[s("q-icon",{attrs:{left:"",size:"1em",name:"fas fa-pencil-alt"}}),s("div",{staticStyle:{"font-size":"20px","font-family":"bebas"}},[t._v("Inscribirse")]),s("q-icon",{attrs:{right:"",size:"1em",name:"fas fa-pencil-alt"}})],1)],1),t._m(0),s("q-dialog",{attrs:{persistent:""},model:{value:t.modalInscripcion,callback:function(e){t.modalInscripcion=e},expression:"modalInscripcion"}},[s("q-card",{staticStyle:{"min-width":"350px"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Ingrese sus datos")])]),s("q-card-section",{staticClass:"q-pt-none"},[s("q-input",{attrs:{outlined:"",label:"Nombre"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.prompt=!1}},model:{value:t.datos.nombre,callback:function(e){t.$set(t.datos,"nombre",e)},expression:"datos.nombre"}}),s("q-input",{staticClass:"q-mt-lg",attrs:{outlined:"",label:"Teléfono"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.prompt=!1}},model:{value:t.datos.telefono,callback:function(e){t.$set(t.datos,"telefono",e)},expression:"datos.telefono"}})],1),s("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Inscribirse"},on:{click:function(e){return t.inscribir()}}})],1)],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("h2",{staticClass:"tituloInscripcion q-pa-xl"},[t._v("Reglas")]),s("p",{staticClass:"q-px-md textoInscripcion"},[s("img",{staticStyle:{width:"25px",position:"relative",top:"10px"},attrs:{src:a("41c3"),alt:"",srcset:""}}),t._v(" El torneo será de elminación directa al mejor de 3, con un sistema de campeonato, con llaves.")]),s("p",{staticClass:"q-px-md textoInscripcion"},[s("img",{staticStyle:{width:"25px",position:"relative",top:"10px"},attrs:{src:a("b56d"),alt:"",srcset:""}}),t._v(" La inscripción es totalmente gratuita, y se entregarán premios al ganador del torneo. Tenés tiempo hasta el 15 de mayo para inscribirte")]),s("p",{staticClass:"q-px-md textoInscripcion"},[s("img",{staticStyle:{width:"25px",position:"relative",top:"10px"},attrs:{src:a("bad3"),alt:"",srcset:""}}),t._v("  Se les solicitará su número de teléfono para la organización del torneo en un grupo de Whatsapp")]),s("p",{staticClass:"q-px-md textoInscripcion"},[s("img",{staticStyle:{width:"25px",position:"relative",top:"10px"},attrs:{src:a("9a68"),alt:"",srcset:""}}),t._v(" Abajo se encuentran los links para descargar el juego.")]),s("div",[s("a",{staticStyle:{cursor:"pointer"},attrs:{target:"_blank",href:"https://apps.apple.com/ar/app/truco-blyts/id732850167"}},[s("img",{staticStyle:{"max-width":"200px",width:"100%"},attrs:{src:a("b751"),alt:"",srcset:""}})]),s("a",{staticStyle:{cursor:"pointer"},attrs:{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.blyts.trucolite.activities&hl=es_AR&gl=US"}},[s("img",{staticStyle:{"max-width":"202px",width:"100%"},attrs:{src:a("e564"),alt:"",srcset:""}})])])])}],o=a("ded3"),n=a.n(o),r=a("2a19"),c=a("2f62"),l={data(){return{modalInscripcion:!1,datos:{linea:"",nombre:"",telefono:""}}},methods:n()(n()({},Object(c["b"])("auth",["inscribirseTruco2022"])),{},{inscribir(){this.datos.nombre.length<=1?r["a"].create("Debe completar el campo del nombre al menos, el telefono es opcional y sirve para organizar de una mejor manera el torneo"):(this.datos.linea=this.getNombreLinea,this.inscribirseTruco2022(this.datos),this.datos.linea="",this.datos.nombre="",this.datos.telefono="")}}),computed:n()(n()({},Object(c["c"])("auth",["getTruco2022"])),Object(c["c"])("auth",["getNombreLinea"]))},p=l,d=(a("0977"),a("2877")),m=a("9c40"),u=a("0016"),b=a("24e8"),f=a("f09f"),g=a("a370"),x=a("27f9"),h=a("4b7e"),v=a("7f67"),y=a("eebe"),C=a.n(y),k=Object(d["a"])(p,s,i,!1,null,null,null);e["default"]=k.exports;C()(k,"components",{QBtn:m["a"],QIcon:u["a"],QDialog:b["a"],QCard:f["a"],QCardSection:g["a"],QInput:x["a"],QCardActions:h["a"]}),C()(k,"directives",{ClosePopup:v["a"]})},"41c3":function(t,e,a){t.exports=a.p+"img/ancho.15e4c135.png"},"694b":function(t,e,a){t.exports=a.p+"img/LogoTruco.0e2c025d.png"},"9a68":function(t,e,a){t.exports=a.p+"img/7oro.cd0fbd64.png"},b56d:function(t,e,a){t.exports=a.p+"img/asBasto.be5f2115.png"},b751:function(t,e,a){t.exports=a.p+"img/appStore.328e4a82.png"},bad3:function(t,e,a){t.exports=a.p+"img/7espada.9c7421c6.png"},c850:function(t,e,a){},e564:function(t,e,a){t.exports=a.p+"img/googlePlay.d6906b6c.png"}}]);
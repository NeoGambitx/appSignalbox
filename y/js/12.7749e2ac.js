(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{7985:function(a,l,t){"use strict";t.r(l);var i=function(){var a=this,l=a._self._c;return l("div",{staticClass:"noticiasBg"},[l("form",{staticClass:"q-pa-md formularioNoticias text-center"},[l("div",{staticClass:"text-center"},[l("q-input",{staticClass:"q-mb-xl",attrs:{outlined:"",label:"Token FCM"},model:{value:a.call[0].fcm,callback:function(l){a.$set(a.call[0],"fcm",l)},expression:"call[0].fcm"}}),l("q-input",{staticClass:"q-mb-xl",attrs:{outlined:"",label:"Mail"},model:{value:a.call[0].mail,callback:function(l){a.$set(a.call[0],"mail",l)},expression:"call[0].mail"}}),l("q-input",{staticClass:"q-mb-xl",attrs:{outlined:"",label:"User ID"},model:{value:a.call[0].id,callback:function(l){a.$set(a.call[0],"id",l)},expression:"call[0].id"}}),l("q-select",{staticClass:"q-mb-xl",attrs:{outlined:"",options:a.options,label:"Topic"},model:{value:a.call[0].topic,callback:function(l){a.$set(a.call[0],"topic",l)},expression:"call[0].topic"}}),l("div",{staticClass:"q-gutter-sm q-mb-xl"},[l("q-radio",{attrs:{val:"borrar",label:"Borrar"},on:{input:function(l){return a.modificarRegistrar()}},model:{value:a.valor,callback:function(l){a.valor=l},expression:"valor"}}),l("q-radio",{attrs:{val:"registrar",label:"Registrar"},on:{input:function(l){return a.modificarRegistrar()}},model:{value:a.valor,callback:function(l){a.valor=l},expression:"valor"}}),a._v("\n            "+a._s(a.call[0].registrar)+"\n        ")],1)],1),l("q-btn",{staticClass:"q-pa-md q-my-xs",staticStyle:{width:"100%"},attrs:{color:"indigo",label:"Enviar Datos"},on:{click:function(l){return a.fcmAdmin(a.call[0])}}})],1)])},r=[],e=t("2f62"),o={data(){return{options:["Zona1","Zona2","Zona3","general","suarez","ballester","3sm","2sm","1sm","pueyrredon","urquiza","drago","mitre","coghlan","belgrano","aviles","colegiales","carranza","maldonado","2retiro","1retiro","tigre","victoria","admin"],call:[{id:"",fcm:"",registrar:!1,topic:"",mail:""}],valor:""}},methods:{...Object(e["b"])("auth",["fcmAdmin"]),modificarRegistrar(){console.log("modificarRegistrar"),"borrar"==this.valor?this.call[0].registrar=!1:this.call[0].registrar=!0}}},s=o,c=(t("c980"),t("2877")),n=t("27f9"),u=t("ddd8"),d=t("3786"),m=t("9c40"),p=t("eebe"),b=t.n(p),f=Object(c["a"])(s,i,r,!1,null,null,null);l["default"]=f.exports;b()(f,"components",{QInput:n["a"],QSelect:u["a"],QRadio:d["a"],QBtn:m["a"]})},"9c1a":function(a,l,t){},c980:function(a,l,t){"use strict";t("9c1a")}}]);
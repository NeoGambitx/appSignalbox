(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"312b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("div",{staticClass:"noticiasBg"},[a("q-dialog",{model:{value:t.modalAyuda,callback:function(a){t.modalAyuda=a},expression:"modalAyuda"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Ayuda")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("div",{staticClass:"text-center"},[a("p",[t._v("Para poder Ingresar al sistema de reclamos necesitamos saber cual es su lugar de trabajo, en base a esto, los futuros reclamos que usted efectúe estarán registrados en un cabin y/o zona específica y se podrá tener la información de manera más organizada.")]),a("p",[t._v("Al registarse y tener activadas las notificaciones de la app, le llegaran las novedades, mientras se vayan actualizando/resolviendo los reclamos.")]),a("br"),a("p",[t._v("Si esta en un cabin Fijo seleccione el mismo, en caso de estar a órdenes lo dividimos en 3 zonas principales:")]),a("p",[t._v("Zona 1: De Suárez a Drago")]),a("p",[t._v("Zona 2: De Coghlan a Retiro (Sumados Mitre y Florida)")]),a("p",[t._v("Zona 3: Victoria - Tigre")])])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),a("q-dialog",{model:{value:t.modalReset,callback:function(a){t.modalReset=a},expression:"modalReset"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Reiniciar Inscripción")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("div",{staticClass:"text-center"},[a("p",[t._v("Esta a punto de reiniciar el proceso de inscripción, por si cambió alguno de sus datos o se equivó en algo al enviarlos. Recuerde que deberá volver a esperar la autorización del adminstrador al hacer el reinicio. ¿Esta seguro?")])])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"indigo"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Reiniciar",color:"red"},on:{click:t.resetRegistroReclamos}})],1)],1)],1),0==t.getRegistro?a("div",{staticClass:"q-pt-lg"},[a("form",{staticClass:"q-pa-md formularioNoticias text-center",staticStyle:{"max-width":"800px"},on:{submit:function(a){return a.preventDefault(),t.subirDatos.apply(null,arguments)}}},[a("q-btn",{staticStyle:{position:"fixed",top:"80px",right:"20px"},attrs:{round:"",color:"indigo",icon:"help"},on:{click:function(a){t.modalAyuda=!t.modalAyuda}}}),a("h5",{staticClass:"q-mt-lg"},[t._v("Datos Necesarios")]),a("br"),a("p",{staticClass:"q-mt-xl text-h6"},[t._v("Nombre")]),a("p",[t._v("Será Público en los reclamos que haga")]),a("q-input",{ref:"nombre",staticClass:"q-mt-md text-h6",attrs:{outlined:"",label:"Nombre",rules:[t=>t.length>=6||"Ingrese su nombre Completo Por favor"],"lazy-rules":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-fingerprint"}})]},proxy:!0}],null,!1,4261622674),model:{value:t.form.nombre,callback:function(a){t.$set(t.form,"nombre",a)},expression:"form.nombre"}}),a("p",{staticClass:"q-mt-xl text-h6"},[t._v("Tipo de Trabajo")]),a("q-option-group",{staticClass:"q-mt-md",attrs:{options:t.optionsTrabajo,color:"secondary",inline:""},on:{input:function(a){return t.updateSelectSector()}},model:{value:t.form.tipo,callback:function(a){t.$set(t.form,"tipo",a)},expression:"form.tipo"}}),a("p",{staticClass:"q-mt-xl text-h6"},[t._v("Sector/Cabin")]),a("q-select",{staticClass:"q-mb-xl",attrs:{outlined:"",label:"Sector",options:t.optionsSector,behavior:"menu"},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[t._v("\n            Sin Resultados\n          ")])],1)]},proxy:!0}],null,!1,1047604400),model:{value:t.form.topic,callback:function(a){t.$set(t.form,"topic",a)},expression:"form.topic"}}),a("q-btn",{staticClass:"q-pa-md q-my-xs",staticStyle:{width:"100%"},attrs:{type:"submit",color:"indigo",label:"Enviar"}})],1)]):t._e(),1==t.getRegistro?a("div",[0==t.getAutorizacion?a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"1000px",margin:"auto"}},[a("q-card",{staticClass:"my-card text-center",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-overline text-orange-9"},[t._v("Registrado")]),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Aguardando autorización")]),a("div",{staticClass:"text-caption text-grey q-mt-lg q-pa-md"},[t._v("\n          En breve un administrador estará revisando sus datos de registro y autorizando el mismo. Si está registrado en el sistema de notificaciones le llegará una a su smartphone cuando sea autorizada. Muchas gracias\n          ")])])],1)],1):a("div",[a("div",{staticClass:"q-pa-md row items-start"},[a("q-card",{staticClass:"my-card",staticStyle:{margin:"auto"},attrs:{flat:"",bordered:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"q-pt-xs"},[a("div",{staticClass:"text-overline"},[t._v("Sus datos")]),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v(t._s(t.getNombre))]),a("div",{staticClass:"text-caption text-grey"},[a("ul",{staticClass:"q-pa-md"},[a("li",{staticStyle:{"font-size":"15px"}},[t._v("Sector: "+t._s(t.getSector))]),a("li",{staticStyle:{"font-size":"15px"}},[t._v("Estado: Habilitado")])])])])],1),a("q-separator"),a("q-card-actions",[a("q-icon",{staticClass:"q-px-md",attrs:{name:"fas fa-arrow-right"}}),a("q-btn",{attrs:{color:"red",flat:""},on:{click:function(a){t.modalReset=!t.modalReset}}},[t._v("\n        Reiniciar Inscripción\n      ")]),a("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(a){t.nuevoReclamo=!0,t.reiniciarReclamo()}}},[t._v("\n        Iniciar Reclamo\n      ")])],1)],1)],1),this.getReclamos.length>0?a("div",{staticClass:"q-pa-md row items-start q-gutter-md",staticStyle:{"justify-content":"center"}},t._l(this.getReclamos.slice().reverse(),(function(e,o){return a("q-card",{key:e.id,staticClass:"my-card q-my-md",staticStyle:{width:"100%","max-width":"600px"}},[a("q-card-section",[a("div",{staticClass:"text-overline text-orange-9"},[t._v("\n              "+t._s(e.sectorP)+"\n            ")]),e.estado<2?a("q-btn",{staticStyle:{position:"absolute",right:"20px",top:"15px"},attrs:{round:"",color:"secondary",icon:"fas fa-plus-square"},on:{click:function(a){t.registarID(e.id,e.titulo),t.dialogNovedad=!t.dialogNovedad}}}):t._e(),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v(t._s(e.titulo))]),a("div",{staticClass:"text-caption text-grey"},[t._v("\n              "+t._s(e.reclamoOriginal)+"\n            ")])],1),a("q-card-actions",["Insumos"==e.area?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-parachute-box",color:"secondary"}}):t._e(),"Infraestructura"==e.area?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-hard-hat",color:"secondary"}}):t._e(),"Operativo"==e.area?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-train",color:"secondary"}}):t._e(),a("span",{staticClass:"q-ml-md"},[t._v(" Area: "+t._s(e.area)+" ")])],1),a("q-card-actions",[a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"event",color:"secondary"}}),a("span",{staticClass:"q-ml-md"},[t._v("\n              "+t._s(e.fecha)+"\n            ")])],1),a("q-card-actions",[0==e.estado?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-bell",color:"info"}}):t._e(),1==e.estado?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-bell",color:"warning"}}):t._e(),2==e.estado?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-bell",color:"positive"}}):t._e(),3==e.estado?a("q-icon",{staticStyle:{"font-size":"1.5rem"},attrs:{name:"fas fa-bell",color:"negative"}}):t._e(),a("span",{staticClass:"q-ml-md"},[t._v("\n              Estado: "+t._s(t.traducirEstado(e.estado)))]),a("q-space"),a("q-btn",{attrs:{color:"grey",round:"",flat:"",dense:"",icon:t.expandNovedades[o]?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(a){return t.expandir(o)}}})],1),a("q-slide-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.expandNovedades[o],expression:"expandNovedades[index]"}]},[e.novedades.length<1?a("p",{staticClass:"text-center text-red q-py-md"},[t._v("Sin Novedades")]):t._e(),a("q-separator"),t._l(e.novedades,(function(e){return a("q-card-section",{key:e.id,staticClass:"text-subitle2"},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fas fa-plus-circle"}}),a("span",[t._v(t._s(e.fecha))]),a("span",{staticClass:"q-ml-md"},[t._v("Hora: "+t._s(e.hora))]),a("p",{staticClass:"q-mt-sm"},[t._v("Autor: "+t._s(e.autor))]),a("p",[t._v(t._s(e.accion))]),a("q-separator",{staticClass:"q-my-md",attrs:{color:"secondary",inset:""}})],1)}))],2)])],1)})),1):a("div",[a("div",{staticClass:"q-pa-md row items-start"},[a("q-card",{staticClass:"my-card",staticStyle:{margin:"auto"},attrs:{flat:"",bordered:""}},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"q-pt-xs"},[a("div",{staticClass:"text-overline"},[t._v("Sin reclamos...")]),a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[a("q-icon",{attrs:{color:"red",name:"fas fa-ban"}}),t._v(" - No hay reclamos del sector para mostrar - "),a("q-icon",{attrs:{color:"red",name:"fas fa-ban"}})],1)])],1)],1)],1)])])]):t._e(),a("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:t.nuevoReclamo,callback:function(a){t.nuevoReclamo=a},expression:"nuevoReclamo"}},[a("q-card",{staticStyle:{width:"100%","max-width":"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Nuevo Reclamo")]),a("q-separator")],1),a("q-card-section",{staticClass:"q-pt-none"},[a("h6",[t._v("Tipo/Área")]),a("q-option-group",{attrs:{options:t.options,color:"primary"},model:{value:t.reclamo[0].area,callback:function(a){t.$set(t.reclamo[0],"area",a)},expression:"reclamo[0].area"}}),a("p",{staticStyle:{"padding-top":"30px"}},[t._v("Titulo Breve:")]),a("q-input",{staticStyle:{color:"white"},attrs:{filled:"",type:"textarea"},model:{value:t.reclamo[0].titulo,callback:function(a){t.$set(t.reclamo[0],"titulo",a)},expression:"reclamo[0].titulo"}}),a("p",[t._v("Descripcion del reclamo:")]),a("q-input",{staticStyle:{color:"white"},attrs:{filled:"",type:"textarea"},model:{value:t.reclamo[0].reclamoOriginal,callback:function(a){t.$set(t.reclamo[0],"reclamoOriginal",a)},expression:"reclamo[0].reclamoOriginal"}}),t.getOrdenes?a("div",{staticClass:"q-mt-lg"},[a("q-separator"),"Zona1"==t.getSector?a("q-select",{attrs:{outlined:"",options:t.optionsZona1,label:"Sector"},model:{value:t.reclamo[0].sector,callback:function(a){t.$set(t.reclamo[0],"sector",a)},expression:"reclamo[0].sector"}}):"Zona2"==t.getSector?a("q-select",{attrs:{outlined:"",options:t.optionsZona2,label:"Sector"},model:{value:t.reclamo[0].sector,callback:function(a){t.$set(t.reclamo[0],"sector",a)},expression:"reclamo[0].sector"}}):a("q-select",{attrs:{outlined:"",options:t.optionsZona3,label:"Sector"},model:{value:t.reclamo[0].sector,callback:function(a){t.$set(t.reclamo[0],"sector",a)},expression:"reclamo[0].sector"}})],1):a("p",[t._v("Sector: "+t._s(t.getSector)+" ")]),a("p",{staticClass:"q-mt-md"},[t._v("Autor: "+t._s(t.getNombre))])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",flat:"",label:"Cancelar",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",flat:"",label:"Iniciar Reclamo",color:"primary"},on:{click:function(a){return t.crearReclamo()}}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"slide-right","transition-hide":"jump-down"},model:{value:t.dialogNovedad,callback:function(a){t.dialogNovedad=a},expression:"dialogNovedad"}},[a("q-card",{staticClass:"text-center",staticStyle:{width:"100%","max-width":"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Novedad:")]),a("p",[t._v(" Del reclamo: "),a("span",{staticStyle:{"font-weight":"bold"}},[t._v(" "+t._s(this.novedad.titulo))])]),a("q-separator")],1),a("q-card-section",{staticClass:"q-pt-none"},[a("h6",[t._v("Estado")]),a("q-option-group",{attrs:{options:t.optionsEstado,color:"primary"},model:{value:t.novedad.estado,callback:function(a){t.$set(t.novedad,"estado",a)},expression:"novedad.estado"}}),a("p",{staticClass:"q-mt-lg"},[t._v("Descripcion de la novedad:")]),a("q-input",{staticStyle:{color:"white"},attrs:{filled:"",type:"textarea"},model:{value:t.novedad.accion,callback:function(a){t.$set(t.novedad,"accion",a)},expression:"novedad.accion"}}),a("p",[t._v("Autor: "+t._s(t.getNombre))])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",flat:"",label:"Cancelar",color:"red"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",flat:"",label:"Agregar Novedad",color:"secondary"},on:{click:function(a){return t.filtrarNovedades()}}})],1)],1)],1)],1)},s=[],r=e("2f62"),i=e("18d6"),n=e("2a19"),c={data(){return{expanded:!1,expandNovedades:[],nuevoReclamo:!1,modalAyuda:!1,modalReset:!1,dialogNovedad:!1,novedad:{estado:0,id:"",accion:"",autor:"",fecha:"",hora:"",titulo:""},optionsEstado:[{label:"En revisión",value:0},{label:"Esperando Novedades",value:1},{label:"Resuelto",value:2},{label:"Cancelado",value:3}],optionsTrabajo:[{label:"Fijo",value:0},{label:"Ordenes",value:1}],tipo:"",optionsZona:["Zona1","Zona2","Zona3"],optionsCabines:["Suarez","Ballester","3 San Martin","2 San Martin","1 San Martin","Pueyrredon","Urquiza","Drago","Mitre","Florida","Coghlan","Belgrano","Aviles","Colegiales","Carranza","Maldonado","2 Retiro","1 Retiro","Victoria","Tigre"],optionsCanal:["suarez","ballester","3sm","2sm","1sm","pueyrredon","urquiza","drago","mitre","florida","coghlan","belgrano","aviles","colegiales","carranza","maldonado","2retiro","1retiro","victoria","tigre"],optionsSector:[],form:{topic:"",nombre:"",tipo:""},optionsZona1:["Suarez","Ballester","3 San Martin","2 San Martin","1 San Martin","Pueyrredon","Urquiza","Drago"],optionsZona2:["Mitre","Florida","Coghlan","Belgrano","Aviles","Colegiales","Carranza","Maldonado","2 Retiro","1 Retiro"],optionsZona3:["Victoria","Tigre"],reclamo:[{area:"Infraestructura",autor:"",estado:0,fecha:"",hora:"",novedades:[],reclamoOriginal:"",sector:"",sectorP:"",solucion:[],titulo:"",zona:""}],options:[{label:"Infraestructura",value:"Infraestructura"},{label:"Insumos",value:"Insumos"},{label:"Operativo",value:"Operativo"}]}},methods:{...Object(r["b"])("auth",["reclamoRegistar"]),...Object(r["b"])("auth",["resetRegistroReclamos"]),...Object(r["b"])("auth",["subirReclamo"]),...Object(r["b"])("auth",["agregarNovedades"]),traducirEstado(t){return 0==t?"En revisión":1==t?"Esperando Novedades":2==t?"Resuelto":3==t?"Cancelado":void 0},filtrarNovedades(){this.novedad.fecha=this.getFechaActual,this.novedad.hora=this.getHora,this.novedad.autor=this.getNombre,this.agregarNovedades(this.novedad)},registarID(t,a){this.novedad.id=t,this.novedad.titulo=a,this.novedad.accion="",this.novedad.estado=0},expandir(t){let a=this.expandNovedades[t];void 0==a||0==a?(this.expandNovedades[t]=!0,this.expandNovedades.splice(t,1,!0)):(this.expandNovedades[t]=!1,this.expandNovedades.splice(t,1,!1))},updateSelectSector(){this.form.topic="",0==this.form.tipo?this.optionsSector=this.optionsCabines:this.optionsSector=this.optionsZona},subirDatos(){if(this.$refs.nombre.validate(),""!=this.form.topic)if(this.$refs.nombre.hasError)n["a"].create("Ingrese su nombre completo");else{if(0==this.form.tipo){const t=this.optionsCabines.indexOf(this.form.topic);this.form.topic=this.optionsCanal[t]}this.reclamoRegistar(this.form)}else n["a"].create("Ingrese el Sector/Cabin donde trabaja")},reiniciarReclamo(){this.reclamo[0].area="Infraestructura",this.reclamo[0].autor="",this.reclamo[0].fecha="",this.reclamo[0].hora="",this.reclamo[0].reclamoOriginal="",this.reclamo[0].sector="",this.reclamo[0].sectorP="",this.reclamo[0].titulo="",this.reclamo[0].zona=""},crearReclamo(){if(console.log(this.reclamo[0].reclamoOriginal.length),this.getOrdenes){if(""==this.reclamo[0].sector)return void n["a"].create("Ingrese el Cabin de donde se origina el reclamo");if(this.reclamo[0].reclamoOriginal.length<2)return void n["a"].create("Ingrese una descipción del reclamo");if(0==this.reclamo[0].titulo.length)return void n["a"].create("Ingrese un titulo para el reclamo")}else this.reclamo[0].sector=this.getSector;if(this.reclamo[0].hora=this.getHora,this.reclamo[0].fecha=this.getFechaActual,this.reclamo[0].autor=this.getNombre,this.getOrdenes)this.reclamo[0].zona=this.getSector,this.reclamo[0].sectorP=this.reclamo[0].sector,this.reclamo[0].sector=this.zonaSector;else{this.reclamo[0].zona=this.getZonaEspecifica,this.reclamo[0].sector=this.getSector;const t=this.optionsCanal.indexOf(this.reclamo[0].sector);this.reclamo[0].sectorP=this.optionsCabines[t]}this.subirReclamo(this.reclamo[0])}},computed:{...Object(r["c"])("auth",["getReclamos"]),...Object(r["c"])("auth",["AuthName"]),...Object(r["c"])("auth",["getRegistro"]),...Object(r["c"])("auth",["getAutorizacion"]),...Object(r["c"])("auth",["getNombre"]),...Object(r["c"])("auth",["getSector"]),getOrdenes(){return!!i["a"].getItem("ordenes")},getHora(){const t=new Date;let a=t.getMinutes();a<10&&(a="0"+a);const e=t.getHours()+":"+a;return e},getFechaActual(){var t=new Date,a=t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear();return a},zonaSector(){const t=this.optionsCabines.indexOf(this.reclamo[0].sector);return this.optionsCanal[t]},getZonaEspecifica(){const t=this.optionsCanal.indexOf(this.getSector),a=this.optionsCabines[t];return this.optionsZona1.includes(a)?"Zona1":this.optionsZona2.includes(a)?"Zona2":"Zona3"}}},l=c,d=(e("c503"),e("2877")),m=e("24e8"),p=e("f09f"),u=e("a370"),v=e("4b7e"),h=e("9c40"),g=e("27f9"),f=e("0016"),b=e("9f0a"),q=e("ddd8"),x=e("66e5"),C=e("4074"),_=e("068f"),y=e("eb85"),S=e("2c91"),N=e("e9c1"),R=e("7f67"),w=e("eebe"),z=e.n(w),O=Object(d["a"])(l,o,s,!1,null,null,null);a["default"]=O.exports;z()(O,"components",{QDialog:m["a"],QCard:p["a"],QCardSection:u["a"],QCardActions:v["a"],QBtn:h["a"],QInput:g["a"],QIcon:f["a"],QOptionGroup:b["a"],QSelect:q["a"],QItem:x["a"],QItemSection:C["a"],QImg:_["a"],QSeparator:y["a"],QSpace:S["a"],QSlideTransition:N["a"]}),z()(O,"directives",{ClosePopup:R["a"]})},"72dd":function(t,a,e){},c503:function(t,a,e){"use strict";e("72dd")}}]);
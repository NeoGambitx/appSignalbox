(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"171c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"covidBg"},[a("section",{attrs:{id:"calendarBox"}},[a("div",{staticStyle:{"max-width":"400px",margin:"auto"}},[a("section",{staticClass:"flex justify-around items-center",attrs:{id:"section1"}},[a("q-btn",{staticClass:"btnDir",attrs:{color:"secondary",label:"<"},on:{click:t.prev}}),a("h3",{staticClass:"text-h4",staticStyle:{"text-transform":"capitalize"}},[t._v("\n          "+t._s(t.currentMonthName)+"\n        ")]),a("h3",{staticClass:"text-h4"},[t._v(t._s(t.currentYear))]),a("q-btn",{staticClass:"btnDir",attrs:{color:"secondary",label:">"},on:{click:t.next}})],1)]),a("div",{staticClass:"container-grid text-center"},[t._l(t.days,(function(e){return a("div",{key:e,staticClass:"bg-dark text-white"},[t._v("\n        "+t._s(e)+"\n      ")])})),t._l(t.startDay(),(function(t){return a("div",{key:t.id,staticClass:"text-center desactivado"})})),t._l(t.daysInMonth(),(function(e){return a("div",{key:e.id,staticClass:" boxDia",class:[t.currenDateClass(e),t.getRotClass(e),t.SyD(e),{feriado:t.setFeriados(e)}],on:{click:function(s){return t.setSelectedDay(e-1)}}},[a("span"),a("span"),a("span"),a("span"),a("p",[t._v(t._s(e))]),a("span",{key:t.rotCovidGetter[t.yearIndex][t.currentMonth][e],staticClass:"tag"},[t._v("\n          "+t._s(t.getRotClass(e))+"\n        ")]),a("q-icon",{staticStyle:{position:"absolute",left:"0",bottom:"0"},attrs:{name:"coronavirus"}}),a("span",{class:{feriadoSpan:t.setFeriados(e)}},[t.setFeriados(e)?a("span",[t._v("F")]):t._e()])],1)}))],2),a("q-btn",{class:{ocultar:!t.seleccionado},staticStyle:{position:"absolute",bottom:"70px",right:"5px"},attrs:{color:"blue",round:"",icon:"close"},on:{click:function(e){return t.removeSelected()}}})],1),a("q-dialog",{model:{value:t.toolbar,callback:function(e){t.toolbar=e},expression:"toolbar"}},[a("q-card",[a("q-toolbar",[a("q-avatar",[a("img",{attrs:{src:s("4ffd"),alt:""}})]),a("q-toolbar-title",[a("span",{staticClass:"text-weight-bold"},[t._v("Rotación")]),t._v("\n          Auto.")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(e){return t.resetDialog()}}})],1),a("q-card-section",[a("span",[t._v("\n          Dia Seleccionado: "+t._s(t.selectedDay[0]+1)+" de "+t._s(t.currentMonthName)+"\n        ")]),a("q-select",{staticClass:"q-my-md selectX",attrs:{color:"secondary","bg-color":"primary","label-color":"secondary",filled:"",options:t.optionsX,label:"Seleccione la Rotacion"},on:{input:t.setTipoRot},model:{value:t.tipoRot,callback:function(e){t.tipoRot=e},expression:"tipoRot"}}),a("q-select",{staticClass:"q-my-md",attrs:{disable:void 0==t.tipoRot,square:"",outlined:"",options:t.options,label:"Seleccione el Turno"},on:{input:t.selectT},model:{value:t.selectTurno,callback:function(e){t.selectTurno=e},expression:"selectTurno"}}),a("q-select",{staticClass:"q-my-sm",attrs:{disable:void 0==t.selectTurno,square:"",outlined:"",options:t.options2[t.selectedOption],label:"En que dia se encuentra"},on:{input:t.setIndexRot},model:{value:t.selectDia,callback:function(e){t.selectDia=e},expression:"selectDia"}})],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("q-btn",{staticClass:"q-ma-sm",attrs:{disabled:void 0==t.selectDia,label:"Mensual",color:"secondary"},on:{click:function(e){return t.setRotM(t.currentMonth)}}}),a("q-btn",{staticClass:"q-ma-sm",attrs:{disabled:void 0==t.selectDia,color:"secondary",label:"Anual"},on:{click:t.setRotG}})],1)],1)],1),a("q-footer",{staticStyle:{height:"58px"}},[a("q-list",{attrs:{id:"botoneraPrincipal"}},[a("q-btn",{staticClass:"q-ma-sm",attrs:{color:"secondary",round:"",icon:"brush"},on:{click:function(e){t.showPaintTools=!t.showPaintTools,t.removeSelected()}}}),a("q-btn",{staticClass:"q-ma-sm",attrs:{disable:0==t.seleccionado,color:"secondary",round:"",icon:"autorenew"},on:{click:function(e){t.toolbar=!0}}})],1),a("q-list",{staticClass:"flex row botonera",class:{showPaintTools:t.showPaintTools},style:t.bg},[a("q-btn",{staticClass:"q-ma-sm X",class:{deactivated:t.paintTools[6]},attrs:{label:"X",round:""},on:{click:function(e){return t.paintBox("",6)}}}),a("q-btn",{staticClass:"q-ma-sm M",class:{deactivated:t.paintTools[0]},attrs:{label:"M",round:""},on:{click:function(e){return t.paintBox("M",0)}}}),a("q-btn",{staticClass:"q-ma-sm I",class:{deactivated:t.paintTools[1]},attrs:{label:"I",round:""},on:{click:function(e){return t.paintBox("I",1)}}}),a("q-btn",{staticClass:"q-ma-sm T",class:{deactivated:t.paintTools[2]},attrs:{label:"T",round:""},on:{click:function(e){return t.paintBox("T",2)}}}),a("q-btn",{staticClass:"q-ma-sm N",class:{deactivated:t.paintTools[3]},attrs:{label:"N",round:""},on:{click:function(e){return t.paintBox("N",3)}}}),a("q-btn",{staticClass:"q-ma-sm F",class:{deactivated:t.paintTools[4]},attrs:{label:"F",round:""},on:{click:function(e){return t.paintBox("F",4)}}}),a("q-btn",{staticClass:"q-ma-sm L",class:{deactivated:t.paintTools[5]},attrs:{label:"L",round:""},on:{click:function(e){return t.paintBox("L",5)}}}),a("q-btn",{staticClass:"btnCerrar",class:{spot:t.btnCloseColored},attrs:{round:"",color:"grey",icon:"keyboard_arrow_down"},on:{click:t.closePaintTool}})],1)],1)],1)},o=[],i=s("ded3"),n=s.n(i),r=s("2f62"),l={data(){return{toolbar:!1,selectedOption:void 0,optionsX:["5 x 1"],options5x1:[["1er Mañana","2da Mañana","3er Mañana","4ta Mañana","Ultima Mañana"],["1er Int","2da Int","3er Int","4ta Int","Ultima Int"],["1er Tarde","2da Tarde","3er Tarde","4ta Tarde","Ultima Tarde"],["F y paso de Mañana","F y paso de Int","F y paso de Tarde"]],option3x3:[["1er Mañana","2da Mañana","3er Mañana"],["1er Int","2da Int","3er Int"],["1er Tarde","2da Tarde","3er Tarde"],["Primer F y paso de Mañana","Segundo F y paso de Mañana","Ultimo F y paso de Mañana","Primer F y paso de Int","Segundo F y paso de Int","Ultimo F y paso de Int","Primer F y paso de Tarde","Segundo F y paso de Tarde","Ultimo F y paso de Tarde"]],option3x2:[["1er Mañana","2da Mañana","3er Mañana"],["1er Int","2da Int","3er Int"],["1er Tarde","2da Tarde","3er Tarde"],["Primer F y paso de Mañana","Ultimo F y paso de Mañana","Primer F y paso de Int","Ultimo F y paso de Int","Primer F y paso de Tarde","Ultimo F y paso de Tarde"]],options:["Mañana","Intermedio","Tarde","Franco"],options2:[],seleccionado:!1,refBox:void 0,tipoRot:void 0,selectTurno:void 0,selectDia:null,showPaintTools:!1,paintMode:!1,paintColor:null,paintTools:[!0,!0,!0,!0,!0,!0,!0],btnCloseColored:!0,bg:{backgroundColor:""},indexS:0,indexG:void 0,currentDate:(new Date).getUTCDate(),currentMonth:(new Date).getMonth(),currentYear:(new Date).getFullYear(),selectedDay:[0,0,0],days:["Lun","Mar","Mier","Jue","Vie","Sab","Dom"],yearIndex:0,backup:null,rotacion:[],rot3o2:!1,rot5x1:["T","T","T","T","T","F","I","I","I","I","I","F","M","M","M","M","M","F"],rot3x3:["T","T","T","F","F","F","I","I","I","F","F","F","M","M","M","F","F","F"],rot3x2:["T","T","T","F","F","I","I","I","F","F","M","M","M","F","F"],feriados:[[[1],[15,16],[24],[2],[1,24,25],[20,21],[9],[16],[],[8,11],[20,22],[8,25]],[[1],[],[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[],[],[]]]}},methods:n()(n()(n()({},Object(r["b"])("auth",["paintRotCovid"])),Object(r["b"])("auth",["cambiarRotCovid"])),{},{daysInMonth(){return new Date(this.currentYear,this.currentMonth+1,0).getDate()},startDay(){let t=new Date(this.currentYear,this.currentMonth,1).getDay();return 0==t?t+6:t-1},next(){if(this.removeSelected(),11===this.currentMonth){if(2023==this.currentYear)return;this.currentMonth=0,this.currentYear++,this.getYearRot()}else this.currentMonth++},prev(){if(this.removeSelected(),0===this.currentMonth){if(2021==this.currentYear)return;this.currentMonth=11,this.currentYear--,this.getYearRot()}else this.currentMonth--},currenDateClass(t){const e=new Date(this.currentYear,this.currentMonth,t).toDateString(),s=(new Date).toDateString();return e===s?"text-white":""},getRotClass(t){return this.rotCovidGetter[this.yearIndex][this.currentMonth][t-1]},getYearRot(){return 2021==this.currentYear?(this.yearIndex=0,0):2022==this.currentYear?(this.yearIndex=1,1):2023==this.currentYear?(this.yearIndex=2,2):void 0},SyD(t){return this.startDay()+t==6||this.startDay()+t==13||this.startDay()+t==20||this.startDay()+t==27||this.startDay()+t==34?"sabado":this.startDay()+t==7||this.startDay()+t==14||this.startDay()+t==21||this.startDay()+t==28||this.startDay()+t==35?"domingo":void 0},setFeriados(t){return!!this.feriados[this.yearIndex][this.currentMonth].includes(t)},setIndexRot(){"1er Mañana"!=this.selectDia?"2da Mañana"!=this.selectDia?"3er Mañana"!=this.selectDia?"4ta Mañana"!=this.selectDia?"Ultima Mañana"!=this.selectDia?"1er Int"!=this.selectDia?"2da Int"!=this.selectDia?"3er Int"!=this.selectDia?"4ta Int"!=this.selectDia?"Ultima Int"!=this.selectDia?"1er Tarde"!=this.selectDia?"2da Tarde"!=this.selectDia?"3er Tarde"!=this.selectDia?"4ta Tarde"!=this.selectDia?"Ultima Tarde"!=this.selectDia?"F y paso de Mañana"!=this.selectDia?"F y paso de Int"!=this.selectDia?"F y paso de Tarde"!=this.selectDia||(this.indexS=17):this.indexS=5:this.indexS=11:this.indexS=4:this.indexS=3:this.indexS=2:this.indexS=1:this.indexS=0:this.indexS=10:this.indexS=9:this.indexS=8:this.indexS=7:this.indexS=6:this.indexS=16:this.indexS=15:this.indexS=14:this.indexS=13:this.indexS=12},utilSetR(t,e,s){let a=e;const o=this.rotCovidGetter[this.yearIndex][t].length;let i=s;for(i;i<o;i++)this.cambiarRotCovid({year:this.yearIndex,month:t,startDay:i,rotAct:this.rotacion[a]}),a++,a==this.rotacion.length&&(a=0);this.indexG=a,this.removeSelected()},setRotG(){let t=this.currentMonth,e=!0;for(t;t<12;t++)e?(this.utilSetR(t,this.indexS,this.selectedDay[0]),e=!1):this.utilSetR(t,this.indexG,0);this.toolbar=!1,this.seleccionado=!1},setRotM(){this.utilSetR(this.currentMonth,this.indexS,this.selectedDay[0]),this.toolbar=!1,this.seleccionado=!1},diasEnUnMes(t,e){return new Date(e,t,0).getDate()},removeSelected(){void 0==this.refBox||this.refBox.classList.remove("selectedBox"),this.seleccionado=!1},setSelectedDay(t){if(this.$set(this.selectedDay,0,t),this.$set(this.selectedDay,1,this.currentMonth),this.$set(this.selectedDay,2,this.currentYear),this.paintMode)return void this.paintRotCovid({year:this.yearIndex,month:this.selectedDay[1],day:t,paintColor:this.paintColor});if(this.showPaintTools)return;this.removeSelected();let e=document.querySelectorAll(".boxDia");for(let s=0;s<e.length;s++)e[s].childNodes[4].innerText==t+1&&(this.refBox=e[s],this.refBox.classList.add("selectedBox"));this.seleccionado=!0},toolsBg(t){0==t&&(this.bg.backgroundColor="rgb(206, 75, 75)"),1==t&&(this.bg.backgroundColor="rgb(255, 85, 0)"),2==t&&(this.bg.backgroundColor="rgb(44, 110, 191)"),3==t&&(this.bg.backgroundColor="rgb(128, 29, 181)"),4==t&&(this.bg.backgroundColor="rgb(84, 179, 114)"),5==t&&(this.bg.backgroundColor="rgb(147, 177, 191)"),6==t&&(this.bg.backgroundColor="rgb(43, 44, 46)")},deactivateTools(t){this.btnCloseColored=!1;for(let e=0;e<this.paintTools.length;e++)e==t?this.$set(this.paintTools,[e],!1):this.$set(this.paintTools,[e],!0)},resetPaintTools(){for(let t=0;t<this.paintTools.length;t++)this.$set(this.paintTools,[t],!0);this.bg.backgroundColor="rgb(53, 56, 53)",this.btnCloseColored=!0},paintBox(t,e){if(this.deactivateTools(e),this.paintMode){if(this.paintColor==t)return this.paintMode=!1,void this.resetPaintTools();this.paintColor=t,this.toolsBg(e)}else this.paintMode=!0,this.paintColor=t,this.toolsBg(e)},closePaintTool(){this.showPaintTools=!1,this.paintMode=!1,this.resetPaintTools()},saveData(){this.$q.localStorage.set("savedRotCovid",this.rotCovidGetter),console.log("Saved Data COVID")},selectT(){console.log(this.selectTurno+" es el turno seleccionado"),"Mañana"==this.selectTurno?(console.log("Turno MAÑANA!"),this.selectedOption=0,this.selectDia=void 0):"Intermedio"==this.selectTurno?(console.log("Turno Intermedio"),this.selectedOption=1,this.selectDia=void 0):"Tarde"==this.selectTurno?(console.log("Turno Tarde!"),this.selectedOption=2,this.selectDia=void 0):"Franco"==this.selectTurno&&(console.log("Franco"),this.selectedOption=3,this.selectDia=void 0)},setTipoRot(){console.log("set Tipo ROT FIRED"),"5 x 1"==this.tipoRot?(console.log("Eligio 5 x 1"),this.options2=this.options5x1,this.rotacion=this.rot5x1):"3 x 2"==this.tipoRot&&(console.log("Eligio 3 x 2"),this.rotacion=this.rot3x2,this.options2=this.option3x2),this.selectTurno=void 0,this.selectDia=void 0},resetDialog(){this.tipoRot=void 0,this.selectTurno=void 0,this.selectDia=void 0},resetReporte(){this.hsNocturnas=0,this.hs50=0,this.hs100=0},generarReporte(){this.reporte=!0;let t=document.querySelectorAll(".boxDia");console.log("generar Reporte llamado"),console.log(t.length),console.log(t);for(let e=0;e<t.length;e++)if(t[e].classList.contains("T")&&(t[e].classList.contains("feriado")||t[e].classList.contains("sabado")||t[e].classList.contains("domingo")?this.hs100+=2:this.hs50+=2),t[e].classList.contains("N")){let s;if(t[e].classList.contains("feriado")||t[e].classList.contains("sabado")||t[e].classList.contains("domingo")?this.hs100+=1:this.hs50+=1,e+1<t.length)s=t[e+1],console.log("Dia Siguiente es: "+(e+1)),s.classList.contains("feriado")||s.classList.contains("domingo")?this.hs100+=6:this.hs50+=6;else{let s=this.currentMonth+1,a=this.getYearRot();if(12==s){if(s=0,2==a)return;a+=1}this.feriados[a][s].includes(1)||t[e].classList.contains("sabado")?this.hs100+=6:this.hs50+=6}}this.hsNocturnas=this.hs50+this.hs100},guardarReporte(){let t={documentSize:"A4",type:"share",fileName:"Reporte.pdf"},e=`<h1> Reporte </h1> \n    <h2>Generado para el mes de ${this.currentMonthName} del ${this.currentYear}</h2>\n    <h3>Horas Nocturnas en total: ${this.hsNocturnas}</h3>\n    <h3>De las Cuales al 50% son: ${this.hs50}</h3>\n    <h3>Y al 100%: ${this.hs100}</h3>\n    <br>\n    <h3>Horas Extras: 0 </h3>\n    `;pdf.fromData(e,t).then((t=>console.log(t))).catch((t=>console.err(t)))}}),updated(){this.loggedIn&&this.saveData()},computed:n()(n()(n()({},Object(r["c"])("auth",["rotCovidGetter"])),Object(r["d"])("auth",["loggedIn"])),{},{currentMonthName(){return new Date(this.currentYear,this.currentMonth).toLocaleString("default",{month:"long"})},getSelectedDay(){return this.selectedDay[0]}})},c=l,d=(s("cb73"),s("2877")),h=s("9c40"),u=s("0016"),p=s("24e8"),b=s("f09f"),g=s("65c6"),x=s("cb32"),T=s("6ac5"),D=s("a370"),A=s("ddd8"),C=s("7ff0"),m=s("1c1c"),y=s("7f67"),f=s("eebe"),v=s.n(f),M=Object(d["a"])(c,a,o,!1,null,null,null);e["default"]=M.exports;v()(M,"components",{QBtn:h["a"],QIcon:u["a"],QDialog:p["a"],QCard:b["a"],QToolbar:g["a"],QAvatar:x["a"],QToolbarTitle:T["a"],QCardSection:D["a"],QSelect:A["a"],QFooter:C["a"],QList:m["a"]}),v()(M,"directives",{ClosePopup:y["a"]})},"2fe4":function(t,e,s){},"4ffd":function(t,e){t.exports="data:image/png;base64,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"},cb73:function(t,e,s){"use strict";s("2fe4")}}]);
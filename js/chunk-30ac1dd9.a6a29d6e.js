(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30ac1dd9"],{"0614":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[t.headerHide?t._e():a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" ")]),a("v-spacer"),t._t("widget-header-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(t._s(t.icon))])],1)])],2),t.headerHide?t._e():a("v-divider"),t.paddingHide?t._t("widget-content"):a("v-card-text",[t._t("widget-content")],2)],2)},s=[],n={name:"AppWidget",props:{title:{type:String,default:""},icon:{type:String,default:"mdi-dots-vertical"},headerHide:Boolean,paddingHide:Boolean},data:function(){return{}}},r=n,l=a("2877"),o=a("6544"),d=a.n(o),c=a("40dc"),h=a("8336"),p=a("b0af"),g=a("99d9"),w=a("ce7e"),u=a("132d"),v=a("2fa4"),f=a("2a7f"),m=Object(l["a"])(r,i,s,!1,null,null,null);e["a"]=m.exports;d()(m,{VAppBar:c["a"],VBtn:h["a"],VCard:p["a"],VCardText:g["b"],VDivider:w["a"],VIcon:u["a"],VSpacer:v["a"],VToolbarTitle:f["b"]})},"0fa8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"container--fluid"},[a("v-row",[a("v-col",{attrs:{lg:"12"}},[a("app-widget",{attrs:{title:"Default"}},[a("div",{staticClass:"text-center",attrs:{slot:"widget-content"},slot:"widget-content"},[a("v-parallax",{attrs:{src:"static/bg/12.jpg"}})],1)]),a("app-widget",{staticClass:"mt-3",attrs:{title:"Content inside"}},[a("div",{staticClass:"text-center",attrs:{slot:"widget-content"},slot:"widget-content"},[a("v-parallax",{attrs:{src:"static/bg/1.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("h1",{staticClass:"white--text"},[t._v(" Vuetify.js ")]),a("h4",{staticClass:"white--text"},[t._v(" Build your application today! ")])])],1)],1)]),a("app-widget",{staticClass:"mt-3",attrs:{title:"Jumbotron inside"}},[a("div",{staticClass:"text-center",attrs:{slot:"widget-content"},slot:"widget-content"},[a("v-parallax",{attrs:{src:"static/bg/21.jpg",height:"700",jumbotron:""}})],1)])],1)],1)],1)],1)},s=[],n=a("0614"),r={name:"Parallax",components:{AppWidget:n["a"]},data:function(){return{page:1}}},l=r,o=a("2877"),d=a("6544"),c=a.n(d),h=a("62ad"),p=a("a523"),g=a("8b9c"),w=a("0fd9"),u=Object(o["a"])(l,i,s,!1,null,null,null);e["default"]=u.exports;c()(u,{VCol:h["a"],VContainer:p["a"],VParallax:g["a"],VRow:w["a"]})},"8b9c":function(t,e,a){"use strict";a("94aa");var i=a("2b0e"),s=i["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),n=a("58df");const r=Object(n["a"])(s);e["a"]=r.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},a=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:`${this.height}px`},on:this.$listeners},[a,i])}})},"94aa":function(t,e,a){}}]);
//# sourceMappingURL=chunk-30ac1dd9.a6a29d6e.js.map
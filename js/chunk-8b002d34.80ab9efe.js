(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b002d34"],{"0614":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[t.headerHide?t._e():i("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[i("v-toolbar-title",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" ")]),i("v-spacer"),t._t("widget-header-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v(t._s(t.icon))])],1)])],2),t.headerHide?t._e():i("v-divider"),t.paddingHide?t._t("widget-content"):i("v-card-text",[t._t("widget-content")],2)],2)},n=[],r={name:"AppWidget",props:{title:{type:String,default:""},icon:{type:String,default:"mdi-dots-vertical"},headerHide:Boolean,paddingHide:Boolean},data:function(){return{}}},o=r,a=i("2877"),l=i("6544"),h=i.n(l),c=i("40dc"),d=i("8336"),u=i("b0af"),v=i("99d9"),p=i("ce7e"),m=i("132d"),g=i("2fa4"),w=i("2a7f"),f=Object(a["a"])(o,s,n,!1,null,null,null);e["a"]=f.exports;h()(f,{VAppBar:c["a"],VBtn:d["a"],VCard:u["a"],VCardText:v["b"],VDivider:p["a"],VIcon:m["a"],VSpacer:g["a"],VToolbarTitle:w["b"]})},"13b3":function(t,e,i){},"1e6c":function(t,e,i){"use strict";var s=i("9d65"),n=i("4e82"),r=i("c3f0"),o=i("80d2"),a=i("58df");const l=Object(a["a"])(s["a"],Object(n["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:r["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(o["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}})},3860:function(t,e,i){"use strict";var s=i("604c");e["a"]=s["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}})},"3e35":function(t,e,i){"use strict";var s=i("1e6c"),n=i("adda"),r=i("58df"),o=i("1c87");const a=Object(r["a"])(s["a"],o["a"]);e["a"]=a.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(n["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners},[this.$slots.default,this.$createElement("template",{slot:"placeholder"},this.$slots.placeholder)])]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.showLazyContent(this.genDefaultSlot()))}}})},"5e66":function(t,e,i){"use strict";i("63b7");var s=i("f665"),n=i("afdd"),r=i("9d26"),o=i("37c6"),a=i("3860"),l=i("80d2"),h=i("d9bd");e["a"]=s["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:s["a"].options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let i=0;i<t;i++){const s=this.$createElement(n["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(r["a"],{props:{size:18}},this.delimiterIcon)]);e.push(s)}return this.$createElement(a["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(o["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=s["a"].options.render.call(this,t);return e.data.style=`height: ${Object(l["g"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,i){},"9f37":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"container--fluid"},[i("v-row",[i("v-col",{attrs:{lg:"6",cols:"12"}},[i("app-widget",{attrs:{title:"Basic Usage"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("v-carousel",t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src}})})),1)],1)])],1),i("v-col",{attrs:{lg:"6",cols:"12"}},[i("app-widget",{attrs:{title:"Hide Controls"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("v-carousel",{attrs:{"hide-controls":"","hide-delimiters":""}},t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src}})})),1)],1)])],1)],1)],1)},n=[],r=i("0614"),o={name:"Carousels",components:{AppWidget:r["a"]},data:function(){return{items:[{src:"./static/nature/n1.jpeg"},{src:"./static/nature/n2.jpeg"},{src:"./static/nature/n3.jpeg"},{src:"./static/nature/n4.jpeg"}]}}},a=o,l=i("2877"),h=i("6544"),c=i.n(h),d=i("5e66"),u=i("3e35"),v=i("62ad"),p=i("a523"),m=i("0fd9"),g=Object(l["a"])(a,s,n,!1,null,null,null);e["default"]=g.exports;c()(g,{VCarousel:d["a"],VCarouselItem:u["a"],VCol:v["a"],VContainer:p["a"],VRow:m["a"]})},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},f665:function(t,e,i){"use strict";i("13b3");var s=i("c3f0"),n=i("afdd"),r=i("9d26"),o=i("604c");e["a"]=o["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:s["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...o["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return`v-window-${t}${i}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,i){return this.$createElement("div",{staticClass:`v-window__${t}`},[this.$createElement(n["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},on:{click:()=>{this.changedByDelimiters=!0,i()}}},[this.$createElement(r["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const i=this.genIcon("prev",e,this.prev);i&&t.push(i)}const i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){const e=this.genIcon("next",i,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-8b002d34.80ab9efe.js.map
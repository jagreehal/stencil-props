/*! Built with http://stenciljs.com */
stencilprops.loadBundle("bj2gotwb",["exports"],function(e){var r=window.stencilprops.h,t=function(){function e(){this.showErrors=!1,this.passInvalid=!1}return e.prototype.componentWillLoad=function(){if(this.el.children.length){var e=this.el.dataset||Object.create(null);for(var r in e){var t=void 0;try{t=JSON.parse(e[r])}catch(n){!0===this.showErrors&&console.error("Error parsing data-"+r,n),!0===this.passInvalid&&(t=e[r])}this.el.children[0][r]=t}}},e.prototype.render=function(){return r("slot",null)},Object.defineProperty(e,"is",{get:function(){return"stencil-props"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},passInvalid:{type:Boolean,attr:"pass-invalid"},showErrors:{type:Boolean,attr:"show-errors"}}},enumerable:!0,configurable:!0}),e}();e.StencilProps=t,Object.defineProperty(e,"__esModule",{value:!0})});
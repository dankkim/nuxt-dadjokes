(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(t,e,n){"use strict";n.r(e);var o={name:"SearchJokes",data:function(){return{text:""}},methods:{onSubmit:function(){this.$emit("search-text",this.text),this.text=""}}},r=n(18),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Search Jokes..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("input",{attrs:{type:"submit",value:"Search Jokes"}})])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{122:function(e,n,t){"use strict";var i=t(61);t.n(i).a},123:function(e,n,t){(e.exports=t(10)(!1)).push([e.i,"\n.demo-list .van-cell {\n  text-align: center;\n}\n.demo-list .page-desc {\n  padding: 5px 0;\n  line-height: 1.4;\n  font-size: 14px;\n  text-align: center;\n  color: #7d7e80;\n}\n",""])},203:function(e,n,t){"use strict";t.r(n);var i={i18n:{"zh-CN":{text:"当即将滚动到元素底部时，会自动加载更多",finishedText:"没有更多了"},"en-US":{text:"This list will load items will scroll to bottom.",finishedText:"Finished"}},data:function(){return{list:[],refreshing:!1,loading:!1,finished:!1}},methods:{onLoad:function(){var e=this;setTimeout(function(){for(var n=0;n<10;n++){var t=e.list.length+1;e.list.push(t<10?"0"+t:t)}e.loading=!1,e.list.length>=40&&(e.finished=!0)},500)},onRefresh:function(){var e=this;setTimeout(function(){e.list=[],e.finished=!1,e.refreshing=!1,window.scrollTo(0,10)},1e3)}}},s=(t(122),t(0)),o=Object(s.a)(i,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("demo-section",[t("demo-block",{attrs:{title:e.$t("basicUsage")}},[t("p",{staticClass:"page-desc"},[e._v(e._s(e.$t("text")))]),t("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.refreshing,callback:function(n){e.refreshing=n},expression:"refreshing"}},[t("van-list",{attrs:{finished:e.finished,"finished-text":e.$t("finishedText")},on:{load:e.onLoad},model:{value:e.loading,callback:function(n){e.loading=n},expression:"loading"}},e._l(e.list,function(e){return t("van-cell",{key:e,attrs:{title:e+""}})}))],1)],1)],1)},[],!1,null,null,null);o.options.__file="index.vue";n.default=o.exports},61:function(e,n,t){var i=t(123);"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(11)(i,s);i.locals&&(e.exports=i.locals)}}]);
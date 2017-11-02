webpackJsonp([4],{215:function(t,s,a){t.exports=a(252)},252:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var v=a(253),_=a(254),e=a(0),l=e(v.a,_.a,null,null,null);s.default=l.exports},253:function(t,s,a){"use strict";s.a={data:function(){return{modal1:!1}}}},254:function(t,s,a){"use strict";var v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Modal")]),t._v(" "),a("p",[t._v("Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.")]),t._v(" "),a("demo",{attrs:{clz:""}},[a("bs-button",{ref:"modal1Trigger",on:{click:function(s){t.modal1=!0}}},[t._v("Open modal")]),t._v(" "),a("bs-modal",{attrs:{title:"Modal title",trigger:t.$refs.modal1Trigger},model:{value:t.modal1,callback:function(s){t.modal1=s},expression:"modal1"}},[a("p",[t._v("Woohoo, you're reading this text in a modal!")]),t._v(" "),a("template",{slot:"footer"},[a("bs-button",{attrs:{type:"secondary"},on:{click:function(s){t.modal1=!1}}},[t._v("Close")]),t._v(" "),a("bs-button",{on:{click:function(s){t.modal1=!1}}},[t._v("SaveChanges")])],1)],2),t._v(" "),a("template",{slot:"desp"},[a("p",[t._v("Modal components")])]),t._v(" "),a("template",{slot:"source"},[a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"modal1=true"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"modal1Trigger"')]),t._v(">")]),t._v("Open modal"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-modal")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"modal1"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"Modal title"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":trigger")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"$refs.modal1Trigger"')]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("Woohoo, you're reading this text in a modal!"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"footer"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"secondary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"modal1=false"')]),t._v(">")]),t._v("Close"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"modal1=false"')]),t._v(">")]),t._v("SaveChanges"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-button")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("bs-modal")]),t._v(">")]),t._v("\n")])])])],2),t._v(" "),a("component-doc",{attrs:{tabs:"props slots events"}},[a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Remark")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Avaliable values: "),a("code",{pre:!0},[t._v("large")]),t._v(", 'small'")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("modal head title")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("v-model")]),t._v(" binding")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("role")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("modal role")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("ariaLabel")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("modal aria-labelledby")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("backdrop")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("keyboard")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Closes the modal when escape key is pressed")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("focus")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Puts the focus on the modal when initialized.")]),t._v(" "),a("td",[t._v("Need to fix")])]),t._v(" "),a("tr",[a("td",[t._v("trigger")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("Dom element to trigger modal show")]),t._v(" "),a("td")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("default")]),t._v(" "),a("td",[t._v("Modal content")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Modal title")])]),t._v(" "),a("tr",[a("td",[t._v("footer")]),t._v(" "),a("td",[t._v("Modal foooter")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("before-show")]),t._v(" "),a("td",[t._v("Trigged before modal show")])]),t._v(" "),a("tr",[a("td",[t._v("shown")]),t._v(" "),a("td",[t._v("Trigged after modal shown")])]),t._v(" "),a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("Trigged after click close icon")])]),t._v(" "),a("tr",[a("td",[t._v("before-hide")]),t._v(" "),a("td",[t._v("Trigged before modal hide")])]),t._v(" "),a("tr",[a("td",[t._v("hidden")]),t._v(" "),a("td",[t._v("Trigged after modal hidden")])]),t._v(" "),a("tr",[a("td",[t._v("backdrop")]),t._v(" "),a("td",[t._v("Trigged when click backdroped")])]),t._v(" "),a("tr",[a("td",[t._v("escape")]),t._v(" "),a("td",[t._v("Trigged when escape keydown")])])])])])],1)},_=[],e={render:v,staticRenderFns:_};s.a=e}});
//# sourceMappingURL=4.752a2a69582e1385f930.js.map
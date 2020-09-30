(this["webpackJsonpjuno-grad-directory"]=this["webpackJsonpjuno-grad-directory"]||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=(a(27),a(12)),s=a(6),c=a(11),m=a(15),u=a(16),h=a(7),d=a(21),p=a(19),b=(a(28),a(8)),f=a.n(b);a(30),a(39);f.a.initializeApp({apiKey:"AIzaSyC4lf_4rgciba2OfkcI2Bzz6aW4SykgYpA",authDomain:"juno-grad-directory.firebaseapp.com",databaseURL:"https://juno-grad-directory.firebaseio.com",projectId:"juno-grad-directory",storageBucket:"juno-grad-directory.appspot.com",messagingSenderId:"153843151209",appId:"1:153843151209:web:885a162587856509cc0df8"});f.a.storage().ref();var E=a(17),g=a.n(E),v=a(18),C=a.n(v),N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"mainForm"},l.a.createElement("p",{className:"boldLabel"},"Survived Juno College's bootcamp?"),l.a.createElement("p",{className:"boldLabel"},"Add your card to the directory!"),l.a.createElement("label",{htmlFor:"firstName","aria-label":"enter first name"}),l.a.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:e.handleChange,value:e.firstName,placeholder:"first name"}),e.validator.message("firstName",e.firstName,"required"),l.a.createElement("label",{htmlFor:"lastName","aria-label":"enter last name"}),l.a.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:e.handleChange,value:e.lastName,placeholder:"last name"}),e.validator.message("lastName",e.lastName,"required"),l.a.createElement("label",{htmlFor:"cohort","aria-label":"enter cohort number"}),l.a.createElement("input",{type:"number",id:"cohort",name:"cohort",className:"standAloneInput",placeholder:"Cohort number",onChange:e.handleChange,value:e.cohort}),e.validator.message("cohort",e.cohort,"required|numeric|min:1,num|max:29,num"),l.a.createElement("label",{htmlFor:"website","aria-label":"enter website address"}),l.a.createElement("input",{type:"url",id:"website",name:"website",className:"standAloneInput",placeholder:"website",onChange:e.handleChange,value:e.website,pattern:"https?://.+",title:"Include http://"}),e.validator.message("website",e.website,"required|url"),l.a.createElement("label",{htmlFor:"github","aria-label":"enter github username"}),l.a.createElement("input",{type:"text",id:"github",name:"github",onChange:e.handleChange,value:e.github,placeholder:"github username"}),e.validator.message("github",e.github,"required|alpha_num_dash"),l.a.createElement("label",{htmlFor:"linkedIn","aria-label":"enter linkedin username"}),l.a.createElement("input",{type:"text",id:"linkedIn",name:"linkedIn",onChange:e.handleChange,value:e.linkedIn,placeholder:"linkedIn username"}),e.validator.message("linkedIn",e.linkedIn,"alpha_num"),l.a.createElement("label",{htmlFor:"funFact","aria-label":"enter one fun fact about yourself"}),l.a.createElement("textarea",{maxLength:"100",id:"funFact",name:"funFact",className:"standAloneInput",onChange:e.handleChange,value:e.funFact,placeholder:"One fun fact about yourself"}),e.validator.message("funFact",e.funFact,"required"),l.a.createElement("button",{onClick:e.handleSubmit},"Submit")))},w=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",{className:"studentName boldLabel"},e.firstName," ",e.lastName),l.a.createElement("p",{className:"boldLabel"},"cohort ",e.cohort),l.a.createElement("p",null,l.a.createElement("a",{href:e.website},l.a.createElement("i",{className:"fas fa-desktop","aria-hidden":"true"}),e.website)),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/".concat(e.github)},l.a.createElement("i",{className:"fab fa-github-square","aria-hidden":"true"}),e.github)),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/".concat(e.linkedIn)},l.a.createElement("i",{className:"fab fa-linkedin","aria-hidden":"true"}),e.linkedIn)),l.a.createElement("p",null,l.a.createElement("span",{className:"boldLabel"},"Fun fact: "),e.funFact)))},k=function(e){return l.a.createElement("form",{className:"filterContainer"},l.a.createElement("label",{htmlFor:"filterCohort","aria-label":"select drop-down option to filter student cards by cohort number"}),l.a.createElement("select",{id:"filterCohort",value:e.selectedDropDown,onClick:e.handleCohortSubmit,onChange:e.handleCohortSelect},l.a.createElement("option",{value:"reset"},"Filter results by Cohort"),l.a.createElement("option",{value:"reset"},"ALL COHORTS"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"11"},"11"),l.a.createElement("option",{value:"12"},"12"),l.a.createElement("option",{value:"13"},"13"),l.a.createElement("option",{value:"14"},"14"),l.a.createElement("option",{value:"15"},"15"),l.a.createElement("option",{value:"16"},"16"),l.a.createElement("option",{value:"17"},"17"),l.a.createElement("option",{value:"18"},"18"),l.a.createElement("option",{value:"19"},"19"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"21"},"21"),l.a.createElement("option",{value:"22"},"22"),l.a.createElement("option",{value:"23"},"23"),l.a.createElement("option",{value:"24"},"24"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"26"},"26"),l.a.createElement("option",{value:"27"},"27"),l.a.createElement("option",{value:"28"},"28"),l.a.createElement("option",{value:"29"},"29"),l.a.createElement("option",{value:"30"},"30")))},y=a(20),S=function(e){var t=Object(n.useState)("Sort by alpha"),a=Object(y.a)(t,2),r=a[0],o=a[1],i=function(e){return o(e)};return l.a.createElement("form",{className:"alphaContainer"},l.a.createElement("label",{onClick:e.isAlpha?function(){return i("Sort by alpha")}:function(){return i("Sort by date added")},htmlFor:"alphaButton",className:e.isAlpha?e.isAlpha&&"alphaClicked":"alphaLabel"},r," ",l.a.createElement("input",{type:"checkbox",id:"alphaButton",className:"alphaButton",onChange:e.handleAlphaSubmit})))},F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target.value;e.setState(Object(c.a)(Object(c.a)({},e.state),{},Object(s.a)({},t.target.name,a)))},e.handleSubmit=function(t){(t.preventDefault(),e.validator.allValid())?(alert("Sweet! Welcome to the directory!"),f.a.database().ref().push({firstName:e.state.firstName,lastName:e.state.lastName,cohort:e.state.cohort,website:e.state.website,github:e.state.github,linkedIn:e.state.linkedIn,funFact:e.state.funFact}),e.setState({firstName:"",lastName:"",cohort:0,website:"",github:"",linkedIn:"",funFact:"",formComplete:"",isToggled:""}),document.getElementById("mainForm").reset()):e.validator.showMessages()},e.handleCohortSelect=function(t){e.setState({selectedDropDown:t.target.value})},e.handleCohortSubmit=function(t){t.preventDefault();var a=Object(i.a)(e.state.studentCards).filter((function(t){return"reset"===e.state.selectedDropDown||t.cohort===e.state.selectedDropDown})),n=Object(i.a)(a).sort(e.alphabetizeStudents);e.setState({filteredCards:a,alphaSortedCards:n})},e.handleAlphaSubmit=function(t){e.setState({isAlpha:!e.state.isAlpha})},e.toggleForm=function(){e.setState({isToggled:!e.state.isToggled,formComplete:!1})},e.alphabetizeStudents=function(e,t){var a=e.firstName.toUpperCase(),n=t.firstName.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l},e.state={studentCards:[],filteredCards:[],alphaSortedCards:[],firstName:"",lastName:"",cohort:0,website:"",github:"",linkedIn:"",funFact:"",selectedDropDown:"reset",isToggled:!1,isAlpha:!1,formComplete:!1},e.validator=new g.a({autoForceUpdate:Object(h.a)(e),messages:{required:"Aw! Don't leave this field empty!",alpha_num:"You sure you typed that right?",alpha_num_dash:"This doesn't look like a Github name"}}),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.database().ref().on("value",(function(t){var a=[],n=t.val();for(var l in n)a.push({key:l,firstName:n[l].firstName,lastName:n[l].lastName,cohort:n[l].cohort,website:n[l].website,github:n[l].github,linkedIn:n[l].linkedIn,funFact:n[l].funFact});e.setState({studentCards:a,filteredCards:a,alphaSortedCards:[].concat(a).sort(e.alphabetizeStudents)})}))}},{key:"render",value:function(){var e=this.state.filteredCards;return!0===this.state.isAlpha&&(e=this.state.alphaSortedCards),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"wrapper"},l.a.createElement("h1",null,l.a.createElement("span",{className:"junoType"},"Juno College"),"Grad Directory"),l.a.createElement("div",{className:"headerButtons"},l.a.createElement("button",{onClick:this.toggleForm},"Add my name!"),l.a.createElement("a",{href:"#main"},l.a.createElement("button",null,"Just browse")))),l.a.createElement("section",{className:"wrapper"},l.a.createElement("div",{className:"formToFill"},this.state.isToggled&&!this.state.formComplete&&l.a.createElement(N,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,validator:this.validator,lastName:this.state.lastName,firstName:this.state.firstName,cohort:this.state.cohort,website:this.state.website,github:this.state.github,linkedIn:this.state.linkedIn,funFact:this.state.funFact}))),l.a.createElement("main",{id:"main"},l.a.createElement("section",{className:"wrapper"},l.a.createElement(k,{handleCohortSelect:this.handleCohortSelect,handleCohortSubmit:this.handleCohortSubmit,selectedDropDown:this.state.selectedDropDown}),l.a.createElement(S,{handleAlphaSubmit:this.handleAlphaSubmit,isAlpha:this.state.isAlpha}),l.a.createElement("section",{className:"studentProfiles"},l.a.createElement("div",{className:"cardsContainer"},e.map((function(e,t){return l.a.createElement(w,{key:t,firstName:e.firstName,lastName:e.lastName,cohort:e.cohort,website:e.website,github:e.github,linkedIn:e.linkedIn,funFact:e.funFact})}))),l.a.createElement(C.a,{showUnder:160},l.a.createElement("span",{className:"scroll"},"\u25b2"))))),l.a.createElement("footer",{className:"wrapper"},l.a.createElement("div",{className:"footerFlex"},l.a.createElement("p",null,"Created by Connie Tsang at Juno College"),l.a.createElement("p",null,"image by"," ",l.a.createElement("a",{href:"https://unsplash.com/@sibilant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Josephine Bredehoft"),"/",l.a.createElement("a",{href:"https://unsplash.com/s/photos/cork-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.97c8a613.chunk.js.map
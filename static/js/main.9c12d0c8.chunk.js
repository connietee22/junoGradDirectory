(this["webpackJsonpjuno-grad-directory"]=this["webpackJsonpjuno-grad-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r),i=(a(24),a(8)),s=a(2),c=a(6),m=a(13),u=a(14),h=a(3),d=a(18),p=a(17),b=a(7),f=a.n(b);a(26);f.a.initializeApp({apiKey:"AIzaSyC4lf_4rgciba2OfkcI2Bzz6aW4SykgYpA",authDomain:"juno-grad-directory.firebaseapp.com",databaseURL:"https://juno-grad-directory.firebaseio.com",projectId:"juno-grad-directory",storageBucket:"juno-grad-directory.appspot.com",messagingSenderId:"153843151209",appId:"1:153843151209:web:885a162587856509cc0df8"});var E=f.a,g=a(15),v=a.n(g),N=a(16),C=a.n(N),w=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"mainForm",className:"userForm"},l.a.createElement("label",{htmlFor:"firstName","aria-label":"enter first name"}),l.a.createElement("input",{type:"text",id:"firstName",name:"firstName",onChange:e.handleChange,value:e.firstName,placeholder:"first name"}),e.validator.message("firstName",e.firstName,"required|max: 20"),l.a.createElement("label",{htmlFor:"lastName","aria-label":"enter last name"}),l.a.createElement("input",{type:"text",id:"lastName",name:"lastName",onChange:e.handleChange,value:e.lastName,placeholder:"last name"}),e.validator.message("lastName",e.lastName,"required|max: 20"),l.a.createElement("label",{htmlFor:"cohort","aria-label":"enter cohort number"}),l.a.createElement("input",{type:"number",id:"cohort",name:"cohort",className:"standAloneInput",onChange:e.handleChange,value:e.cohort}),e.validator.message("cohort",e.cohort,"required|numeric|min:1,num|max:30,num"),l.a.createElement("label",{htmlFor:"website","aria-label":"enter website address"}),l.a.createElement("input",{type:"url",id:"website",name:"website",className:"standAloneInput",placeholder:"website",onChange:e.handleChange,value:e.website,pattern:"https?://.+",title:"Include http://"}),e.validator.message("website",e.website,"required|url"),l.a.createElement("label",{htmlFor:"github","aria-label":"enter github username"}),l.a.createElement("input",{type:"text",id:"github",name:"github",onChange:e.handleChange,value:e.github,placeholder:"github username"}),e.validator.message("github",e.github,"required|alpha_num_dash"),l.a.createElement("label",{htmlFor:"linkedIn","aria-label":"enter linkedin username"}),l.a.createElement("input",{type:"text",id:"linkedIn",name:"linkedIn",onChange:e.handleChange,value:e.linkedIn,placeholder:"linkedIn username"}),e.validator.message("linkedIn",e.linkedIn,"required|alpha_num"),l.a.createElement("label",{htmlFor:"funFact","aria-label":"enter one fun fact about yourself!"}),l.a.createElement("textarea",{maxLength:"100",id:"funFact",name:"funFact",className:"standAloneInput",onChange:e.handleChange,value:e.funFact,placeholder:"Most importantly: one fun fact about yourself!"}),e.validator.message("funFact",e.funFact,"required"),l.a.createElement("button",{onClick:e.handleSubmit},"Submit")))},k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("span",{className:"studentName boldLabel"},e.firstName," ",e.lastName),l.a.createElement("p",{className:"boldLabel"},"cohort ",e.cohort),l.a.createElement("p",null,l.a.createElement("a",{href:e.website},l.a.createElement("i",{className:"fas fa-desktop","aria-hidden":"true"}),"portfolio")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/".concat(e.github)},l.a.createElement("i",{className:"fab fa-github-square","aria-hidden":"true"}),e.github)),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/".concat(e.linkedIn)},l.a.createElement("i",{className:"fab fa-linkedin","aria-hidden":"true"}),e.linkedIn)),l.a.createElement("p",null,l.a.createElement("span",{className:"boldLabel"},"Fun fact: "),e.funFact)))},y=function(e){return l.a.createElement("form",{className:"filterContainer"},l.a.createElement("label",{htmlFor:"filterCohort","aria-label":"select drop-down option to filter student cards by cohort number"}),l.a.createElement("select",{id:"filterCohort",value:e.selectedDropDown,onChange:e.handleCohortSubmit},l.a.createElement("option",{value:"reset"},"Filter by Cohort"),l.a.createElement("option",{value:"reset"},"ALL COHORTS"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"11"},"11"),l.a.createElement("option",{value:"12"},"12"),l.a.createElement("option",{value:"13"},"13"),l.a.createElement("option",{value:"14"},"14"),l.a.createElement("option",{value:"15"},"15"),l.a.createElement("option",{value:"16"},"16"),l.a.createElement("option",{value:"17"},"17"),l.a.createElement("option",{value:"18"},"18"),l.a.createElement("option",{value:"19"},"19"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"21"},"21"),l.a.createElement("option",{value:"22"},"22"),l.a.createElement("option",{value:"23"},"23"),l.a.createElement("option",{value:"24"},"24"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"26"},"26"),l.a.createElement("option",{value:"27"},"27"),l.a.createElement("option",{value:"28"},"28"),l.a.createElement("option",{value:"29"},"29"),l.a.createElement("option",{value:"30"},"30")))},S=function(e){return l.a.createElement("div",{className:"alphaContainer"},l.a.createElement("button",{onClick:e.handleAlphaSubmit,className:e.isAlpha?"alphaClicked":"alphaLabel"},e.isAlpha?"Sort by date added >>":"Sort by alphabet >>"))},F=(a(34),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target.value;e.setState(Object(c.a)(Object(c.a)({},e.state),{},Object(s.a)({},t.target.name,a)))},e.handleSubmit=function(t){(t.preventDefault(),e.validator.allValid())?(alert("Sweet! Welcome to the directory!"),E.database().ref().push({firstName:e.state.firstName,lastName:e.state.lastName,cohort:e.state.cohort,website:e.state.website,github:e.state.github,linkedIn:e.state.linkedIn,funFact:e.state.funFact}),e.setState({firstName:"",lastName:"",cohort:0,website:"",github:"",linkedIn:"",funFact:"",formComplete:"",isToggled:"",selectedDropDown:""}),document.getElementById("mainForm").reset()):e.validator.showMessages()},e.handleCohortSubmit=function(t){t.preventDefault(),e.setState({selectedDropDown:t.target.value},(function(){e.setCardState()}))},e.setCardState=function(){var t=Object(i.a)(e.state.studentCards).filter((function(t){return"reset"===e.state.selectedDropDown||t.cohort===e.state.selectedDropDown})),a=Object(i.a)(t).sort(e.alphabetizeStudents);e.setState({filteredCards:t,alphaSortedCards:a})},e.handleAlphaSubmit=function(t){e.setState({isAlpha:!e.state.isAlpha})},e.toggleForm=function(){e.setState({isToggled:!e.state.isToggled,formComplete:!1})},e.alphabetizeStudents=function(e,t){var a=e.firstName.toUpperCase(),n=t.firstName.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l},e.state={studentCards:[],filteredCards:[],alphaSortedCards:[],firstName:"",lastName:"",cohort:0,website:"",github:"",linkedIn:"",funFact:"",selectedDropDown:"reset",isToggled:!1,isAlpha:!1,formComplete:!1},e.validator=new v.a({autoForceUpdate:Object(h.a)(e),messages:{required:"Aw! Don't leave this field empty!",alpha_num:"You sure you typed that right?",alpha_num_dash:"This doesn't look like a Github name"}}),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.database().ref().on("value",(function(t){var a=[],n=t.val();for(var l in n)a.push({key:l,firstName:n[l].firstName,lastName:n[l].lastName,cohort:n[l].cohort,website:n[l].website,github:n[l].github,linkedIn:n[l].linkedIn,funFact:n[l].funFact});e.setState({studentCards:a,filteredCards:a,alphaSortedCards:[].concat(a).sort(e.alphabetizeStudents)})}))}},{key:"render",value:function(){var e=this.state.filteredCards;return!0===this.state.isAlpha&&(e=this.state.alphaSortedCards),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"wrapper"},l.a.createElement("div",{className:"headerContainer"},l.a.createElement("h1",null,l.a.createElement("span",{className:"junoType"},"Juno College"),"Grad Directory"),l.a.createElement("h2",null,l.a.createElement("i",{className:"fas fa-terminal"}),"A collection of front-end development bootcamp survivors"),l.a.createElement("div",{className:"headerButtons"},l.a.createElement("button",{onClick:this.toggleForm},"Add me!"),l.a.createElement("a",{href:"#main"},l.a.createElement("button",null,"Just browsin'"))))),l.a.createElement("section",{className:"wrapper"},l.a.createElement("div",{className:"formToFill"},this.state.isToggled&&!this.state.formComplete&&l.a.createElement(w,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,validator:this.validator,lastName:this.state.lastName,firstName:this.state.firstName,cohort:this.state.cohort,website:this.state.website,github:this.state.github,linkedIn:this.state.linkedIn,funFact:this.state.funFact}))),l.a.createElement("main",{id:"main"},l.a.createElement("section",{className:"wrapper"},l.a.createElement(y,{handleCohortSelect:this.handleCohortSelect,handleCohortSubmit:this.handleCohortSubmit,selectedDropDown:this.state.selectedDropDown}),l.a.createElement(S,{handleAlphaSubmit:this.handleAlphaSubmit,isAlpha:this.state.isAlpha}),l.a.createElement("section",{className:"studentProfiles"},l.a.createElement("div",{className:"cardsContainer"},e.map((function(e,t){return l.a.createElement(k,{key:t,firstName:e.firstName,lastName:e.lastName,cohort:e.cohort,website:e.website,github:e.github,linkedIn:e.linkedIn,funFact:e.funFact})}))),l.a.createElement(C.a,{showUnder:160},l.a.createElement("span",{className:"scroll"},"\u25b2"))))),l.a.createElement("footer",{className:"wrapper"},l.a.createElement("div",{className:"footerFlex"},l.a.createElement("p",null,"Created by ",l.a.createElement("a",{href:"http://connietsangcodes.com"},"Connie Tsang")," at"," ",l.a.createElement("a",{href:"http://junocollege.com"},"Juno College")),l.a.createElement("p",null,"image by"," ",l.a.createElement("a",{href:"https://unsplash.com/@sibilant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Josephine Bredehoft"),"/",l.a.createElement("a",{href:"https://unsplash.com/s/photos/cork-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9c12d0c8.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports={header:"XxxHeader_header__1_1KF",headerTitle:"XxxHeader_headerTitle__1_81R",logo:"XxxHeader_logo__3G4XE",searchBoxContainer:"XxxHeader_searchBoxContainer__2v2F3"}},3:function(e,t,a){e.exports={mainCard:"XxxSharedStyles_mainCard__3SIRA",page:"XxxSharedStyles_page__27M9s",pageMessageError:"XxxSharedStyles_pageMessageError__cIUGn",pageMessageContainer:"XxxSharedStyles_pageMessageContainer__2aGmj",pageMessageWarning:"XxxSharedStyles_pageMessageWarning__22cCe",pageTitle:"XxxSharedStyles_pageTitle__30m_8"}},33:function(e,t,a){e.exports={pageFooter:"XxxQuestionsPage_pageFooter__22Qw2",pageNavigationPanel:"XxxQuestionsPage_pageNavigationPanel__1riIJ"}},4:function(e,t,a){e.exports={answerAccepted:"XxxAnswersPage_answerAccepted__2AF2s",answerCaption:"XxxAnswersPage_answerCaption__2Cwpr",answerInfo:"XxxAnswersPage_answerInfo__1IlQk",answerNotAccepted:"XxxAnswersPage_answerNotAccepted__1EpgF",answerQuestionContainer:"XxxAnswersPage_answerQuestionContainer__3qsqw",answersContainer:"XxxAnswersPage_answersContainer__2xGEk",backToQuestions:"XxxAnswersPage_backToQuestions__1uUFb",questionCaption:"XxxAnswersPage_questionCaption__2P1yB",questionInfo:"XxxAnswersPage_questionInfo__1Ut32",questionTitle:"XxxAnswersPage_questionTitle__1FEzL"}},40:function(e,t,a){e.exports={app:"App_app__2ziFi"}},42:function(e,t,a){e.exports=a.p+"static/media/logo.299e6db5.svg"},43:function(e,t,a){e.exports={searchBox:"XxxSearchBox_searchBox__3MpVo"}},53:function(e,t,a){e.exports=a(76)},58:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(25),r=a.n(i),o=(a(58),a(30)),c=a(22),l=a(40),u=a.n(l),m=a(10),h=a(11),d=a(13),g=a(12),p=a(14),E=a(89),v=a(4),f=a.n(v),x=a(3),y=a.n(x),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).questionId="",a.requestUrl="",a.requestParams="",a.state={answers:[],isEmpty:!1,isError:!1,isLoading:!0,question:{}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getQuestionId(),this.getQuestion()}},{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(){console.log("url changed"),e.getQuestionId(),e.getQuestion()})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"getQuestionId",value:function(){this.questionId=this.props.match.params.id,console.log("this.questionId",this.questionId)}},{key:"getQuestion",value:function(){this.setState({isEmpty:!1,isError:!1,isLoading:!0}),this.setState({isError:!1,isLoading:!0}),this.requestUrl="https://api.stackexchange.com/2.2/questions/"+this.questionId,this.requestParams={key:"U4DMV*8nvpm3EOpvf69Rxw((",site:"stackoverflow",filter:"withbody",order:"desc",sort:"votes"};var e=this.requestUrl+"?"+this.getQueryString(this.requestParams),t=this;fetch(e).then(function(e){200===e.status?e.json().then(function(e){"object"===typeof e&&e.hasOwnProperty("items")&&Array.isArray(e.items)&&e.items.length>0?(t.setState({question:e.items[0]}),t.getAnswers()):t.setState({isEmpty:!0,isLoading:!1})}):t.setState({isError:!0,isLoading:!1})}).catch(function(e){t.setState({isError:!0,isLoading:!1})})}},{key:"getAnswers",value:function(){this.requestUrl+="/answers";var e=this.requestUrl+"?"+this.getQueryString(this.requestParams),t=this;fetch(e).then(function(e){200===e.status?e.json().then(function(e){"object"===typeof e&&e.hasOwnProperty("items")&&Array.isArray(e.items)&&e.items.length>0?t.setState({answers:e.items,isLoading:!1}):t.setState({isEmpty:!0,isLoading:!1})}):t.setState({isError:!0,isLoading:!1})}).catch(function(e){t.setState({isError:!0,isLoading:!1})})}},{key:"getQueryString",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},{key:"decodeHtmlEntities",value:function(e){if(void 0===e||""===e)return"";var t=(new DOMParser).parseFromString(e,"text/html").documentElement.textContent;return t=t.replace("&quot;",'"')}},{key:"timeToShortDate",value:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric"})}},{key:"render",value:function(){var e=this,t=null;return this.state.isLoading&&(t=s.a.createElement("div",{className:y.a.pageMessageContainer},s.a.createElement(E.a,null))),this.state.isError&&(t=s.a.createElement("div",{className:y.a.pageMessageContainer},s.a.createElement("div",{className:y.a.pageMessageError},"Error Occurred Getting Questions"))),this.state.isEmpty&&(t=s.a.createElement("div",{className:y.a.pageMessageContainer},s.a.createElement("div",{className:y.a.pageMessageWarning},"No Questions Found"))),this.state.isEmpty||this.state.isError||this.state.isLoading||(t=s.a.createElement("div",{className:f.a.answersContainer},s.a.createElement("div",{className:f.a.answerQuestionContainer},s.a.createElement("div",{className:f.a.questionTitle},this.decodeHtmlEntities(this.state.question.title)),s.a.createElement("div",null,s.a.createElement("span",{className:f.a.questionCaption},"Number of Views: "),s.a.createElement("span",{className:f.a.questionInfo},this.state.question.view_count)),s.a.createElement("div",null,s.a.createElement("span",{className:f.a.questionCaption},"Score: "),s.a.createElement("span",{className:f.a.questionInfo},this.state.question.score)),s.a.createElement("div",null,s.a.createElement("span",{className:f.a.questionCaption},"Tags: "),s.a.createElement("span",{className:f.a.questionInfo},this.state.question.tags.join())),s.a.createElement("div",null,s.a.createElement("span",{className:f.a.questionCaption},"Asked: "),s.a.createElement("span",{className:f.a.questionInfo},this.timeToShortDate(this.state.question.creation_date))),s.a.createElement("div",{className:f.a.questionBody,dangerouslySetInnerHTML:{__html:this.state.question.body}})),this.state.answers.map(function(t){return s.a.createElement("div",{className:t.is_accepted?f.a.answerAccepted:f.a.answerNotAccepted,key:t.answer_id},s.a.createElement("div",null,s.a.createElement("span",{className:f.a.answerCaption},"Score: "),s.a.createElement("span",{className:f.a.answerInfo},t.score)),s.a.createElement("div",null,s.a.createElement("span",{className:f.a.answerCaption},"Answered: "),s.a.createElement("span",{className:f.a.answerInfo},e.timeToShortDate(t.creation_date))),s.a.createElement("div",{className:f.a.answerCaption},"Answer:"),s.a.createElement("div",{className:f.a.answerBody,dangerouslySetInnerHTML:{__html:t.body}}))}))),s.a.createElement("div",{className:y.a.page},s.a.createElement("div",{className:y.a.pageTitle},"Stack Exchange Answers"),s.a.createElement("div",{className:y.a.mainCard},t))}}]),t}(n.Component),b=a(42),w=a.n(b),S=a(28),P=a.n(S),N=a(18),q=a(90),k=a(46),C=a.n(k),j=a(43),O=a.n(j),T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).state={isSearchButtonDisabled:!0,previousSearchText:null,searchText:""},a.handleChange=a.handleChange.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.value;this.setState({searchText:a},function(){t.setState(function(e){return{isSearchButtonDisabled:0===e.searchText.length||e.searchText===e.previousSearchText}})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.isSearchButtonDisabled||(this.setState({isSearchButtonDisabled:!0,previousSearchText:this.state.searchText}),this.props.history.push({pathname:"/questions",search:"?title="+encodeURIComponent(this.state.searchText)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{className:O.a.searchBox,onSubmit:this.handleSubmit},s.a.createElement("input",{autoFocus:!0,type:"search",value:this.state.searchText,onChange:this.handleChange}),s.a.createElement(q.a,{"aria-label":"search",disabled:this.state.isSearchButtonDisabled,color:"primary",onClick:this.handleSubmit},s.a.createElement(C.a,null))))}}]),t}(n.Component),A=Object(c.f)(T),I=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:P.a.header},s.a.createElement("img",{src:w.a,className:P.a.logo,alt:"logo"}),s.a.createElement("div",{className:P.a.headerTitle},"React Example App"),s.a.createElement("div",{className:P.a.searchBoxContainer},s.a.createElement(A,null)))}}]),t}(n.Component),Q=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:y.a.page},s.a.createElement("div",{className:y.a.pageTitle},"Stack Exchange Search"),s.a.createElement("div",{className:y.a.mainCard},s.a.createElement("p",null,"This will search Stack Exchange questions for given title text."),s.a.createElement("p",null,"Enter your search text and click the icon or press the Enter key. A list of matching questions will be shown."),s.a.createElement("p",null,"After that, you can click on a question to see the answers."),s.a.createElement("p",null,"Full source available at ",s.a.createElement("a",{href:"https://github.com/reactjsexample/react-example-app"},"https://github.com/reactjsexample/react-example-app")),s.a.createElement("h3",null,"Written in React 16.8"),s.a.createElement("h4",null,"By JC Lango")))}}]),t}(n.Component),M=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:y.a.page},s.a.createElement("div",{className:y.a.pageTitle},"Page Not Found"),s.a.createElement("div",{className:y.a.mainCard},s.a.createElement("p",null,"The requested page at this address is not found. ",s.a.createElement("a",{href:"/"},"Home Page"))))}}]),t}(n.Component),L=a(51),X=a.n(L),F=a(50),U=a.n(F),B=a(49),D=a.n(B),H=a(48),R=a.n(H),W=a(33),G=a.n(W),J=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).pageBaseUrl="/questions",a.requestedPage="",a.title="",a.state={currentPage:"",isEmpty:!1,isError:!1,isLoading:!0,isMorePages:!1,questions:[]},a.handleFirstPage=a.handleFirstPage.bind(Object(N.a)(a)),a.handleNextPage=a.handleNextPage.bind(Object(N.a)(a)),a.handlePreviousPage=a.handlePreviousPage.bind(Object(N.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.readUrlQueryString(this.props.location.search),this.getQuestions()}},{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t){e.readUrlQueryString(t.search),e.getQuestions()})}},{key:"readUrlQueryString",value:function(e){var t=R.a.parse(e);this.title=t.title,this.requestedPage=t.page}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"getQuestions",value:function(){this.setState({isEmpty:!1,isError:!1,isLoading:!0});var e={key:"U4DMV*8nvpm3EOpvf69Rxw((",title:this.title||"",answers:"1",site:"stackoverflow",filter:"withbody",page:this.requestedPage||"1",order:"desc",sort:"votes"},t="https://api.stackexchange.com/2.2/search/advanced?"+this.getQueryString(e),a=this;fetch(t).then(function(t){200===t.status?t.json().then(function(t){"object"===typeof t&&t.hasOwnProperty("items")&&Array.isArray(t.items)&&t.items.length>0?a.setState({currentPage:e.page,isLoading:!1,isMorePages:t.has_more,questions:t.items}):a.setState({isEmpty:!0,isLoading:!1})}):a.setState({isError:!0,isLoading:!1})}).catch(function(e){a.setState({isError:!0,isLoading:!1})})}},{key:"getQueryString",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},{key:"decodeHtmlEntities",value:function(e){if(void 0===e||""===e)return"";var t=(new DOMParser).parseFromString(e,"text/html").documentElement.textContent;return t=t.replace("&quot;",'"')}},{key:"handleFirstPage",value:function(){this.requestedPage="1",this.navigateToPage()}},{key:"handleNextPage",value:function(e){this.requestedPage=(parseInt(this.state.currentPage,10)+1).toString(),this.navigateToPage()}},{key:"handlePreviousPage",value:function(){this.requestedPage=(parseInt(this.state.currentPage,10)-1).toString(),this.navigateToPage()}},{key:"navigateToPage",value:function(){var e={title:this.title,page:this.requestedPage};this.props.history.push(this.pageBaseUrl+"?"+this.getQueryString(e))}},{key:"render",value:function(){var e=this,t=null;return this.state.isLoading&&(t=s.a.createElement("div",{className:y.a.pageMessageContainer},s.a.createElement(E.a,null))),this.state.isError&&(t=s.a.createElement("div",{className:y.a.pageMessageContainer},s.a.createElement("div",{className:y.a.pageMessageError},"Error Occurred Getting Questions"))),this.state.isEmpty&&(t=s.a.createElement("div",{className:y.a.pageMessageContainer},s.a.createElement("div",{className:y.a.pageMessageWarning},"No Questions Found"))),this.state.isEmpty||this.state.isError||this.state.isLoading||(t=s.a.createElement("div",null,s.a.createElement("ul",null,this.state.questions.map(function(t){return s.a.createElement("li",{key:t.question_id},s.a.createElement("a",{href:"/answers/"+t.question_id,className:G.a.dummy,key:t.question_id},e.decodeHtmlEntities(t.title)))})),s.a.createElement("div",{className:G.a.pageFooter},s.a.createElement("div",{className:G.a.pageNavigationPanel},s.a.createElement("span",null,"Page ",this.state.currentPage),s.a.createElement(q.a,{disabled:"1"===this.state.currentPage,onClick:this.handleFirstPage,title:"Go to First Page"},s.a.createElement(D.a,null)),s.a.createElement(q.a,{disabled:"1"===this.state.currentPage,onClick:this.handlePreviousPage,title:"Go to Previous Page"},s.a.createElement(U.a,null)),s.a.createElement(q.a,{disabled:!this.state.isMorePages,onClick:this.handleNextPage,title:"Go to Next Page"},s.a.createElement(X.a,null)))))),s.a.createElement("div",{className:y.a.page},s.a.createElement("div",{className:y.a.pageTitle},"Stack Exchange Questions"),s.a.createElement("div",{className:y.a.mainCard},t))}}]),t}(n.Component),V=Object(c.f)(J);var z=function(){return s.a.createElement("div",{className:u.a.app,id:"xxx-app"},s.a.createElement(o.a,null,s.a.createElement(I,null),s.a.createElement("div",null,s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:"/",component:Q}),s.a.createElement(c.a,{path:"/answers/:id",component:_}),s.a.createElement(c.a,{path:"/questions",component:V}),s.a.createElement(c.a,{component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.8e99d450.chunk.js.map
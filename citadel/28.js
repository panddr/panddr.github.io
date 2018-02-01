webpackJsonp([28],{1601:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(1),c=a.n(l),s=a(29),i=a.n(s),u=a(88),d=a(57),m=a(4),p=a(3),h=(a.n(p),a(7)),f=a.n(h),E=a(124),_=a.n(E),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:null,error:null,existing_account:!1},e.handleChange=e.handleChange.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e}return o(t,e),g(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.refs.input.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var a=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&a&&(t=f.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!a&&(t=f.a.translate("account.name_input.not_found"))}return t}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":m.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||m.d.is_cheap_name(e)||(this.state.error=f.a.translate("account.name_input.premium_name_faucet")):this.state.error||m.d.is_cheap_name(e)||(this.state.warning=f.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&u.a.accountSearch(e)}},{key:"handleChange",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value.toLowerCase();t=t.match(/[a-z0-9\.-]+/),t=t?t[0]:null,this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===event.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this.getError()||"",t=i()("form-group","account-name",{"has-error":!1}),a=this.state.warning;return c.a.createElement("div",{className:t},c.a.createElement("section",null,c.a.createElement("label",{className:"left-label"},this.props.placeholder),c.a.createElement("input",{name:"username",id:"username",type:"text",ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,value:this.state.account_name||this.props.initial_value})),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},e),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},e?null:a))}}]),t}(c.a.Component);b.propTypes={id:l.PropTypes.string,placeholder:l.PropTypes.string,initial_value:l.PropTypes.string,onChange:l.PropTypes.func,onEnter:l.PropTypes.func,accountShouldExist:l.PropTypes.bool,accountShouldNotExist:l.PropTypes.bool,cheapNameOnly:l.PropTypes.bool,noLabel:l.PropTypes.bool},b.defaultProps={noLabel:!1};var w=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),g(t,[{key:"render",value:function(){return c.a.createElement(_.a,{stores:[d.a],inject:{searchAccounts:function(){return d.a.getState().searchAccounts}}},c.a.createElement(b,v({ref:"nameInput"},this.props)))}}]),t}(c.a.Component);t.a=w},1868:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),s=a.n(c),i=a(26),u=(a.n(i),a(29)),d=a.n(u),m=a(88),p=a(57),h=a(1601),f=a(25),E=a(48),_=a(33),v=a(187),g=a(287),b=a(105),w=a(3),y=a.n(w),k=a(7),N=a.n(k),P=a(4),A=a(142),C=a.n(A),x=a(16),S=a(27),O=a(69),j=a(56),T=a(678),W=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),D=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,showPass:!1,generatedPassword:("P"+P.o.get_random_key().toWif()).substr(0,45),confirm_password:"",understand_1:!1,understand_2:!1,understand_3:!1},e.onFinishConfirm=e.onFinishConfirm.bind(e),e.accountNameInput=null,e}return l(t,e),W(t,[{key:"componentWillMount",value:function(){f.a.getWallet()||S.a.changeSetting({setting:"passwordLogin",value:!0})}},{key:"componentDidMount",value:function(){C.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!x.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===p.a.getMyAccounts().length,t=this.state.validAccountName;return f.a.getWallet()||(t=t&&this.state.validPassword),e||(t=t&&this.state.registrar_account),t&&this.state.understand_1&&this.state.understand_2}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(g.a.unlisten(this.onFinishConfirm),g.a.reset(),Object(P.f)("getAccount",this.state.accountName,void 0,n({},this.state.accountName,!0)).then(function(){t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"_unlockAccount",value:function(e,t){S.a.changeSetting({setting:"passwordLogin",value:!0}),f.a.validatePassword(t,!0,e),O.a.checkLock.defer()}},{key:"createAccount",value:function(e,t){var a=this,r=this.refs.refcode?this.refs.refcode.value():null,o=p.a.getState().referralAccount;this.setState({loading:!0}),m.a.createAccountWithPassword(e,t,this.state.registrar_account,o||this.state.registrar_account,0,r).then(function(){m.a.setPasswordAccount(e),a.state.registrar_account?(Object(P.f)("getAccount",e,void 0,n({},e,!0)).then(function(){a.setState({step:2,loading:!1}),a._unlockAccount(e,t)}),g.a.listen(a.onFinishConfirm)):Object(P.f)("getAccount",e,void 0,n({},e,!0)).then(function(){a.setState({step:2}),a._unlockAccount(e,t)})}).catch(function(t){console.log("ERROR AccountActions.createAccount",t);var n=t.base&&t.base.length&&t.base.length>0?t.base[0]:"unknown error";t.remote_ip&&(n=t.remote_ip[0]),E.a.addNotification({message:"Failed to create account: "+e+" - "+n,level:"error",autoDismiss:10}),a.setState({loading:!1})})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.accountNameInput.getValue(),a=this.state.generatedPassword;this.createAccount(t,a)}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_onInput",value:function(e,t){var a;this.setState((a={},n(a,e,"confirm_password"===e?t.target.value:!this.state[e]),n(a,"validPassword","confirm_password"===e?t.target.value===this.state.generatedPassword:this.state.validPassword),a))}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,a=p.a.getMyAccounts(),n=0===a.length,r=this.isValid(),o=!1,l=t?P.b.getAccount(t):null;l&&l.get("lifetime_referrer")==l.get("id")&&(o=!0);var c=d()("submit-button button no-margin",{disabled:!r||t&&!o});return s.a.createElement("div",{style:{textAlign:"left"}},s.a.createElement("form",{style:{maxWidth:"60rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},s.a.createElement(h.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!n,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:N.a.translate("wallet.account_public"),noLabel:!0}),s.a.createElement("section",null,s.a.createElement("label",{className:"left-label"},s.a.createElement(y.a,{content:"wallet.generated"}),"  ",s.a.createElement("span",{className:"tooltip","data-html":!0,"data-tip":N.a.translate("tooltip.generate")},s.a.createElement(j.a,{name:"question-circle"}))),s.a.createElement("div",{style:{paddingBottom:"0.5rem"}},s.a.createElement("span",{className:"inline-label"},s.a.createElement("input",{style:{maxWidth:"calc(30rem - 48px)",fontSize:"80%"},disabled:!0,value:this.state.generatedPassword,type:"text"}),s.a.createElement(T.a,{text:this.state.generatedPassword,tip:"tooltip.copy_password",dataPlace:"top"})))),s.a.createElement("section",null,s.a.createElement("label",{className:"left-label"},s.a.createElement(y.a,{content:"wallet.confirm_password"})),s.a.createElement("input",{type:"password",name:"password",id:"password",value:this.state.confirm_password,onChange:this._onInput.bind(this,"confirm_password")}),this.state.confirm_password&&this.state.confirm_password!==this.state.generatedPassword?s.a.createElement("div",{className:"has-error"},s.a.createElement(y.a,{content:"wallet.confirm_error"})):null),s.a.createElement("br",null),s.a.createElement("div",{className:"confirm-checks",onClick:this._onInput.bind(this,"understand_3")},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_3}),s.a.createElement(y.a,{content:"wallet.understand_3"}))),s.a.createElement("br",null),s.a.createElement("div",{className:"confirm-checks",onClick:this._onInput.bind(this,"understand_1")},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_1}),s.a.createElement(y.a,{content:"wallet.understand_1"}))),s.a.createElement("br",null),s.a.createElement("div",{className:"confirm-checks",style:{paddingBottom:"1.5rem"},onClick:this._onInput.bind(this,"understand_2")},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_2}),s.a.createElement(y.a,{content:"wallet.understand_2"}))),n?null:s.a.createElement("div",{className:"full-width-content form-group no-overflow",style:{paddingTop:30}},s.a.createElement("label",null,s.a.createElement(y.a,{content:"account.pay_from"})),s.a.createElement(v.a,{account_names:a,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!o?s.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},s.a.createElement(y.a,{content:"wallet.must_be_ltm"})):null),this.state.loading?s.a.createElement(b.a,{type:"three-bounce"}):s.a.createElement("button",{style:{width:"100%"},className:c},s.a.createElement(y.a,{content:"account.create_account"}))))}},{key:"_renderAccountCreateText",value:function(){var e=p.a.getMyAccounts(),t=0===e.length;return s.a.createElement("div",null,s.a.createElement("h4",{style:{fontWeight:"bold",paddingBottom:15}},s.a.createElement(y.a,{content:"wallet.wallet_password"})),s.a.createElement(y.a,{style:{textAlign:"left"},unsafe:!0,component:"p",content:"wallet.create_account_password_text"}),s.a.createElement(y.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),t?null:s.a.createElement(y.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){var e=this;return s.a.createElement("div",{className:"backup-submit"},s.a.createElement("p",null,s.a.createElement(y.a,{unsafe:!0,content:"wallet.password_crucial"})),s.a.createElement("div",null,this.state.showPass?s.a.createElement("div",null,s.a.createElement("h5",null,s.a.createElement(y.a,{content:"settings.password"}),":"),s.a.createElement("p",{style:{fontWeight:"bold",textAlign:"center"}},this.state.generatedPassword)):s.a.createElement("div",{onClick:function(){e.setState({showPass:!0})},className:"button"},s.a.createElement(y.a,{content:"wallet.password_show"}))),s.a.createElement("div",{className:"divider"}),s.a.createElement("p",{className:"txtlabel warning"},s.a.createElement(y.a,{unsafe:!0,content:"wallet.password_lose_warning"})),s.a.createElement("div",{style:{width:"100%"},onClick:function(){e.context.router.push("/dashboard")},className:"button"},s.a.createElement(y.a,{content:"wallet.ok_done"})))}},{key:"_renderGetStarted",value:function(){return s.a.createElement("div",null,s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_dashboard"}),":"),s.a.createElement("td",null,s.a.createElement(_.b,{to:"/dashboard"},s.a.createElement(y.a,{content:"header.dashboard"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_account"}),":"),s.a.createElement("td",null,s.a.createElement(_.b,{to:"/account/"+this.state.accountName+"/overview"},s.a.createElement(y.a,{content:"wallet.link_account"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_deposit"}),":"),s.a.createElement("td",null,s.a.createElement(_.b,{to:"/deposit-withdraw"},s.a.createElement(y.a,{content:"wallet.link_deposit"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_transfer"}),":"),s.a.createElement("td",null,s.a.createElement(_.b,{to:"/transfer"},s.a.createElement(y.a,{content:"wallet.link_transfer"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_settings"}),":"),s.a.createElement("td",null,s.a.createElement(_.b,{to:"/settings"},s.a.createElement(y.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(y.a,{content:"wallet.congrat"})),s.a.createElement("p",null,s.a.createElement(y.a,{content:"wallet.tips_explore_pass"})),s.a.createElement("p",null,s.a.createElement(y.a,{content:"wallet.tips_header"})),s.a.createElement("p",{className:"txtlabel warning"},s.a.createElement(y.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return s.a.createElement("div",{className:"sub-content"},s.a.createElement("div",{className:"grid-block wrap vertical"},2===e?s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(y.a,{content:"wallet.step_"+e})):null,3===e?this._renderGetStartedText():null,1===e?s.a.createElement("div",null,this._renderAccountCreateForm()):2===e?this._renderBackup():this._renderGetStarted()))}}]),t}(s.a.Component);D.contextTypes={router:s.a.PropTypes.object.isRequired},t.default=Object(i.connect)(D,{listenTo:function(){return[p.a]},getProps:function(){return{}}})}});
//# sourceMappingURL=28.js.map
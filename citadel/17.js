webpackJsonp([17],{1513:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"b",function(){return b}),a.d(t,"a",function(){return v});var o=a(1),l=a.n(o),c=a(3),u=a.n(c),p=a(29),m=a.n(p),d=a(26),f=(a.n(d),a(27)),g=a(38),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,a=e.index,n=e.changeTab,s=e.title,i=e.className,r=e.disabled,o=m()({"is-active":t},i);return this.props.collapsed?l.a.createElement("option",{value:a,"data-is-link-to":this.props.isLinkTo},"string"==typeof s&&s.indexOf(".")>0?l.a.createElement(u.a,{className:"tab-title",content:s}):l.a.createElement("span",{className:"tab-title"},s)):l.a.createElement("li",{className:o,onClick:r?null:n.bind(this,a,this.props.isLinkTo)},l.a.createElement("a",null,"string"==typeof s&&s.indexOf(".")>0?l.a.createElement(u.a,{className:"tab-title",content:s}):l.a.createElement("span",{className:"tab-title"},s),this.props.subText?l.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(l.a.Component);v.propTypes={changeTab:o.PropTypes.func,isActive:o.PropTypes.bool.isRequired,index:o.PropTypes.number.isRequired,className:o.PropTypes.string,isLinkTo:o.PropTypes.string},v.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var b=function(e){function t(e){s(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},a._setDimensions=a._setDimensions.bind(a),a}return r(t,e),h(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&f.a.changeViewSetting(n({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.contentClass,s=t.tabsClass,i=t.style,r=t.segmented,o=this.state.width<900&&l.a.Children.count(a)>2,c=null,u=[],p=l.a.Children.map(a,function(t,a){if(!t)return null;if(o&&t.props.disabled)return null;var n=a===e.state.activeTab;return n&&(c=t.props.children),l.a.cloneElement(t,{collapsed:o,isActive:n,changeTab:e._changeTab.bind(e),index:a})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return c||(c=p[0].props.children),l.a.createElement("div",{className:m()(this.props.actionButtons?"with-buttons":"",this.props.className)},l.a.createElement("div",{className:"service-selector"},l.a.createElement("ul",{style:i,className:m()("button-group no-margin",s,{segmented:r})},o?l.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},l.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var a=parseInt(t.target.value,10);e._changeTab(a,t.target[a].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?l.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),l.a.createElement("div",{className:n+" tab-content"},c))}}]),t}(l.a.Component);b.propTypes={setting:o.PropTypes.string,defaultActiveTab:o.PropTypes.number,segmented:o.PropTypes.bool},b.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},b.contextTypes={router:l.a.PropTypes.object.isRequired},b=Object(d.connect)(b,{listenTo:function(){return[g.a]},getProps:function(){return{viewSettings:g.a.getState().viewSettings}}})},1582:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=a(1),u=a.n(c),p=a(104),m=a(40),d=a.n(m),f=a(69),g=a(25),h=a(3),v=a.n(h),b=a(83),y=a(675),E=a.n(y),A=a(4),k=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),w=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=a._getInitialState(),a.onPasswordEnter=a.onPasswordEnter.bind(a),a.onKeyDown=a.onKeyDown.bind(a),a.onCancel=a.onCancel.bind(a),a.onClose=a.onClose.bind(a),a}return i(t,e),k(t,[{key:"_getInitialState",value:function(){return{isShowQrcode:!1,keyString:null}}},{key:"show",value:function(){d.a.publish(this.props.modalId,"open")}},{key:"onCancel",value:function(){d.a.publish(this.props.modalId,"close"),this.onClose()}},{key:"onClose",value:function(){this.refs.password_input&&(this.refs.password_input.value=""),this.setState(this._getInitialState())}},{key:"onPasswordEnter",value:function(e){e.preventDefault();var t=this.refs.password_input.value,a=this.props.keyValue;if(null!=t&&""!=t){if(void 0!==a&&null!=a&&""!=a){var n=A.a.fromSeed(t),s=n.encryptToHex(a);this.setState({isShowQrcode:!0,keyString:s})}}else this.setState({isShowQrcode:!0,keyString:a})}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onPasswordEnter(e)}},{key:"render",value:function(){var e=this,t=null;return this.state.isShowQrcode&&(t={textAlign:"center"}),u.a.createElement(p.a,{onClose:this.onClose,id:this.props.modalId,ref:"modal",overlay:!0,overlayClose:!1},u.a.createElement("div",{className:"text-center"},u.a.createElement("div",{style:{margin:"1.5rem 0"}},u.a.createElement(v.a,{component:"h4",content:"modal.qrcode.title"})),u.a.createElement("form",{className:"full-width",style:{margin:"0 3.5rem"},onSubmit:this.onPasswordEnter,noValidate:!0},u.a.createElement("div",{className:"form-group"},this.state.isShowQrcode?u.a.createElement("section",{style:t},u.a.createElement("span",{style:{background:"#fff",padding:".75rem",display:"inline-block"}},u.a.createElement(E.a,{size:256,value:this.state.keyString}))):u.a.createElement("section",null,u.a.createElement("label",{className:"left-label"},u.a.createElement(v.a,{unsafe:!0,content:"modal.qrcode.input_message"})),u.a.createElement("input",{name:"password",type:"text",onFocus:function(){e.refs.password_input.setAttribute("type","password")},ref:"password_input",autoComplete:"off",onKeyDown:this.onKeyDown}))),u.a.createElement("div",{style:t},u.a.createElement("div",{className:"button-group"},0==this.state.isShowQrcode?u.a.createElement("button",{className:"button","data-place":"bottom","data-html":!0,onClick:this.onPasswordEnter},u.a.createElement(v.a,{content:"modal.ok"})):null,u.a.createElement("button",{className:"button","data-place":"bottom","data-html":!0,onClick:this.onCancel},u.a.createElement(v.a,{content:"cancel"})))))))}}]),t}(u.a.Component);w.propTypes={modalId:c.PropTypes.string.isRequired,keyValue:c.PropTypes.string},w.defaultProps={modalId:"qr_code_password_modal"};var M=w,S=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),T=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return l(t,e),S(t,[{key:"_getInitialState",value:function(){return{wif:null}}},{key:"reset",value:function(){this.setState(this._getInitialState())}},{key:"componentDidMount",value:function(){var e=this,t="key_view_modal"+this.props.pubkey;d.a.subscribe(t,function(a,n){a===t&&"close"===n&&e.reset()})}},{key:"render",value:function(){var e="key_view_modal"+this.props.pubkey,t=b.a.getState().keys;if(!t.has(this.props.pubkey))return u.a.createElement("span",null,this.props.children);var n=t.get(this.props.pubkey);return u.a.createElement("span",null,u.a.createElement("a",{onClick:this.onOpen.bind(this)},this.props.children),u.a.createElement(p.a,{ref:e,id:e,overlay:!0,overlayClose:!1},u.a.createElement("h3",null,u.a.createElement(v.a,{content:"account.perm.key_viewer"})),u.a.createElement("div",{className:"grid-block vertical"},u.a.createElement("div",{className:"content-block"},u.a.createElement("div",{className:"grid-content"},u.a.createElement("label",null,u.a.createElement(v.a,{content:"account.perm.public"})),this.props.pubkey),u.a.createElement("br",null),u.a.createElement("div",{className:"grid-block grid-content"},u.a.createElement("label",null,u.a.createElement(v.a,{content:"account.perm.private"})),u.a.createElement("div",null,this.state.wif?u.a.createElement("span",null,u.a.createElement("p",{style:{fontWeight:600}},this.state.wif),u.a.createElement("div",{className:"button-group"},u.a.createElement("div",{className:"button",onClick:this.onHide.bind(this)},"hide"),u.a.createElement("div",{className:"clickable",onClick:this.showQrCode.bind(this)},u.a.createElement("img",{style:{height:50},src:a(1602)})))):u.a.createElement("span",null,u.a.createElement("div",{className:"button",onClick:this.onShow.bind(this)},u.a.createElement(v.a,{content:"account.perm.show"}))))),u.a.createElement("br",null),u.a.createElement("div",{className:"grid-block grid-content"},u.a.createElement("label",null,u.a.createElement(v.a,{content:"account.perm.brain"})),null==n.brainkey_sequence?"Non-deterministic":n.brainkey_sequence),u.a.createElement("br",null),n.import_account_names&&n.import_account_names.length?u.a.createElement("div",{className:"grid-block grid-content"},u.a.createElement("label",null,u.a.createElement(v.a,{content:"account.perm.from"})),n.import_account_names.join(", "),u.a.createElement("br",null)):null)),u.a.createElement("div",{className:"button-group"},u.a.createElement("div",{onClick:this.onClose.bind(this),className:" button"},u.a.createElement(v.a,{content:"transfer.close"})))),u.a.createElement(M,{ref:"qrmodal",keyValue:this.state.wif}))}},{key:"onOpen",value:function(){var e="key_view_modal"+this.props.pubkey;d.a.publish(e,"open")}},{key:"onClose",value:function(){this.reset();var e="key_view_modal"+this.props.pubkey;d.a.publish(e,"close")}},{key:"onShow",value:function(){var e=this;f.a.unlock().then(function(){var t=g.a.getPrivateKey(e.props.pubkey);e.setState({wif:t.toWif()})})}},{key:"onHide",value:function(){this.setState({wif:null})}},{key:"showQrCode",value:function(){this.refs.qrmodal.show()}}]),t}(c.Component);T.propTypes={pubkey:u.a.PropTypes.string.isRequired};t.a=T},1602:function(e,t){e.exports="data:image/png;base64,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"},1603:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=a(1),o=a.n(r),l=a(29),c=a.n(l),u=a(3),p=a.n(u),m=a(1582),d=a(4),f=a(56),g=a(83),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),v=function(e){function t(e){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),h(t,[{key:"isValidPubKey",value:function(e){return!!d.i.fromPublicKeyString(e)}},{key:"onInputChanged",value:function(e){var t=e.target.value.trim();this.props.onChange(t)}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.onAction(e)}},{key:"onAction",value:function(e){e.preventDefault(),this.props.onAction&&this.state.valid&&!this.props.disableActionButton&&this.props.onAction(e)}},{key:"render",value:function(){var e=this.props.error;e||!this.props.value||this.isValidPubKey(this.props.value)||(e="Not a valid public key");var t=c()("button",{disabled:e||this.props.disableActionButton}),a=g.a.getState().keys,n=this.isValidPubKey(this.props.value)&&a.has(this.props.value);return o.a.createElement("div",{className:"pubkey-input no-overflow"},o.a.createElement("div",{className:"content-area"},o.a.createElement("div",{className:"header-area"},!e&&this.props.value&&this.isValidPubKey(this.props.value)?o.a.createElement("label",{className:"right-label"},o.a.createElement(p.a,{content:"account.perm.valid_pub"})):null,o.a.createElement(p.a,{className:"left-label",component:"label",content:this.props.label})),o.a.createElement("div",{className:"input-area"},o.a.createElement("span",{className:"inline-label"},o.a.createElement("div",{className:"account-image"},o.a.createElement(m.a,{pubkey:this.props.value},o.a.createElement(f.a,{name:"key",size:"4x"}))),o.a.createElement("input",{type:"text",className:n?"my-key":"",value:this.props.value,placeholder:this.props.placeholder||counterpart.translate("account.public_key"),ref:"user_input",onChange:this.onInputChanged.bind(this),onKeyDown:this.onKeyDown.bind(this),tabIndex:this.props.tabIndex}),this.props.onAction?o.a.createElement("button",{className:t,onClick:this.onAction.bind(this)},o.a.createElement(p.a,{content:this.props.action_label})):null)),o.a.createElement("div",{className:"error-area has-error"},o.a.createElement("span",null,e))))}}]),t}(o.a.Component);v.propTypes={label:o.a.PropTypes.string.isRequired,value:o.a.PropTypes.string,error:o.a.PropTypes.string,placeholder:o.a.PropTypes.string,onChange:o.a.PropTypes.func,onAction:o.a.PropTypes.func,tabIndex:o.a.PropTypes.number,disableActionButton:o.a.PropTypes.bool},t.a=v},1880:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),l=a.n(o),c=a(3),u=a.n(c),p=a(1603),m=a(34),d=a(32),f=a(1513),g=a(7),h=a.n(g),v=a(9),b=a(4),y=a(69),E=a(25),A=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),k="-----BEGIN BITSHARES SIGNED MESSAGE-----",w="-----END BITSHARES SIGNED MESSAGE-----",M=function(){function e(){n(this,e)}return A(e,[{key:"parseMessage",value:function(e){var t=void 0,a=void 0,n=void 0,s=void 0;try{t=e.split(k)[1],a=t.split("-----BEGIN META-----"),t=a[0].replace(/^\n|\n$/g,""),n=a[1].split("-----BEGIN SIGNATURE-----"),a=n[0].trim(),n=n[1].split(w)[0].trim(),s=t+"\n"+a}catch(e){throw new Error(h.a.translate("account.signedmessages.invalidformat"))}var i=void 0,r=void 0,o=void 0,l=void 0;if(a)try{i=a.split("account="),i=i[1].split("\n")[0].trim(),r=a.split("memokey="),r=r[1].split("\n")[0].trim(),o=a.split("block="),o=o[1].split("\n")[0].trim(),l=a.split("timestamp="),l=l[1].split("\n")[0].trim()}catch(e){throw new Error(h.a.translate("account.signedmessages.invalidformat"))}return{content:t,meta:{account:i,key:r,block:o,timestamp:l},signed:s,signature:n}}},{key:"verifyMemo",value:function(e){var t=void 0;if(t="string"==typeof e||e instanceof String?this.parseMessage(e):e,null==b.b.getAccount(t.meta.account))throw new Error(h.a.translate("account.signedmessages.invaliduser"));var a=!1;try{a=b.k.fromHex(t.signature).verifyBuffer(t.signed,b.i.fromPublicKeyString(t.meta.key))}catch(e){throw new Error(h.a.translate("account.signedmessages.errorverifying"))}if(!a)throw new Error(h.a.translate("account.signedmessages.invalidsignature"));return t}},{key:"signMessage",value:function(e,t){return new Promise(function(a,n){Promise.resolve(y.a.unlock()).then(function(){try{var s=e.get("options").get("memo_key");/111111111111111111111/.test(s)&&(s=null);var i=void 0;if(t&&s&&!(i=E.a.getPrivateKey(s)))throw new Error(h.a.translate("account.signedmessages.invalidkey"));var r=b.b.getObject("2.1.0").get("last_irreversible_block_num"),o=new Date,l="account="+e.get("name")+"\nmemokey="+s+"\nblock="+r+"\ntimestamp="+o.toUTCString(),c=t+"\n"+l;setTimeout(function(){try{var e=b.k.signBuffer(c,i,s),r=k+"\n"+t+"\n-----BEGIN META-----\n"+l+"\n-----BEGIN SIGNATURE-----\n"+e.toHex()+"\n"+w;a(r)}catch(e){n(e)}},0)}catch(e){n(e)}})})}}]),e}(),S=v.a.createActions(M),T=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),P=function(e){function t(e){s(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={tabsm_memo_key:a.props.account.get("options").get("memo_key"),tabsm_popup:"",tabsm_message_text:null,tabsm_message_signed:null,tabvm_popup:"",tabvm_message_signed:null,tabvm_verified:null,tabvm_message_signed_and_verified:null,tabvm_flag_verifyonchange:!1},a}return r(t,e),T(t,[{key:"_tabSMSignAction",value:function(e){var t=this;e.preventDefault();try{var a=this.props.account.get("options").get("memo_key");if(this.state.tabsm_memo_key!==a)throw Error(h.a.translate("account.signedmessages.keymismatch"));this.state.tabsm_message_text&&(this._tabSMPopMessage(h.a.translate("account.signedmessages.signing"),0),S.signMessage(this.props.account,this.state.tabsm_message_text).then(function(e){t.setState({tabsm_message_signed:e,tabsm_popup:""})}).catch(function(e){t._tabSMPopMessage(e.message),t.setState({tabsm_message_signed:null})}))}catch(e){this._tabSMPopMessage(e.message),this.setState({tabsm_message_signed:null})}}},{key:"_tabSMHandleChange",value:function(e){this.setState({tabsm_message_text:e.target.value})}},{key:"_tabSMHandleChangeKey",value:function(e){this.setState({tabsm_memo_key:e})}},{key:"_tabSMCopyToClipBoard",value:function(e){if(""!==e.target.value){e.target.focus(),e.target.select();try{var t=document.execCommand("copy");this._tabSMPopMessage(t?h.a.translate("account.signedmessages.copysuccessful"):h.a.translate("account.signedmessages.copyunsuccessful"))}catch(e){this._tabSMPopMessage(h.a.translate("account.signedmessages.copyunsuccessful"))}}}},{key:"_tabSMPopMessage",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.setState({tabsm_popup:e}),""!==e&&a>0&&setTimeout(function(){t.setState({tabsm_popup:""})},a)}},{key:"_tabVMAction",value:function(e){var t=this;e.preventDefault(),this.setState({tabvm_message_signed_and_verified:null,tabvm_verified:!1}),this.state.tabvm_message_signed&&(this._tabVMPopMessage(h.a.translate("account.signedmessages.verifying"),0),setTimeout(function(){try{var e=S.verifyMemo(t.state.tabvm_message_signed);t.setState({tabvm_message_signed_and_verified:e,tabvm_verified:!0,tabvm_popup:""})}catch(e){t._tabVMPopMessage(e.message),t.setState({tabvm_message_signed_and_verified:null,tabvm_verified:!1})}},0))}},{key:"_tabVMHandleChange",value:function(e){this.setState({tabvm_message_signed:e.target.value,tabvm_verified:!1,tabvm_message_signed_and_verified:null}),this.state.tabvm_flag_verifyonchange&&this._tabVMAction(e)}},{key:"_tabVMPopMessage",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.setState({tabvm_popup:e}),""!==e&&a>0&&setTimeout(function(){t.setState({tabvm_popup:""})},a)}},{key:"_tabVMToggleVerifyOnChange",value:function(){this.setState({tabvm_flag_verifyonchange:!this.state.tabvm_flag_verifyonchange})}},{key:"render",value:function(){return l.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},l.a.createElement("div",{className:"content-block small-12"},l.a.createElement("div",{className:"tabs-container generic-bordered-box"},l.a.createElement(f.b,{className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block",setting:"accountSignedMessagesTab",contentClass:"grid-content shrink small-vertical medium-horizontal no-padding",segmented:!1},l.a.createElement(f.a,{title:"account.signedmessages.signmessage"},l.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"content-block no-margin"},l.a.createElement("h3",null,l.a.createElement(u.a,{content:"account.signedmessages.signmessage"}))),l.a.createElement(p.a,{ref:"memo_key",value:this.state.tabsm_memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",tabIndex:7,onChange:this._tabSMHandleChangeKey.bind(this),disableActionButton:!0}),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"10",value:this.state.tabsm_message_text,onChange:this._tabSMHandleChange.bind(this),placeholder:h.a.translate("account.signedmessages.entermessage")}),l.a.createElement("span",null,l.a.createElement("button",{className:"button",onClick:this._tabSMSignAction.bind(this)},l.a.createElement(u.a,{content:"account.signedmessages.sign"})),l.a.createElement("text",{style:{color:"gray"}},this.state.tabsm_popup)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"14",value:this.state.tabsm_message_signed,style:{editable:!1},placeholder:h.a.translate("account.signedmessages.automaticcreation"),onClick:this._tabSMCopyToClipBoard.bind(this)}))),l.a.createElement(f.a,{title:"account.signedmessages.verifymessage"},l.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"content-block no-margin"},l.a.createElement("h3",null,l.a.createElement(u.a,{content:"account.signedmessages.verifymessage"})),l.a.createElement("div",{style:{float:"right",marginTop:"0.1em",marginBottom:"0.5em"}},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,l.a.createElement(u.a,{content:"account.signedmessages.verifyonchange"}))),l.a.createElement("td",null,l.a.createElement("div",{className:"switch",onClick:this._tabVMToggleVerifyOnChange.bind(this)},l.a.createElement("input",{type:"checkbox",checked:this.state.tabvm_flag_verifyonchange,value:h.a.translate("account.signedmessages.verifyonchange")}),l.a.createElement("label",null))))))),l.a.createElement("textarea",{rows:"10",value:this.state.tabvm_message_signed,onChange:this._tabVMHandleChange.bind(this),placeholder:h.a.translate("account.signedmessages.entermessage")}),l.a.createElement("span",null,l.a.createElement("button",{className:"button",onClick:this._tabVMAction.bind(this)},l.a.createElement(u.a,{content:"account.signedmessages.verify"})),l.a.createElement("text",{style:{color:"gray"}},this.state.tabvm_popup),null!==this.state.tabvm_verified&&l.a.createElement("div",{style:{float:"right"}},"Message is:",l.a.createElement("div",{style:{backgroundColor:this.state.tabvm_verified?"green":"red"}},l.a.createElement("label",null,this.state.tabvm_verified?"verified":"not verified"))),this.state.tabvm_verified&&null!==this.state.tabvm_message_signed_and_verified&&l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{style:{color:"gray"}},l.a.createElement("fieldset",null,l.a.createElement("legend",{style:{color:"white",weight:"bold"}},"Verified message from ",this.state.tabvm_message_signed_and_verified.meta.account),l.a.createElement("pre",null,this.state.tabvm_message_signed_and_verified.content),l.a.createElement("span",{style:{fontSize:"small",float:"right"}},"Signed on ",this.state.tabvm_message_signed_and_verified.meta.timestamp)))))))))))}}]),t}(l.a.Component);P.propTypes={account:m.a.ChainAccount.isRequired},P=Object(d.a)(P);t.default=P}});
//# sourceMappingURL=17.js.map
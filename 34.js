webpackJsonp([34],{1882:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n.n(i),c=n(26),s=(n.n(c),n(289)),u=n(39),p=n(3),f=n.n(p),m=n(297),d=n(27),b=n(8),g=(n.n(b),n(7)),v=n.n(g),y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),h(t,[{key:"triggerModal",value:function(e){this.refs.ws_modal.show(e)}},{key:"onChangeWS",value:function(e){d.a.changeSetting({setting:"apiServer",value:e.target.value}),b.Apis.reset(e.target.value,!0)}},{key:"onReloadClick",value:function(e){e&&e.preventDefault(),window.electron?(window.location.hash="",window.remote.getCurrentWindow().reload()):window.location.href="/"}},{key:"onReset",value:function(){d.a.changeSetting({setting:"apiServer",value:this.props.defaultConnection}),d.a.clearSettings()}},{key:"render",value:function(){var e=this.props.apis.map(function(e){var t=-1!==e.url.indexOf("fake.automatic-selection"),n=e.location;return n&&"object"===(void 0===n?"undefined":y(n))&&"translate"in n&&(n=v.a.translate(n.translate)),l.a.createElement("option",{key:e.url,value:e.url},n||e.url," ",!t&&n?"("+e.url+")":null)});return l.a.createElement("div",{className:"grid-block page-layout"},l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"grid-content no-overflow"},l.a.createElement("br",null),l.a.createElement(f.a,{component:"h3",content:"init_error.title"}),l.a.createElement("br",null),l.a.createElement("section",{className:"block-list"},l.a.createElement("header",null,l.a.createElement(f.a,{component:"span",content:"settings.apiServer"})),l.a.createElement("ul",null,l.a.createElement("li",{className:"with-dropdown"},l.a.createElement("select",{onChange:this.onChangeWS.bind(this),value:this.props.apiServer},e),l.a.createElement("div",{style:{paddingTop:10},className:"button-group"},l.a.createElement("div",{onClick:this.triggerModal.bind(this),className:"button outline",id:"add"},l.a.createElement(f.a,{id:"add_text",content:"settings.add_api"})))),l.a.createElement("li",{className:"key-value clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement(f.a,{content:"init_error.ws_status"})),l.a.createElement("div",{className:"float-right"},"open"===this.props.rpc_connection_status?l.a.createElement("span",{className:"txtlabel success"},l.a.createElement(f.a,{content:"init_error.connected"})):l.a.createElement("span",{className:"txtlabel warning"},l.a.createElement(f.a,{content:"init_error.not_connected"})))))),l.a.createElement("br",null),l.a.createElement("div",{className:"button-group"},l.a.createElement("div",{className:"button outline",href:!0,onClick:this.onReloadClick},l.a.createElement(f.a,{content:"init_error.retry"})),l.a.createElement("div",{onClick:this.onReset.bind(this),className:"button outline"},l.a.createElement(f.a,{content:"settings.reset"}))),l.a.createElement(m.a,{ref:"ws_modal",apis:this.props.apis}))))}}]),t}(l.a.Component);t.default=Object(c.connect)(E,{listenTo:function(){return[s.a,u.a]},getProps:function(){return{rpc_connection_status:s.a.getState().rpc_connection_status,apis:u.a.getState().defaults.apiServer,apiServer:u.a.getState().settings.get("apiServer"),defaultConnection:u.a.getState().defaultSettings.get("apiServer")}}})}});
//# sourceMappingURL=34.js.map
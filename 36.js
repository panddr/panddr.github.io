webpackJsonp([36],{1870:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),s=n.n(c),i=n(88),u=n(57),p=n(39),l=n(189),d=n(290),f=n(35),g=n(32),h=n(26),b=(n.n(h),n(185)),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),w(t,[{key:"componentDidMount",value:function(){this.props.account&&i.a.setCurrentAccount.defer(this.props.account.get("name")),b.a.getPossibleFees(this.props.account,"transfer")}},{key:"componentWillReceiveProps",value:function(e){e.account&&i.a.setCurrentAccount.defer(e.account.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.linkedAccounts,n=e.account_name,o=e.searchAccounts,a=e.settings,r=e.wallet_locked,c=e.account,i=e.hiddenAssets,p=u.a.isMyAccount(c);return s.a.createElement("div",{className:"grid-block page-layout"},s.a.createElement("div",{className:"grid-block no-padding"},s.a.cloneElement(s.a.Children.only(this.props.children),{account_name:n,linkedAccounts:t,searchAccounts:o,settings:a,wallet_locked:r,account:c,isMyAccount:p,hiddenAssets:i,contained:!0,balances:c.get("balances",null),orders:c.get("orders",null),backedCoins:this.props.backedCoins,bridgeCoins:this.props.bridgeCoins,gatewayDown:this.props.gatewayDown,viewSettings:this.props.viewSettings,proxy:c.getIn(["options","voting_account"])})))}}]),t}(s.a.Component);_.propTypes={account:f.a.ChainAccount.isRequired},_.defaultProps={account:"props.params.account_name"},_=Object(g.a)(_,{keep_updating:!0,show_loader:!0});var v=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),w(t,[{key:"render",value:function(){var e=this.props.routeParams.account_name;return s.a.createElement(_,y({},this.props,{account_name:e}))}}]),t}(s.a.Component);t.default=Object(h.connect)(v,{listenTo:function(){return[u.a,p.a,l.a,d.a]},getProps:function(){return{linkedAccounts:u.a.getState().linkedAccounts,searchAccounts:u.a.getState().searchAccounts,settings:p.a.getState().settings,hiddenAssets:p.a.getState().hiddenAssets,wallet_locked:l.a.getState().locked,viewSettings:p.a.getState().viewSettings,backedCoins:d.a.getState().backedCoins,bridgeCoins:d.a.getState().bridgeCoins,gatewayDown:d.a.getState().down}}})}});
//# sourceMappingURL=36.js.map
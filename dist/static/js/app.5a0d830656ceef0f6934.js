webpackJsonp([1],{Dsm5:function(e,t){},IuFh:function(e,t,r){(function(e){"use strict";function t(e,r){var i=o({},e);for(var s in r)"object"!=typeof e[s]||null===e[s]||Array.isArray(e[s])?void 0!==r[s]&&(i[s]=r[s]):i[s]=t(e[s],r[s]);return i}function r(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}var o=Object.assign||function(e){for(var t,r=arguments,o=1,i=arguments.length;o<i;o++)for(var s in t=r[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},s={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},n=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=t(s,e),e.preset){var r=i[e.preset];r?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(r.disabled_features):this._options.disabled_features=r.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(r.enabled_features):this._options.enabled_features=r.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.setLanguage=function(e){this.remove(),this._options.locale=e,this._create()},e.prototype.setSymbol=function(e,t,r){this._innerAPI().changeSymbol(e,t+"",r)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var e=this._getIFrameElement();e.contentWindow.destroyChart(),e.parentNode&&e.parentNode.removeChild(e)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,r,o){this._innerAPI().saveChartToServer(e,t,r,o)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=t(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype._getIFrameElement=function(){var e=document.getElementById(this._id);if(null===e)throw new Error("There is no such iframe");return e},e.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},e.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),r=document.getElementById(this._options.container_id);if(null===r)throw new Error("There is no such element - #"+this._options.container_id);r.innerHTML=t;var o=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(o.style.width="100%",this._options.fullscreen||(o.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var i=function(){o.removeEventListener("load",i,!1),o.contentWindow.widgetReady(function(){e._ready=!0;for(var t=0,r=e._readyHandlers;t<r.length;t++)r[t].call(e);o.contentWindow.initializationFinished()})};o.addEventListener("load",i,!1)},e.prototype._render=function(){var e=window;e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(e[this._id].chartContent={json:this._options.saved_data});var t=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=r,e.version=r,e.onready=function(e){window.addEventListener("DOMContentLoaded",e,!1)},e.widget=n,Object.defineProperty(e,"__esModule",{value:!0})})(t)},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),i=r("bOdI"),s=r.n(i),n=r("IuFh"),a=r("Gu7T"),l=r.n(a),c=r("woOf"),p=r.n(c),d=r("//Fk"),u=r.n(d),h=r("Zrlr"),_=r.n(h),m=r("wxAW"),b=r.n(m),f=function(){function e(t){_()(this,e),this.subscribers={},this.requestsPending=0,this.historyProvider=t}return b()(e,[{key:"subscribeBars",value:function(e,t,r,o){this.subscribers[o]={lastBarTime:null,listener:r,resolution:t,symbolInfo:e}}},{key:"unsubscribeBars",value:function(e){delete this.subscribers[e]}},{key:"updateData",value:function(){var e=this;if(!this.requestsPending)for(var t in this.requestsPending=0,this.subscribers)this.requestsPending++,this.updateDataForSubscriber(t).then(function(){return e.requestsPending--}).catch(function(){return e.requestsPending--})}},{key:"updateDataForSubscriber",value:function(e){var t=this;return new u.a(function(r,o){var i=t.subscribers[e],s=parseInt((Date.now()/1e3).toString()),n=s-t.periodLengthSeconds(i.resolution,10);t.historyProvider.getBars(i.symbolInfo,i.resolution,n,s,function(o){t.onSubscriberDataReceived(e,o),r()},function(){o()})})}},{key:"onSubscriberDataReceived",value:function(e,t){if(this.subscribers.hasOwnProperty(e)&&t.length){var r=t[t.length-1],o=this.subscribers[e];if(!(null!==o.lastBarTime&&r.time<o.lastBarTime)){if(null!==o.lastBarTime&&r.time>o.lastBarTime){if(t.length<2)throw new Error("Not enough bars in history for proper pulse update. Need at least 2.");var i=t[t.length-2];o.listener(i)}o.lastBarTime=r.time,o.listener(r)}}}},{key:"periodLengthSeconds",value:function(e,t){return 24*("D"===e||"1D"===e?t:"M"===e||"1M"===e?31*t:"W"===e||"1W"===e?7*t:t*parseInt(e)/1440)*60*60}}]),e}(),y=r("mtWM"),g=r.n(y),S=r("dZs+"),w=r.n(S),v=function(){function e(t){_()(this,e),this.self=t,this.barsUpdater=new f(this)}return b()(e,[{key:"onReady",value:function(e){var t=this;return new u.a(function(e,r){var o=t.defaultConfiguration();t.self.getConfig&&(o=p()(t.defaultConfiguration(),t.self.getConfig())),e(o)}).then(function(t){return e(t)})}},{key:"resolveSymbol",value:function(e,t,r){var o=this;return new u.a(function(e,t){var r=o.defaultSymbol();o.self.getSymbol&&(r=p()(o.defaultSymbol(),o.self.getSymbol())),e(r)}).then(function(e){return t(e)}).catch(function(e){return r(e)})}},{key:"getBars",value:function(e,t,r,o,i,s){var n=this;g.a.get("https://api.aofex.com/webApi/market/getKline?symbol=BTC-AQ&period=1min",{params:{size:200*this.self.page}}).then(function(t){var r=[];t.data.result.data.splice(-200).forEach(function(e){r.push({close:Number(e.close),open:Number(e.open),high:Number(e.high),low:Number(e.low),volume:Number(e.vol),time:Number(1e3*e.id)})}),r.reverse(),n.self.cacheData[e.ticker]?n.self.cacheData[e.ticker]=[].concat(r,l()(n.self.cacheData[e.ticker])):n.self.cacheData[e.ticker]=r,r&&r.length?i(r,{noData:!1}):i([],{noData:!0}),n.self.page++})}},{key:"subscribeBars",value:function(e,t,r,o,i){var s=this,n=new w.a.w3cwebsocket("wss://api.aofex.com/websocket/kline/BTC-AQ/1min");n.onopen=function(){},n.onmessage=function(n){var a=JSON.parse(n.data).data,l={close:Number(a.close),open:Number(a.open),high:Number(a.high),low:Number(a.low),volume:Number(a.vol),time:Number(1e3*a.id)};r(l),s.barsUpdater.subscribeBars(e,t,l,o,i)}}},{key:"unsubscribeBars",value:function(e){this.barsUpdater.unsubscribeBars(e)}},{key:"defaultConfiguration",value:function(){return{supports_search:!0,supports_group_request:!1,supported_resolutions:["1","5","15","30","60","1D","2D","3D","1W","1M"],supports_marks:!0,supports_timescale_marks:!0,supports_time:!0}}},{key:"defaultSymbol",value:function(){return{name:"BTCUSDT",timezone:"Asia/Shanghai",minmov:1,minmov2:0,pointvalue:1,fractional:!1,session:"24x7",has_intraday:!0,has_no_volume:!1,description:"BTCUSDT",pricescale:1,ticker:"BTCUSDT",supported_resolutions:["1","5","15","30","60","1D","2D","3D","1W","1M"]}}}]),e}(),P={data:function(){return{widget:null,datafeeds:new v(this),symbol:null,interval:null,cacheData:{},lastTime:null,getBarTimer:null,isLoading:!0,page:1}},created:function(){},methods:{init:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BTCUSDT",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;this.widget||(this.widget=new n.widget((e={symbol:t,interval:r,container_id:"trade-view",datafeed:this.datafeeds,library_path:"/static/tradeview/charting_library/",disabled_features:["header_symbol_search"],enabled_features:[],timezone:"Asia/Shanghai",locale:"zh",debug:!1,drawings_access:{type:"black",tools:[{name:"Trend Line",grayed:!0},{name:"Trend Angle",grayed:!0}]}},s()(e,"disabled_features",["left_toolbar","header_symbol_search","header_interval_dialog_button","show_interval_dialog_on_key_press","symbol_search_hot_key","study_dialog_search_control","display_market_status","header_compare","edit_buttons_in_legend","symbol_info","border_around_the_chart","main_series_scale_menu","star_some_intervals_by_default","datasource_copypaste","right_bar_stays_on_scroll","context_menus","go_to_date","compare_symbol","border_around_the_chart","header_resolutions","remove_library_container_border","header_screenshot","header_undo_redo","save_chart_properties_to_local_storage","volume_force_overlay"]),s()(e,"enabled_features",["timezone_menu","header_settings","dont_show_boolean_study_arguments","use_localstorage_for_settings","remove_library_container_border","side_toolbar_in_fullscreen_mode","hide_last_na_study_output","constraint_dialogs_movement"]),s()(e,"studies_overrides",{"volume.volume.color.0":"#ea5c5c","volume.volume.color.1":"#72c356","volume.volume.transparency":75}),s()(e,"overrides",{"symbolWatermarkProperties.color":"rgba(0,0,0, 0)","paneProperties.background":"#17192e","paneProperties.vertGridProperties.color":"#344568","paneProperties.horzGridProperties.color":"#344568","paneProperties.crossHairProperties.color":"#58637a","paneProperties.crossHairProperties.style":2,"mainSeriesProperties.style":1,"mainSeriesProperties.showCountdown":!1,"scalesProperties.showSeriesLastValue":!0,"mainSeriesProperties.visible":!1,"mainSeriesProperties.showPriceLine":!1,"mainSeriesProperties.priceLineWidth":1,"mainSeriesProperties.lockScale":!1,"mainSeriesProperties.minTick":"default","mainSeriesProperties.extendedHours":!1,volumePaneSize:"medium",editorFontsList:["Lato","Arial","Verdana","Courier New","Times New Roman"],"paneProperties.topMargin":5,"paneProperties.bottomMargin":5,"paneProperties.leftAxisProperties.autoScale":!0,"paneProperties.leftAxisProperties.autoScaleDisabled":!1,"paneProperties.leftAxisProperties.percentage":!1,"paneProperties.leftAxisProperties.percentageDisabled":!1,"paneProperties.leftAxisProperties.log":!1,"paneProperties.leftAxisProperties.logDisabled":!1,"paneProperties.leftAxisProperties.alignLabels":!0,"paneProperties.legendProperties.showStudyArguments":!0,"paneProperties.legendProperties.showStudyTitles":!0,"paneProperties.legendProperties.showStudyValues":!0,"paneProperties.legendProperties.showSeriesTitle":!0,"paneProperties.legendProperties.showSeriesOHLC":!0,"scalesProperties.showLeftScale":!1,"scalesProperties.showRightScale":!0,"scalesProperties.backgroundColor":"#17192e","scalesProperties.lineColor":"#46587b","scalesProperties.textColor":"#8f98ad","scalesProperties.scaleSeriesOnly":!1,"mainSeriesProperties.priceAxisProperties.autoScale":!0,"mainSeriesProperties.priceAxisProperties.autoScaleDisabled":!1,"mainSeriesProperties.priceAxisProperties.percentage":!1,"mainSeriesProperties.priceAxisProperties.percentageDisabled":!1,"mainSeriesProperties.priceAxisProperties.log":!1,"mainSeriesProperties.priceAxisProperties.logDisabled":!1,"mainSeriesProperties.candleStyle.upColor":"#72c356","mainSeriesProperties.candleStyle.downColor":"#ea5c5c","mainSeriesProperties.candleStyle.drawWick":!0,"mainSeriesProperties.candleStyle.drawBorder":!0,"mainSeriesProperties.candleStyle.borderColor":"#72c356","mainSeriesProperties.candleStyle.borderUpColor":"#72c356","mainSeriesProperties.candleStyle.borderDownColor":"#ea5c5c","mainSeriesProperties.candleStyle.wickColor":"#737375","mainSeriesProperties.candleStyle.wickUpColor":"#72c356","mainSeriesProperties.candleStyle.wickDownColor":"#ea5c5c","mainSeriesProperties.candleStyle.barColorsOnPrevClose":!1,"mainSeriesProperties.hollowCandleStyle.upColor":"#72c356","mainSeriesProperties.hollowCandleStyle.downColor":"#ea5c5c","mainSeriesProperties.hollowCandleStyle.drawWick":!0,"mainSeriesProperties.hollowCandleStyle.drawBorder":!0,"mainSeriesProperties.hollowCandleStyle.borderColor":"#72c356","mainSeriesProperties.hollowCandleStyle.borderUpColor":"#72c356","mainSeriesProperties.hollowCandleStyle.borderDownColor":"#ea5c5c","mainSeriesProperties.hollowCandleStyle.wickColor":"#737375","mainSeriesProperties.hollowCandleStyle.wickUpColor":"#72c356","mainSeriesProperties.hollowCandleStyle.wickDownColor":"#ea5c5c","mainSeriesProperties.haStyle.upColor":"#72c356","mainSeriesProperties.haStyle.downColor":"#ea5c5c","mainSeriesProperties.haStyle.drawWick":!0,"mainSeriesProperties.haStyle.drawBorder":!0,"mainSeriesProperties.haStyle.borderColor":"#72c356","mainSeriesProperties.haStyle.borderUpColor":"#72c356","mainSeriesProperties.haStyle.borderDownColor":"#ea5c5c","mainSeriesProperties.haStyle.wickColor":"#737375","mainSeriesProperties.haStyle.wickUpColor":"#72c356","mainSeriesProperties.haStyle.wickDownColor":"#ea5c5c","mainSeriesProperties.haStyle.barColorsOnPrevClose":!1,"mainSeriesProperties.barStyle.upColor":"#72c356","mainSeriesProperties.barStyle.downColor":"#ea5c5c","mainSeriesProperties.barStyle.barColorsOnPrevClose":!1,"mainSeriesProperties.barStyle.dontDrawOpen":!1,"mainSeriesProperties.lineStyle.color":"#0cbef3","mainSeriesProperties.lineStyle.linestyle":0,"mainSeriesProperties.lineStyle.linewidth":1,"mainSeriesProperties.lineStyle.priceSource":"close","mainSeriesProperties.areaStyle.color1":"#0cbef3","mainSeriesProperties.areaStyle.color2":"#0098c4","mainSeriesProperties.areaStyle.linecolor":"#0cbef3","mainSeriesProperties.areaStyle.linestyle":0,"mainSeriesProperties.areaStyle.linewidth":1,"mainSeriesProperties.areaStyle.priceSource":"close","mainSeriesProperties.areaStyle.transparency":80}),s()(e,"custom_css_url","chart.css"),e)),this.widget.onChartReady(function(){var e,t=this,r=[];e=t.chart().createStudy("Moving Average",!1,!1,[5],null,{"Plot.color":"rgb(150, 95, 196)"}),r.push(e),e=t.chart().createStudy("Moving Average",!1,!1,[10],null,{"Plot.color":"rgb(116,149,187)"}),r.push(e),e=t.chart().createStudy("Moving Average",!1,!1,[20],null,{"plot.color":"rgb(58,113,74)"}),r.push(e),e=t.chart().createStudy("Moving Average Exponential",!1,!1,[26]),r.push(e)}),this.symbol=t,this.interval=r)}}},C={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{width:"100%",height:"500px"},attrs:{id:"trade-view"}})},staticRenderFns:[]};var k={name:"App",components:{TradeView:r("VU/8")(P,C,!1,function(e){r("Dsm5")},null,null).exports},mounted:function(){this.$refs.trade.init("BTCUSDT",5)}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("trade-view",{ref:"trade"})],1)},staticRenderFns:[]},I=r("VU/8")(k,A,!1,null,null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:I},template:"<App/>"})},eajV:function(e,t){e.exports={_from:"websocket",_id:"websocket@1.0.28",_inBundle:!1,_integrity:"sha1-nl9v3Io/4B1EImR++Tq92NRaeNM=",_location:"/websocket",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"websocket",name:"websocket",escapedName:"websocket",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npm.taobao.org/websocket/download/websocket-1.0.28.tgz?cache=0&other_urls=https%3A%2F%2Fregistry.npm.taobao.org%2Fwebsocket%2Fdownload%2Fwebsocket-1.0.28.tgz",_shasum:"9e5f6fdc8a3fe01d4422647ef93abdd8d45a78d3",_spec:"websocket",_where:"E:\\A网信天成\\项目\\tradingviewWebSocket",author:{name:"Brian McKelvey",email:"theturtle32@gmail.com",url:"https://github.com/theturtle32"},browser:"lib/browser.js",bugs:{url:"https://github.com/theturtle32/WebSocket-Node/issues"},bundleDependencies:!1,config:{verbose:!1},contributors:[{name:"Iñaki Baz Castillo",email:"ibc@aliax.net",url:"http://dev.sipdoc.net"}],dependencies:{debug:"^2.2.0",nan:"^2.11.0","typedarray-to-buffer":"^3.1.5",yaeti:"^0.0.6"},deprecated:!1,description:"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",devDependencies:{"buffer-equal":"^1.0.0",faucet:"^0.0.1",gulp:"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4",jshint:"^2.0.0","jshint-stylish":"^2.2.1",tape:"^4.9.1"},directories:{lib:"./lib"},engines:{node:">=0.10.0"},homepage:"https://github.com/theturtle32/WebSocket-Node",keywords:["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],license:"Apache-2.0",main:"index",name:"websocket",repository:{type:"git",url:"git+https://github.com/theturtle32/WebSocket-Node.git"},scripts:{gulp:"gulp",install:"(node-gyp rebuild 2> builderror.log) || (exit 0)",test:"faucet test/unit"},version:"1.0.28"}}},["NHnr"]);
//# sourceMappingURL=app.5a0d830656ceef0f6934.js.map
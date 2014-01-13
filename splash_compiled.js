if(!lt.util.load.provided_QMARK_('lt.plugins.splash')) {
goog.provide('lt.plugins.splash');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.files');
goog.require('lt.objs.cli');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('cljs.reader');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.cli');
goog.require('lt.objs.app');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');

lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.splash","on-close-destroy","lt.plugins.splash/on-close-destroy",3156196806),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (p1__7303_SHARP_){return lt.object.raise.call(null,p1__7303_SHARP_,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
}),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.plugins.splash.wrap_html = (function wrap_html(hiccup){var e__7171__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),hiccup], null));var seq__7310_7316 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.close","tabs.close",4150844154));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"new-file","new-file",2344641787));
})], null)));var chunk__7311_7317 = null;var count__7312_7318 = 0;var i__7313_7319 = 0;while(true){
if((i__7313_7319 < count__7312_7318))
{var vec__7314_7320 = cljs.core._nth.call(null,chunk__7311_7317,i__7313_7319);var ev__7172__auto___7321 = cljs.core.nth.call(null,vec__7314_7320,0,null);var func__7173__auto___7322 = cljs.core.nth.call(null,vec__7314_7320,1,null);lt.util.dom.on.call(null,e__7171__auto__,ev__7172__auto___7321,func__7173__auto___7322);
{
var G__7323 = seq__7310_7316;
var G__7324 = chunk__7311_7317;
var G__7325 = count__7312_7318;
var G__7326 = (i__7313_7319 + 1);
seq__7310_7316 = G__7323;
chunk__7311_7317 = G__7324;
count__7312_7318 = G__7325;
i__7313_7319 = G__7326;
continue;
}
} else
{var temp__4092__auto___7327 = cljs.core.seq.call(null,seq__7310_7316);if(temp__4092__auto___7327)
{var seq__7310_7328__$1 = temp__4092__auto___7327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7310_7328__$1))
{var c__6528__auto___7329 = cljs.core.chunk_first.call(null,seq__7310_7328__$1);{
var G__7330 = cljs.core.chunk_rest.call(null,seq__7310_7328__$1);
var G__7331 = c__6528__auto___7329;
var G__7332 = cljs.core.count.call(null,c__6528__auto___7329);
var G__7333 = 0;
seq__7310_7316 = G__7330;
chunk__7311_7317 = G__7331;
count__7312_7318 = G__7332;
i__7313_7319 = G__7333;
continue;
}
} else
{var vec__7315_7334 = cljs.core.first.call(null,seq__7310_7328__$1);var ev__7172__auto___7335 = cljs.core.nth.call(null,vec__7315_7334,0,null);var func__7173__auto___7336 = cljs.core.nth.call(null,vec__7315_7334,1,null);lt.util.dom.on.call(null,e__7171__auto__,ev__7172__auto___7335,func__7173__auto___7336);
{
var G__7337 = cljs.core.next.call(null,seq__7310_7328__$1);
var G__7338 = null;
var G__7339 = 0;
var G__7340 = 0;
seq__7310_7316 = G__7337;
chunk__7311_7317 = G__7338;
count__7312_7318 = G__7339;
i__7313_7319 = G__7340;
continue;
}
}
} else
{}
}
break;
}
return e__7171__auto__;
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.splash","splash","lt.plugins.splash/splash",2046438806),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"splash","splash",4413005273),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.splash","on-close-destroy","lt.plugins.splash/on-close-destroy",3156196806)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Splash",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){var path = cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.plugins.splash.wrap_html.call(null,cljs.reader.read_string.call(null,lt.objs.files.bomless_read.call(null,path)));
}));

lt.plugins.splash.__BEH__show_splash = (function __BEH__show_splash(this$,path){if(cljs.core.truth_(lt.objs.cli.args.call(null)))
{return null;
} else
{var splash = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.splash","splash","lt.plugins.splash/splash",2046438806),path);lt.objs.app.win.focus();
lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)));
lt.objs.tabs.add_BANG_.call(null,splash);
return lt.objs.tabs.active_BANG_.call(null,splash);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.splash","show-splash","lt.plugins.splash/show-splash",2044683334),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.splash.__BEH__show_splash,new cljs.core.Keyword(null,"desc","desc",1016984067),"App: Open the splash",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"filename",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"string","string",4416885635)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));

}

//# sourceMappingURL=
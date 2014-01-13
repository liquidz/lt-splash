(ns lt.plugins.splash
  (:require
    [lt.object       :as object]
    [lt.objs.command :as cmd]
    [lt.objs.files   :as files]
    [lt.objs.cli     :as cli]
    [lt.objs.app     :as app]
    [lt.objs.tabs    :as tabs]
    [lt.util.dom     :as dom]
    [cljs.reader     :as reader])
  (:require-macros
   [lt.macros :refer [behavior defui]]))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction #(object/raise % :destroy))

(defui wrap-html [hiccup]
  [:div hiccup]
  :click (fn [] (cmd/exec! :tabs.close)
                (cmd/exec! :new-file)))

(object/object* ::splash
                :tags #{:splash}
                :behaviors [::on-close-destroy]
                :name "Splash"
                :init (fn [this]
                        (let [path (-> @this :args first)]
                          ; TODO: error handling
                          (-> path files/bomless-read reader/read-string wrap-html))))

(behavior ::show-splash
          :triggers #{:post-init}
          :type     :user
          :desc     "App: Open the splash"
          :params   [{:label "filename" :type :string}]
          :reaction (fn [this path]
                      (when-not (cli/args)
                        (let [splash (object/create ::splash path)]
                          (.focus app/win)
                          (dom/focus (dom/$ :body))
                          (tabs/add! splash)
                          (tabs/active! splash)))))

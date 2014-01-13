# Splash

Light Table plugin for showing splash screen instread of LT's welcome screen.

## Usage

 * /tmp/splash.clj
```clojure
[:h1 "hello world"]
```

 * user.behaviors
```clojure
:app [(:lt.plugins.splash/show-splash "/tmp/splash.clj")]
```

### License

Copyright (C) 2014 [uochan](http://twitter.com/uochan).

Distributed under the GPLv3, see LISENCE.md for the full text.

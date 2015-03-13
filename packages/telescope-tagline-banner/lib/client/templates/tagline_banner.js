Template[getTemplate('taglineBanner')].helpers({
  showTaglineBanner: function () {
    return Router.current().location.get().path == '/' && !!getSetting('title') && !!getSetting('tagline') && !!getSetting('showTaglineBanner');
  }
});


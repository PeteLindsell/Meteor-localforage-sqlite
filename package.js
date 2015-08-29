Package.describe({
  name: 'raix:localforage-sqlite',
  version: '1.0.0-rc.3',
  summary: "Offline storage driver SQL lite for cordova"
});

Cordova.depends({
	// io.litehelpers.cordova.sqlite
	'cordova-sqlite-storage': '0.7.10'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.2-rc.4');
  api.use('ecmascript', 'web.cordova');

  // Depends on the serializer
  api.use('raix:localforage-serializer@1.2.4-rc.1', 'web.cordova');

  api.addFiles('sqlite.js', 'web.cordova');
  api.export('cordovaSqliteplugin', 'web.cordova');
});

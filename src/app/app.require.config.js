requirejs.config({
  baseUrl: 'dist/js/libraries',
  paths: {
    app: '../app',
    jquery    : 'jquery3.3.1.min',
    bootstrap : 'bootstrap.bundle.4.1.2',
    templates : '../templates',
    main : '../main'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    main:{
      deps: [
        'bootstrap',
        'templates'
      ]
    }
  }
});
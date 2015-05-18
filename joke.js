angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('joke of te day', {
            sizex: 2,
            sizey: 2,
            color: '#292625',
            template: 'Dashboard-widget-Joke/joke.html',
            dataBind: {
                type: 'external',
                source: 'http://api.icndb.com/jokes/random',
                interval: 1000
            }
        });
    });

angular.module('widget')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('joke of te day', {
            sizex: 2,
            sizey: 2,
            color: '#292625',
            template: 'Dashboard-Widget-Joke/joke.html',
            dataBind: {
                type: 'external',
                source: 'http://api.icndb.com/jokes/random',
                interval: 60 * 60 * 1000
            }
        });
    });

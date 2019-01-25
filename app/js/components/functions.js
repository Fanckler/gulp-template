function sayHello() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Made with ❤️ by Omelchenko Sergiy %c http://os.developer.zzz.com.ua %c %c  \n\n',
            'border: 1px solid #000;color: #000; ' +
            'background: #fff001; padding:5px 0;', 'color: #fff; ' +
            'background: #1c1c1c; padding:5px 0;' +
            'border: 1px solid #000;',
            'background: #fff; padding:5px 0;',
            'color: #b0976d; background: #fff;' +
            'padding:5px 0;'];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Made with love ❤️ - Omelchenko Sergiy️');
    }
}


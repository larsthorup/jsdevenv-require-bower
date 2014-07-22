
define('require-less/less!app/home/about/about',[],function(){});

define('text!app/home/about/about.html',[],function () { return '<p class="about">\n    About it :)\n</p>';});

define('app/home/about/about',['require','jquery','less!app/home/about/about','text!app/home/about/about.html'],function (require) {
    require('jquery');
    require('less!app/home/about/about');
    var aboutHtml = require('text!app/home/about/about.html');

    function render(container) {
        container.html(aboutHtml);
    }

    return {
        render: render
    };
});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('p.about {\n  color: #ff0000;\n}\n');

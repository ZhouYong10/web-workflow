/**
 * Created by Administrator on 2015/12/21.
 */
fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'README.md', 'package.json', '.gitignore']);
fis.config.set("project.watch.usePolling", true);

fis.hook('commonjs');

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        sourceMap: true,
        useInlineMap: true
    })
});


/*
* deal with javascript
* */
fis.set('project.fileType.text', 'es6');
fis.match('/src/**/(*).{js,es6}', {
    isMod: true,
    id: '$1'
});

fis.match('/{src,static,test,mock}/**.es6', {
    parser: fis.plugin('babel-5.x'),
    rExt: '.js'
});

fis.match('/{src,static}/(**.{js,es6})', {
    release: '/static/js/$1'
});

fis.match('/{mock,test}/(**.{js,es6})', {
    release: '$0'
});

/*
* deal with stylesheet
* */
fis.match('/{src,static}/**.scss', {
    parser: fis.plugin('node-sass'),
    rExt: '.css'
});

fis.match('/{src,static}/(**.{css,scss})', {
    postprocessor: fis.plugin('autoprefixer', {
        "browsers": ["last 30 versions"],
        "cascade": true,
        "remove": true
    }),
    release: '/static/css/$1'
});

/*
* deal with image
* */
fis.match('/{src,static}/(**.{png,jpg,gif})', {
    //optimizer: fis.plugin('png-compressor'),
    release: '/static/images/$1'
});

/*
*  deal with html
* */
fis.match('/src/**.html', {
    release: false
});
fis.match('/src/pages/**/(*.html)', {
    release: '/$1',
    useCache: false
});

/*
* deal with plugins
* */
fis.match('/static/plugins/(**)', {
    release: '/static/$1'
});

/*
* deploy
* */
//fis.match('/{src,static}/**', {
//    deploy: fis.plugin('local-deliver', {
//        to: './output'
//    })
//});


/*
* production environment
* */
fis.media('prod')
    .match('/{src,static,test,mock}/(**.{js,es6})', {
        useHash: true,
        optimizer: fis.plugin('uglify-js')
    })
    .match('/{src,static}/(**.{css,scss})', {
        useHash: true,
        optimizer: fis.plugin('clean-css'),
        useSprite: true
    })
    .match('/static/plugins/**.css', {
        useHash: false
    })
    .match('/{src,static}/(**.{png,jpg,gif})', {
        useHash: true
    })
    .match('/src/pages/**.html', {
        optimizer: fis.plugin('htmlmin', {
            removeCommentsFromCDATA: true,
            removeCDATASectionsFromCDATA: true,
            collapseWhitespace: true,
            //conservativeCollapse: false,
            //preserveLineBreaks: false,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            //removeOptionalTags: true,
            //removeEmptyElements: true,
            minifyJS: true,
            minifyCSS: true
        })
    })
    .match('::packager', {
        postpackager: fis.plugin('loader', {
            allInOne: {
                css: '/static/pak/${filepath}_aio.css',
                js: '/static/pak/${filepath}_aio.js',
                ignore: '/static/plugins/**.js'
            },
            useInlineMap: true
        }),
        spriter: fis.plugin('csssprites')
    });




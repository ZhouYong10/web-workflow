/**
 * Created by Administrator on 2016/1/4.
 */
/**
 * Created by Administrator on 2015/12/21.
 */

//忽略产出的文件
fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'README.md', 'package.json', '.gitignore']);

fis.hook('commonjs');

fis.match('::packager', {
    postpackager: fis.plugin('loader')
});


/*
 * deal with javascript
 * */
//设置fis识别后缀为‘es6’的文件
fis.set('project.fileType.text', 'es6');
fis.match('/src/**.es6', {
    parser: fis.plugin('babel-5.x'),
    rExt: '.js'
});

fis.match('/src/**/(*).{js,es6}', {
    isMod: true,
    id: '$1'
});

fis.match('/{src,static}/(**.{js,es6})', {
    release: '/static/js/$1'
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
    optimizer: fis.plugin('png-compressor'),
    release: '/static/image/$1'
});

/*
 *  deal with html
 * */
fis.match('/src/**.html', {
    release: false
});
fis.match('/src/pages/**/(*.html)', {
    release: '/view/$1',
    useCache: false
});



/*
 * production environment
 * */
fis.media('prod')
    .match('/{src,static}/(**.{js,es6})', {
        useHash: true,
        optimizer: fis.plugin('uglify-js')
    })
    .match('/{src,static}/(**.{css,scss})', {
        useHash: true,
        optimizer: fis.plugin('clean-css'),
        useSprite: true
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
                js: '/static/pak/${filepath}_aio.js'
            },
            useInlineMap: true
        }),
        spriter: fis.plugin('csssprites')
    });




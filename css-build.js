const build = require('rsuite-theme');
const outPutDir = 'assets/css';

build.importResources({
    paths: [
        'fonts/**/*.*'
    ],
    dist: outPutDir
});

build.palette({
    baseColor: '#6292f0',
    src: 'css/rsuite.min.css',
    dist: `${outPutDir}/rsuite.min.css`
});

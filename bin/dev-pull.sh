#!/bin/bash

## 在 rsuite.github.io/ 目录下运行

nrm use hypers


echo '-------in rsuite.github.io-------'
npm install rsuite
npm install rsuite-treepicker
npm install rsuite-daterangepicker

echo 're-install finish'

echo '-------in rsuite-------'
cd ../rsuite

npm install rsuite-treepicker
npm install rsuite-daterangepicker
echo 're-install finish'


exit;
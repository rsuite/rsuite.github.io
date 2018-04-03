#!/bin/bash

## 在 rsuite.github.io/ 目录下运行

nrm use hypers


echo '-------in rsuite.github.io-------'
## npm install rsuite-table

echo 're-install finish'

echo '-------in rsuite-------'
cd ../rsuite

npm install rsuite-selectpicker
npm install rsuite-checkpicker
npm install rsuite-treepicker
npm install rsuite-checktreepicker
npm install rsuite-cascader
npm install rsuite-datepicker
npm install rsuite-daterangepicker
npm install rsuite-notification
echo 're-install finish'


exit;
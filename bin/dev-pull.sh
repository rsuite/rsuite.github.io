#!/bin/bash

## 在 rsuite.github.io/ 目录下运行

nrm use hypers


echo '-------in rsuite.github.io-------'
##rm -R -f node_modules/rsuite-datepicker
npm install rsuite-datepicker
echo 're-install finish'

echo '-------in rsuite-------'
cd ../rsuite
##rm -R node_modules/rsuite-selectpicker/
##rm -R node_modules/rsuite-checkpicker/
##rm -R node_modules/rsuite-cascader/
##rm -R -f node_modules/rsuite-datepicker
##npm install rsuite-selectpicker
##npm install rsuite-checkpicker
##npm install rsuite-cascader
npm install rsuite-datepicker
echo 're-install finish'




exit;
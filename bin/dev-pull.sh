#!/bin/bash

## 在 rsuite.github.io/ 目录下运行

nrm use hypers


echo '-------in rsuite-------'
cd ../rsuite
rm -R node_modules/rsuite-selectpicker/
npm install rsuite-selectpicker
echo 're-install finish'


echo '-----in rsuite.github.io-----'
rm -R node_modules/rsuite/
rm -R node_modules/rsuite-selectpicker/
npm install rsuite
npm install rsuite-selectpicker
echo 're-install finish'

exit;
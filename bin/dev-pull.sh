#!/bin/bash

## 在 rsuite.github.io/ 目录下运行

nrm use hypers


echo '-------in rsuite-------'
cd ../rsuite
rm -R node_modules/rsuite-selectpicker/
rm -R node_modules/rsuite-checkpicker/
npm install rsuite-selectpicker
npm install rsuite-checkpicker
echo 're-install finish'

exit;
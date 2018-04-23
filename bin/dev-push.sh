#!/bin/bash

nrm use hypers



echo '-----in rsuite-cascader-----'

npm unpublish rsuite-cascader@3.0.0-next
cd ../rsuite-cascader
npm run build
npm publish
git add .
git commit -m 'Updates'
git push

echo 're-publish finish'




echo '-----in rsuite-selectpicker-----'

npm unpublish rsuite-selectpicker@3.0.0-next.9
cd ../rsuite-selectpicker
npm run build
npm publish
git add .
git commit -m 'Updates'
git push

echo 're-publish finish'



echo '-----in rsuite-checkpicker-----'

npm unpublish rsuite-checkpicker@3.0.0-next
cd ../rsuite-checkpicker
npm run build
npm publish
git add .
git commit -m 'Updates'
git push

echo 're-publish finish'


#!/bin/bash

nrm use hypers

echo '-----in rsuite-selectpicker-----'

npm unpublish rsuite-selectpicker@3.0.0-next.9
cd ../rsuite-selectpicker
npm run build
npm publish

echo 're-publish finish'


echo '-----in rsuite-----'
npm unpublish rsuite@3.0.0-next.12
cd ../rsuite
npm run build
npm publish

echo 're-publish finish'
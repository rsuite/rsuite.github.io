#!/bin/bash

declare -a array

array=(
  rsuite-table
  rsuite-selectpicker
  rsuite-checkpicker
  rsuite-cascader
  rsuite-datepicker
  rsuite-daterangepicker
  rsuite-echarts
)


for var in ${array[@]};do
rm -Rf ./v2.0/${var} &&  mkdir -p ./v2.0/${var} && cp -R ../${var}/assets/* ./v2.0/${var}
echo ${var} '>>> done'
done


rm -Rf ./v2.0/rsuite-form-lib &&  mkdir -p ./v2.0/rsuite-form-lib && cp -R ../form-lib/assets/* ./v2.0/rsuite-form-lib
echo 'form-lib >>> done'
#!/bin/bash

echo '-----------------------------------------'
read -p "输入更新内容：" msg
echo '-----------------------------------------'

# 更新README更新记录
date=$(date "+%Y年%m月%d日 %H:%M:%S")
num=$(expr $(cat README.md | grep -n '更新内容' | awk -F ":" '{print $1}') + 1)

sed -i '' $num'a\
>
' README.md

sed -i '' $num'a\
'"> **[$date]** $msg"'
' README.md

# 构建
npm run build

# 更新GitHub
git add .
git commit -m "$msg"
git push origin master

echo '-------------- 更新完成 --------------'

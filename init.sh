#!/bin/bash


# 获取用户输入的项目名称

echo "请输入项目名称："

read project_name


# 创建项目目录

mkdir $project_name

cd $project_name


# 创建 src 和 test 目录

mkdir src

mkdir test


# 在 src 目录下创建入口文件

touch src/index.ts


# 在 test 目录下创建测试文件

touch test/index.test.ts


# 初始化 npm 项目

npm init -y


# 安装依赖模块

npm install --save-dev typescript ts-node eslint prettier husky lint-staged @types/node jest


# 创建 TypeScript 配置文件

npx tsc --init


# 配置 TypeScript 编译选项

sed -i '' 's/"target": "es3"/"target": "es6"/g' tsconfig.json

sed -i '' 's/"outDir": ".\/"/"outDir": "dist\/"/g' tsconfig.json

sed -i '' 's/"rootDir": ".\/"/"rootDir": "src\/"/g' tsconfig.json

sed -i '' 's/"strict": false/"strict": true/g' tsconfig.json

sed -i '' 's/"esModuleInterop": false/"esModuleInterop": true/g' tsconfig.json


# 添加 TypeScript 编译命令到 package.json

sed -i '' 's/"test": "echo \"Error: no test specified\" && exit 1"/"test": "jest",\n    "build": "tsc",/g' package.json


# 配置 eslint 和 prettier

npx eslint --init

npx prettier --write .


# 配置 husky 和 lint-staged

echo '{

  "hooks": {

    "pre-commit": "lint-staged",

    "pre-push": "npm run test"

  }

}' > .huskyrc.json


echo '{

  ".{js,ts,json,md}": [
    "prettier --write",
    "git add"
  ],
  ".ts": [

    "eslint --fix",

    "git add"

  ]

}' > .lintstagedrc.json


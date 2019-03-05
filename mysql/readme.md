- 安全考虑
  配置写在.env
  提交的时候gitignore .env

- sequelize 命令行
sequelize-cli 这里将集成mysql 初始化
node react app 数据库服务(数据存储)

1. init 
一个应用对应一个数据库eleme DB_NAME 使用sequelize工具来形象化mysql 操作
代码运行环境分为开发环境，线上环境(production)，测试环境(test)
线上环境的 数据库密码不会给新手
process.env.NODE_ENV 设置当前环境是什么
线上机器走 .env.prod
本地开发走 .env 只需要有基本结构和部分数据即可
env2帮我们将.env 逐行读取为配置

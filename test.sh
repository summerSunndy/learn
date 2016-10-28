#!/bin/bash
aa="hello world !"
echo $aa
echo ${aa}

# for
for file in `ls /etc`; do
   echo "config file ${file}"
done

# read only
path="/etc/skwel"
readonly path
echo $path
#path="/etc/groups"

# delete variable
unset aa
echo $aa

# can not delete read only
# unset path
echo $path

# 局部变量  环境变量  shell变量  字符串: 单引号任何字符都原样输出, 里面不能有单引号转义也不行

# string length
echo `expr length ${aa}`
echo expr "$aa":".*"
echo ${#aa}

# substring start index and end index
bb="this is a example"
echo ${bb:3:10}

# search string index   "expr  index"
echo expr index ${bb} "a"

# array
cc=(0 1 2 3 4 a)
dd[0]=spring
dd[1]=coding

#  length
echo ${#aa[@]}
echo ${#aa[*]}

#  item
echo ${#aa[6]}

# 参数
# 个数: $#   字符串显示所有参数: $*/$@    进程ID: $$    后台运行的最后一个进程ID: $!
#  shell使用的当前选项:  $-     显示最后命令的退出状态: $?   
echo $@  $$  $!  $?

# 运算: 算数  关系  布尔  字符串  文件测试  expr
# +号两边有空白符，否则为当作字符串
dd=`expr 4 + 2`
ee=`expr 2 + 4`
echo $dd  $ee

# 条件 中括号 与 == 都有空白符
if [ $dd == $ee ]
then 
    echo "equal"
fi

# 关系: -eq 相等  -ne 不相等  -gt 大于  -lt  小于  -ge  大于等于  -le 小于等于
# 算术: ==  !=
# 布尔: !非  -a与  -o或
# 逻辑: &&  ||
# 字符串: = 相等  != 不相等  -z 长度为0  -n  长度不为0  str 不为空
# 文件: 类型/权限/s不为空/e存在/u SUID位/g SGID位  file

# echo 使用语法
# 字符串引号可省略    单引号为原样输出
# read 变量  标准输入
# 显示换行  echo -e "\n"
# ``  命令执行结果

# printf 功能更强大: 格式"%-10s"  或 "%-4s\n"  或  "%-4.2f\n"保留两位小数  %c  %d   -左对齐
# 此时单引号与双引号或无引号 效果一样


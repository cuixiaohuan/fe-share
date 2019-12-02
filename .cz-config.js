'use strict';

module.exports = {
  types: [
    {value: '添加新特性', name: '特性:  添加一个新的特性'},
    {value: '修复问题', name: '修复:  修复一个Bug或者解决冲突'},
    {value: '格式调整', name: '格式:  空格, 分号, 格式, 样式等修复'},
    {value: '性能优化', name: '性能:  提升性能'}
  ],
  scopes: [
    {name: '导航'},
    {name: '主模块'}
  ],
  scopeOverrides: {
    '修复问题': [
      {name: '修复bug'},
      {name: '解决冲突'}
    ]
  },
  // 覆盖提示，默认值如下
  messages: {
    subjectLimit: 100,
    type: '选择一种你的提交类型:',
    scope: '选择一个标签 (可选):',
    customScope: '自定义此次提交的标签:',
    subject: '短说明(解决的bug编号或者涉及到的模块):\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  allowCustomScopes: true,
  getQuestions: function(config, cz) {
  },
  skipQuestions: ['footer', 'breaking'],
}

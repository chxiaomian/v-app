var Mock = require('mockjs')
var Random = Mock.Random
// var data = Mock.mock({
//   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   'list|1-10': [
//     {
//       // 属性 id 是一个自增数，起始值为 1，每次增 1
//       'id|+1': 1
//     }
//   ]
// })

Mock.mock('/api/data', (req, res) => {
  return {
    data: ['a', 'b']
  }
})

Mock.mock('/api/swiperData', {
  'swiperData|4': [
    {
      'imgPath': Random.image('800x400', '', '', 'png', ''),
      'id': '@id'
    }
  ]
})

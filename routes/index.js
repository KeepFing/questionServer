const router = require('koa-router')()

const fs = require('fs')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/api/user/string', async (ctx, next) => {
  ctx.body = {'code':0,msg:'success'}
})

router.post('/upload',async (ctx, next) => {
  const file = ctx.request.files.file; // 获取上传文件
  const reader = fs.createReadStream(file.path); // 创建可读流
  const ext = file.name.split('.').pop(); // 获取上传文件扩展名
  const upStream = fs.createWriteStream(`./public/upload/${Math.random().toString()}.${ext}`); // 创建可写流
  console.log(upStream,'文件保存信息')
  reader.pipe(upStream); // 可读流通过管道写入可写流
  return ctx.body = '上传成功';
  
})



module.exports = router

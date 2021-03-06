// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
// $.ajaxPrefilter(function (options) {
//   // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
//   // options.url = 'http://ajax.frontend.itheima.net' + options.url
//   options.url = 'http://www.liulongbin.top:3007' + options.url

//   // 统一为有权限的接口，设置 headers 请求头
//   if (options.url.indexOf('/my/') !== -1) {
//     options.headers = {
//       Authorization: localStorage.getItem('token') || ''
//     }
//   }

//   // 全局统一挂载 complete 回调函数
//   options.complete = function (res) {
//     // console.log('执行了 complete 回调：')
//     // console.log(res)
//     // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
//     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
//       // 1. 强制清空 token
//       localStorage.removeItem('token')
//       // 2. 强制跳转到登录页面
//       location.href = '/login.html'
//     }
//   }
// });

// 每次调用$.get () 或者$.post() $.ajax() 会先调用这个函数 $.ajaxPrefilter()
// 在这个函数中 可以拿到ajax配置对象
$.ajaxPrefilter(function (options) {
  // console.log(options.url);  是 根路径拼接上传进来的参数
  // 在发起真正的ajax 请求之前 统一拼接请求的根路径
  options.url = 'http://ajax.frontend.itheima.net' + options.url;
  // 统一为 有权限的接口设置 headers 请求头
  // 判断请求的路径里边是否有 my 有这个my 则是需要权限的
  if (options.url.indexOf('/my/') != -1) {
    options.headers = {
      Authorization: localStorage.getItem('token') || '',
    }
  }

  //  全局统一挂载complete回调函数,
  options.complete = function (res) {
      if (res.responseJSON.status == 1 && res.responseJSON.message == '身份认证失败！') {
        // 1 强制清空 token   2  强制跳转页面
        localStorage.removeItem('token');
        location.href = '/code/login.html';
      }
  }
});


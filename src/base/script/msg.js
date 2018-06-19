/*
*   create by weishengjian
*   on        201806191413
*/
/*--------------------------------------toast---------------------------------------------------*/

const defaultToastOptions = {
  title: null,                  //提示的消息
  icon: 'none',                 //显示的图标：success|loading|none
  image: null,                  //显示的图片路径，优先级高于icon，注意dist目录，使用路径示例：/static/img/book.png
  duration: 1500,               //显示时间，的那位ms
  mask: false,                  //是否显示透明蒙层，防止触摸穿透，默认：false
  success: null,                //接口调用成功的回调函数
  fail: null,                   //接口调用失败的回调函数
  complete: null,               //接口调用结束的回调函数（调用成功、失败都会执行）
};

export function showToast(msg, options) {
  options = options || {};
  (!msg || msg === '') && (msg = '消息内容为空！');
  let newOptions = options;
  newOptions.title = msg
  wx.showToast(Object.assign({}, defaultToastOptions, newOptions));
}

export function hideToast() {
  wx.hideToast();
}

/*--------------------------------------loading---------------------------------------------------*/

const defaultLoadingOptions = {
  title: null,
  mask: null,
  success: null,
  fail: null,
  complete: null,
}

export function showLoading(msg, options) {
  options = options || {};
  let newOptions = options;
  newOptions.title = msg
  wx.showLoading(Object.assign({}, defaultLoadingOptions, newOptions));
}

export function hideLoading() {
  wx.hideLoading();
}

/*--------------------------------------modal---------------------------------------------------*/
const defaultModalOptions = {
  title: '提示',
  content: '无',
  showCancel: false,
  cancelText: '取消',
  confirmText: '确定',
  cancelColor: '#000000',
  confirmColor: '#3CC51F',
  success: undefined,
  fail: undefined,
  complete: undefined,
}

export function showModal(msg, options) {
  options = options || {};
  let newOptions = options;
  newOptions.content = msg;
  wx.showModal(Object.assign({}, defaultModalOptions, newOptions));
}

/*--------------------------------------confirm---------------------------------------------------*/
const defaultConfirmOptions = {
  title: '确认提示',
  showCancel: true,
}

export function showConfirm(msg, options) {
  let o = Object.assign({}, defaultModalOptions, defaultConfirmOptions, options);
  o.content = msg;
  if (!o.success) {
    o.success = function (ret) {
      if (ret.confirm) {
        o.onConfirm && (o.onConfirm());
      } else {
        o.onCancel && (o.onCancel());
      }
    }
  }
  wx.showModal(o);
}

/*--------------------------------------actionSheet---------------------------------------------------*/
const defaultActionSheetOptions = {
  itemList: null,
  itemColor: '#000',
}

export function showActionSheet(labels, options) {
  let o = Object.assign({}, defaultActionSheetOptions, options);
  o.itemList = labels;
  wx.showActionSheet(o);
}

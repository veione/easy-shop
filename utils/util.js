const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 将给定的列表分页显示
 * @param {} dataList 数据列表
 * @param {*} rowSize 一行多少个元素
 */
const formatCategoryToPageData = (dataList, rowSize) => {
  if (dataList && dataList.length > 0) {
    let pageSize = rowSize * 2;
    let totalPage = (dataList.length + pageSize - 1) / pageSize;
    let pageDatas = [];
    let tmpData = [];
    let j = 0;
    for (let i = 0; i < dataList.length; i++) {
      if ((i != 0 && i % pageSize == 0)) {
        pageDatas.push(tmpData);
        tmpData = [];
        tmpData.push(dataList[i]);
        j++;
      } else if (i == dataList.length - 1) {
        tmpData.push(dataList[i]);
        pageDatas.push(tmpData);
        tmpData = [];
        j++;
      } else {
        tmpData.push(dataList[i]);
      }
    }
    return pageDatas;
  }
}

const isObject = (obj)=>{
  return (typeof obj=='object')&&obj.constructor==Object;
}

const  isFunction=(obj)=>{
  return (typeof obj=='function')&&obj.constructor==Function;
}

const isDate=(obj)=>{
  return (typeof obj=='object')&&obj.constructor==Date;
}

const isNumber=(obj)=>{
  return (typeof obj=='number')&&obj.constructor==Number;
}

const isString=(obj)=>{
  return (typeof obj=='string')&&obj.constructor==String;
}

const isArray=(obj)=>{
  return (typeof obj=='object')&&obj.constructor==Array;
}

const add=(a, b)=> {
  var c, d, e;
  try {
      c = a.toString().split(".")[1].length;
  } catch (f) {
      c = 0;
  }
  try {
      d = b.toString().split(".")[1].length;
  } catch (f) {
      d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

const sub=(a, b) =>{
  var c, d, e;
  try {
      c = a.toString().split(".")[1].length;
  } catch (f) {
      c = 0;
  }
  try {
      d = b.toString().split(".")[1].length;
  } catch (f) {
      d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

const  mul=(a, b)=> {
  var c = 0,
      d = a.toString(),
      e = b.toString();
  try {
      c += d.split(".")[1].length;
  } catch (f) {}
  try {
      c += e.split(".")[1].length;
  } catch (f) {}
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

const div=(a, b) =>{
  var c, d, e = 0,
      f = 0;
  try {
      e = a.toString().split(".")[1].length;
  } catch (g) {}
  try {
      f = b.toString().split(".")[1].length;
  } catch (g) {}
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}

  /**
  * 计算滑动角度
  * @param {Object} start 起点坐标
  * @param {Object} end 终点坐标
  */
 const angle=(start, end) =>{
  var _X = end.X - start.X,
  _Y = end.Y - start.Y
  //返回角度 /Math.atan()返回数字的反正切值
  return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
}

module.exports = {
  formatTime: formatTime,
  formatCategoryToPageData: formatCategoryToPageData,
  isObject: isObject,
  isArray: isArray,
  isString: isString,
  isNumber: isNumber,
  isDate: isDate,
  isFunction: isFunction,
  div: div,
  mul: mul,
  add: add,
  sub: sub,
  angle: angle
}

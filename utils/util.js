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

module.exports = {
  formatTime: formatTime,
  formatCategoryToPageData: formatCategoryToPageData,
  isObject: isObject,
  isArray: isArray,
  isString: isString,
  isNumber: isNumber,
  isDate: isDate,
  isFunction: isFunction
}

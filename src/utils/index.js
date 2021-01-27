import Vue from 'vue';
import Cookies from 'js-cookie';
import LayRoute from '@/router/AllChildren';
/**
 * @method 权限继承,子路由继承父级路由的权限
 * @params {Array}routes 路由
 */
export function inheritRoles(routes) {
  const loop = (box, parentRoles = []) => {
    for (let m = 0; m < box.length; m += 1) {
      const el = box[m];
      el.meta = el.meta || {};
      el.meta.roles = el.meta.roles || [];
      el.meta.roles = el.meta.roles.concat(parentRoles);
      if (el.children) {
        loop(el.children, el.meta.roles);
      }
    }
  };
  loop(routes);
}
/**
 * @method 获取后代权限，父级路由合并子路由权限
 * @params {Array}routes 路由
 * @return Array
 */
export function getChildrenRoles(routes) {
  let last = [];
  const loop = (box) => {
    for (let m = 0; m < box.length; m += 1) {
      const el = box[m];
      if (el.meta && el.meta.roles) last = last.concat(el.meta.roles);
      if (el.children) {
        loop(el.children);
      }
    }
  };
  loop(routes);
  return [...new Set(last)];
}
/**
 * @method 设置默认路径
 * @params {Array}routes 路由
 */
export function setDefaultPath(routes) {
  const loop = (array) => {
    for (let m = 0; m < array.length; m += 1) {
      const el = array[m];
      if (el.children) {
        const df = el.children.find((x) => x.path !== '' && x.meta.show);
        if (df) {
          el.children.unshift({ path: '', redirect: df.path });
        } else {
          el.children.unshift({ path: '', redirect: '/404' });
        }
        loop(el.children);
      }
    }
  };
  loop(routes);
}
/**
 * @method 检查并等待目标节点出现
 * @params {dom}dom
 */
export function checkDom(dom, cb) {
  const target = document.querySelector(dom);
  if (target instanceof HTMLElement && target.innerHTML !== '') {
    target.classList.add('globalhide');
  } else {
    setTimeout(() => {
      checkDom(dom, cb);
    }, 200);
  }
}
/**
 * 表格时间格式化
 */
export function formatDate(cellValue) {
  if (cellValue === null || cellValue === '') return '';
  const date = new Date(cellValue);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
/**
 * yyyy-MM-dd
 */
export function formatDay(cellValue) {
  if (cellValue === null || cellValue === '') return '';
  const date = new Date(cellValue);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}-${month}-${day}`;
}
/**
 * 判断是否为移动端
 */
export function isMobile() {
  // return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  return document.body.clientWidth <= 700;
}
/**
 * 获取观远数据
 */
export function getGuanyuan() {
  if (isMobile() || !Cookies.get('Admin-Token')) return;
  setTimeout(getGuanyuan, 12 * 3600 * 1000);
  Vue.axios.get('manufacture/guanyuan/auth').then((res) => {
    if (res.code !== 401 && res.indexOf('https') === 0) {
      const ifm = document.querySelector('.authIframe');
      if (ifm) {
        ifm.src = res;
      } else {
        const newIfm = document.createElement('iframe');
        newIfm.classList.add('authIframe');
        newIfm.src = res;
        document.body.appendChild(newIfm);
      }
    }
  });
}
/**
 * 根据主路径返回菜单
 * @param {object} major 当前主路径
 */
export function getMenuMap(major) {
  const route = JSON.parse(JSON.stringify(LayRoute));
  const curMenu = route[major];
  const loop = (f) => {
    if (f.children) {
      f.children = f.children.filter(
        (x) => x.path && x.meta.show && !x.meta.exclude
      );
      f.children.forEach((s) => {
        loop(s);
      });
    }
  };
  loop(curMenu);
  return curMenu.children;
}

import { Menu, BrowserWindow, dialog, ipcMain } from "electron";
import path from "path";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";

// 构建具体的菜单顶
let template = [
  // 单个菜单项
  {
    label: "设置",
    submenu: [
      {
        label: "总在最前",
        click: function(menuItem, browserWindow, KeyboardEvent) {
          browserWindow.isAlwaysOnTop()
            ? browserWindow.setAlwaysOnTop(false)
            : browserWindow.setAlwaysOnTop(true);
          // eslint-disable-next-line no-console
          console.log(menuItem, browserWindow, KeyboardEvent);
        }
      },
      {
        label: "退出",
        // role:'quit',
        // eslint-disable-next-line no-unused-vars
        click: function(item, win, event) {
          // 询问用户是否真的需要退出
          dialog.showMessageBox(
            {
              // 消息框的类型
              type: "info",
              // 标题
              title: "退出提示",
              message: "请问是否真的需要退出",
              buttons: ["确定", "取消"]
            },
            index => {
              if (index == 0) {
                // 销毁当前窗体
                win.destroy();
              }
            }
          );
        }
      }
    ]
  },
  {
    label: "格式",
    submenu: [
      {
        label: "颜色",
        //    accelerator:'F11',
        accelerator: (function() {
          // 判断系统的类型
          if (process.platform == "darwin") {
            return "command + shift + c";
          } else {
            return "control + shift + c";
          }
        })(),
        click: function() {
          hm_setColor();
        }
      },
      {
        label: "字体增大",
        accelerator: "F11",
        // browserWindow就是我们当前的窗口对象
        // eslint-disable-next-line no-unused-vars
        click: function(menuItem, win, event) {
          // 主进程向渲染进程发送消息。因为menu.js就是在主进程中直接调用的的， 所以它也是主进程中的文件
          win.webContents.send("add");
        }
      },
      {
        label: "字体减小2",
        accelerator: "F12",
        // eslint-disable-next-line no-unused-vars
        click: function(menuItem, win, event) {
          win.webContents.send("sub");
        }
      },
      {
        label: "默认字体",
        accelerator: "F10",
        // eslint-disable-next-line no-unused-vars
        click: function(menuItem, win, event) {
          win.webContents.send("default");
        }
      }
    ]
  }
];

// 为应用程序构建菜单项

let menu = Menu.buildFromTemplate(template);
// 将构建好的菜单项添加到应用程序
Menu.setApplicationMenu(menu);

// 展示关于页面
// eslint-disable-next-line no-unused-vars
function hm_aboutWindow() {
  let win = new BrowserWindow({
    width: 250,
    height: 250,
    title: "关于黑马计算器"
  });
  // 加载about静态页面
  win.loadURL(path.join(__dirname, "../views/about.html"));
  // 设置当前窗体不显示菜单项
  win.setMenu(null);
}

// 展示选择颜色页面
function hm_setColor() {
  let win = new BrowserWindow({
    width: 250,
    height: 100,
    title: "选择颜色",
    webPreferences: {
      nodeIntegration: true
    }
  });
  // win.webContents.openDevTools()
  // eslint-disable-next-line no-console
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "#/setcolor");
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html#/setcolor");
  }
  // 设置不展示菜单项
  win.setMenu(null);
}

// 在主进程中监听渲染进程发送的显示右键菜单的消息
ipcMain.on("rightClick", event => {
  // BrowserWindow.fromWebContents可以获取当前窗口对象
  let win = BrowserWindow.fromWebContents(event.sender);
  // 将此菜单作为 browserWindow 中的上下文菜单弹出
  menu.popup(win);
});

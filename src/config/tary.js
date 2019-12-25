// let { Tray, Menu, dialog } = require("electron");
// let path = require("path");

import { Tray, Menu, dialog } from "electron";
import path from "path";
export default function(win) {
  // eslint-disable-next-line no-console,no-undef
  let tray = new Tray(path.join(__static, "tray.png"));
  let menu = Menu.buildFromTemplate([
    {
      label: "退出",
      click() {
        dialog
          .showMessageBox({
            type: "info",
            title: "退出提示",
            message: "请问是否退出",
            buttons: ["退出", "取消"]
          })
          .then(index => {
            // eslint-disable-next-line no-console
            console.log(index.response == 0);
            if (index.response == 0) {
              tray.destroy();
              win.destroy();
            }
          });
      }
    },
    {
      label: "关于"
    }
  ]);
  tray.on("click", () => {
    if (win.isVisible()) {
      win.hide();
      win.setSkipTaskbar(true);
    } else {
      win.show();
      win.setSkipTaskbar(false);
    }
  });
  tray.setToolTip("计算器");
  tray.setContextMenu(menu);
}

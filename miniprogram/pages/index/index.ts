import { translate } from "../../utils/baidu-translate-api";
// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Page({
  data: {
    query: "",
    hiddenCloseIcon: true,
    translateResult: "",
    curLang: <any>{},
  },
  onLoad() {},
  onShow() {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang,
      });
    }
  },
  onInput(e: any) {
    const { value } = e.detail;
    this.setData({
      query: value,
      hiddenCloseIcon: value === "" ? true : false,
    });
  },
  onConfirm() {
    const { query } = this.data;
    const { lang } = this.data.curLang;
    if (!query) return;
    translate(query, { from: "auto", to: lang }).then((data: any) => {
      let history = wx.getStorageSync("history") || [];
      const result = this.getResult(data);
      history.unshift({
        query,
        result,
      });
      wx.setStorageSync(
        "history",
        history.length > 10 ? history.slice(0, 9) : history
      );
      this.setData({ translateResult: result });
    });
  },
  onTapClose() {
    this.setData({ query: "", hiddenCloseIcon: true, translateResult: "" });
  },
  getResult(data: any) {
    const resultArray = data.trans_result;
    const dst: any = [];
    resultArray.forEach((key: any) => {
      dst.push(key["dst"]);
    });
    return dst.join("\n");
  },
});

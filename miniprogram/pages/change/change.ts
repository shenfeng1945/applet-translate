const app = getApp();

Page({
  data: {
    curLang: {},
    langList: app.globalData.langList,
  },
  onShow() {
    this.setData({ curLang: app.globalData.curLang });
  },
  onTapItem(e: any) {
    const langObject = e.currentTarget.dataset;
    this.setData({ curLang: langObject });
    app.globalData.curLang = langObject;
    wx.switchTab({
      url: "/pages/index/index",
    });
  },
});

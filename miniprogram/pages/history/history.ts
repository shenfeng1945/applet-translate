// logs.ts

Page({
  data: {
    history: [],
  },
  onShow() {
    this.setData({
      history: wx.getStorageSync("history"),
    });
  },
});

// app.ts
App<IAppOption>({
  onLaunch() {
    // 展示本地存储能力
  },
  globalData: {
    curLang: {
      lang: "en",
      index: 0,
      chinese: "英文",
    },
    langList: [
      {
        lang: "en",
        index: 0,
        chinese: "英文",
      },
      {
        lang: "zh",
        index: 1,
        chinese: "中文",
      },
      {
        lang: "jp",
        index: 2,
        chinese: "日语",
      },
      {
        lang: "kor",
        index: 3,
        chinese: "韩语",
      },
      {
        lang: "fra",
        index: 4,
        chinese: "法语",
      },
      {
        lang: "spa",
        index: 5,
        chinese: "西班牙语",
      },
      {
        lang: "ara",
        index: 6,
        chinese: "阿拉伯语",
      },
    ],
  },
});

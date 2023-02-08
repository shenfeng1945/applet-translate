/// <reference path="./types/index.d.ts" />

interface lang {
  lang?: string;
  index?: number;
  chinese?: string;
}

interface IAppOption {
  globalData: {
    curLang: lang;
    langList?: any;
  };
}

import md5 from "./md5.js";

const appid = "20230207001553742";
const key = "VTG06sh3d_ORvgegSeHW";
const url = "https://fanyi-api.baidu.com/api/trans/vip/translate";

export function translate(
  q: string,
  { from = "auto", to = "en" } = { from: "auto", to: "en" }
) {
  return new Promise((resolve, reject) => {
    const salt = Date.now();
    const sign = md5(`${appid}${q}${salt}${key}`);
    wx.request({
      url,
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign,
      },
      success(response) {
        resolve(response.data);
      },
      fail() {
        reject({
          status: "error",
          message: "翻译失败",
        });
        wx.showToast({
          title: "网络异常",
          icon: "none",
          duration: 3000,
        });
      },
    });
  });
}

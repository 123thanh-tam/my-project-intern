/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      "1px": "1px",
    },
    extend: {
      backgroundImage: {
        "img-footer":
          "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Flogowik.com%2Fvisa-vector-logo-268.html&psig=AOvVaw02grP2UHsnSQYK6GKqHVMQ&ust=1695528036636000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMDm6KTsv4EDFQAAAAAdAAAAABAd)",
        "policy-header":
          "url(https://lzd-img-global.slatic.net/g/gcp/lazada/86c5b2e6-1593-4cb9-b519-865237127509_VN-1188-64.jpg_1200xq80.jpg_.webp)",
        globalSale:
          "url(https://lzd-img-global.slatic.net/g/gcp/lazada/f9b64f56-9464-482c-a29a-5daa7b8bb4bf_VN-1188-64.png_1200xq80.png_.webp)",
        globalSalePercent:
          "url(https://lzd-img-global.slatic.net/g/tps/tfs/TB1YvhbD7L0gK0jSZFxXXXWHVXa-90-44.png)",
        globalPhone:
          "url(https://lzd-img-global.slatic.net/g/gcp/lazada/8aabc6b8-e575-40db-8bfc-2c8c2d27a869_VN-1188-64.png_1200xq80.png_.webp)",
        globalFashion:
          "url(https://lzd-img-global.slatic.net/g/gcp/lazada/7cd7215d-a281-47c3-855c-53c77cae1969_VN-1188-64.png_1200xq80.png_.webp)",
        globalAd:
          "url(https://lzd-img-global.slatic.net/g/gcp/lazada/edbf4db7-1090-4dcc-882e-87d807c87c26_VN-702-80.png_1188x80q80.png_.webp)",
      },
      backgroundPosition: {
        "part-img": "-768px -768px",
      },
      spacing: {
        "188px": "11.75rem",
        "184px": "11.5rem",
        "310px": "19.375rem",
        "3.75rem": "3.75rem",
        "9.7rem": "9.7rem",
        "180px": "11.25rem",
        "1px": "1px",
        "0.5px": "0.5px",
        "20.7rem": "20.7rem",
        "22rem-": "-22.1875rem",
        "19rem": "19rem",
        "21.2rem": "21.2rem",
        "7.5rem": "7.5rem",
        "0px": "0px",
        "18.5rem": "18.5rem",
        "10.625rem": "10.625rem",
        "9.375rem": "9.375rem",
        "70%": "70%",
        "40%": "40%",
        "164px": "10.25rem",
        "74px": "4.625rem",
        "3.35rem": "3.35rem",
      },
      boxShadow: {
        "explore-box-shadow": "0 5px 5px -5px #888888",
        "flash-box-shadow": "0 5px 10px -3px #888888",
        "brand-box-shadow": "0px 0px 8px 0px #888888",
        "brad-inner-shadow": "inset 0 10px 4px 0 #888888",
        "catalog-shadow": "0px 5px 5px 0px #888888",
        "slip-shadow": "0px 3px 10px 0px #02af83",
      },
      fontSize: {
        "12px": "12px",
      },
      lineHeight: {
        "44px": "44px",
        "4rem": "4rem",
      },
      fontFamily: {
        Roboto:
          "NotoSans-Regular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Microsoft YaHei,sans-serif!important",
        blink: "Blinker",
      },
      backgroundColor: {
        "grey-head": "rgba(0,0,0,.03)",
        "gray-body": "#999",
        "orange-custome": "#F57224",
        "grey-head2": "#eff0f5",
        "grey-body": "#F5F5F5",
        "counter-red": "#D3232A",
        "brand-bg": "rgba(0,0,0,.5)",
        star: "#faca51",
        "login-hover": "#d0611e",
        facebook: "#3B5998",
        google: "#D34836",
        // slip: "linear-gradient(90deg,#17ca9d,#02af83)",
        slip1: "#17ca9d",
        slip2: "#02af83",
        sliptext: "#11C296",
        slipbg: "#a0f4df",
        counterGlobal: "rgba(0, 0, 0, 0.5)",
        counterGlobalBg: "rgba(0, 0, 0, 0.2)",
        globalSoldBg: "rgb(254, 235, 230)",
        globalImgHover: "rgba(0, 0, 0, 0.15)",
        globalAddWhite: "rgba(255, 255, 255, 0.3)",
        hoverBuy: "#e59b11",
      },
      colors: {
        "orange-custome": "#F57224",
        star: "#faca51",
        "button-color": "#1A9CB8",
        "text-footer": "#0F136D",
        "text-footer3": "rgb(136,136,136);",
        "text-footer3-head": "#606060",
        "forget-pass": "#049CB9",
        sliptext: "#11C296",
        "text-signin": "#feeade",
        here: "#0000EE",
        globalSoldText: "rgb(245, 57, 0)",
        globalPrice: "#FE4960",
        fromSell: "rgb(255, 147, 63)",
        toSell: "rgb(249, 55, 130)",
        globalAddWhiteText: "rgba(255, 255, 255, 0.3)",
        globalPriceBrand: "#F02576",
        reviewText: "#1A9CB7",
        buyNow: "#FFB916",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xl": { max: "2535px" },
      sm: { max: "639px" },
    },
    extend: {
      colors: {
        facebookbg: "#f0f2f5",
        footertxtcolor: "#8a8d91",
        inputbg: "#e8f0fe",
        fcbrand: "#1877f2",
        fcbrandhov: "#166fe5",
        greenBtnhov: "#36a420",
        greenBtn: "#42b72a",
        mobileinputbg: "#f5f6f7",
      },
      spacing: {
        "14px": "0.875rem",
        "6px": "0.375rem",
        "10px": "0.625rem",
        "130px": "8.125rem",
        "-28px": "-1.75rem",
        "-8px": "-0.5rem",
      },
      sizing: {
        auto: "auto",
        "40%": "40%",
      },
      fontSize: {
        "28px": "1.75rem",
        "17px": "1.063rem",
        "14px": "0.875rem",
      },
      maxWidth: {
        "980px": "61.25rem",
      },
      width: {
        "396px": "24.75rem",
        "500px": "31.25rem",
        "300px": "18.75rem",
        "40%": "38%",
      },
      boxShadow: {
        mobileinput: "0px 1px 0px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {},
  plugins: [],
};

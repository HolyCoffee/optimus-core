module.exports = {
  plugins: [
    (data) => {
      //eslint-disable-next-line
      console.log(data);
    },
  ],
  includes: ['dev/**/*.html'],
};

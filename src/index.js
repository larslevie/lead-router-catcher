const http = require("./http");

(async () => {
  try {
    await http();
  } catch (err) {
    console.error(err);
  }
})();

const fs = require("fs");

const client = fs.readFileSync("./admin/.env", { encoding: "utf-8" });

const lines = client.split("\n").map((item) => {
  if (item.includes("REACT_APP_VERSION=")) {
    return `REACT_APP_VERSION=${process.env.npm_package_version}`;
  }
  return item;
});

fs.writeFileSync("./admin/.env", lines.join("\n"));
fs.writeFileSync(
  "./server/config/version.json",
  JSON.stringify({ version: process.env.npm_package_version }, null, 2)
);

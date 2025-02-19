"use strict";
const assert = require("node:assert");
const fs = require("node:fs");
try {
  fs.unlinkSync("./tasks.json");
  console.log("ファイルの初期化に成功しました。");
} catch (err) {
  console.log("ファイルの初期化に失敗しました。");
}
const todo = require("./index.js");

// add と list のテスト
todo.add("ノートを買う");
todo.add("鉛筆を買う");
assert.deepStrictEqual(todo.list(), ["ノートを買う", "鉛筆を買う"]);

// done と donelist のテスト
todo.done("鉛筆を買う");
assert.deepStrictEqual(todo.list(), ["ノートを買う"]);
assert.deepStrictEqual(todo.donelist(), ["鉛筆を買う"]);

// del のテスト
todo.del("ノートを買う");
todo.del("鉛筆を買う");
assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.donelist(), []);

console.log("テストが正常に完了しました");

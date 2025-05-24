/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";

const todoCommentRule = require("./no-incomplete-todo-comments.cjs");
const plugin = { rules: { "no-incomplete-todo-comments": todoCommentRule } };
module.exports = plugin;

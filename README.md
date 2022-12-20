# Lightning Community SDK

[![NPM version](https://img.shields.io/npm/v/lightning-community.svg?style=flat)](https://npmjs.org/package/lightning-community)
[![NPM downloads](http://img.shields.io/npm/dm/lightning-community.svg?style=flat)](https://npmjs.org/package/lightning-community)

此仓库为心电社区的SDK，开发者可通过此SDK，心电社区的API在Node项目中调用。  
项目全用TypeScript开发。没错，所以任何数据都有类型。  

![如图所示，所有项目都有类型](https://github.com/LightningLion-Studio/Community-Node/blob/master/assets/tips.png?raw=true) 

如上所示，所有项目都有类型，开发起来就舒服了吧。

## 安装

```bash
$ npm install lightning-community
```

## 使用

### ES Module

如果您开发前端，请尽量不使用ESModule的默认导出，因为本项目经过Babel编译可以Tree Shaking。

```ts
import { Get } from "lightning-community"
async function receivePost() {
    const data = await Get("post")
    // `data`变量就是数据喽，在这个asnyc/await函数里使用吧
}
receivePost()
```

### CommonJS

node.JS一般情况下不支持Tree Shaking。但是我仍然推荐您使用解构方式引入API。

```js
const { Get } = require("lightning-community")
async function receivePost() {
    const data = await Get("post")
    // `data`变量就是数据喽，在这个asnyc/await函数里使用吧
}
receivePost()
```

### 全量引入（不推荐）
```ts
import Client from "ligntning-community"
async function receivePost() {
    const data = await Client.Get("post")
    // `data`变量就是数据喽，在这个asnyc/await函数里使用吧
}
receivePost()
```


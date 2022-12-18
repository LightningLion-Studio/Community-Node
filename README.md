# Lightning Community SDK

[![NPM version](https://img.shields.io/npm/v/lightning-community.svg?style=flat)](https://npmjs.org/package/lightning-community)
[![NPM downloads](http://img.shields.io/npm/dm/lightning-community.svg?style=flat)](https://npmjs.org/package/lightning-community)

此仓库为心电社区的SDK，开发者可通过此SDK，心电社区的API在Node项目中调用。  
项目全用TypeScript开发。没错，所以任何数据都有类型。

## 安装

```bash
$ npm install lightning-community
```

## 使用

```ts
import { GetPost } from "lightning-community"
async function receivePost() {
    const data = await GetPost()
    // `data`变量就是数据喽，在这个asnyc/await函数里使用吧
}
receivePost()
```


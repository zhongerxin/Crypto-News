# Crypto Market News for ChatGPT Plugin

这是一个专门为ChatGPT开发的插件，用于获取加密货币市场的实时信息。它通过使用Node.js构建的后端接口，并调用 TokenInsight 的API，为用户提供加密货币的价格和交易信息。

## 文件结构

- `index.js` - Node.js后端接口文件
- `openapi.yaml` - 接口描述文件
- `.wekll-know/ai-plugin.json` - ChatGPT要求的 manifest 文件

## 主要功能

### 获取加密货币列表

通过 `GET /coinList` 请求，可以获取可用的加密货币列表，以此获取加密货币的 ID。

### 获取特定加密货币的价格

通过 `POST /coinPrice` 请求，并在请求体中提供 `id` 参数（加密货币的ID），可以获取该加密货币的当前价格和市场交易信息。

### 获取加密货币最新新闻

通过 `GET /coinNews` 请求，可以获取最新的加密货币新闻。

## 使用方法

**推荐**在 https://replit.com 中进行部署。

首先，你需要在你的本地环境中安装 Node.js。

然后，克隆这个仓库：

```
git clone https://github.com/yourusername/yourrepository.git
```

进入项目目录：

```
cd Crypto-News
```

安装依赖：

```
npm install
```

运行服务：

```
node index.js
```

现在，你应该可以在你的本地环境中访问这个插件的接口了。另外你也可以选择在 https://replit.com 中进行部署。

## 联系

目前这个插件已经通过审核即将上线 ChatGPT 的 Plugin Store ，有相关合作欢迎联系我：
邮箱：zhongxin123456@gmail.com
Twitter: https://twitter.com/zhongerxin
微信：zhongxin_490456111

# Open IP

Open IP 是一款基于 LiteLoaderBDS2 的服务器插件。玩家加入时，会在控制台输出并在游戏内展示以下信息：  
- 玩家名称  
- IP 地址  
- 系统平台  
- 延迟（Ping）  
- 地理位置（国家、省市）  
- 加入时的日期与星期  

---

## 功能

- 在服务器启动时自动加载  
- 监听玩家加入事件，实时获取并展示信息  
- 通过 `ip9.com.cn` API 获取 IP 所在国家与省市  
- 通过 `api.uuni.cn` 接口获取当前日期与星期  
- 控制台高亮打印玩家信息  
- 游戏内弹窗欢迎并展示详细数据  

---

## 安装

1. 确保已安装 [LiteLoaderBDS](https://github.com/LiteLDev/LiteLoaderBDS)。  
2. 从本仓库下载 `OpenIP.js` 或者用Lip
```bash
lip install github.com/FrecklyComb1728/OpenIP
```
3. 将插件文件复制到你的服务器目录下的 `plugins` 文件夹中。  
4. 启动或重启 Minecraft Bedrock Server 。  

---

## 使用

- 当玩家进入服务器时，控制台将打印类似以下内容：

  ```text
  =========================================
  玩家: Steve，IP: 203.0.113.45
  系统: Windows，延迟: 120ms
  来自: 中国 广东 广州
  ID:123e4567-e89b-12d3-a456-426614174000
  =========================================
  ```

- 客户端屏幕左侧会弹出多行欢迎信息，包括玩家 IP、系统、延迟、地理位置、日期和星期。

---

## 配置

目前插件内部的 API 接口和输出格式均为默认设置，无需额外配置。如需替换为其他 IP 或时间服务，可编辑插件源码中的以下两处：

```js
network.httpGet(`https://ip9.com.cn/get?ip=${mifeng.ip}`, …)
network.httpGet("https://api.uuni.cn/api/time", …)
```

---

## 依赖

- Windows Server 2019 及以上 / Windows 10 21H2 及以上 / Linux 未知
- LiteLoaderBDS 
- 网络通畅，可访问外部 HTTP 请求  

---

## 授权许可

此项目遵循 MIT 许可证，详情请查看 [LICENSE](LICENSE) 文件。

---

## 作者

- 蜜蜂QWQ  
- 邮箱：wdsjwyf@gmail.com （PS：有事提issue更好使） 

欢迎提交 issue 或 pull request，共同完善插件！
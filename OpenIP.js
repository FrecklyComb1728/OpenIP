var plname = 'Open IP'
var version = '1.0.0'
var author = '蜜蜂QWQ'
var mifeng = {}
ll.registerPlugin(plname, '玩家进入服务器显示玩家的加入时的信息', [1, 0, 0])


mc.listen("onServerStarted", () => {
    mc.listen("onJoin", function(player) {
        let dv = player.getDevice();
        mifeng.ip = dv.ip.split(':')[0];
        mifeng.date = "未知日期";
        mifeng.day = "未知";
        mifeng.country = '未知';
        mifeng.location = '未知';

        network.httpGet(`https://ip9.com.cn/get?ip=${mifeng.ip}`, {}, function(status, result) {
            if (status === 200) {
                let data = JSON.parse(result).data;
                mifeng.country = data.country || '未知';
                mifeng.location = `${data.prov || ''} ${data.city || ''}`.trim() || '未知';
            } else {
                mifeng.country = '未知';
                mifeng.location = '未知';
            }

            network.httpGet("https://api.uuni.cn/api/time", {}, function(status, result) {
                if (status === 200) {
                    let data = JSON.parse(result);
                    mifeng.day = data.weekday || "未知";
                    let currentDate = new Date();
                    mifeng.date = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日`;
                } else {
                    mifeng.date = "未知日期";
                    mifeng.day = "未知";
                }

                mifeng.os = dv.os;
                if (mifeng.os === "WIN10" || mifeng.os === "Windows10" || mifeng.os === "Win32") {
                    mifeng.os = "Windows";
                }

                colorLog("yellow", `=========================================`)
                colorLog("yellow", `玩家: ${player.name}，IP: ${mifeng.ip}`)
                colorLog("yellow", `系统: ${mifeng.os}，延迟: ${dv.avgPing}ms`)
                colorLog("yellow", `来自: ${mifeng.country}${mifeng.location}`);
                colorLog("yellow", `ID:${dv.clientId}`)
                colorLog("yellow", `=========================================`)

                player.tell(`§4欢迎${player.name}你来到服务器!`, 0);
                player.tell(`§4今天是${mifeng.date}${mifeng.day}`, 0);
                player.tell(`§4您的IP是:${mifeng.ip}`, 0);
                player.tell(`§4您来自${mifeng.country}${mifeng.location}`, 0);
                player.tell(`§4您的系统是${mifeng.os}操作系统`, 0);
                player.tell(`§4您的延迟是${dv.avgPing}ms`, 0);
            });
        });

    }
);
    
    colorLog("cyan", `插件: ${plname} 加载成功! by ${author}
   ___    ____    _____   _   _     ___   ____      _                 __  __   ___   _____   _____   _   _    ____ 
  / _ \\  |  _ \\  | ____| | \\ | |   |_ _| |  _ \\    | |__    _   _    |  \\/  | |_ _| |  ___| | ____| | \\ | |  / ___|
 | | | | | |_) | |  _|   |  \\| |    | |  | |_) |   | '_ \\  | | | |   | |\\/| |  | |  | |_    |  _|   |  \\| | | |  _ 
 | |_| | |  __/  | |___  | |\\  |    | |  |  __/    | |_) | | |_| |   | |  | |  | |  |  _|   | |___  | |\\  | | |_| |
  \\___/  |_|     |_____| |_| \\_|   |___| |_|       |_.__/   \\__, |   |_|  |_| |___| |_|     |_____| |_| \\_|  \\____|
                                                            |___/                                                  `);
});

import { Translations } from "..";

export const EnglishTranslations: Translations = {
    WelcomeName: "欢迎来到skeld.net",
    WelcomeMessage: `
全球首款自己定制的Among Us服务器
输入/help查看指令
当前游戏模式: @{gamemode[0]}

订阅我们的Patreon https://www.patreon.com/skeld_net获得一个彩色游戏名称！`.trim(),
    SetImpostorsInvalidCount:
        "玩家计数无效，请输入一个介于1和3之间的数字",
    SetImpostorsSuccess: "内鬼数量设置为 @{number[0]}",
    ZombiesIncomingIn: "僵尸将在@{number[0]}秒后到来",
    GamemodeChangedTo: "游戏模式变更为@{gamemode[0]}",
    SquidGameLightsInstructions:
        "在时间结束之前按下会议按钮",
    SquidGameDalgonaInstructions:
        "在时间结束前完成所有任务",
    SquidGameTugOfWarInstructions:
        "朝正确的方向移动，拉动对方队伍",
    StartingIn: "开始倒计时: ",
    MaxPlayersModeSwitch:
        "主持人切换了模式，现在这个房间已经满了",
    InvalidMap: "地图无效.可用地图: ",
    MapChanged: "地图被设置为: ",
    InvalidColour: "颜色无效.可用颜色: ",
    GamemodeDoesntExist: 游戏模式@{text[0]}不存在!",
    InvalidMaxPlayers:
        "请传递一个有效的玩家计数(从4到@{number[0]}).",
    MaxPlayersChanged: "当前玩家数量已达到上限@{text[0]}",
    QuickChatWarning: `
您当前已禁用聊天.

请在设置中启用自由聊天，以便在此处键入命令.

主界面> 设置 > 数据> 聊天类型`.trim(),
};

import {
    banner1,
    banner2,
    banner3,
    banner4,
    detail1,
    detail2,
    detail3,
    detail4,
    detail5,
    detail6,
    detail7,
    detail8,
    detail9,
    detail10,
} from "../util/images";

const detailInfo = [
    {
        imgurl: banner1,
        title: "海洋",
        detail: `海洋的健康与生物多样性与人类的生存与福祉息息相关。人类致力于通过预防和终止破坏性的行为来维护和修复海洋生态系统，同时倡导海洋保护区的创建，以保护濒危的海洋哺乳动物和其他物种`,
    },
    {
        imgurl: banner2,
        title: "冰川",
        detail: `冰川是气候变化的一个敏感指标，而且很容易被观察到。无论海拔高度或纬度如何，冰川都在以极快速度消退。然而，到目前为止，人们只部分了解阿拉斯加、冰岛和阿尔卑斯山的冰川融化速度最快。帕米尔山脉、兴都库什山脉和喜马拉雅山脉的高山冰川受到的影响也非常显著`,
    },
    {
        imgurl: banner3,
        title: "沙漠",
        detail: `土地沙漠化包括气候变异和人类活动在内的种种因素造成的干旱、半干旱和亚湿润干旱地区的土地退化,由于人为过度的经济活动,破坏其平衡,使原非沙漠的地区出现了类似沙漠景观的环境变化过程，土地沙漠化和土地荒漠化差别不大,但荒漠化严重程度要高`,
    },
    {
        imgurl: banner4,
        title: "雨林",
        detail: `在21世纪，和许多其他的自然场所一样，热带雨林是一种稀缺的资源。就在几千年以前，它覆盖了地球陆地表面的多达12%的面积，大约155万平方公里，但是现在只有不到5%的地球陆地被这些热带森林覆盖。在南美的亚马逊河流域发现了最大的未被破坏的热带雨林带`,
    },
]

const detailData = [
    [
        {
            id: "001",
            imgurl: detail1,
            title: `加强海洋生态环境保护`,
        },
        {
            id: "002",
            imgurl: detail2,
            title: `“陆海统筹，保护优先”理念下海洋环境污染治理新格局`,
        },
    ],
    [
        {
            id: "003",
            imgurl: detail3,
            title: `全球冰川爆发性消失！22亿吨冰川一日内融化，史前病毒会苏醒吗`,
        },
        {
            id: "004",
            imgurl: detail4,
            title: `每年近2700亿吨冰消失！融化最快的冰川在这儿`,
        },
    ],
    [
        {
            id: "005",
            imgurl: detail5,
            title: `中国近20%国土沙漠化 “生态移民”成无奈之举`,
        },
        {
            id: "006",
            imgurl: detail6,
            title: `荒漠化威胁人类生存`,
        },
    ],
    [
        {
            id: "007",
            imgurl: detail7,
            title: `日媒：研究显示全球热带雨林加速消失`,
        },
        {
            id: "008",
            imgurl: detail8,
            title: `警报！温度升高让热带雨林不堪重负！吸碳能力逐渐消失！`
        },
    ],
]

const backupData = [
    {
        id: "009",
        imgurl: detail9,
        title: `保护海洋 你我同行｜多部门携手“净滩”共护蔚蓝大海`,
    },
    {
        id: "010",
        imgurl: detail10,
        title: `世界海洋日丨保护海洋就是保护自己 让我们一起守护每一片蔚蓝`,
    },
]

const wholeData = detailData.map((item, index) => {
    if (index === 0) {
        item = [...item, ...backupData]
        return item
    }
    return item
})
    export default {
    data() {
        return {
            detailInfo,
            detailData,
            backupData,
            wholeData
        }
    },
}
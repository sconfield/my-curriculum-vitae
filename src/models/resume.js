import html5 from '../assets/html5.jpg';
import css3 from '../assets/css3.jpg';
import javascript from '../assets/javascript.jpg';

export default {
  namespace: 'resume',
  state: {
    tab: 0,
    cards: [],
    en: {
      title: "zhangjing's Curriculum Vitae",
      profiles: {
        kk: {
          contact: 'contact',
          phone: 'phone',
          Email: 'e-mail',
          wechat: 'wechat',
          infomation: 'personal infomation',
          birthday: 'birthday',
          gender: 'gender',
          marriage: 'marriage',
          profession: 'profession',
          work: 'worked years',
          blog: 'technology blog',
          job: '期望职位',
          money: '期望薪资',
          city: '期望城市',
          education: '教育经历',
          certificate: '获得证书',
          english: '英语能力',
          activity: '参加有意义的活动'
        },
        vv: {
          gender: 'male',
          marriage: 'no',
          profession: '重庆工商职业学院-大专-电气工程',
          work: '6 years',
          blog: [
            {
              name: 'CSDN blog',
              url: 'http://blog.csdn.net/qq378332287',
              desc: '从 2009-07 至 2010-05，阅读量 3w+'
            },
            {
              name: 'cnblogs',
              url: 'http://www.cnblogs.com/sconfield',
              desc: '从 2010-11 至 2011-04，阅读量 2k+'
            },
            {
              name: 'Github blog',
              url: 'http://sconfield.github.io',
              desc: '从 2010-11 至 2013-10，阅读量 40+/m'
            },
            {
              name: 'oschina blog',
              url: 'http://sconfield.oschina.io',
              desc: '2017-01 至今，阅读量 0'
            }
          ],
          job: 'Web 前端工程师',
          money: '税前月薪 10k~15k ，特别喜欢的公司可例外',
          city: '重庆',
          education: [
            '2007-09 至 2010-07 重庆工商职业学院 电气工程',
            '2009-10 至 2010-04 重庆达内 J2EE 培训'
          ],
          certificate: [
            '全国计算机等级 二级',
            'C+E 国际软件工程师 Java 证书',
            '最佳敬业奖'
          ],
          english: '通过软件自学，已完成多邻国和罗赛塔所有关卡。能阅读英文技术文档。',
          enreslist: [
            {
              name: '多邻国',
              url: 'http://www.duolingo.cn/sconfield',
              desc: ''
            },
            {
              name: '我读过的英文书',
              url: 'https://github.com/sconfield/my-english-books',
              desc: ''
            }
          ],
          activity: [
            {
              name: '兰州的 GDG 活动',
              url: 'http://www.chinagdg.com/forum.php?mod=viewthread&tid=3603&highlight=dart',
              desc: '2014年在兰州出差的时候参加过兰州的 GDG 活动。并远程向 Jackie 请教了一些技术问题。'
            },
            {
              name: '重庆国际马拉松',
              url: 'http://www.mlszp.com/search?id=102&bn=A3888&fn=%E5%BC%A0%E9%9D%99&agree=1',
              desc: '参加过重庆国际马拉松比赛，完成过一次全程马拉松，两次半程马拉松。'
            }
          ]
        }
      },
      careers: [
        {
          name: '亚信中国',
          title: '亚信中国 （ 2013年9月 ~ 2016年9月 ）',
          project: [
            {
              name: '甘肃 AAA 宽带认证计费项目',
              desc: '负责AAA系统的部署及与思达、中兴等厂家的联合调试工作。在甘肃兰州、定西、武威、金昌、永昌、张掖、酒泉、嘉峪关等地市进行宽带安装流程培训。并将我们 BOSS 1.0 中的用户数据交接给思达 BOSS。前期处理各类服务器、交换机、防火墙的设备接线和负载均衡，防火墙参数配置的工作；后期处理项目的日志，数据备份，磁盘监控等工作。',
              depth: [
                '中途由于 Oracle 服务器磁盘阵列问题，手动切换过备用数据库服务器。',
                '也割接过 ldap 缓存的宽带用户数据。',
                '日常操作 mysql 对异常用户或者部分区域进行强制下线。'
              ]
            },
            {
              name: '重庆现场 BOSS 项目',
              desc: '前期处理问答系统中前台营业员提交的错误订单数据。然后陆续接手合同管理模块和营业管理模块的日常维护，异常处理及代码排错；编写存储过程配置报表；编写 job 定期修复数据；打包编译代码，部署生产程序；割接新需求所影响的数据。后期主要负责套餐配置及该模块版本升级的需求采集，其中套餐配置期间获得现场颁发的“最佳敬业奖”。',
              depth: [
                '处理问答系统的时候，我不光处理了营业员提的单个问题，顺便编写了批量处理脚步。当时日均订单量是 2w 左右，由于历史原因，数据结构的快速迭代，每天会产生很多错误的订单数据，系统错误订单存量在 700~1100 之间。编写批量处理脚步后，错误订单数稳定在 20～50 之间，每天工作就简化成了下班前看一看问答系统，跑一跑批量脚本。随后编写了第一版批量处理错误订单的文档，交接给新同事处理工作流问题。',
                '套餐配置因为一些利益原因，一直是手动配置 10 多张表。我为了方便自己配置，用 ruby sinatra 和 bootstrap 搭建了一个简单的本地应用，拼凑配置套餐的 sql 语句，缩短了配置时间。',
                '也为了自己的“鼠标手”（我也经常用左手），用 python + selenium 写了一个简易的自动化测试脚本，每到测试套餐的时候我就去茶水间搬水桶，每天四桶。'
              ]
            }
          ]
        },
        {
          name: '神州泰岳',
          title: '神州泰岳 （ 2013年1月 ~ 2013年9月 ）',
          project: [
            {
              name: '中国移动代维考核项目',
              desc: '参与系统设计与核心代码编写，分配并跟进外包同事的任务进度。后期通过 bootstrap 和 backbone 重构系统视图，提升执行效率和用户体验。',
              depth: []
            },
            {
              name: '中国移动计划管理项目',
              desc: '维护系统正常运行，参与新需求讨论，改进计费模块。',
              depth: [
                '使用 jQuery.Gantt 插件开发计划管理系统的甘特图展示功能，修改源码，使其展示更多数据，并兼容 IE7 浏览器。',
                '使用 POI 开发计划管理系统费用详单导出为 excel 的功能。',
                '在 oracle, mysql, db2 数据库之间做过数据传输。'
              ]
            }
          ]
        },
        {
          name: '鼎铉科技',
          title: '鼎铉科技 （ 2010年4月 ~ 2013年1月 ）',
          project: [
            {
              name: '应急软件平台项目',
              desc: '参与平台编码，负责统计分析，权限管理及后期系统换肤的编码调试工作，参与电子地图相关的模块。',
              depth: [
                '使用 jQuery 编写树形控件，包含右键菜单、拖拽移动节点、展开关闭目录、suggest 搜索提示等交互功能；后期通过 oop 思想，利用 prototype 属性进行重构，简化代码量。',
                '使用 flex 编写统计分析图表，利用状态模式解决不同图表的参数输入问题。',
                '系统换肤功能，能做 gif ，能处理 css 兼容性问题，兼容 IE6 和 Firefox 浏览器。',
                '有过一个星期短暂帮助同事处理商委系统 bug 的经验，学习使用 jsp.page 分页控件。'
              ]
            }
          ]
        },
        {
          name: '现况',
          title: '2016年9月至今',
          project: [
            {
              name: '弯月文化',
              desc: 'bibibi',
              depth: []
            }
          ]
        }
      ],
      skills: {}
    },
    zh: {
      title: '张静的简历',
      profiles: {
        kk: {
          contact: '联系方式',
          phone: '手机',
          Email: '邮箱',
          wechat: '微信',
          infomation: '个人信息',
          birthday: '生日',
          gender: '性别',
          marriage: '婚姻',
          profession: '专业',
          work: '工作年限',
          blog: '技术博客',
          job: '期望职位',
          money: '期望薪资',
          city: '期望城市',
          education: '教育经历',
          certificate: '获得证书',
          english: '英语能力',
          activity: '参加有意义的活动'
        },
        vv: {
          gender: '男',
          marriage: '未婚',
          profession: '重庆工商职业学院-大专-电气工程',
          work: '6 年',
          blog: [
            {
              name: 'CSDN blog',
              url: 'http://blog.csdn.net/qq378332287',
              desc: '从 2009-07 至 2010-05，阅读量 3w+'
            },
            {
              name: 'cnblogs',
              url: 'http://www.cnblogs.com/sconfield',
              desc: '从 2010-11 至 2011-04，阅读量 2k+'
            },
            {
              name: 'Github blog',
              url: 'http://sconfield.github.io',
              desc: '从 2010-11 至 2013-10，阅读量 40+/m'
            },
            {
              name: 'oschina blog',
              url: 'http://sconfield.oschina.io',
              desc: '2017-01 至今，阅读量 0'
            }
          ],
          job: 'Web 前端工程师',
          money: '税前月薪 10k~15k ，特别喜欢的公司可例外',
          city: '重庆',
          education: [
            '2007-09 至 2010-07 重庆工商职业学院 电气工程',
            '2009-10 至 2010-04 重庆达内 J2EE 培训'
          ],
          certificate: [
            '全国计算机等级 二级',
            'C+E 国际软件工程师 Java 证书',
            '最佳敬业奖'
          ],
          english: '通过软件自学，已完成多邻国和罗赛塔所有关卡。能阅读英文技术文档。',
          enreslist: [
            {
              name: '多邻国',
              url: 'http://www.duolingo.cn/sconfield',
              desc: ''
            },
            {
              name: '我读过的英文书',
              url: 'https://github.com/sconfield/my-english-books',
              desc: ''
            }
          ],
          activity: [
            {
              name: '兰州的 GDG 活动',
              url: 'http://www.chinagdg.com/forum.php?mod=viewthread&tid=3603&highlight=dart',
              desc: '2014年在兰州出差的时候参加过兰州的 GDG 活动。并远程向 Jackie 请教了一些技术问题。'
            },
            {
              name: '重庆国际马拉松',
              url: 'http://www.mlszp.com/search?id=102&bn=A3888&fn=%E5%BC%A0%E9%9D%99&agree=1',
              desc: '参加过重庆国际马拉松比赛，完成过一次全程马拉松，两次半程马拉松。'
            }
          ]
        }
      },
      careers: [
        {
          name: '亚信中国',
          title: '亚信中国 （ 2013年9月 ~ 2016年9月 ）',
          project: [
            {
              name: '甘肃 AAA 宽带认证计费项目',
              desc: '负责AAA系统的部署及与思达、中兴等厂家的联合调试工作。在甘肃兰州、定西、武威、金昌、永昌、张掖、酒泉、嘉峪关等地市进行宽带安装流程培训。并将我们 BOSS 1.0 中的用户数据交接给思达 BOSS。前期处理各类服务器、交换机、防火墙的设备接线和负载均衡，防火墙参数配置的工作；后期处理项目的日志，数据备份，磁盘监控等工作。',
              depth: [
                '中途由于 Oracle 服务器磁盘阵列问题，手动切换过备用数据库服务器。',
                '也割接过 ldap 缓存的宽带用户数据。',
                '日常操作 mysql 对异常用户或者部分区域进行强制下线。'
              ]
            },
            {
              name: '重庆现场 BOSS 项目',
              desc: '前期处理问答系统中前台营业员提交的错误订单数据。然后陆续接手合同管理模块和营业管理模块的日常维护，异常处理及代码排错；编写存储过程配置报表；编写 job 定期修复数据；打包编译代码，部署生产程序；割接新需求所影响的数据。后期主要负责套餐配置及该模块版本升级的需求采集，其中套餐配置期间获得现场颁发的“最佳敬业奖”。',
              depth: [
                '处理问答系统的时候，我不光处理了营业员提的单个问题，顺便编写了批量处理脚步。当时日均订单量是 2w 左右，由于历史原因，数据结构的快速迭代，每天会产生很多错误的订单数据，系统错误订单存量在 700~1100 之间。编写批量处理脚步后，错误订单数稳定在 20～50 之间，每天工作就简化成了下班前看一看问答系统，跑一跑批量脚本。随后编写了第一版批量处理错误订单的文档，交接给新同事处理工作流问题。',
                '套餐配置因为一些利益原因，一直是手动配置 10 多张表。我为了方便自己配置，用 ruby sinatra 和 bootstrap 搭建了一个简单的本地应用，拼凑配置套餐的 sql 语句，缩短了配置时间。',
                '也为了自己的“鼠标手”（我也经常用左手），用 python + selenium 写了一个简易的自动化测试脚本，每到测试套餐的时候我就去茶水间搬水桶，每天四桶。'
              ]
            }
          ]
        },
        {
          name: '神州泰岳',
          title: '神州泰岳 （ 2013年1月 ~ 2013年9月 ）',
          project: [
            {
              name: '中国移动代维考核项目',
              desc: '参与系统设计与核心代码编写，分配并跟进外包同事的任务进度。后期通过 bootstrap 和 backbone 重构系统视图，提升执行效率和用户体验。',
              depth: []
            },
            {
              name: '中国移动计划管理项目',
              desc: '维护系统正常运行，参与新需求讨论，改进计费模块。',
              depth: [
                '使用 jQuery.Gantt 插件开发计划管理系统的甘特图展示功能，修改源码，使其展示更多数据，并兼容 IE7 浏览器。',
                '使用 POI 开发计划管理系统费用详单导出为 excel 的功能。',
                '在 oracle, mysql, db2 数据库之间做过数据传输。'
              ]
            }
          ]
        },
        {
          name: '鼎铉科技',
          title: '鼎铉科技 （ 2010年4月 ~ 2013年1月 ）',
          project: [
            {
              name: '应急软件平台项目',
              desc: '参与平台编码，负责统计分析，权限管理及后期系统换肤的编码调试工作，参与电子地图相关的模块。',
              depth: [
                '使用 jQuery 编写树形控件，包含右键菜单、拖拽移动节点、展开关闭目录、suggest 搜索提示等交互功能；后期通过 oop 思想，利用 prototype 属性进行重构，简化代码量。',
                '使用 flex 编写统计分析图表，利用状态模式解决不同图表的参数输入问题。',
                '系统换肤功能，能做 gif ，能处理 css 兼容性问题，兼容 IE6 和 Firefox 浏览器。',
                '有过一个星期短暂帮助同事处理商委系统 bug 的经验，学习使用 jsp.page 分页控件。'
              ]
            }
          ]
        },
        {
          name: '现况',
          title: '2016年9月至今',
          project: [
            {
              name: '弯月文化',
              desc: 'bibibi',
              depth: []
            }
          ]
        }
      ],
      skills: [
        {
          name: 'html5',
          desc: 'bibibi',
          url: html5
        },
        {
          name: 'css3',
          desc: 'bibibi',
          url: css3
        },
        {
          name: 'javascript',
          desc: 'bibibi',
          url: javascript
        }
      ]
    }
  },
  reducers: {
    selectTab(state, action) {
      return {
        ...state,
        tab: action.tab
      };
    },
    turnCard(state, action) {
      console.log(action);
      return {
        ...state,

      }
    },
    putAnyWhere(state) {
      return {
        ...state
      }
    }
  },
  effects: {},
  subscriptions: {},
};

import backbone from '../assets/backbone.png';
import bootstrap from '../assets/bootstrap.png';
import coffeescript from '../assets/coffeescript.png';
import css3 from '../assets/css3.png';
import dart from '../assets/dart.png';
import flex from '../assets/flex.png';
import github from '../assets/github.png';
import grunt from '../assets/grunt.png';
import html5 from '../assets/html5.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import jquery from '../assets/jquery.png';
import linux from '../assets/linux.png';
import mockups from '../assets/mockups.png';
import mongodb from '../assets/mongodb.png';
import nodejs from '../assets/nodejs.png';
import phonegap from '../assets/phonegap.png';
import photoshop from '../assets/photoshop.png';
import pug from '../assets/pug.png';
import python from '../assets/python.png';
import reactjs from '../assets/reactjs.png';
import ruby from '../assets/ruby.png';
import stylus from '../assets/stylus.png';
import sql from '../assets/sql.png';
import vuejs from '../assets/vuejs.png';
import webpack from '../assets/webpack.png';

const rootDom = document.querySelector('#root');
const _half_x = rootDom.offsetWidth / 2 * 0.9;
const _half_y = rootDom.offsetHeight / 2 * 0.8;
let originalPlaces = [];

const putAnyWhere = (card)=>{
  card.putWhere['transform'] = 'rotate('+Math.random()*360+'deg)';
  const anyOne = Math.random();
  const anyTwo = Math.random();
  let _any_x, _any_y;
  switch (card.seq%4) {
    case 0:
      _any_x = _half_x * anyOne;
      _any_y = _half_y * anyTwo;
      break;
    case 1:
      _any_x = _half_x * (anyOne+1);
      _any_y = _half_y * anyTwo;
      break;
    case 2:
      _any_x = _half_x * anyOne;
      _any_y = _half_y * (anyTwo+1);
      break;
    case 3:
      _any_x = _half_x * (anyOne+1);
      _any_y = _half_y * (anyTwo+1);
      break;
    default:
      console.log('sconfield');
  }

  const limitX = _half_x*2 - 150;
  const limitY = _half_y*2 - 200;
  if (_any_x > limitX) {
    _any_x = _any_x - limitX;
  }
  if (_any_y > limitY) {
    _any_y = _any_y - limitY;
  }

  card.putWhere.left = _any_x + 'px';
  card.putWhere.top = _any_y + 'px';

  return card;
};

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
          name: 'backbone',
          desc: '项目中用过，结合 jquery 和 underscore 处理大量数据。',
          url: backbone
        },
        {
          name: 'bootstrap',
          desc: '项目中用过，很强大，能大量缩短开发时间。',
          url: bootstrap
        },
        {
          name: 'coffeescript',
          desc: '项目中用过，喜欢类似 python, ruby 的写法。',
          url: coffeescript
        },
        {
          name: 'css3',
          desc: '入职第一家公司就开始尝试写 css3，一直未在工作项目中使用过。',
          url: css3
        },
        {
          name: 'dart',
          desc: '一直很喜欢 google 的技术栈，参加 GDG 活动的时候完成过 one hour codelab。',
          url: dart
        },
        {
          name: 'flex',
          desc: '项目中用过，写过统计分析的图表。',
          url: flex
        },
        {
          name: 'github',
          desc: '了解 git 命令，喜欢使用 SourceTree, Github 客户端。也熟悉 SVN。',
          url: github
        },
        {
          name: 'grunt',
          desc: '自己学习过 gruntjs, requirejs, angularjs 等，写过 demo https://github.com/PlayTimeline/iS-grunt',
          url: grunt
        },
        {
          name: 'html5',
          desc: '熟悉语义性，能写符合 w3c 标准的 html 页面。',
          url: html5
        },
        {
          name: 'java',
          desc: '有多年的 java 开发经验，熟练 ssh 等框架。',
          url: java
        },
        {
          name: 'javascript',
          desc: '这个东西不简单，现在追求能够用优雅的代码实现功能。',
          url: javascript
        },
        {
          name: 'jquery',
          desc: '入职第一家公司的时候，就把 1.3 API 的所有方法做过 demo。虽然最近几年未用，但熟悉基本 API。',
          url: jquery
        },
        {
          name: 'linux',
          desc: '熟悉常用的 linux 及 vi 的常用命令，能在 linux 环境部署应用，采集日志，添加监控。',
          url: linux
        },
        {
          name: 'balsamiq mockups',
          desc: '喜欢用她画草图，手机端用 pop ，结合 dia 等流程图工具，起草 app。',
          url: mockups
        },
        {
          name: 'mongodb',
          desc: '纯属个人项目中用到，krakenjs, meteor, mean.io 或者一些其他的 generator 都默认 mongodb，所以会一些基本操作。',
          url: mongodb
        },
        {
          name: 'nodejs',
          desc: '我觉得她是一个完美的平台。',
          url: nodejs
        },
        {
          name: 'phonegap',
          desc: '刚出来的时候，很迷恋，做过 app 给老爸用。https://github.com/PlayTimeline/iS_violation',
          url: phonegap
        },
        {
          name: 'photoshop',
          desc: '能简单处理图像，有时也用 gimp，sketch，切图用在线工具拼接，项目中简单用过。',
          url: photoshop
        },
        {
          name: 'pug',
          desc: '我用的时候叫 jade ，图标还是一个兔子，我属兔就用的。现在的 pug 也好萌。',
          url: pug
        },
        {
          name: 'python',
          desc: '工作中写过自动化测试脚本，也用 python 来割接数据，感觉比写存储过程舒服。',
          url: python
        },
        {
          name: 'reactjs',
          desc: '这份简历就是用 react 写的。',
          url: reactjs
        },
        {
          name: 'ruby',
          desc: '用 sinatra 搭建过应用，简化自己的工作，玩过 jekyll 和 ror。',
          url: ruby
        },
        {
          name: 'stylus',
          desc: '玩过 less, scss，个人项目用的 stylus。',
          url: stylus
        },
        {
          name: 'sql',
          desc: '熟练使用 pl/sql ，能写 job, 能写存储过程，熟悉分组查询，联表查询。',
          url: sql
        },
        {
          name: 'vuejs',
          desc: '尤大从写 html5 clear 的时候就开始关注了，到 google 到 meteor。他的开源项目，当然要玩。',
          url: vuejs
        },
        {
          name: 'webpack',
          desc: '当我熟悉 grunt 后，出来了 gulp，然后出来了 webpack。赫赫！',
          url: webpack
        }
      ]
    }
  },
  reducers: {
    initCards(state) {
      let line = 1;
      let count = 1;
      for (let i = 0; i < state.zh.skills.length; i++) {
        const card = {
          seq: i,
          center: false,
          front: true,
          putWhere: {
            top: 60 + 27*count + 'px',
            left: _half_x*2 - 150*line - (_half_x*2/3 - 330)/2 + 'px',
            transform: 'rotate(0deg)',
            zIndex: 10 + i
          }
        };
        originalPlaces.push(Object.assign({}, card.putWhere));
        state.cards.push(card);
        if (count%13 == 0) {
          line++;
          count = 1;
        } else {
          count++;
        }
      }
      return {...state};
    },
    selectTab(state, action) {
      return {
        ...state,
        tab: action.tab
      };
    },
    turnCard(state, action) {
      state.cards[action.seq].front = !state.cards[action.seq].front;
      return {...state};
    },
    putAllAnyWhere(state) {
      // put all cards to any where.
      for (let i = 0; i < state.cards.length; i++) {
        state.cards[i].center = false;
        state.cards[i] = putAnyWhere(state.cards[i]);
      }
      return {...state};
    },
    putOriginalPlaces(state) {
      for (var i = 0; i < state.cards.length; i++) {
        state.cards[i].center = false;
        state.cards[i].putWhere = Object.assign({}, originalPlaces[i]);
      }
      return {...state};
    },
    putCenterBigCard(state, action) {
      let oldCenterCard = false;
      for (var i = 0; i < state.cards.length; i++) {
        const item = state.cards[i];
        if (item.center) {
          oldCenterCard = item;
        }
        item.center = false;
      }

      if (oldCenterCard && oldCenterCard.seq != action.seq) {
        putAnyWhere(oldCenterCard);
      }
      const newCenterCard = state.cards[action.seq];
      newCenterCard.center = true;
      newCenterCard.putWhere = {
        top: _half_y - 180 + 'px',
        left: _half_x - 180 + 'px',
        transform: 'rotate(0deg)'
      };
      return {...state};
    }
  },
  effects: {},
  subscriptions: {
    setup(props) {
      props.dispatch({type: 'initCards'});
    }
  }
};

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
    idxWinMax: false,
    en: {
      title: "zhangjing's Curriculum Vitae",
      putBtnName: 'put down cards',
      putAgainBtnName: 'put again',
      putPickTip: 'Here can click yet!',
      pickBtnName: 'pick up cards',
      profiles: {
        kk: {
          contact: 'contact',
          phone: 'phone',
          Email: 'e-mail',
          wechat: 'wechat',
          infomation: 'infomation',
          birthday: 'birthday',
          gender: 'gender',
          marriage: 'marriage',
          profession: 'profession',
          work: 'work years',
          blog: 'technology blog',
          job: 'hope job',
          money: 'hope salary',
          city: 'hope city',
          newGitub: 'using github',
          oldGithub: 'old github',
          business: 'business project',
          education: 'education experience',
          certificate: 'got certificate',
          english: 'english ability',
          activity: 'joined good activities'
        },
        vv: {
          gender: 'male',
          marriage: 'no',
          profession: '重庆工商职业学院-大专-电气工程',
          work: 'six years',
          blog: [
            {
              name: 'CSDN blog',
              url: 'http://blog.csdn.net/qq378332287',
              desc: 'from 2009-07 to 2010-05 PV 3w+'
            },
            {
              name: 'cnblogs',
              url: 'http://www.cnblogs.com/sconfield',
              desc: 'from 2010-11 to 2011-04，PV 2k+'
            },
            {
              name: 'Github blog',
              url: 'http://sconfield.github.io',
              desc: 'from 2010-11 to 2013-10，PV 40+/m'
            },
            {
              name: 'oschina blog',
              url: 'http://sconfield.oschina.io',
              desc: '2017-01 to nowadays，PV Null'
            }
          ],
          job: 'Web Front-End Developer',
          money: 'pre-tax salary 10k~15k of a month, particularly fond of the company can be other.',
          city: 'chongqing',
          education: [
            'from 2007-09 to 2010-07 重庆工商职业学院 电气工程',
            'from 2009-10 to 2010-04 重庆达内J2EE培训'
          ],
          certificate: [
            'Second level of National Computer Rank Examination',
            'Certificate of C+E International Java Developer Training',
            'The Best Dedication Award'
          ],
          english: 'Through software self-study has completed duolingo all checkpoints. Can read technical documents in English.',
          enreslist: [
            {
              name: 'my duolingo',
              url: 'http://www.duolingo.cn/sconfield',
              desc: ''
            },
            {
              name: 'i read english book',
              url: 'https://github.com/sconfield/my-english-books',
              desc: ''
            }
          ],
          activity: [
            {
              name: 'Lanzhou GDG activity',
              url: 'http://www.chinagdg.com/forum.php?mod=viewthread&tid=3603&highlight=dart',
              desc: 'When I was in Lanzhou on a business trip, I took part in the GDG activity in Lanzhou. And remote to Jackie to ask some technical question.'
            },
            {
              name: 'Chongqing International Marathon',
              url: 'http://www.mlszp.com/search?id=102&bn=A3888&fn=%E5%BC%A0%E9%9D%99&agree=1',
              desc: 'Join the Chongqing International Marathon, completed once a full marathon and twice half marathon.'
            }
          ]
        }
      },
      careers: [
        {
          name: 'asiainfo',
          title: '2013/09 ~ 2016/09',
          project: [
            {
              name: 'The AAA system of broadband billing in Gansu',
              desc: 'I am responsible for AAA system deployment, debugging and data check cut worked. i am training customer in Zhangye, Lanzhou, Jiuquan and other 8 cities.',
              depth: [
                'The server disk array problem, manually switch to backup database.',
                'The oracle and LDAP data check cut.',
                'Used MySQL to operate on exception users or some region of forced offline.'
              ]
            },
            {
              name: 'The BOSS system in Chongqing',
              desc: 'First made report and handle the order error, and then responsible for system upgrade deployment. The latter was primary responsible for the tv program configuration, during was got the best dedication award.',
              depth: [
                'Code a batch processing script, system error order store decreased from 1000 to 50.',
                'Used ruby sinatra and bootstrap to build a simple application, can be join sql sentence and shorten the configuration time.',
                'Used python and selenium to code a simple automated test script. can be carry the bucket to the tea room when I run the test script, four bucket per day.'
              ]
            }
          ]
        },
        {
          name: 'ultrapower',
          title: '2013/01 ~ 2013/09',
          project: [
            {
              name: '中国移动代维考核项目',
              desc: '参与系统设计与核心代码编写，分配外包同事任务并跟踪进度。',
              depth: [
                '重构评分汇总算法，并将其移到客户端，由js计算，实时反馈，简化数据库读写操作。',
                '通过bootstrap和backbone重构系统视图，提升执行效率和用户体验。',
                '帮助分公司同事处理as跨域请求问题。'
              ]
            },
            {
              name: '中国移动计划管理项目',
              desc: '维护系统正常运行，参与新需求讨论，改进计费模块。',
              depth: [
                '使用jQuery.Gantt插件开发甘特图展示功能，修改源码，使其展示更多数据，并兼容IE7浏览器。',
                '使用POI开发计划管理系统费用详单导出为excel的功能。',
                '在oracle, mysql, db2数据库之间做过数据传输。'
              ]
            }
          ]
        },
        {
          name: 'dingxuan',
          title: '2010/04 ~ 2013/01',
          project: [
            {
              name: '应急软件平台项目',
              desc: '负责统计分析，权限管理及电子地图相关的模块，后期处理系统换肤的编码工作。',
              depth: [
                '使用jQuery编写树形控件，包含右键菜单、拖拽移动节点、展开关闭目录、suggest搜索提示等交互功能；后期通过oop思想，利用prototype属性进行重构，简化代码量。',
                '使用flex编写统计分析图表，利用状态模式解决不同图表的参数输入问题。',
                '系统换肤功能，能做gif，能处理css兼容性问题，兼容IE6和Firefox浏览器。',
                '有过一个星期短暂帮助同事处理商委系统bug的经验，学习使用了jsp.page分页控件。'
              ]
            }
          ]
        },
        {
          name: 'nowadays',
          title: '2016/09 ~ ...',
          project: [
            {
              name: '弯月文化',
              desc: '与亚信合同到期后没有续约，一是想换一个前端工作，二是年初的时候大学老师来重庆，想开一家分店。他本人在成都，和他老婆经营着一个服装租赁公司，他自己是一家国企的构架师。在他的指导下，我注册了公司，租了店面，配置了演出服装和卡通头像，搭建了网站，开通了百度推广，也做了一些简单的seo优化，公司现在由老师同事的妹妹经营着，我主要负责网络推广。所以我很向往前端工作。',
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
          desc: '入职第一家公司就开始尝试写 css3，只是自己欣赏，不敢上生产环境。',
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
          desc: '自己学习过 gruntjs, requirejs, angularjs 等，在 github 是上写过 demo 。',
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
          desc: '入职第一家公司的时候，就把 1.3 版本的所有 API 都做过 demo。虽然最近几年未用，但熟悉基本 API。',
          url: jquery
        },
        {
          name: 'linux',
          desc: '熟悉常用的 linux 及 vi 命令，能在 linux 环境下修改代码部署应用。',
          url: linux
        },
        {
          name: 'balsamiq mockups',
          desc: '喜欢用她画草图，手机端用 pop ，结合 dia 等流程图工具，起草 app。',
          url: mockups
        },
        {
          name: 'mongodb',
          desc: '玩 krakenjs, meteor, mean.io 或者一些其他的 generator 都默认 mongodb，不会不行。',
          url: mongodb
        },
        {
          name: 'nodejs',
          desc: '我觉得她是一个完美的平台。',
          url: nodejs
        },
        {
          name: 'phonegap',
          desc: '刚出来的时候，很迷恋，做过 app 给老爸用。demo 在 github 上。',
          url: phonegap
        },
        {
          name: 'photoshop',
          desc: '能简单处理图像，有时也用 gimp，sketch，切图用在线工具拼接，项目中简单用过。',
          url: photoshop
        },
        {
          name: 'pug',
          desc: '我用的时候叫 jade ，图标还是一个兔子，我属兔就用了。现在的 pug 也好萌。',
          url: pug
        },
        {
          name: 'python',
          desc: '工作中写过自动化测试脚本，也用 python 来割接数据，感觉比写存储过程舒服。',
          url: python
        },
        {
          name: 'reactjs',
          desc: '因为老师说她比 vuejs 好，这份简历就是用 react 写的。',
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
          desc: '尤大发布 html5 clear 的时候就开始关注他了，从 google 到 meteor。他的开源项目，要玩。',
          url: vuejs
        },
        {
          name: 'webpack',
          desc: '当我熟悉 grunt 后，出来了 gulp，然后出来了 webpack。呵呵哒！',
          url: webpack
        }
      ]
    },
    zh: {
      title: '张静的简历',
      putBtnName: '扔出技能卡',
      putAgainBtnName: '再打乱一次',
      putPickTip: '这里也可以点哦！',
      pickBtnName: '回收技能卡',
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
          newGitub: '常用的Github',
          oldGithub: '以前的Github',
          business: '商业项目',
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
              desc: '从2009-07至2010-05访问量 3w+'
            },
            {
              name: 'cnblogs',
              url: 'http://www.cnblogs.com/sconfield',
              desc: '从2010-11至2011-04，访问量 2k+'
            },
            {
              name: 'Github blog',
              url: 'http://sconfield.github.io',
              desc: '从2010-11至2013-10，访问量 40+/m'
            },
            {
              name: 'oschina blog',
              url: 'http://sconfield.oschina.io',
              desc: '2017-01至今，访问量 Null'
            }
          ],
          job: 'Web 前端工程师',
          money: '税前月薪10k~15k，特别喜欢的公司可例外',
          city: '重庆',
          education: [
            '2007-09至2010-07 重庆工商职业学院 电气工程',
            '2009-10至2010-04 重庆达内J2EE培训'
          ],
          certificate: [
            '全国计算机等级 二级',
            'C+E国际软件工程师Java证书',
            '最佳敬业奖'
          ],
          english: '通过软件自学，已完成多邻国所有关卡。能阅读英文技术文档。',
          enreslist: [
            {
              name: '我的多邻国',
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
              name: '兰州的GDG活动',
              url: 'http://www.chinagdg.com/forum.php?mod=viewthread&tid=3603&highlight=dart',
              desc: '在兰州出差的时候参加过兰州的GDG活动。并远程向Jackie请教了一些技术问题。'
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
          title: '2013年9月 ~ 2016年9月',
          project: [
            {
              name: '甘肃AAA宽带认证计费项目',
              desc: '负责AAA系统部署、调试及数据割接工作。在甘肃兰州、张掖、酒泉等8个地市进行过流程培训。前期处理设备接线和参数配置的工作；后期处理日志采集，数据备份，磁盘监控等工作。',
              depth: [
                '服务器磁盘阵列问题，手动切换过备用数据库。',
                '割接过oracle和ldap的数据。',
                '日常操作mysql对异常用户或者部分区域进行强制下线。'
              ]
            },
            {
              name: '重庆现场BOSS项目',
              desc: '前期做报表和处理订单错误，然后负责系统升级部署。后期主要负责套餐配置，配置期间获得现场颁发的“最佳敬业奖”。',
              depth: [
                '编写了批量处理脚本，系统错误订单存量由1000降至50。',
                '用ruby sinatra和bootstrap搭建了一个简单的本地应用，拼凑配置套餐的sql语句，缩短了配置时间。',
                '用python和selenium写了一个简易的自动化测试脚本，每到测试套餐的时候我就去茶水间搬水桶，每天四桶。'
              ]
            }
          ]
        },
        {
          name: '神州泰岳',
          title: '2013年1月 ~ 2013年9月',
          project: [
            {
              name: '中国移动代维考核项目',
              desc: '参与系统设计与核心代码编写，分配外包同事任务并跟踪进度。',
              depth: [
                '重构评分汇总算法，并将其移到客户端，由js计算，实时反馈，简化数据库读写操作。',
                '通过bootstrap和backbone重构系统视图，提升执行效率和用户体验。',
                '帮助分公司同事处理as跨域请求问题。'
              ]
            },
            {
              name: '中国移动计划管理项目',
              desc: '维护系统正常运行，参与新需求讨论，改进计费模块。',
              depth: [
                '使用jQuery.Gantt插件开发甘特图展示功能，修改源码，使其展示更多数据，并兼容IE7浏览器。',
                '使用POI开发计划管理系统费用详单导出为excel的功能。',
                '在oracle, mysql, db2数据库之间做过数据传输。'
              ]
            }
          ]
        },
        {
          name: '鼎铉科技',
          title: '2010年4月 ~ 2013年1月',
          project: [
            {
              name: '应急软件平台项目',
              desc: '负责统计分析，权限管理及电子地图相关的模块，后期处理系统换肤的编码工作。',
              depth: [
                '使用jQuery编写树形控件，包含右键菜单、拖拽移动节点、展开关闭目录、suggest搜索提示等交互功能；后期通过oop思想，利用prototype属性进行重构，简化代码量。',
                '使用flex编写统计分析图表，利用状态模式解决不同图表的参数输入问题。',
                '系统换肤功能，能做gif，能处理css兼容性问题，兼容IE6和Firefox浏览器。',
                '有过一个星期短暂帮助同事处理商委系统bug的经验，学习使用了jsp.page分页控件。'
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
              desc: '与亚信合同到期后没有续约，一是想换一个前端工作，二是年初的时候大学老师来重庆，想开一家分店。他本人在成都，和他老婆经营着一个服装租赁公司，他自己是一家国企的构架师。在他的指导下，我注册了公司，租了店面，配置了演出服装和卡通头像，搭建了网站，开通了百度推广，也做了一些简单的seo优化，公司现在由老师同事的妹妹经营着，我主要负责网络推广。所以我很向往前端工作。',
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
          desc: '入职第一家公司就开始尝试写 css3，只是自己欣赏，不敢上生产环境。',
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
          desc: '自己学习过 gruntjs, requirejs, angularjs 等，在 github 是上写过 demo 。',
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
          desc: '入职第一家公司的时候，就把 1.3 版本的所有 API 都做过 demo。虽然最近几年未用，但熟悉基本 API。',
          url: jquery
        },
        {
          name: 'linux',
          desc: '熟悉常用的 linux 及 vi 命令，能在 linux 环境下修改代码部署应用。',
          url: linux
        },
        {
          name: 'balsamiq mockups',
          desc: '喜欢用她画草图，手机端用 pop ，结合 dia 等流程图工具，起草 app。',
          url: mockups
        },
        {
          name: 'mongodb',
          desc: '玩 krakenjs, meteor, mean.io 或者一些其他的 generator 都默认 mongodb，不会不行。',
          url: mongodb
        },
        {
          name: 'nodejs',
          desc: '我觉得她是一个完美的平台。',
          url: nodejs
        },
        {
          name: 'phonegap',
          desc: '刚出来的时候，很迷恋，做过 app 给老爸用。demo 在 github 上。',
          url: phonegap
        },
        {
          name: 'photoshop',
          desc: '能简单处理图像，有时也用 gimp，sketch，切图用在线工具拼接，项目中简单用过。',
          url: photoshop
        },
        {
          name: 'pug',
          desc: '我用的时候叫 jade ，图标还是一个兔子，我属兔就用了。现在的 pug 也好萌。',
          url: pug
        },
        {
          name: 'python',
          desc: '工作中写过自动化测试脚本，也用 python 来割接数据，感觉比写存储过程舒服。',
          url: python
        },
        {
          name: 'reactjs',
          desc: '因为老师说她比 vuejs 好，这份简历就是用 react 写的。',
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
          desc: '尤大发布 html5 clear 的时候就开始关注他了，从 google 到 meteor。他的开源项目，要玩。',
          url: vuejs
        },
        {
          name: 'webpack',
          desc: '当我熟悉 grunt 后，出来了 gulp，然后出来了 webpack。呵呵哒！',
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
        state.cards[i].front = true;
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
        top: _half_y - 135 + 'px',
        left: _half_x - 135 + 'px',
        transform: 'rotate(0deg)'
      };
      return {...state};
    },
    maxWindow(state) {
      return {
        ...state,
        idxWinMax: true
      }
    },
    minWindow(state){
      return {
        ...state,
        idxWinMax: false
      }
    }
  },
  effects: {},
  subscriptions: {
    setup(props) {
      props.dispatch({type: 'initCards'});
    }
  }
};

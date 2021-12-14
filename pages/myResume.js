import { useEffect } from 'react';
import Head from 'next/head';
import { Row, Col, List, Affix, Breadcrumb, Spin, Pagination } from 'antd';

import Header from '../components/Header';
import '../public/style/pages/myResume.css';
import '../public/style/pages/myResume-font.css';
import watch from '../components/watch';

const myResume = () => {
  const top = 0;
  let arr = [
    'JavaScript',
    'node',
    'TypeScript',
    'Vue',
    'React',
    'angular',
    'element',
    'html',
    'css',
    'next',
    'egg',
  ];

  useEffect(() => {
    document.addEventListener('mousedown', mouseDownFun);
    return () => {
      document.removeEventListener('mousedown', mouseDownFun);
    };
  }, []);

  const mouseDownFun = (e) => {
    const node = document.createElement('div');
    node.style.top = e.pageY - 20 + 'px';
    node.style.left = e.pageX + 'px';
    node.innerHTML = arr[Math.floor(Math.random() * 11)];
    node.className = 'text';
    document.body.append(node);
    setTimeout(() => {
      document.body.removeChild(node);
    }, 2000);
  };

  useEffect(() => {
    watch();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>简历 | 黄伟绩-The Future Depends on You</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="黄伟绩" />
        <meta
          name="description"
          content="简历 | 黄伟绩-The Future Depends on You"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="黄伟绩" />
        <meta
          name="google-site-verification"
          content="b7XdkZDn_li_SpxcgFM9oQLFUhVjXw6fqu_r84jo9wY"
        />
        <link
          rel="icon"
          href="../static/favicon.ico"
          mce_href="../static/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Affix offsetTop={top}>
        <Header />
      </Affix>
      <Row className="comm-main" type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="content">
            <div>
              <div className="introduction-left-item"></div>
            </div>
            <canvas id="mycanvas" width="250" height="500"></canvas>
            <div className="my-introduce">
              <audio
                src="http://49.233.14.172:2888/static/video/backgroundMusic.mp3"
                autoPlay
                loop
              ></audio>
              <div className="my-cylinder">
                <div
                  style={{
                    '--a': '-5',
                    '--b': '1.8',
                    '--c': '0.5',
                    backgroundColor: '#ffec99',
                  }}
                />
                <div
                  style={{
                    '--a': '1',
                    '--b': '1.6',
                    '--c': '0.9',
                    backgroundColor: '#d8f5a2',
                  }}
                />
                <div
                  style={{
                    '--a': '7',
                    '--b': '1.4',
                    '--c': '0.3',
                    backgroundColor: '#b2f2bb',
                  }}
                />
                <div
                  style={{
                    '--a': '13',
                    '--b': '1.2',
                    '--c': '0.2',
                    backgroundColor: '#96f2d7',
                  }}
                />
                <div
                  style={{
                    '--a': '19',
                    '--b': '1',
                    '--c': '0.7',
                    backgroundColor: '#99e9f2',
                  }}
                />
              </div>
              <div className="my-resume-title">基本信息</div>
              <ul>
                <li>
                  <span>
                    {/* <MyIcon type="icon-weixin" /> */}
                    姓名：
                  </span>
                  <span className="my-name" style={{ '--i': '0' }}>
                    黄
                  </span>
                  <span className="my-name" style={{ '--i': '0.5' }}>
                    伟
                  </span>
                  <span className="my-name" style={{ '--i': '1' }}>
                    绩
                  </span>
                </li>
                <li>
                  <span>职位：</span>
                  <span className="my-occupation" style={{ '--i': '0.5' }}>
                    前
                  </span>
                  <span className="my-occupation" style={{ '--i': '1' }}>
                    端
                  </span>
                  <span className="my-occupation" style={{ '--i': '1.5' }}>
                    实
                  </span>
                  <span className="my-occupation" style={{ '--i': '2' }}>
                    习
                  </span>
                  <span className="my-occupation" style={{ '--i': '2.5' }}>
                    生
                  </span>
                </li>
                <li>
                  <span>微信：</span>
                  <span className="my-WeChat" style={{ '--i': '1' }}>
                    h
                  </span>
                  <span className="my-WeChat" style={{ '--i': '1.5' }}>
                    w
                  </span>
                  <span className="my-WeChat" style={{ '--i': '2' }}>
                    j
                  </span>
                  <span className="my-WeChat" style={{ '--i': '2.5' }}>
                    6
                  </span>
                  <span className="my-WeChat" style={{ '--i': '3' }}>
                    8
                  </span>
                  <span className="my-WeChat" style={{ '--i': '3.5' }}>
                    5
                  </span>
                  <span className="my-WeChat" style={{ '--i': '4' }}>
                    2
                  </span>
                  <span className="my-WeChat" style={{ '--i': '4.5' }}>
                    1
                  </span>
                  <span className="my-WeChat" style={{ '--i': '5' }}>
                    8
                  </span>
                </li>
                <li>
                  <span>电话：</span>
                  <span className="my-phone" style={{ '--i': '1.5' }}>
                    1
                  </span>
                  <span className="my-phone" style={{ '--i': '2' }}>
                    8
                  </span>
                  <span className="my-phone" style={{ '--i': '2.5' }}>
                    2
                  </span>
                  <span className="my-phone" style={{ '--i': '3' }}>
                    0
                  </span>
                  <span className="my-phone" style={{ '--i': '3.5' }}>
                    0
                  </span>
                  <span className="my-phone" style={{ '--i': '4' }}>
                    9
                  </span>
                  <span className="my-phone" style={{ '--i': '4.5' }}>
                    7
                  </span>
                  <span className="my-phone" style={{ '--i': '5' }}>
                    5
                  </span>
                  <span className="my-phone" style={{ '--i': '5.5' }}>
                    3
                  </span>
                  <span className="my-phone" style={{ '--i': '6' }}>
                    7
                  </span>
                  <span className="my-phone" style={{ '--i': '6.5' }}>
                    0
                  </span>
                </li>

                <li>
                  <span>邮箱：</span>
                  <span className="my-email" style={{ '--i': '2' }}>
                    1
                  </span>
                  <span className="my-email" style={{ '--i': '2.5' }}>
                    8
                  </span>
                  <span className="my-email" style={{ '--i': '3' }}>
                    3
                  </span>
                  <span className="my-email" style={{ '--i': '3.5' }}>
                    5
                  </span>
                  <span className="my-email" style={{ '--i': '4' }}>
                    7
                  </span>
                  <span className="my-email" style={{ '--i': '4.5' }}>
                    7
                  </span>
                  <span className="my-email" style={{ '--i': '5' }}>
                    3
                  </span>
                  <span className="my-email" style={{ '--i': '5.5' }}>
                    6
                  </span>
                  <span className="my-email" style={{ '--i': '6' }}>
                    5
                  </span>
                  <span className="my-email" style={{ '--i': '6.5' }}>
                    2
                  </span>
                  <span className="my-email" style={{ '--i': '7' }}>
                    @
                  </span>
                  <span className="my-email" style={{ '--i': '7.5' }}>
                    q
                  </span>
                  <span className="my-email" style={{ '--i': '8' }}>
                    q
                  </span>
                  <span className="my-email" style={{ '--i': '8.5' }}>
                    .
                  </span>
                  <span className="my-email" style={{ '--i': '9' }}>
                    c
                  </span>
                  <span className="my-email" style={{ '--i': '9.5' }}>
                    o
                  </span>
                  <span className="my-email" style={{ '--i': '10' }}>
                    m
                  </span>
                </li>
              </ul>
            </div>

            <div className="my-education">
              <div className="my-resume-title">教育背景</div>
              <ul>
                <li style={{ position: 'relative' }}>
                  <span>学校：</span>
                  <span className="my-school">广东高新技术高级技工学校</span>
                  <img
                    src="https://www.gdgxjx.cn/upload/admin/20201130/d75117c1d8ded9e8e3645324009a0a8b.png"
                    className="schoolLogo"
                  ></img>
                </li>
                <li>
                  <span>学历：</span>
                  <span>技师</span>
                </li>
                <li>
                  <span>专业：</span>
                  <span>计算机网络应用</span>
                </li>
                <li>
                  <span>毕业时间：</span>
                  <span>2023.06</span>
                </li>
              </ul>
              <div className="my-resume-title">教育背景2</div>
              <ul>
                <li style={{ position: 'relative' }}>
                  <span>学校：</span>
                  <span className="my-school">广州航海学院</span>
                  <img
                    src="http://www.gzmtu.edu.cn/images/logo.png"
                    className="schoolLogo"
                  ></img>
                </li>
                <li>
                  <span>学历：</span>
                  <span>本科</span>
                </li>
                <li>
                  <span>专业：</span>
                  <span>计算机科学与技术</span>
                </li>
                <li>
                  <span>毕业时间：</span>
                  <span>2026.06</span>
                </li>
              </ul>
            </div>
            <div className="my-introduction">
              <div className="my-resume-title">技能简介</div>
              <div className="my-Inventory">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <span className="Inventory-item HTML">HTML</span>
                  <span className="Inventory-item CSS">CSS</span>
                  <span className="Inventory-item JavaScript">JavaScript</span>
                  <span className="Inventory-item React">React</span>
                  <span className="Inventory-item React-Router">
                    React-Router
                  </span>
                  <span className="Inventory-item Redux">Redux</span>
                  <span className="Inventory-item Redux-Saga">Redux</span>
                  <span className="Inventory-item Ant-Design-Pro">
                    Ant Design Pro
                  </span>
                  <span className="Inventory-item ElementUI">ElementUI</span>
                  <span className="Inventory-item NextJS">NextJS</span>
                  <span className="Inventory-item Vue">Vue</span>
                  <span className="Inventory-item Vuex">Vuex</span>
                  <span className="Inventory-item Vue-Router">Vue-Router</span>
                  <span className="Inventory-item angular">Angular</span>
                  <span className="Inventory-item nodeJS">nodeJS</span>
                  <span className="Inventory-item eggJS">eggJS</span>
                  <span className="Inventory-item MySQL">MySQL</span>
                </div>
              </div>
              <ul>
                <li>
                  <span className="">
                    熟悉 HTML(HTML5)、CSS(CSS3)、JavaScript;
                  </span>
                </li>
                <br />
                <li>
                  <span className="">
                    熟练使用 React、React-Router、Redux、Redux.
                  </span>
                  <br />
                  <span className="">
                    熟悉使用 Ant Design Pro、Ant Design UI；
                  </span>
                  <br />
                  <span className="">熟悉使用 NextJS；</span>
                  <br />
                </li>
                <br />
                <li>
                  <span className="">熟练使用 Vue、Vue-Router、Vuex；</span>
                  <br />
                  <span className="">
                    熟悉使用 Ant Design Pro vue、Ant Design
                  </span>
                  <br />
                </li>
                <br />

                <br />
                <li>
                  <span className="">
                    了解 nodeJS、eggJS、MySQL、Electron。
                  </span>
                </li>
              </ul>
            </div>

            {/* <div className="my-experience">
              <div>
                <div className="experience-right-item"></div>
              </div>
              <div className="my-resume-title">校内实习</div>
              <div className="experience-content">
                <div>
                  <div className="experience-company">
                    <span>时间：2021.11 - 2021.12</span>
                    <span>公司：广州红树林教育科技有限公司</span>
                    <span>职位：WEB前端工程师</span>
                  </div>
                  <div>
                    <div>1. 负责和后端</div>
                    <ul>
                      <li>
                        <p>技术栈：jQuery、Bootstrap、ajax、Ueditor</p>
                      </li>
                      <li>
                        <span>
                          项目主要功能：课程分类展示、客场编辑上传、微信支付、微信登录
                        </span>
                      </li>
                      <li>
                        <strong>项目难点：</strong>
                        <ul>
                          <li>
                            课程展示部分图片较多且图片较大，造成页面加载时间较长
                          </li>
                          <li>
                            解决方案1：在课程上传时将其中的图片使用 canvas
                            压缩。压缩后，课程展示加载的时间明显缩小，但是该图片在课程详情页中显示时不够清晰；
                          </li>
                          <li>解决方案2：采用懒加载的方式。</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div>2. STEAM教育系统</div>
                    <ul>
                      <li>
                        <p>
                          技术栈：React、Ant Design Pro、Ant Design UI、dva、umi
                        </p>
                      </li>
                      <li>
                        <span>
                          系统采用前后端分离的开发模式。系统包含一个作业系统和一个后台管理系统：
                        </span>
                        <br />
                        <span>
                          作业系统中分为三个角色：学生、老师、管理员；主要功能：微信登录、学生在线完成作业、老师在线批改作业、管理员管理系统资源;
                        </span>
                        <br />
                        <span>
                          后台管理系统用于管理
                          “用户系统”，其中主要包括：微信登录、统计信息、课程管理、用户积分管理等。
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="experience-company">
                    <span>时间：2020.08 - 2021.05</span>
                    <span>公司：杭州希维信息科技有限公司成都分公司</span>
                    <span>职位：前端工程师</span>
                  </div>
                  <div>
                    <div>1.货旅纵横平台</div>
                    <ul>
                      <li>
                        <p>技术栈：Vue、 Ant Design Pro Vue</p>
                      </li>
                      <li>
                        <span>
                          项目主要功能：业务概览可视化、运费计算、发货管理、库存管理、集装箱管理、财务管理、组织架构管理、站点管理，订单详情。
                        </span>
                        <br />
                        <span>
                          我主要完成{' '}
                          <strong>发货管理、订单详情、集装箱管理</strong> 部分：
                        </span>
                        <ul>
                          <li>
                            <strong>发货跟踪</strong>：使用 Table
                            展示订单列表、提供筛选功能、通过列表进入订单详情；
                          </li>
                          <li>
                            <strong>订单详情</strong>
                            ：展示订单的完整信息、使用高德地图展示运单轨迹；
                          </li>
                          <li>
                            <strong>需求提报</strong>
                            ：提供模板功能、在提交订单时，提示用户是否同时提交为模板，以供下次使用；
                          </li>
                          <li>
                            <strong>集装箱管理</strong>：使用 Table
                            展示集装箱列表、提供集装箱操作功能。
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>项目难点：</strong>
                        <ul>
                          <li>
                            发货提报部分字段多、种类多，给页面布局及接口对接都增加了很大的难度；
                          </li>
                          <li>模板功能的页面字段反显。</li>
                        </ul>
                      </li>
                    </ul>
                    <div>2.货旅纵横平台小程序</div>
                    <ul>
                      <li>
                        <p>技术栈：uni-app、 vant-weapp UI</p>
                      </li>
                      <li>
                        <span>
                          项目主要功能：集装箱管理、库存管理、订单管理
                        </span>
                        <br />
                        <ul>
                          <li>
                            <strong>集装箱管理</strong>
                            ：展示集装箱列表、集装箱列表筛选、集装箱操作功能、集装箱添加图片；
                          </li>
                          <li>
                            <strong>库存管理</strong>
                            ：展示库存列表、库存列表筛选、库存操作功能；
                          </li>
                          <li>
                            <strong>订单管理</strong>
                            ：展示订单列表、订单分享功能、订单详情。
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default myResume;

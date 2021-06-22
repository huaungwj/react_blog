import React , {useState , useEffect,useContext} from 'react'
import Head  from 'next/head'
import moment from 'moment'
import {withRouter} from "next/router";
import Link from "next/link";
import { Row ,Col , List ,Spin } from 'antd'
import {
    CalendarOutlined, // 日期
    FolderOutlined, // 文件
    FireOutlined , // 热度
    FileOutlined,
} from '@ant-design/icons'
/* 引入组件 */
import Header from "../components/Header"; // 头部组件
import IndexStyle from '../styles/pages/index.module.css' // 首页css样式文件
import Author from "../components/Author"; // 作者信息
import Advert from '../components/Advert' // 广告
import Footer from "../components/Footer";
import axios from 'axios'
import servicePath from "../config/apiUrl";
//引入marked进行解析
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'
/*reducer*/
import {IsLoadingContext,UPDATE_ISLOADING} from '../components/isLoading'

function Main(props) {
    const [mylist, setMylist] = useState(props.list)
    // const [isLoading , setIsLoading] = useState(false)
    const {isLoading,dispatch} = useContext(IsLoadingContext)
    console.log(props)


    useEffect(() => {
        console.log(props)
    },[])
    useEffect(() => {
        console.log(isLoading)
    })

    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code){
            return hljs.highlightAuto(code).value
        }
    })

    /*跳转详细页面*/
    const toLink = (id) => {
        props.router.push({
            pathname: '/detailed',
            query: {
                id
            }
        })
    }


    return (
        <div>
            <Spin tip='Loading...' spinning={isLoading}>
                <Head>
                    <title>个 人 博  客</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header/>
                {/*{console.log(data)}*/}
                <Row type="flex" justify="center" className="comm-main">
                    <Col className="comm-left"  xs={24} sm={24} md={10} lg={10} xl={10}>
                        <List
                            header={<div>最新日志</div>}
                            itemLayout="vertical"
                            dataSource={mylist}
                            renderItem={(item,index)=> {
                                return (
                                    <List.Item>
                                        <div className={IndexStyle.listTitle} onClick={() =>{
                                            dispatch({type: UPDATE_ISLOADING,isLoading:true})
                                            toLink(item.id)
                                        }}>
                                            <a>
                                                {item.title}
                                            </a>
                                        </div>
                                        <div className={IndexStyle.listIcon}>
                                <span>
                                    <CalendarOutlined />
                                    &nbsp; {moment(item.addTime).format('YYYY-MM-DD HH:mm:ss')} &nbsp;
                                </span>
                                            <span>
                                    <FolderOutlined />
                                                &nbsp;{item.typeName}&nbsp;
                                </span>
                                            <span>
                                    <FireOutlined />
                                                {item.view_count}人&nbsp;
                                </span>
                                        </div>
                                        <div className={IndexStyle.listContext}
                                             dangerouslySetInnerHTML={{__html: marked(item.introduce)}}
                                        >
                                        </div>
                                    </List.Item>
                                )
                            }}
                        />
                    </Col>
                    <Col className="comm-right" xs={0} sm={0} md={7} lg={4} xl={3}>
                        <Author/>
                        <Advert/>
                    </Col>
                </Row>

                <Footer/>
            </Spin>
        </div>
    )
}

export default withRouter(Main)
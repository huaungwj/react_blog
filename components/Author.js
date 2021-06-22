import React from 'react'
import authorStyle from '../styles/components/Author.module.css'
import {Avatar, Divider} from 'antd'
import {GithubOutlined, QqOutlined, TwitterOutlined, UserOutlined, WechatOutlined,} from '@ant-design/icons'

export default function Author() {
    return (
        <div className={authorStyle.authorDiv + ' comm-box'}>
            <div>
                <Avatar size={100} icon={<UserOutlined/>}/>
            </div>
            <div className={authorStyle.authorName}>Huangweiji</div>
            <div className={authorStyle.authorIntroduction}>只有努力过了，才不遗憾</div>
            <Divider>社交账号</Divider>
            <Avatar icon={<TwitterOutlined/>} size={28} className={authorStyle.contact}/>
            <Avatar icon={<GithubOutlined/>} size={28} className={authorStyle.contact}/>
            <Avatar icon={<QqOutlined/>} size={28} className={authorStyle.contact}/>
            <Avatar icon={<WechatOutlined/>} size={28} className={authorStyle.contact}/>
        </div>
    )
}

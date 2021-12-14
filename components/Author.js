/*
 * @Description: 作者组件
 * @Author: 黄伟绩
 */
import { useRouter } from 'next/router';
import { Avatar, Divider, Tooltip } from 'antd';
import { QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css';
// import logo from '../public/logo.jpg';

const Author = () => {
  const router = useRouter();
  const onGoToResume = () => {
    router.push('/myResume');
  };

  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="http://49.233.14.172:2888/static/images/blogAvatar.jpg"
          alt="黄伟绩"
          className="author-logo"
          onClick={onGoToResume}
        />
      </div>
      <div className="author-introduction">
        <strong className="author-font">The Future Depends on You</strong>
        <Divider>社交账号</Divider>
        {/* <Tooltip title="">
          <Avatar size={28} icon={<GithubOutlined />} className="account" />
        </Tooltip> */}
        <Tooltip title="1835773652" color="#007ca3">
          <Avatar size={28} icon={<QqOutlined />} className="account" />
        </Tooltip>
        {/* <Tooltip title="TYC1069252020" color='#007ca3'> */}
        <Avatar size={28} icon={<WechatOutlined />} className="accountweixin" />
        {/* </Tooltip> */}
        {/* <div className="qqImg" >
          <img src="http://www.xiaohai.com/static/QQ.png" className="qqImgContent" />
        </div> */}
        <div className="weixinImg">
          <img
            src="http://49.233.14.172:2888/static/images/Wechat.jpg"
            className="weixinImgContent"
            alt="黄伟绩"
          />
        </div>
      </div>
    </div>
  );
};

export default Author;

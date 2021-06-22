import advertStyle from '../styles/components/Advert.module.css'


export default function Advert() {
     return (
         <div className={advertStyle.adDiv + ' comm-box'} >
            <div><img src="https://newimg.jspang.com/kaikeba20201120.png" width='100%' alt=""/></div>
            <div><img src="https://blogimages.jspang.com/WechatIMG12.jpeg" width='100%' alt=""/></div>
         </div>
     )
}
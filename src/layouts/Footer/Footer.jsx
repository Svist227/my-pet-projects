import './Footer.scss'
import FooterList from '@/components/FooterList'
const Footer = () => {
    return (<>
    <footer className="footer">

        <div className="footer__nav nav">

            <FooterList heading = 'Home' listmap = {['Categories', 'Devices', 'Pricing', 'FAQ']}/>
            <FooterList heading = 'Movies' listmap = {['Gernes', 'Trending', 'New Release', 'Popular']}/>
            <FooterList heading = 'Shows' listmap = {['Gernes', 'Trending', 'New Release', 'Popular']}/>
            <FooterList heading = 'Support' listmap = {['Contact Us']}/>
            <FooterList heading = 'Subscription' listmap = {['Plans', 'Features']}/>
            <FooterList heading = 'Connect With Us'  social =  {['facebook', 'twitter','instagram']}/>
            
            
            
        </div>
        <div className="footer__floor floor">
        <div className="floor__element-left">
        <p className="floor__element-p">@2023 streamvib, All Rights Reserved </p>
        </div>
        <div className="floor__element-right">
            <p className="floor__element-p">Terms of Use </p>
            <p className="floor__element-p">Privacy Policy </p>
            <p className="floor__element-p">Cookie Policy </p>
        </div>
       </div>

    </footer>
    </>)
}

export default Footer
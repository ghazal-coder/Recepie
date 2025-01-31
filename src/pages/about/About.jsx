
import style from "./About.module.css"
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/footer/Footer'
import Explore from '../../component/explore/explore'
import Wrapper from '../../component/container/Wrapper'

function About() {
    return (
        <div className={style.about}>
            <Navbar />
            <Wrapper><Explore /></Wrapper>
            <Footer />
        </div>
    )
}

export default About
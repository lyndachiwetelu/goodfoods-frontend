import foodBanner from '../../assets/images/foodBanner.png'
import { Container, Image, Button } from 'react-bootstrap'
import style from './Home.module.css'

const Home = () => {
    return (
        <Container>
            <div className={style.PageBanner}>
                <div className={style.PageBanner__Text}>
                    <h1 className={style.Heading}>Enjoy Delicious Foods At The Best Prices</h1>
                    <p>We provide an expansive array of mouth watering cuisines be it for breakfast, lunch or dinner </p>
                    <Button className={style.PageBanner__Btn}>Explore Now</Button>
                </div>
                <div className={style.PageBanner__Image}>
                    <Image src={foodBanner} fluid/>
                </div>
            </div>
            <div className={style.Numbers}>
                <div>
                    <h1>1000+</h1>
                    <p>Foods</p>
                </div>
                <div>
                    <h1>22,000+</h1>
                    <p>Customers</p>
                </div>
                <div>
                    <h1>100,000+</h1>
                    <p>Orders</p>
                </div>
            </div>
        </Container>
    )
}

export default Home
import foodBanner from '../../assets/images/foodBanner.png'
import burgerPng from '../../assets/images/foods/burger.png'
import ricePng from '../../assets/images/foods/rice-gravy.png'
import saladPng from '../../assets/images/foods/ceasar-salad.png'
import salmonPng from '../../assets/images/foods/salmon-fiesta.png'
import tunaPng from '../../assets/images/foods/tuna-salad.png'
import fruitPng from '../../assets/images/foods/fruit-salad.png'
import { Container, Image, Button } from 'react-bootstrap'
import style from './Home.module.css'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons'
import { useState } from 'react'

const Home = () => {
    const foods =  [
        {
            image: burgerPng,
            name: 'Beef Burger',
            description: 'Delicious burger with beef, bacon cheese and tomatoes'
        },
        {
            image: saladPng,
            name: 'Ham Green Salad',
            description: 'Made with a generous portion of Ham, cabbage, tomatoes and peas'
        },
        {
            image: ricePng,
            name: 'Rice with Gravy',
            description: 'Rice chicken green beans amd gravy sauteed with spicy curry'
        },
        {
            image: salmonPng,
            name: 'Salmon Fiesta',
            description: 'Delicious Salmon with a side of greens and reds'
        },
        {
            image: fruitPng,
            name: 'Fruit Salad',
            description: 'A bowl of refreshing fruity gooey pleasure, Mango, nektar, Maracuja, etc'
        },
        {
            image: tunaPng,
            name: 'Tuna Salad',
            description: 'A very healthy Salad mix to go with Tuna, greens top-notch'
        }
    ]

    const itemsPerSlide = 5

    const [startSlide, setStartSlide] = useState(0)
    const [endSlide, setEndSlide] = useState(itemsPerSlide)

    const nextSlide = () => {
        setStartSlide( prevStartSlide => {
            if (prevStartSlide + itemsPerSlide >= foods.length) {
                return 0
            }
            return prevStartSlide + itemsPerSlide
            
        })
        setEndSlide(prevEndSlide => {
            if (prevEndSlide === foods.length) {
                return itemsPerSlide
            }
            if (prevEndSlide + itemsPerSlide > foods.length) {
                return foods.length
            } 

            return prevEndSlide + itemsPerSlide
        })
    }

    const prevSlide = () => {
        setStartSlide(prevStartSlide => {
            if (prevStartSlide === 0) {
                return itemsPerSlide
            }


            if (prevStartSlide - itemsPerSlide < 0) {
                return foods.length - itemsPerSlide 
            }

            if (prevStartSlide + itemsPerSlide < foods.length) {
                return prevStartSlide + itemsPerSlide 
            }

            if (prevStartSlide + itemsPerSlide >= foods.length) {
                return 0 
            }

            return prevStartSlide - itemsPerSlide
        })

        setEndSlide(prevEndSlide => {
            if (prevEndSlide === foods.length) {
                return itemsPerSlide
            }

            if (prevEndSlide + itemsPerSlide <= foods.length) {
                return prevEndSlide + itemsPerSlide
            } else if (prevEndSlide + itemsPerSlide > foods.length) {
              
                return itemsPerSlide + (prevEndSlide + itemsPerSlide - foods.length )
            }

            return prevEndSlide - itemsPerSlide
        })
    
    }

    console.log(startSlide)
    console.log(endSlide)

    return (
        <Container>
            <div className={style.PageBanner}>
                <div className={style.PageBanner__Text}>
                    <h1 className={style.PageBanner__Heading}>Enjoy Delicious Foods At The Best Prices</h1>
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
            <div className={style.FoodCardListSection}>
                <h1 className={style.FoodCardListSection__h1}>People Love these...</h1>

                <ArrowLeftCircleFill onClick={prevSlide} size={25}/> 
                <ArrowRightCircleFill onClick={nextSlide} size={25}/>

                <div className={style.FoodCardList}>


                    {foods.slice(startSlide, endSlide).map(food => (
                        <div className={style.FoodCard} key={food.name}>
                            <Image src={food.image} className={style.FoodCard__Img}/>
                            <h2>{food.name}</h2>
                            <p>{food.description}</p>
                            <div className={style.FoodCard__Price}><h4>€34.99</h4> <Button className={style.FoodCard__OrderBtn}>ORDER</Button></div>
                        </div>

                    ))}

                    
                   
                </div>
            </div>        
        </Container>
    )
}

export default Home
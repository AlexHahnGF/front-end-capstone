import '../styles/main.css'
import Card from './Card'
import { Box, Heading, VStack } from "@chakra-ui/react";

const meals = [
    {
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and prosemary croutons.",
        getImageSrc: () => require("../icons_assets/greek salad.jpg"),
        price: "$12.99"
    },
    {
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        getImageSrc: () => require("../icons_assets/bruchetta.jpg"),
        price: "$ 5.99"
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        getImageSrc: () => require("../icons_assets/lemon dessert.jpg"),
        price: "$12.99"
    }
]

export default function Main() {
    return (
        <main>
            <div className="specials-header">
                <div></div>
                <h2 className='display-title main-title'>This week specials!</h2>
            </div>
            <section className='main-container'>
                <div></div>
                    { meals.map( meal => (
                        <Card
                            key={meal.title}
                            title={meal.title}
                            description={meal.description}
                            imageSrc={meal.getImageSrc()}
                            price={meal.price}
                        />
                    )) }

                <div></div>
            </section>
        </main>


        // <main>
        //     <VStack></VStack>
        //     <div className="specials-header">
        //         <div></div>
        //         <h2 className='display-title main-title'>This week specials!</h2>
        //     </div>
        //     <VStack maxWidth="1280px" minHeight="100vh">
        //         <Box
        //             display="grid"
        //             girdTemplateColumns="0.75fr 1fr 1fr 1fr 0.75fr"
        //             gridGap={8}
        //         >
        //         <div></div>
        //         { meals.map( meal => (
        //             <Card
        //                 key={meal.title}
        //                 title={meal.title}
        //                 description={meal.description}
        //                 imageSrc={meal.getImageSrc()}
        //                 price={meal.price}
        //             />
        //         )) }
        //         <div></div>
        //         </Box>
        //     </VStack>
        // </main>
    )
}
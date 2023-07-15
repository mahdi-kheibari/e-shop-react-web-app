import gamer from './../assets/images/main-slider/gamer.jpg';
import electronic from './../assets/images/main-slider/electronic.jpg';
import clothing from './../assets/images/main-slider/clothing.jpg';
import Xiaomi from './../assets/images/brand-slider/Xiaomi.jpg';
import Samsung from './../assets/images/brand-slider/Samsung.jpg';
import Adidas from './../assets/images/brand-slider/Adidas.jpg';
import Sony from './../assets/images/brand-slider/Sony.jpg';
const state = {
    categories:["Digital","Fashion","Beauty","House"],
    mainSliderImg: [
        {
            name: "gamer",
            address: gamer,
            route: "forGamer"
        },
        {
            name: "Electronic",
            address: electronic,
            route: "Electronic"
        },
        {
            name: "Fashion and clothing",
            address: clothing,
            route: "Fashion"
        },
    ],
    SpecialBrandsSlider: [
        {
            name: "Xiaomi",
            address: Xiaomi
        },
        {
            name: "Samsung",
            address: Samsung
        },
        {
            name: "Adidas",
            address: Adidas
        },
        {
            name: "Sony",
            address: Sony
        },
    ]

}
export default state;
import FOAM_150 from './../assets/images/category/Beauty/Health/FOAM_150.jpg';
import Soap_100g from './../assets/images/category/Beauty/Health/Soap_100g.jpg';
import Pain_100gr from './../assets/images/category/Beauty/Health/Pain_100gr.jpg';
import Essence from './../assets/images/category/Beauty/makeup/Essence.jpg';
import Callista from './../assets/images/category/Beauty/makeup/Callista.jpg';
import Callista_Extend from './../assets/images/category/Beauty/makeup/Callista_Extend.jpg';
const Beauty = {
    Products: {
        health: [
            {
                name: "DERMALIFT SEBOLIFT CLEANSING SYNDET FOAM 150 mil",
                nameFa: "فوم شستشوی صورت پوستهای چرب و جوشدار درمالیفت مدل سبولیفت حجم 150 میلی لیتر",
                id: "FOAM_150",
                images: [
                    {
                        address: FOAM_150,
                    }
                ],
                price: "51,800",
                special: false,
                discount: "",
                realPrice: "",
                brand: "DERMALIFT"
            },
            {
                name: "Eucerin Nobacter Soap 100g",
                nameFa: "صابون ضد جوش اوسرین  مدل نوباکتر 100g",
                id: "Soap_100g",
                images: [
                    {
                        address: Soap_100g,
                    }
                ],
                price: "50,100",
                special: false,
                discount: "",
                realPrice: "",
                brand: "Eucerin"
            },
            {
                name: "Pro Derma Acnevest Pain 100 gr",
                nameFa: "پن پوست چرب پرودرما مدل Acnevest مقدار 100 گرم",
                id: "Pain_100gr",
                images: [
                    {
                        address: Pain_100gr,
                    }
                ],
                price: "55,300",
                special: true,
                discount: "17%",
                realPrice: "66,900",
                brand: "Pro Derma"
            },
        ],
        makeup: [
            {
                name: "Essence I Love Extreme Volume Mascara",
                nameFa: "ریمل حجم دهنده اسنس مدل I Love Extreme Volume",
                id: "Essence",
                images: [
                    {
                        address:Essence ,
                    }
                ],
                price: "79,000",
                special: false,
                discount: "",
                realPrice: "",
                brand: "Essence"
            },
            {
                name: "Callista Cover Up Concealer C11",
                nameFa: "کانسیلر کالیستا مدل Cover Up شماره C11",
                id: "Callista",
                images: [
                    {
                        address:Callista ,
                    }
                ],
                price: "46,100",
                special: true,
                discount: "20%",
                realPrice: "57,600",
                brand: "Callista"
            },
            {
                name: "Callista Extend Volume Mascara",
                nameFa: "ریمل حجم دهنده کالیستا مدل Extend Volume",
                id: "Callista_Extend",
                images: [
                    {
                        address: Callista_Extend,
                    }
                ],
                price: "70,000",
                special: true,
                discount: "31%",
                realPrice: "103,500",
                brand: "Callista"
            },
        ]
    }
}
export default Beauty
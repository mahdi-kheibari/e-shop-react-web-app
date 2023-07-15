import P1494 from './../assets/images/category/House/cleaning/P1494.jpg';
import c1C from './../assets/images/category/House/cleaning/1C.jpg';
import GDW_J552S from './../assets/images/category/House/cleaning/GDW-J552S.jpg';
import GTV_50LU722S from './../assets/images/category/House/video_and_audio/GTV-50LU722S.jpg';
import Playstation_5 from './../assets/images/category/House/video_and_audio/Playstation_5.jpg';
import PLUS_3D from './../assets/images/category/House/video_and_audio/PLUS_3D.jpg';
const House = {
    Products: {
        cleaning: [
            {
                name: "Samsung P1494 Washing Machine - 9 Kg",
                nameFa: "ماشین لباسشویی سامسونگ مدل P1494 ظرفیت 9 کیلوگرم",
                id: "P1494",
                images: [
                    {
                        address: P1494,
                    }
                ],
                price: "27,500,000",
                special: false,
                discount: "",
                realPrice: "",
                brand: "Samsung"
            },
            {
                name: "Xiaomi cordless vacuum cleaner model 1C",
                nameFa: "جارو شارژی شیائومی مدل 1C",
                id: "1C",
                images: [
                    {
                        address: c1C,
                    }
                ],
                price: "6,500,000",
                special: true,
                discount: "10%",
                realPrice: "7,200,000",
                brand: "Xiaomi"
            },
            {
                name: "GPlus GDW-J552S Dishwasher",
                nameFa: "ماشین ظرفشویی جی پلاس مدل GDW-J552S",
                id: "GDW-J552S",
                images: [
                    {
                        address: GDW_J552S,
                    }
                ],
                price: "14,575,000",
                special: true,
                discount: "7%",
                realPrice: "15,700,000",
                brand: "GPlus"
            },
        ],
        "video-audio": [
            {
                name: "Gplus GTV-50LU722S Smart LED TV 50 Inch",
                nameFa: "تلویزیون ال ای دی هوشمند جی پلاس مدل GTV-50LU722S سایز 50 اینچ",
                id: "GTV-50LU722S",
                images: [
                    {
                        address: GTV_50LU722S,
                    }
                ],
                price: "9,950,000",
                special: true,
                discount: "6%",
                realPrice: "10,550,000",
                brand: "Gplus"
            },
            {
                name: "Sony Playstation 5 game console with a capacity of 825 GB",
                nameFa: "کنسول بازی سونی مدل Playstation 5 ظرفیت 825 گیگابایت",
                id: "Playstation_5",
                images: [
                    {
                        address: Playstation_5,
                    }
                ],
                price: "27,895,000",
                special: false,
                discount: "",
                realPrice: "",
                brand: "Sony"
            },
            {
                name: "Sony PlayStation 5 PLUS 3D gaming headset",
                nameFa: "هدست گیمینگ سونی پلی استیشن 5 مدل PLUS 3D",
                id: "PLUS_3D",
                images: [
                    {
                        address: PLUS_3D,
                    }
                ],
                price: "3,295,000",
                special: false,
                discount: "",
                realPrice: "",
                brand: "Sony"
            },
        ]
    }
}
export default House
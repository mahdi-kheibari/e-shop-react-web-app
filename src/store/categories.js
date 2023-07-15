import digitalCover from './../assets/images/category/Digital/cover.jpg';
import mobileCover from './../assets/images/category/Digital/mobile/cover.png';
import laptopCover from './../assets/images/category/Digital/laptop/cover.png';
import fashionCover from './../assets/images/category/Fashion/cover.jpg';
import femaleCover from './../assets/images/category/Fashion/female/cover.png';
import maleCover from './../assets/images/category/Fashion/male/cover.png';
import houseCover from './../assets/images/category/House/cover.jpg';
import cleaningCover from './../assets/images/category/House/cleaning/cover.png';
import videoCover from './../assets/images/category/House/video_and_audio/cover.png';
import beautyCover from './../assets/images/category/Beauty/cover.jpg';
import healthCover from './../assets/images/category/Beauty/Health/cover.png';
import makeupCover from './../assets/images/category/Beauty/makeup/cover.png';
const categories = {
    brands:["Xiaomi","Samsung","Adidas","Sony"],
    allCategories: {
        "Digital products":
        {
            titleFa: "کالای دیجیتال",
            address: digitalCover,
            route: "/Products/category/Digital",
            products: {
                mobile: {
                    titleFa: "گوشی موبایل",
                    icon: "PhoneIphoneOutlined",
                    cover: mobileCover,
                    route: "/Products/Digital/mobile",
                },
                laptop: {
                    titleFa: "لپ تاپ",
                    icon: "LaptopMacOutlined",
                    cover: laptopCover,
                    route: "/Products/Digital/laptop",
                }
            }
        }
        ,
        "Fashion and clothing":
        {
            titleFa: "مد و پوشاک",
            address: fashionCover,
            route: "/Products/category/Fashion",
            products: {
                female: {
                    titleFa: "زنانه",
                    // iconClass: 'icon-female',
                    icon:'WomanOutlined',
                    cover: femaleCover,
                    route: "/Products/Fashion/female",
                },
                male: {
                    titleFa: "مردانه",
                    // iconClass: 'icon-tshirt',
                    icon:'ManOutlined',
                    cover: maleCover,
                    route: "/Products/Fashion/male",
                }
            }
        }
        ,
        "House":
        {
            titleFa: "خانه",
            address: houseCover,
            route: "/Products/category/House",
            products: {
                cleaning: {
                    titleFa: "شستشو و نظافت",
                    // iconClass: "icon-hand-sparkles",
                    icon:"CleanHandsOutlined",
                    cover: cleaningCover,
                    route: "/Products/House/cleaning",
                },
                "video-audio": {
                    titleFa: "صوتی و تصویری",
                    icon: "TvOutlined",
                    cover: videoCover,
                    route: "/Products/House/video-audio",
                }
            }
        }
        ,
        "Beauty and health":
        {
            titleFa: "زیبایی و سلامت",
            address: beautyCover,
            route: "/Products/category/Beauty",
            products: {
                health: {
                    titleFa: "بهداشتی",
                    // iconClass: "icon-heartbeat",
                    icon:"FavoriteBorderOutlined",
                    cover: healthCover,
                    route: "/Products/Beauty/health",
                },
                makeup: {
                    titleFa: "آرایشی",
                    // iconClass: "icon-paint-brush",
                    icon:"BrushOutlined",
                    cover: makeupCover,
                    route: "/Products/Beauty/makeup",
                }
            }
        }

    }
}
export default categories
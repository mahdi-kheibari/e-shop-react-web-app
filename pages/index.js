import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useWindowWidth from "@/components/hooks/useWindowWidth";
import { Box } from "@mui/system";
import MainSwiper from "@/components/swiper/mainSwiper/MainSwiper";
import { SwiperSlide } from "swiper/react";
import { store } from "@/store/Context";
import Link from "@/components/utils/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RouterLink from "next/link";
import DiscountSwiper from "@/components/swiper/discountSwiper/DiscountSwiper";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import SecondSwiper from "@/components/swiper/secondSwiper/SecondSwiper";
import SecondSwiperItem from "@/components/swiper/secondSwiper/secondSwiperItem/SecondSwiperItem";
import SecondSwiperSm from "@/components/swiper/secondSwiper/secondSwiperSm/SecondSwiperSm";
import style from '@/styles/sass/Home.module.scss';

export default function Home() {
    const { windowWidth } = useWindowWidth();
    const context = useContext(store);
    const [bestSellerSlider, setBestSellerSlider] = useState([]);
    const [discountSlider, setDiscountSlider] = useState([]);
    useEffect(() => {
        const products = [];
        const bestProducts = [];
        function filteredProduct(Products) {
            for (let key in Products) {
                const filtered = Products[key]
                    .filter((item) => item.special === true)
                    .map((item) => {
                        return {
                            ...item,
                            category: key,
                        };
                    });
                products.push(...filtered);

                const best = Products[key].map((item) => {
                    return {
                        ...item,
                        category: key,
                    };
                });
                bestProducts.push(...best);
            }
        }
        const allProducts = {
            Digital: context.Digital.Products,
            Fashion: context.Fashion.Products,
            Beauty: context.Beauty.Products,
            House: context.House.Products,
        };
        for (let key in allProducts) {
            filteredProduct(allProducts[key]);
        }

        const discount = [];
        for (let step = 0; step < 3; step++) {
            const random = products[Math.floor(Math.random() * products.length)];
            if (!discount.some((item) => item.id === random.id)) {
                discount.push(random);
            }
        }
        setDiscountSlider(discount);
        const bestSeller = [];
        for (let step = 0; step < 8; step++) {
            const random =
                bestProducts[Math.floor(Math.random() * bestProducts.length)];
            if (!bestSeller.some((item) => item.id === random.id)) {
                bestSeller.push(random);
            }
        }
        setBestSellerSlider(bestSeller);
    }, []);
    return (
        <Container
            fixed={windowWidth >= 992 ? true : false}
            maxWidth={windowWidth >= 992 ? false : "lg"}
            sx={{ mx: windowWidth >= 992 ? "auto" : "initial" }}
        >
            <Box component={"section"}>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={8}>
                        <MainSwiper pagination={true} rootStyle="categories">
                            {context.mainSliderImg.map((item) => (
                                <SwiperSlide key={item.name}>
                                    <Link href={`/Products/category/${item.route}`}>
                                        <img src={item.address} alt={item.name} />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </MainSwiper>
                    </Grid>
                    {windowWidth >= 992 ? (
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    bgcolor: "white.main",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                                className={`${style["discounts"]}`}
                            >
                                <Typography
                                    variant="h2"
                                    color="danger.main"
                                    sx={{ textAlign: "center", pt: 2, fontWeight: "bold", mb: 2 }}
                                    className={`${style["discounts-title"]}`}
                                >
                                    Special discounts
                                </Typography>
                                <MainSwiper pagination={false} rootStyle="discounts-slider">
                                    {discountSlider.map((i) => (
                                        <SwiperSlide key={i.name}>
                                            <Link
                                                href={`/Product/${i.category}/${i.id}`}
                                                sx={{
                                                    height: "100%",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    flexDirection: "column",
                                                    pb: 2,
                                                }}
                                            >
                                                <Box className={`${style["second-card-img"]}`} sx={{ mx: "auto" }}>
                                                    <img src={i.images[0].address} alt={i.name} />
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        height: "100%",
                                                        justifyContent: "space-between",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        textAlign: "center",
                                                    }}
                                                    className={`${style["discounts-slider_caption"]}`}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        color="initial"
                                                        sx={{
                                                            mx: 2,
                                                            mb: 0,
                                                        }}
                                                        className={`caption_nameOneLine font-16`}
                                                    >
                                                        {i.name}
                                                    </Typography>
                                                    <Box>
                                                        <Typography
                                                            variant="body1"
                                                            component={"span"}
                                                            color="white.main"
                                                            sx={{
                                                                bgcolor: "danger.main",
                                                                px: 1,
                                                                py: 0.5,
                                                            }}
                                                            className="font-16 rounded-pill"
                                                        >
                                                            {i.discount}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            color="muted.main"
                                                            component={"span"}
                                                            sx={{
                                                                textDecoration: "line-through",
                                                            }}
                                                            className="font-14"
                                                        >
                                                            {i.realPrice}
                                                        </Typography>
                                                        <Typography
                                                            variant="body1"
                                                            color="secondary.main"
                                                            sx={{
                                                                textAlign: "left",
                                                                fontWeight: "bold",
                                                            }}
                                                            className="font-18"
                                                        >
                                                            {i.price} toman
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </MainSwiper>
                                <Button
                                    variant="text"
                                    color="primary"
                                    sx={{ mt: "auto", pb: 2, textTransform: "capitalize" }}
                                    component={RouterLink}
                                    href={"/Products/category/Discounts"}
                                >
                                    <Typography
                                        variant="body1"
                                        color="primary.main"
                                        component={"span"}
                                        sx={{
                                            mx: "auto",
                                        }}
                                        className="font-20"
                                    >
                                        See all
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sx={{
                                px: 0,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                overflow: "initial",
                                maxWidth: "unset !important",
                            }}
                            className={`${style["discounts-small"]} mt-related`}
                        >
                            <DiscountSwiper>
                                <SwiperSlide className={`${style["swiper-slide-small"]}`}>
                                    <Link
                                        href={"/Products/category/Discounts"}
                                        sx={{
                                            bgcolor: "transparent",
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%",
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                            color: "white",
                                            mt: "auto",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            color="white.main"
                                            sx={{ textAlign: "center", fontWeight: "bold" }}
                                        >
                                            Special discounts
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ textTransform: "capitalize" }}
                                        >
                                            <Typography
                                                variant="body1"
                                                component={"span"}
                                                className="font-20"
                                                color="white.main"
                                                sx={{ alignSelf: "center" }}
                                            >
                                                see all
                                            </Typography>
                                        </Button>
                                    </Link>
                                </SwiperSlide>
                                {discountSlider.map((i) => (
                                    <SwiperSlide key={i.name} className={`${style["swiper-slide-small"]}`}>
                                        <Link
                                            href={`/Product/${i.category}/${i.id}`}
                                            sx={{
                                                height: "100%",
                                                bgcolor: "white.main",
                                                display: "flex",
                                                justifyContent: "start",
                                                flexDirection: "column",
                                                p: 2,
                                            }}
                                        >
                                            <Box
                                                className={`${style["second-card-img-small"]}`}
                                                sx={{ mx: "auto" }}
                                            >
                                                <img src={i.images[0].address} alt={i.name} />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    textAlign: "center",
                                                    my: "auto",
                                                }}
                                                className={`${style["discounts-slider_caption"]}`}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    color="initial"
                                                    sx={{
                                                        mx: 2,
                                                        mb: 0,
                                                        textAlign: "left",
                                                    }}
                                                    className="caption_nameOneLine font-14"
                                                >
                                                    {i.name}
                                                </Typography>
                                                <Box sx={{ textAlign: "left", mt: 3 }}>
                                                    <Typography
                                                        variant="body1"
                                                        component={"span"}
                                                        color="white.main"
                                                        sx={{
                                                            bgcolor: "danger.main",
                                                            px: 1,
                                                            py: 0.5,
                                                        }}
                                                        className="font-14 rounded-pill"
                                                    >
                                                        {i.discount}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="muted.main"
                                                        component={"span"}
                                                        sx={{
                                                            textDecoration: "line-through",
                                                        }}
                                                        className="font-12"
                                                    >
                                                        {i.realPrice}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        color="secondary.main"
                                                        sx={{
                                                            textAlign: "left",
                                                            fontWeight: "bold",
                                                        }}
                                                        className="font-16"
                                                    >
                                                        {i.price} toman
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide className={`${style["swiper-slide-small"]}`}>
                                    <Link
                                        href={"/Products/category/Discounts"}
                                        sx={{
                                            bgcolor: "white.main",
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "white",
                                            mt: "auto",
                                        }}
                                    >
                                        <Box sx={{ color: "info.main" }}>
                                            <ArrowCircleRightOutlinedIcon
                                                color="info.main"
                                                sx={{ pb: 1 }}
                                            ></ArrowCircleRightOutlinedIcon>
                                        </Box>
                                        <Typography
                                            variant="body1"
                                            component={"span"}
                                            className="font-20"
                                            color="secondary.main"
                                            sx={{ alignSelf: "center" }}
                                        >
                                            See all
                                        </Typography>
                                    </Link>
                                </SwiperSlide>
                            </DiscountSwiper>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box
                component={"section"}
                className={`${style["bestSellers"]} mt-section`}
                sx={{ bgcolor: "white.main" }}
            >
                <Box
                    className={`${style["bestSellers-header"]}`}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                    }}
                >
                    <Typography
                        variant="h4"
                        color="secondary"
                        className={`${style["bestSellers-title"]}`}
                        sx={{
                            py: 2,
                            display: "inline",
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        Recent bestsellers
                    </Typography>
                </Box>
                {windowWidth >= 992 ? (
                    <SecondSwiper rootStyle="bestSellers-swiper">
                        {bestSellerSlider.map((i) => (
                            <SwiperSlide key={i.name}>
                                <Link
                                    href={`/Product/${i.category}/${i.id}`}
                                    className={`${style["bestSeller"]}`}
                                >
                                    <SecondSwiperItem i={i} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </SecondSwiper>
                ) : (
                    <SecondSwiperSm rootStyle="bestSellers-swiper">
                        {bestSellerSlider.map((i) => (
                            <SwiperSlide key={i.name}>
                                <Link
                                    href={`/Product/${i.category}/${i.id}`}
                                    className={`${style["swiper-slide-small"]}`}
                                >
                                    <SecondSwiperItem i={i} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </SecondSwiperSm>
                )}
            </Box>
            <Box
                component={"section"}
                className={`${style["brands"]} mt-section`}
                sx={{ bgcolor: "white.main" }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                    }}
                    className={`${style["brands-header"]}`}
                >
                    <Typography
                        variant="h4"
                        color="secondary.main"
                        className={`${style["brands-title"]} font-20`}
                        sx={{ display: "inline", py: 2, fontWeight: "bold" }}
                    >
                        Special brands
                    </Typography>
                    <Link
                        href={"/Products/category/Brands"}
                        sx={{ mr: 1, width: "initial !important" }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ textTransform: "capitalize", color: "white.main" }}
                        >
                            see all
                        </Button>
                    </Link>
                </Box>
                {windowWidth >= 992 ? (
                    <SecondSwiper rootStyle="brands-swiper">
                        {context.SpecialBrandsSlider.map((item) => (
                            <SwiperSlide key={item.name}>
                                <Link
                                    scroll={false}
                                    href={`Products/category/Brands#${item.name}`}
                                    sx={{ mt: 1, px: 2, mr: 0 }}
                                    className={`${style["brand"]}`}
                                >
                                    <Box className={`${style["brand-img"]}`} sx={{ mx: "auto" }}>
                                        <img src={item.address} alt={item.name} />
                                    </Box>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </SecondSwiper>
                ) : (
                    <SecondSwiperSm rootStyle="brands-swiper">
                        {context.SpecialBrandsSlider.map((item) => (
                            <SwiperSlide key={item.name}>
                                <Link
                                    scroll={false}
                                    href={`Products/category/Brands#${item.name}`}
                                    sx={{ mt: 1, px: 2, mr: 0 }}
                                    className={`${style["swiper-slide-small"]}`}
                                >
                                    <Box className={`${style["second-card-img-small"]}`} sx={{ mx: "auto" }}>
                                        <img src={item.address} alt={item.name} />
                                    </Box>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </SecondSwiperSm>
                )}
            </Box>
        </Container>
    );
}

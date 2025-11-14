// import styled from 'styled-components';

// export const PortraitPageStyle = styled.div`
//     &.portrait-page-container {
//         display: flex;
//         background: #f2efeb;
//         box-sizing: border-box;
//         position: relative;
//         height: 100vh;
//         .left {
//             flex: 1;

//             .text-area2 {
//                 padding-left: 160px;
//                 padding-top: 100px;

//                 color: #6b5243;

//                 h3 {
//                     color: var(--Brown-brown-500, #564438);
//                     font-family: 'EB Garamond';
//                     font-size: 68px;
//                     font-style: normal;
//                     font-weight: 600;
//                     line-height: normal;
//                 }
//                 p {
//                     color: #616161;
//                     font-size: 16px;
//                     font-weight: 500;
//                     padding-bottom: 484px;
//                 }
//             }
//             .thumbnailWrap {
//                 position: absolute;
//                 left: -30px;
//                 .swiper-wrapper {
//                     display: flex;
//                 }
//             }
//             .swiper {
//                 width: 620px;
//                 user-select: none;
//                 .swiper-slide {
//                     overflow: hidden;
//                     box-sizing: border-box;
//                     cursor: pointer;
//                     &.swiper-slide-active img {
//                         filter: grayscale(0%);
//                     }
//                 }

//                 .swiper-slide-active img,
//                 .swiper-slide-thumb-active img {
//                 }

//                 .swiper-slide img {
//                     width: 100%;
//                     height: 100%;
//                     object-fit: cover;
//                     user-select: none;
//                     pointer-events: none;
//                     display: block;
//                     transition: transform 0.3s ease;
//                     filter: grayscale(1) brightness(0.5) sepia(40%);
//                 }

//                 .swiper-slide:hover img {
//                     transform: scale(1.05);
//                     filter: grayscale(0) brightness(1);
//                 }
//             }
//         }
//         .main-bg {
//             flex: 1.2;
//             position: relative;
//             height: 100vh;
//             overflow: hidden;
//             z-index: 99;
//             .background-image {
//                 width: 100%;
//                 height: 100%;
//                 background-position: center;
//                 background-size: cover;
//                 transform: scale(2);
//                 filter: blur(28px) grayscale(0.6);
//                 cursor: default;
//             }
//             .main-image {
//                 overflow: hidden;
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 transform: translate(-50%, -50%);
//                 height: 89%;
//                 width: 81%;

//                 img {
//                 }
//             }
//         }
//     }
// `;
// export const PortraitPageStyle = styled.div`
//     width: 100vw;
//     background: radial-gradient(50% 50% at 50% 50%, #e4e3e1 0%, rgba(141, 132, 123, 0) 100%);
//     .container {
//         display: flex;
//         justify-content: space-between;
//         .leftBox {
//             width: 50%;
//             padding: 160px 0;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;

//             .text-box {
//                 margin-bottom: 20px;
//                 padding-left: 182px;

//                 h3 {
//                     font-size: 46px;
//                     font-weight: 700;
//                     color: #000;
//                 }
//                 p {
//                     color: #616161;
//                     font-size: 16px;
//                     font-weight: 500;
//                 }
//             }

//             .thumbs-swiper {
//                 width: 620px;
//                 /* width: 620px; */
//                 height: 147px;
//                 padding-right: 540px;

//                 .swiper-slide {
//                     img {
//                         width: 100%;
//                         height: auto;
//                         border-radius: 4px;
//                         border: 2px solid transparent;
//                         transition: border-color 0.2s ease;
//                     }

//                     &.swiper-slide-thumb-active img {
//                         border-color: #000;
//                     }
//                 }
//             }
//         }

//         .main-swiper {
//             width: 1079px;
//             height: 1080px;

//             img {
//                 width: 100%;
//                 height: auto;
//                 border-radius: 8px;
//             }
//         }
//     }
// `;

import styled from 'styled-components';

export const PortraitPageStyle = styled.div`
    &.portrait-page-container {
        display: flex;
        background: #f2efeb;
        box-sizing: border-box;
        position: relative;
        height: 100vh;

        .left {
            flex: 1;

            .text-area2 {
                padding-left: 160px;
                padding-top: 100px;
                color: #6b5243;

                h3 {
                    color: var(--Brown-brown-500, #564438);
                    font-family: 'EB Garamond';
                    font-size: 68px;
                    font-weight: 600;
                }
                p {
                    color: #616161;
                    font-size: 16px;
                    font-weight: 500;
                    padding-bottom: 484px;
                }
            }

            .thumbnailWrap {
                position: absolute;

                left: 25vw;
                top: 25vw;
                transform: translate(-50%);
                width: 620px;

                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 10px;

                .thumb {
                    width: 100%;
                    aspect-ratio: 1/1;
                    overflow: hidden;
                    cursor: pointer;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.3s ease, filter 0.3s ease;
                    }

                    &.inactive img {
                        filter: grayscale(1) brightness(0.8) sepia(20%);
                    }

                    &.active img {
                        filter: grayscale(0) brightness(1) sepia(0);
                    }

                    &:hover img {
                        transform: scale(1.05);
                        filter: grayscale(0) brightness(1);
                    }
                }
            }
        }

        /* 메인 영역 */
        .main-bg {
            flex: 1.2;
            position: relative;
            height: 100vh;
            overflow: hidden;
            z-index: 99;

            .background-image {
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                transform: scale(2);
                filter: blur(28px) grayscale(0.6);
            }

            .main-image {
                overflow: hidden;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 89%;
                width: 81%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`;

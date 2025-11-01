import styled from 'styled-components';

export const EventPageStyle = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 330vh;
    width: 100vw;

    overflow: hidden;
    background-image: url(/images/Event-page/bg.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    .inner {
        text-align: right;
        padding: 160px 0;
        position: relative;
        height: 330vh;

        .text-area {
            position: fixed;
            right: 160px;
            top: 120px;
            z-index: 0;
            height: 100vh;

            h3 {
                color: var(--Brown-brown-500, #564438);
                font-family: 'EB Garamond';
                font-size: 68px;
                font-weight: 600;
                margin-bottom: 28px;
            }
            p {
                margin-bottom: 500px;
                color: var(--Grey-grey-500, #616161);
                text-align: right;
                font-family: 'Pretendard';
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 130%;
            }
        }
    }
    .items-container {
        display: flex;
        gap: 30px;
        position: absolute;
        top: 160px;
        top: 0;
        left: 167px;

        .items-col {
            &:nth-child(2) {
                position: relative;
                top: 10em;
            }

            .item {
                margin-bottom: 2em;
                position: relative;
                cursor: pointer;
                &:hover {
                    img {
                        filter: blur(2px) brightness(0.7) grayscale(100);
                    }
                }
                .item-img {
                    img {
                        height: 100%;
                        width: 358px;
                        object-fit: cover;
                        transition: all 0.3s ease;
                    }
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 358px;
                    height: 358px;
                    background: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                }
                .txt {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: var(--White, #fff);
                    text-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
                    font-family: 'Pretendard';
                    font-size: 22px;
                    font-weight: 700;
                    opacity: 0;
                }
                &:hover {
                    .overlay {
                        opacity: 1;
                    }
                    .txt {
                        opacity: 1;
                    }
                }

                p {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }
`;

// export const EventModalStyle = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.8);
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     padding: 40px 20px;
//     z-index: 9999;
//     .modal-image-wrap {
//         position: relative;
//         width: auto;
//         max-height: 90vh;
//         background: #000;
//         overflow: hidden;

//         display: flex;
//         flex-direction: column;
//     }

//     .modal-content {
//         flex: 1;
//         overflow-y: auto;
//         display: flex;
//         justify-content: center;
//         align-items: flex-start;
//         -ms-overflow-style: none;
//         scrollbar-width: none;

//         &::-webkit-scrollbar {
//             width: 0;
//             height: 0;
//         }

//         img {
//             max-width: 100%;
//             max-height: 100%;
//             object-fit: contain;
//             display: block;
//         }
//     }
// `;

export const EventModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* 검정 오버레이 */
    display: flex;
    justify-content: center;
    align-items: flex-start; /* 상단 정렬 */
    padding: 40px 20px;
    z-index: 20000; /* 헤더보다 충분히 크게 */

    .modal-image-wrap {
        position: relative;
        width: auto;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        background: #000;
        overflow: hidden;
    }

    .modal-content {
        overflow-y: auto;
        max-height: 100%;

        /* 스크롤바 숨기기 */
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        display: flex;
        justify-content: center;
        align-items: flex-start; /* 이미지 맨 위에서부터 시작 */

        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            display: block;
            object-fit: cover;
        }
    }
`;

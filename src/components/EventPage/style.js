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
            top: 160px;
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
        left: 167px;

        .items-col {
            &:nth-child(2) {
                position: relative;
                top: 10em;
            }

            .item {
                margin-bottom: 2em;

                .item-img {
                    img {
                        width: 100%;
                        height: 100%;
                        width: 358px;
                        object-fit: cover;
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

export const EventPageStyle2 = styled.div`
    /* 
    background: #f2efeb;
    padding: 160px 0;
    text-align: center;
    h3 {
        font-size: 46px;
        font-weight: 700;
        color: #000;
        margin-bottom: 18px;
    }
    > p {
        font-size: 16px;
        font-weight: 500;
        color: #616161;
    }
    .detaliText {
        color: #292929;
        display: flex;
        font-weight: 500;
        font-size: 18px;
        justify-content: center;
        padding-top: 70px;
        p {
            margin-right: 7px;
        }

        strong {
            color: #c14165;
            font-weight: 700;
        }
        span {
            position: relative;
            display: inline-block;
            color: #292929;
            font-weight: 700;
            z-index: 1;

            &::before {
                content: '';
                position: absolute;
                bottom: 5px;
                left: 3px;
                width: 130px;
                height: 10px;
                background: #f2c6d2;
                z-index: -1;
            }
        }
    }

    .thumbList {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        margin-top: 75px;
        li {
            width: 220px;
            height: 220px;
            img {
                filter: grayscale(100%);
                transition: filter 0.3s ease;
                cursor: pointer;
            }

            img:hover {
                filter: grayscale(0%);
            }
        }
    }
    .event-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-EventPageData: center;
        z-index: 1000;
        padding: 40px;

        // 모달 스크롤 가능하게
        overflow-y: auto;

        .event-modal-content {
            position: relative;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            max-width: 100%;
            max-height: 100vh;
            overflow-y: auto; // 콘텐츠 스크롤 허용

            img {
                width: 100%;
                height: auto;
            }

            .close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 24px;
                background: none;
                border: none;
                color: #000;
                cursor: pointer;
            }
        }
    } */
`;

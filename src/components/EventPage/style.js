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

                .item-img {
                    img {
                        width: 100%;
                        height: 100%;
                        width: 358px;
                        object-fit: cover;
                        filter: grayscale(100%);
                        cursor: pointer;
                        &:hover {
                            filter: grayscale(0%);
                        }
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

export const EventModaltyle = styled.div`
    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
    }

    /* 이미지 감싸는 컨테이너 */
    .modal-image-wrap {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* 이미지 자체를 꽉 차게 */
    .modal-image-wrap img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
        object-fit: contain;
    }

    /* 닫기 버튼 */
    .modal-close {
        position: absolute;
        top: -40px; /* 이미지 위쪽 */
        right: -10px;
        font-size: 40px;
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        line-height: 1;
        transition: transform 0.2s;
    }
    .modal-close:hover {
        transform: scale(1.1);
    }
`;

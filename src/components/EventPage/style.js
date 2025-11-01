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

export const EventModaltyle = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6); /* ✅ 검정 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* ✅ 화면 최상단 */

    /* 이미지 감싸는 컨테이너 */
    .modal-image-wrap {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        flex-direction: column;
    }

    .modal-image-wrap img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
        object-fit: contain;
    }

    .modal-close {
        position: absolute;
        top: -40px;
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
    .modal-content {
        overflow-y: auto;
        max-height: 85vh;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
    }
`;

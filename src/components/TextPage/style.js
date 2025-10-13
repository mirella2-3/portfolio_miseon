import styled from 'styled-components';

export const TextPageStyle = styled.div`
    text-align: center;

    /* padding-top: 254px;
    padding-bottom: 573px; */
    height: 100vh;
    width: 100vw;

    position: relative;
    overflow: hidden;

    .gradient-bg {
        position: absolute;
        top: 100px;
        left: 50%;
        width: 638px;
        height: 638px;
        transform: translateX(-50%) scale(0);
        overflow: visible;
        background: radial-gradient(
            circle,
            rgba(180, 112, 131, 0.3) 0%,
            rgba(255, 255, 255, 0) 60%
        );
        opacity: 0.7;
        transition: 0.3s;
        z-index: 1;
    }

    &.active {
        .gradient-bg {
            transform: translateX(-50%) scale(1);
        }
    }
    .inner {
        padding: 160px 0;
    }
    h1 {
        font-size: 74px;
        font-weight: 700;
        color: #000;
        line-height: 1;
        margin-bottom: 8px;
    }
    h3 {
        color: #653340;
        font-size: 64px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 58px;
    }
    span {
        color: #353535;
        font-size: 18px;
        font-weight: 500;
    }
`;

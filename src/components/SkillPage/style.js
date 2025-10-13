import styled from 'styled-components';

export const SkillPageStyle = styled.div`
    width: 100vw;
    border: 1px solid #000;
    position: relative;
    .text-bg {
        color: #f2ebed;
        font-weight: 700;
        font-size: 240px;
        position: absolute;
        right: -20px;
        bottom: 160px;
    }
    .inner {
        display: flex;
        gap: 266px;

        padding: 160px 0;
        padding-left: 106px;
    }
    .sub1 {
        display: flex;
        &.edu {
            margin-bottom: 83px;
        }
    }
    .title {
        color: #733a4a;
        font-size: 20px;
        font-weight: 600;
        width: 110px;
        margin-right: 16px;
        line-height: 1;
    }
    li {
        margin-bottom: 12px;
        span {
            font-weight: 300;
            font-size: 12px;
            display: block;
            color: #959595;
            line-height: 1;
        }
    }
`;

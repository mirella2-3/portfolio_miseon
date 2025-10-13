import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 68px;
    background: #f8f8f8;
    overflow: visible;
    .inner {
        display: flex;
        justify-content: space-between;
        line-height: 68px;

        p {
            line-height: 68px;
            text-align: center;

            img {
                vertical-align: middle;
                cursor: pointer;
            }
        }
    }
`;

export const NavStyle = styled.header`
    display: flex;
    gap: 40px;

    button {
        background: none;
        background-size: cover;
        font-family: 'EB Garamond';
        font-size: 20px;
        line-height: 68px;
        font-weight: 400;
        color: #585858;

        &:hover {
            color: #c14165;
            background: radial-gradient(
                ellipse at center,
                rgba(226, 132, 159, 0.2) 0%,
                rgba(226, 132, 159, 0) 80%
            );
        }
    }
`;

import React from 'react';
import { ViralPageStyle } from './style';
import ViralLongSlide from './ViralLongSlide';
import ViralShortSlide from './ViralShortSlide';

const ViralPage = () => {
    return (
        <ViralPageStyle>
            <h1>Viral image</h1>
            <p>
                SNS 홍보에 적용된 바이럴 이미지 디자인입니다.
                <span style={{ color: '#959595', marginLeft: 5 }}>(디자인 기여도 100%)</span>
            </p>
            <ViralLongSlide />
            <ViralShortSlide />
        </ViralPageStyle>
    );
};

export default ViralPage;

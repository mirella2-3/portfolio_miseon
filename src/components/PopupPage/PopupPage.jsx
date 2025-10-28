import PopupSlide from './PopupSlide';
import { PopupPageStyle } from './style';

const PopupPage = () => {
    return (
        <PopupPageStyle>
            <div className="inner">
                <h3>
                    <strong>Modal</strong>
                </h3>
                <span>홈페이지와 SNS 홍보에 적용된 가독성을 살린 모달 디자인입니다.</span>
            </div>
            <PopupSlide />
        </PopupPageStyle>
    );
};

export default PopupPage;

import { PiCoffeeBeanFill } from 'react-icons/pi';
import PopupSlide from './PopupSlide';
import { PopupPageStyle } from './style';

const PopupPage = () => {
    return (
        <PopupPageStyle>
            <div className="inner">
                <h3>
                    <strong>
                        <PiCoffeeBeanFill
                            size={40}
                            color="#998A7C"
                            style={{
                                marginRight: '17px',
                            }}
                        />
                        Modal
                    </strong>
                </h3>
                <span>
                    홈페이지와 SNS 홍보에 적용된 가독성을 살린 모달 디자인입니다.
                    <span style={{ color: '#959595', marginLeft: 5 }}>(디자인 기여도 100%)</span>
                </span>
            </div>
            <PopupSlide />
        </PopupPageStyle>
    );
};

export default PopupPage;

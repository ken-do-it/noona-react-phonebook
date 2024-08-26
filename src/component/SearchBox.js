import {React, useState} from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/reducer/reducer'; // 액션 가져오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    const [searchTerm, setSearchTermLocal] = useState('');
    const dispatch = useDispatch();
    const globalSearchTerm = useSelector((state) => state.searchTerm); // 글로벌 검색어 가져오기

    const handleSearchChange = (event) => {
        setSearchTermLocal(event.target.value);
        dispatch(setSearchTerm(event.target.value));
    };

    const handleSearchClick = () => {
        dispatch(setSearchTerm(searchTerm));
    };

    const handleInputFocus = () => {
        setSearchTermLocal('');
    };

    const handleBackClick = () => {
        setSearchTermLocal('');
        dispatch(setSearchTerm('')); // 검색어 초기화
    };

    return (
        <div>
            <Row>
                <Col lg={8}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onFocus={handleInputFocus}
                    />
                </Col>
                <Col lg={2}>
                    <Button onClick={handleSearchClick}>찾기</Button>
                </Col>
                <Col lg={2}>
                    {globalSearchTerm && ( // 검색어가 있을 때만 뒤로 가기 버튼 표시
                        <Button variant="primary" onClick={handleBackClick}><FontAwesomeIcon icon={faArrowLeft} />
                            
                        </Button>
                    )}
                </Col>
            </Row>
        </div>
    );
}


export default SearchBox
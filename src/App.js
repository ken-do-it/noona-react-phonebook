
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';


// 1, 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 검색창과 리스트가 있다 
//2. 리스ㅌ 유저 이름과 전화번호를 추가할 수 있다 
//3. 리스트에 아이템이 몇개 있는지 보인다
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다 
function App() {
  return (
    <div className="App">
      <h1 className='text-center'>연락처</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm />
          </Col>

          <Col className='contact-left'>
          <ContactList />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;

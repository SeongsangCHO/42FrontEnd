import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu , Input, Row, Col} from 'antd';
//next는 자체적인 라우팅
import styled from 'styled-components';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
//AppLayout으로 감싸진 컴포넌트들이
//{children}으로  들어가서 화면을 출력해줌


//가져온 컴포넌트 커스텀 스타일링하기
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
//useCallback = 함수캐싱
  //useMemo = 값 캐싱
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
           <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
         <Link href="/Profile"><a>Profile</a></Link>          
        </Menu.Item>
        <Menu.Item>
         <Link href="/Signup"><a>Signup</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton></SearchInput>
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        {
        /*
        gutter은 컬럼사이의 간격을 의미함.
        col에서 화면을 총 등분하는게 24등분임
        가로로 24등분해서 한 줄씩표현함
        Col 두개합쳐서 24를 넘어가면 옆으로 넘어감
         xs, md에 따라 차지하는 등분 수를 구분하여 반응형 구현
         */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>
          가운데 메뉴
        </Col>
        <Col xs={24} md={6}>
          <a href="https://velog.io/@secho" target="_blank" rel="noreferrer noopener">
            Made by secho
          </a>
        </Col>
        
      </Row>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  //children은 node의 타입(react)
  //화면에 그릴 수 있는 모든 것들이 node
  children: PropTypes.node.isRequired,
};

export default AppLayout;

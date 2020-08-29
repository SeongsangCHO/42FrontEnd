import { Form, Input, Button }from 'antd'
import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import UserProfile from '../components/UserProfile';

const ButtonWrapper = styled.div`
  margin-top: 10px
`;

const LoginForm = ({ setIsLoggedIn }) => { 
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  //컴포넌트에 프롭스로 넘겨주는 함수는 usecallback으로 사용하기
  //최적화를 위해서
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  //이렇게 쓰면 값을 캐싱하기 때문에 해당 객체를 사용하면 리렌더링되지않음.
  const style = useMemo(() => ({ marginTop: 10 }) ,[]);

  //onFinish는 이미 preventDefault가 적용됨.
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  //re-rendering은 return부분 중에서 바뀐부분들만 리랜더링됨.
  return (
    //submit이되면 onfinish가 호출됨.
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required>
          </Input>
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/Signup"><a><Button>Signup</Button></a></Link>
      </ButtonWrapper
      >
    </Form>
    
  );
}

export default LoginForm;
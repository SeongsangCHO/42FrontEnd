import { Form, Input, Button }from 'antd'
import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px
`;

const LoginForm = () => { 
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  //컴포넌트에 프롭스로 넘겨주는 함수는 usecallback으로 사용하기
  //최적화를 위해서
  const onChangeId = useCallback(() => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.password.value);
  }, []);

  //이렇게 쓰면 값을 캐싱하기 때문에 해당 객체를 사용하면 리렌더링되지않음.
  const style = useMemo(() => ({ marginTop: 10 }) ,[]);


  //re-rendering은 return부분 중에서 바뀐부분들만 리랜더링됨.
  return (
    <Form>
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
        <Button type="primary" htmlFor="submit" loading={false}>Login</Button>
        <Link href="/signup"><a><Button>Signup</Button></a></Link>
      </ButtonWrapper
      >
    </Form>
    
  );
}

export default LoginForm;
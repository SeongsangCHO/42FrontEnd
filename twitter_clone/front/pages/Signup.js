import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Button, Input, Menu } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import Link from 'next/link';

const ErrorMessage = styled.div`
  color: red;
`;
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Signup = () => {
  //반복되는 애들을 custom hock으로 변경
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  //Form이 submit되면서 호출되는 함수
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck]);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/Profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/Signup">
            <a>Signup</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton="Search"></SearchInput>
        </Menu.Item>
      </Menu>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">NickName</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Password-Check</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;

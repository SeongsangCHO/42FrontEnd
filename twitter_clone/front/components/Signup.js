import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form } from "antd";

const Signup = () => {
  return (
    <AppLayout>
      <Head>
        <title>회원가입</title>
      </Head>
      <Form>
        <div>아이디</div>
        <div>비밀번호</div>
        <div>닉네임</div>
        <div>아이디</div>
      </Form>
    </AppLayout>
  );
};

export default Signup;

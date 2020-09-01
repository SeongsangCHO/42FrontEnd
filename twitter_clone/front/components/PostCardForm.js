import { Input, Form, Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const PostCardForm = () => {
  //onSubmit한 내용을 리덕스에 저장하기
  //리랜더링될 때, PostCard를 보여줄 수 있도록.
  //일단 게시글만.
  return (
    <Form onFinish={onSubmit}>
      <Input.TextArea />
      <ButtonWrapper>
        <Button style={{margin :"5px"}}type="primary">Image Upload</Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

      </ButtonWrapper>
    </Form>
  );
};

export default PostCardForm;

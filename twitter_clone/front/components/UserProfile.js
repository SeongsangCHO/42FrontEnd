import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
      <Card
        actions={[
        <div key="twit">냠냠 <br />0</div>,
        <div key="follwings">팔로잉 <br />0</div>,
        <div key="follwers">팔로워 <br />0</div>
      ]}
      >
      <Card.Meta avatar={<Avatar>SECHO</Avatar>} title="secho" />
      <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
  );
};

export default UserProfile;

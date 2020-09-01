import HYDRATE from "next-redux-wrapper";

//Post에 대한 내용
// Post의 대한 ID,
// 어느 유저가 작성했는지 유저에 대한 내용 UserID
// Post에 대한내용 // text, Image, 좋아요 수
const initialState = {

  Id: '',
  UserId: 'secho',
  Post: {
    PostText: '',
    PostImageUrl: '',
    LikeCount:'',
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "POST_UPLOAD":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default rootReducer;

//

import { useState, useCallback } from 'react';

export default (initialValue = null) => { 
  //중복되는 부분을 커스텀훅으로 정해서 사용
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}
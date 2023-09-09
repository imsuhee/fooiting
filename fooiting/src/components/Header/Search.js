import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // 검색 로직을 이곳에 추가합니다. 예를 들어, API 요청을 보내 검색 결과를 업데이트할 수 있습니다.
    console.log("검색어:", query);
    // 여기서 API 호출을 수행하고 검색 결과를 상태로 업데이트할 수 있습니다.
  };

  // handleInputChange 및 handleSearch 함수를 반환합니다.
  return {
    query,
    handleInputChange,
    handleSearch,
  };
}

export default Search;

import React, { useState, useRef } from "react";
import { localurl } from "../../utils/localUrl";
import { useNavigate } from "react-router-dom";
import "../../Style/RegistrationPage/Registration.css";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    category: "",
    description: "",
    openingTime: "",
    closingTime: "",
    image: "",
    callNumber: "",
  });

  const [fileInputs, setFileInputs] = useState([0]); // 초기 상태에 하나의 파일 입력 필드
  const [files, setFiles] = useState({});
  const [imagePreviews, setImagePreviews] = useState({});
  const fileInputRef = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, index) => {
    const updatedFiles = { ...files };
    updatedFiles[index] = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        [index]: event.target.result,
      }));
    };
    reader.readAsDataURL(e.target.files[0]);

    setFiles(updatedFiles);
  };

  const handleImageDelete = (index) => {
    const updatedFiles = { ...files };
    const updatedPreviews = { ...imagePreviews };
    delete updatedFiles[index];
    delete updatedPreviews[index];
    setFiles(updatedFiles);
    setImagePreviews(updatedPreviews);
  };

  const addFileInput = () => {
    setFileInputs((prev) => [...prev, prev.length]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    Object.keys(files).forEach((key) => {
      data.append("image", files[key]);
    });

    const timeout = (ms, promise) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Request timed out"));
        }, ms);
        promise.then(resolve, reject);
      });
    };

    timeout(
      6000,
      fetch(`${localurl}/admin/upload`, {
        method: "POST",
        body: data,
      })
    )
      .then((response) => response.text())
      .then(() => {
        alert("식당이 등록되었습니다.");
        navigate("/list");
      })
      .catch((error) => {
        console.error("Error uploading data: ", error);
      });
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <p className="titleName">식당 등록</p>
      <hr />
      <div>
        <div className="registration-contener">
          <form onSubmit={handleSubmit}>
            <input
              className="input-box"
              name="name"
              placeholder="식당 상호명"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            <div>
              <input
                className="input-box"
                name="location"
                placeholder="식당 주소"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <br />
              <input
                className="input-box"
                name="callNumber"
                type="tel"
                maxLength="13"
                placeholder="ex) 000-000-0000"
                value={formData.callNumber}
                onChange={handleChange}
                required
              />
              <br />
              <select
                className="select-box"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value=""> 음식 카테고리 </option>
                <option value="족발보쌈">족발보쌈</option>
                <option value="찜탕찌개">찜탕찌개</option>
                <option value="돈까스회일식">돈까스회일식</option>
                <option value="피자">피자</option>
                <option value="고기구이">고기구이</option>
                <option value="야식">야식</option>
                <option value="양식">양식</option>
                <option value="치킨">치킨</option>
                <option value="중식">중식</option>
                <option value="아시안">아시안</option>
                <option value="분식">분식</option>
                <option value="카페디저트">카페디저트</option>
                <option value="패스트푸드">패스트푸드</option>
              </select>
              <br />

              <textarea
                className="textarea-box"
                name="description"
                maxLength="50"
                placeholder="식당을 50자 이내로 설명해주세요"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <br />
            </div>

            <div className="input-timers">
              오픈시간
              <input
                className="input-timer"
                name="openingTime"
                type="time"
                placeholder="Opening Time"
                value={formData.openingTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-timers">
              종료시간
              <input
                className="input-timer"
                name="closingTime"
                type="time"
                placeholder="Closing Time"
                value={formData.closingTime}
                onChange={handleChange}
                required
              />
            </div>
            <br />

            {fileInputs.map((index) => (
              <div key={index}>
                <label
                  className="input-file-button"
                  htmlFor={`input-file-${index}`}
                  onClick={handleLabelClick}
                >
                  사진업로드
                  <input
                    type="file"
                    id={`input-file-${index}`}
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    name={"image" + index}
                    onChange={(e) => handleFileChange(e, index)}
                    ref={fileInputRef}
                  />
                </label>
                {imagePreviews[index] && (
                  <div>
                    <img
                      src={imagePreviews[index]}
                      style={{ width: 200, height: 200, objectFit: "cover" }}
                      alt={`Image Preview ${index}`}
                    />
                    <button
                      type="button"
                      onClick={() => handleImageDelete(index)}
                    >
                      삭제
                    </button>
                  </div>
                )}
              </div>
            ))}
            <br />
            {/* <button className="file-add" type="button" onClick={addFileInput}>
              사진추가
            </button> */}
            <br />

            <button className="submit-button" type="submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Registration;

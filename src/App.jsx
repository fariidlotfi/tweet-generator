//import styles
import { useEffect, useId, useRef } from "react";
import "./App.css";

//import library
import { toJpeg, toPng, toSvg } from "html-to-image";
import { useState } from "react";
import IconBox from "./Components/IconBox/IconBox";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";

//import icons
import { FaRegComment } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartSharp } from "react-icons/io5";
import TextArea from "./Components/TextArea/TextArea";

function App() {
  //target main element for convert
  const elementRef = useRef(null);

  //target text elements for styling
  const titleRef = useRef([]);
  const textRef = useRef([]);

  //uploaded image state
  const [selectedImage, setSelectedImage] = useState("");

  //upload image file input-label id
  const avatarInputId = useId();

  //theme color states
  const [previewBackground, setPreviewBackground] = useState("#ffffff");
  const [previewTitleColor, setPreviewTitleColor] = useState("#000000");
  const [previewTextColor, setPreviewTextColor] = useState("#5b7083");

  //all entry data's state
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(null);
  const [tempDate, setTempDate] = useState();
  const [device, setDevice] = useState("");
  const [comment, setComment] = useState("");
  const [retweet, setRetweet] = useState("");
  const [likes, setLikes] = useState("");
  const [views, setViews] = useState("");

  //file format expected to render
  const [format, setFormat] = useState("jpg");

  //convert element to jpg
  const htmlToImageConvert = (format) => {
    switch (format) {
      case "jpg":
        toJpeg(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.jpg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case "png":
        toPng(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.png";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case "svg":
        toSvg(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.svg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      default:
        toJpeg(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.jpg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
        break;
    }
  };

  useEffect(() => {
    elementRef.current.style.background = previewBackground;
    titleRef.current[0].style.color = previewTitleColor;
    titleRef.current[1].style.color = previewTitleColor;

    textRef.current[0].style.color = previewTextColor;
    textRef.current[1].style.color = previewTextColor;
  }, [previewBackground, previewTitleColor, previewTextColor]);

  function formatNumber(number) {
    // Handle negative numbers
    if (number < 0) {
      return "-" + formatNumber(-number);
    }

    // Base cases
    if (number < 1000) {
      return number.toString();
    } else if (number < 1000000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return (number / 1000000).toFixed(1) + "M";
    }
  }

  return (
    <>
      <div className="header-line"></div>
      <div className="container">
        <h1 className="app-title">Fake Tweet Generator</h1>
        <h3 className="app-title">Create Fake Tweets Easy & Free</h3>
        <div className="grid-container">
          {/* Tweet Details */}
          <div className="data">
            <h2>Tweet Details</h2>
            <hr />
            {/* Theme section */}
            <div className="data__upload-avatar-section">
              <label htmlFor={avatarInputId} className="data__upload-button">
                Upload Avatar
              </label>
              <Input
                display={false}
                id={avatarInputId}
                type={"file"}
                accept={"image/*"}
                onChange={(e) => {
                  setSelectedImage(e.target.files[0]);
                }}
              />

              <label className="data__color-section">
                Background:
                <Input
                  display={true}
                  type="color"
                  onChange={(e) => setPreviewBackground(e.target.value)}
                  value={previewBackground}
                  padding="0"
                />
              </label>
              <label className="data__color-section">
                Title:
                <Input
                  display={true}
                  type="color"
                  onChange={(e) => setPreviewTitleColor(e.target.value)}
                  value={previewTitleColor}
                  padding="0"
                />
              </label>
              <label className="data__color-section">
                Text:
                <Input
                  display={true}
                  type="color"
                  onChange={(e) => setPreviewTextColor(e.target.value)}
                  value={previewTextColor}
                  padding="0"
                />
              </label>
            </div>
            <hr />
            {/* Texts Section */}
            <div className="data__user-detatil">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                display={true}
                width={true}
                placholder={"Account Name"}
                padding={"10px"}
              />
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                display={true}
                width={true}
                placholder={"Account Username"}
                padding={"10px"}
              />
            </div>
            <hr />
            <TextArea
              placeholder={"Tweet Message"}
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <hr />
            <div className="data__date-time-section">
              <Input
                display={true}
                width={true}
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

              <Input
                display={true}
                width={true}
                type="date"
                value={tempDate}
                onChange={(e) => {
                  setTempDate(e.target.value);
                  const selectedDate = new Date(e.target.value);
                  const formattedDate = selectedDate.toLocaleDateString(
                    "en-US",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  );
                  setDate(formattedDate);
                }}
              />

              <Input
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                display={true}
                width={true}
                placholder={"Device Used"}
                padding={"10px"}
              />
            </div>

            <hr />
            <div className="data__statics-section">
              <Input
                type={"number"}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                display={true}
                width={true}
                placholder={"Comment's Count"}
                padding={"10px"}
              />
              <Input
                type={"number"}
                value={retweet}
                onChange={(e) => setRetweet(e.target.value)}
                display={true}
                width={true}
                placholder={"Retweet's Count"}
                padding={"10px"}
              />
              <Input
                type={"number"}
                value={likes}
                onChange={(e) => setLikes(e.target.value)}
                display={true}
                width={true}
                placholder={"Like's Count"}
                padding={"10px"}
              />
              <Input
                type={"number"}
                value={views}
                onChange={(e) => setViews(e.target.value)}
                display={true}
                width={true}
                placholder={"View's Count"}
                padding={"10px"}
              />
            </div>
          </div>
          {/* Tweet Details */}

          {/* Preview Section */}
          <div className="preview">
            <h2>Preview</h2>

            <div className="preview-box" ref={elementRef}>
              <div className="preview-account">
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    className="preview-account__image"
                  />
                ) : (
                  <img
                    src="twitter-profile.webp"
                    className="preview-account__image"
                  />
                )}
                <div className="preview-account__texts">
                  <h3
                    className="preview-account__name"
                    ref={(e) => titleRef.current.push(e)}
                  >
                    {name ? name : "Enter Name"}
                  </h3>
                  <p
                    className="preview-account__username"
                    ref={(e) => textRef.current.push(e)}
                  >
                    {username ? username : "username"}
                  </p>
                </div>
              </div>

              <p
                className="preview__tweet-text"
                ref={(e) => titleRef.current.push(e)}
              >
                {text ? text : "Tweet Main Text"}
              </p>

              <div
                className="preview-time-info"
                ref={(e) => textRef.current.push(e)}
              >
                <p>
                  {time ? time : "10:00 AM"} · {date ? date : "Jun 21, 2022"} ·{" "}
                  {device ? device : "Twitter for iPhone"}
                </p>
              </div>

              <div className="preview__buttons">
                <IconBox
                  title={comment ? formatNumber(comment) : "2.5k"}
                  color={previewTitleColor}
                >
                  <FaRegComment color={previewTextColor} />
                </IconBox>
                <IconBox
                  title={retweet ? formatNumber(retweet) : "2.5k"}
                  color={previewTitleColor}
                >
                  <LiaRetweetSolid color={previewTextColor} />
                </IconBox>
                <IconBox
                  title={likes ? formatNumber(likes) : "2.5k"}
                  color={previewTitleColor}
                >
                  <CiHeart color={previewTextColor} />
                </IconBox>
                <IconBox
                  title={views ? formatNumber(views) : "2.5k"}
                  color={previewTitleColor}
                >
                  <IoStatsChartSharp color={previewTextColor} />
                </IconBox>
              </div>
            </div>

            <div className="preview-download-section">
              <Button
                title={"Download"}
                border={"none"}
                color={"white"}
                background={"blue"}
                padding={"10px 30px"}
                borderRadius={"4px"}
                onClick={() => htmlToImageConvert(format)}
              />

              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="preview-download-section__select-format"
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="svg">SVG</option>
              </select>
            </div>
          </div>
          {/* Preview Section */}
        </div>
      </div>
      <div className="header-line bottom"></div>
    </>
  );
}

export default App;

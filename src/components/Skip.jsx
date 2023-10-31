import React, { useEffect, useState } from "react";
import imagesLoaded from "imagesloaded";

const Skip = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgLoad = imagesLoaded("body");
    const imgTotal = imgLoad.images.length;

    if (imgTotal === 0) {
      setCurrent(100);
      setLoading(false);
      return;
    }

    let imgLoaded = 0;

    const progressTimer = setInterval(() => {
      imgLoaded++;
      const target = (imgLoaded / imgTotal) * 100;
      setCurrent((prev) => prev + (target - prev) * 0.1);
    }, 2000 / 60);

    imgLoad.on("always", () => {
      // 이미지 로딩이 완료된 후에 처리할 작업을 여기에 추가할 수 있습니다.
      clearInterval(progressTimer);
      setLoading(false);
    });

    return () => {
      clearInterval(progressTimer);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

  if (loading) {
    return (
      <div className="progress progress-complete" id="progress">
        <div className="progress-bar" style={{ width: `${current}%` }}></div>
        <div className="progress-text">{Math.floor(current)}%</div>
      </div>
    );
  }

  return null;
};

export default Skip;

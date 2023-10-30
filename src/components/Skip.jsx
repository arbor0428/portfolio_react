import React, { useEffect, useState } from "react";
import imagesLoaded from "imagesloaded";

const Skip = () => {

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imgLoad = imagesLoaded("body");
    const imgTotal = imgLoad.images.length;

    // 이미지가 하나도 없는 경우에 대한 체크
    if (imgTotal === 0) {
      setCurrent(100); // 이미지가 없다면 로딩은 완료된 것으로 간주
      setLoading(false);
      return;
    }

    let imgLoaded = 0;

    const progressTimer = setInterval(() => {
      imgLoaded++;
      const target = (imgLoaded / imgTotal) * 100;
      setCurrent((prev) => prev + (target - prev) * 0.1);
    }, 2000 / 60);

    imgLoad.on("progress", () => {
      // 이미지 로딩 중에 처리할 작업이 있다면 여기에서 처리할 수 있습니다.
    });

    return () => {
      clearInterval(progressTimer);
      setLoading(false); // 컴포넌트가 언마운트될 때 로딩 상태를 false로 설정하여 컴포넌트를 사라지게 합니다.
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

  // 로딩이 완료된 후에는 null을 반환하여 컴포넌트가 렌더링되지 않도록 합니다.
  return null;
};

export default Skip;

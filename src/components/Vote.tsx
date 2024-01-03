import { useEffect, useState } from "react";

const Index = (props) => {
  const { targetId } = props;
  const [num, setNum] = useState(0);
  const [fingerprint, setFingerprint] = useState("");
  const handleAddVote = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    const fingerprint = getUserId();
    console.log(fingerprint);
    setFingerprint(fingerprint);
  }, []);

  function bin2hex(s) {
    var i,
      l,
      o = "",
      n;

    s += "";

    for (i = 0, l = s.length; i < l; i++) {
      n = s.charCodeAt(i).toString(16);
      o += n.length < 2 ? "0" + n : n;
    }

    return o;
  }

  // 临时浏览器指纹作为userId
  const getUserId = (domain = "fxlogo.com") => {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var txt = domain;
    ctx.textBaseline = "middle";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    var b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
    // window.atob 用于解码使用 base-64 编码的字符串
    var bin = atob(b64);
    console.log(canvas.toDataURL());
    var crc = bin2hex(bin.slice(-16, -12));
    return crc;
  };

  const printFinger = () => {
    const userId = getUserId();
    console.log(userId);
  };
    
  return (
    <div>
      <p className="text-lg text-yellow-200">
        描述：如果您对当前主题感兴趣请给我投票,票数越多我被开发出来的机会就越大
      </p>
      <div className="text-xl mt-4">
        <div>文章Id：{targetId}</div>
        <div>浏览器指纹：{fingerprint}</div>
        <button onClick={printFinger}>打印指纹</button>
        <button onClick={handleAddVote}>投票{num}</button>
      </div>
    </div>
  );
};

export default Index;

import { useState } from "react";
// import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
// import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Không",
      "Fen chắc chưa?",
      "Thực sự luôn à fen?",
      "Nghĩ lại đi!",
      "Lần cuối đó!",
      "Chắc chắn là không chứ?",
      "Linh có thể sẽ hối hận đó!",
      "Suy nghĩ lại chút đi mà!",
      "Linh có hoàn toàn chắc chắn không?",
      "Đây có thể là một sai lầm đó!",
      "Mủi lòng chút đi mà!",
      "Đừng lạnh lùng thế chứ!",
      "Thay đổi ý định được không?",
      "Linh không cân nhắc lại sao?",
      "Đó là câu trả lời cuối cùng của Linh à?",
      "Linh đang làm tan nát trái tim tui đó ;(",
      "Đó là câu trả lời cuối cùng của Linh à?",
      "Linh đang làm tan nát trái tim tui đó ;(",
      "Đi mà? :( Linh đang làm tan nát trái tim tui",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="/public/bubu-dudu-flower-gift.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Yayyy, mình cùng chơi game nhé!
          </div>
        </>
      ) : (
        <>
          {/* <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          /> */}
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Linh ơi nay fen lại buồn à? Vui lên đi nhé!
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ok
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      {/* Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span> */}
    </a>
  );
};

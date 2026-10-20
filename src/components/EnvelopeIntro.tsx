
"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { playChime, startRomanticMelody } from "@/utils/audio";
import { Heart, Sparkles } from "lucide-react";

interface EnvelopeIntroProps {
  wifeName: string;
  songUrl?: string;
  onOpen: () => void;
}

export default function EnvelopeIntro({
  wifeName,
  songUrl,
  onOpen,
}: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Hiệu ứng âm thanh
    playChime();
    startRomanticMelody(undefined, songUrl);

    // Pháo giấy lần thứ nhất
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff4d79", "#ff758c", "#ffd700", "#ffffff", "#ff80bf"],
    });

    // Pháo giấy hai bên
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
        colors: ["#ff4d79", "#ff758c", "#ffd700", "#ffffff"],
      });

      confetti({
        particleCount: 100,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
        colors: ["#ff4d79", "#ff758c", "#ffd700", "#ffffff"],
      });
    }, 300);

    // Hiển thị nội dung món quà sau khi mở phong thư
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className={`envelope-overlay ${isOpening ? "opening" : ""}`}>
      <div className="envelope-wrapper">
        <div className="envelope-glow" />

        <div className="envelope-card-preview">
          <div className="envelope-box" onClick={handleOpenEnvelope}>
            <div className="envelope-flap" />
            <div className="envelope-pocket" />

            <div className="wax-seal">
              <Heart className="wax-heart-icon" fill="currentColor" />
              <span>20/10</span>
            </div>

            <div className="letter-peek">
              <Sparkles size={16} className="text-amber-300" />
              <span>Thư gửi Mẹ {wifeName} ❤️</span>
            </div>
          </div>
        </div>

        <div className="envelope-instruction">
          <p className="instruction-badge">
            <Sparkles size={16} />
            Món Quà Bí Mật Dành Cho Mẹ
          </p>

          <h1 className="instruction-title">
            Gửi Người Mẹ Tuyệt Vời Nhất
          </h1>

          <p className="instruction-sub">
            Mẹ ơi, con có một món quà đặc biệt muốn dành tặng mẹ.
            Hãy chạm vào phong thư để khám phá những lời yêu thương
            con gửi đến mẹ nhé! 💗
          </p>

          <button
            id="btn-open-envelope"
            onClick={handleOpenEnvelope}
            className="envelope-open-btn"
            disabled={isOpening}
          >
            <span>{isOpening ? "Đang Mở Quà..." : "Mở Quà Ngay"}</span>
            <Heart
              size={20}
              className="pulse-heart"
              fill="currentColor"
            />
          </button>
        </div>
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Send,
  Heart,
  Sparkles,
  Check,
  Copy,
  MessageSquare,
} from "lucide-react";
import { playChime, playHeartPop } from "@/utils/audio";

interface WishBoxProps {
  wifeName: string;
  husbandName: string;
}

export default function WishBox({ wifeName, husbandName }: WishBoxProps) {
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wish.trim()) return;

    playChime();

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#ff4d79", "#ffd700", "#ffffff"],
    });

    setSubmitted(true);
  };

  const shareText = `Mẹ yêu ơi ❤️, con muốn gửi mẹ lời nhắn này nhân ngày 20/10: "${wish}". Con chúc mẹ luôn mạnh khỏe, vui vẻ và hạnh phúc. Con yêu mẹ rất nhiều! 💐`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      playHeartPop();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Không thể sao chép lời nhắn:", error);
      alert("Bạn hãy thử mở website bằng HTTPS hoặc localhost rồi sao chép lại nhé!");
    }
  };

  const handleSendSMS = () => {
    window.location.href = `sms:?body=${encodeURIComponent(shareText)}`;
  };

  return (
    <section className="wishbox-section">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={16} /> Hộp Lời Yêu Thương
        </span>

        <h2 className="section-title">
          Hôm Nay Con Muốn Nhắn Gửi Điều Gì Đến Mẹ?
        </h2>

        <p className="section-desc">
          Một lời chúc chân thành, một điều ước nhỏ bé cũng đủ làm mẹ vui
          trong ngày Phụ nữ Việt Nam 20/10. ❤️
        </p>
      </div>

      <div className="wishbox-card">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="wish-form">
            <div className="wish-input-wrapper">
              <textarea
                id="mother-wish-input"
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="Ví dụ: Con mong mẹ luôn mạnh khỏe, vui vẻ. Cuối tuần con sẽ phụ mẹ làm việc nhà và cùng mẹ đi chơi nhé! 💐"
                rows={3}
                className="wish-textarea"
                required
              />
            </div>

            <button
              id="btn-submit-wish"
              type="submit"
              className="btn-submit-wish"
              disabled={!wish.trim()}
            >
              <Send size={18} />
              <span>Gửi Lời Yêu Thương Đến Mẹ</span>
              <Heart size={16} fill="currentColor" />
            </button>
          </form>
        ) : (
          <div className="wish-success-box">
            <div className="success-icon-wrap">
              <Heart
                size={36}
                fill="#ff4d79"
                color="#ff4d79"
                className="animate-bounce"
              />
            </div>

            <h3 className="success-title">
              Lời Yêu Thương Dành Cho Mẹ Đã Sẵn Sàng! 💐
            </h3>

            <p className="success-quote">“{wish}”</p>

            <p className="success-desc">
              Tình yêu của con chính là món quà ý nghĩa dành cho mẹ.
              Hãy gửi lời nhắn này để mẹ đọc được những điều con muốn nói nhé!
            </p>

            <div className="wish-share-buttons">
              <button
                id="btn-sms-wish"
                type="button"
                onClick={handleSendSMS}
                className="btn-share-sms"
              >
                <MessageSquare size={16} /> Gửi Tin Nhắn Cho Mẹ
              </button>

              <button
                id="btn-copy-wish"
                type="button"
                onClick={handleCopy}
                className="btn-share-copy"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>
                  {copied ? "Đã Sao Chép!" : "Sao Chép Lời Chúc"}
                </span>
              </button>

              <button
                id="btn-another-wish"
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setWish("");
                  setCopied(false);
                }}
                className="btn-another-wish"
              >
                Viết Thêm Lời Yêu Thương ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

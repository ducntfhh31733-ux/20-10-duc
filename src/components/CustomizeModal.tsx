
"use client";

import { useState } from "react";
import {
  Settings,
  X,
  Save,
  Copy,
  Check,
  Heart,
  Sparkles,
  Link as LinkIcon,
} from "lucide-react";
import { CoupleConfig } from "@/types";
import { playHeartPop } from "@/utils/audio";

interface CustomizeModalProps {
  config: CoupleConfig;
  onSave: (newConfig: CoupleConfig) => void;
}

export default function CustomizeModal({
  config,
  onSave,
}: CustomizeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<CoupleConfig>(config);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleOpen = () => {
    playHeartPop();
    setFormData(config);
    setIsOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    playHeartPop();
    onSave(formData);
    setIsOpen(false);
  };

  const generateShareLink = () => {
    if (typeof window === "undefined") return "";

    const params = new URLSearchParams();

    if (formData.wifeName) {
      params.set("mother", formData.wifeName);
    }

    if (formData.husbandName) {
      params.set("child", formData.husbandName);
    }

    if (formData.startDate) {
      params.set("date", formData.startDate);
    }

    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
  };

  const handleCopyLink = async () => {
    const link = generateShareLink();

    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (error) {
      console.error("Không thể sao chép đường link:", error);
      alert("Không thể sao chép link. Bạn hãy thử sao chép thủ công nhé!");
    }
  };

  return (
    <>
      {/* Nút mở phần tùy chỉnh */}
      <div className="customize-trigger-wrap">
        <button
          id="btn-open-customize"
          onClick={handleOpen}
          className="btn-customize-trigger"
          title="Tùy chỉnh thông tin của mẹ và con"
        >
          <Settings size={18} className="animate-spin-slow" />
          <span>Tùy Chỉnh Cho Mẹ</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-wrap">
                <Heart size={20} className="text-rose-500 fill-current" />
                <h3 className="modal-title">
                  Tùy Chỉnh Món Quà Dành Cho Mẹ
                </h3>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="modal-close-btn"
                title="Đóng"
              >
                <X size={20} />
              </button>
            </div>

            <p className="modal-intro">
              💗 Hãy điền tên mẹ, tên con và lời chúc yêu thương.
              Sau đó, bấm "Sao Chép Link" để chia sẻ món quà đặc biệt
              này với mẹ nhé!
            </p>

            <form onSubmit={handleSave} className="modal-form">
              <div className="form-group-grid">
                <div className="form-field">
                  <label htmlFor="input-wife-name">
                    Tên gọi của Mẹ:
                  </label>

                  <input
                    id="input-wife-name"
                    type="text"
                    value={formData.wifeName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        wifeName: e.target.value,
                      })
                    }
                    placeholder="Ví dụ: Mẹ yêu, Mẹ Lan..."
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="input-husband-name">
                    Tên gọi của Con:
                  </label>

                  <input
                    id="input-husband-name"
                    type="text"
                    value={formData.husbandName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        husbandName: e.target.value,
                      })
                    }
                    placeholder="Ví dụ: Bé yêu, Minh..."
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="input-start-date">
                  Ngày đặc biệt của gia đình:
                </label>

                <input
                  id="input-start-date"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startDate: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="input-letter-title">
                  Tiêu đề thư gửi Mẹ:
                </label>

                <input
                  id="input-letter-title"
                  type="text"
                  value={formData.letterTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      letterTitle: e.target.value,
                    })
                  }
                  placeholder="Ví dụ: Gửi người mẹ tuyệt vời nhất"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="input-letter-msg">
                  Lời yêu thương dành cho Mẹ:
                </label>

                <textarea
                  id="input-letter-msg"
                  rows={4}
                  value={formData.letterMessage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      letterMessage: e.target.value,
                    })
                  }
                  placeholder="Viết những lời yêu thương mà con muốn gửi đến mẹ..."
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="input-song-url">
                  Nhạc nền (File MP3 hoặc Link online):
                </label>

                <input
                  id="input-song-url"
                  type="text"
                  value={formData.songUrl || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      songUrl: e.target.value,
                    })
                  }
                  placeholder="Ví dụ: /music.mp3 hoặc link MP3"
                />

                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#fda4af",
                    marginTop: "2px",
                  }}
                >
                  💡 Gợi ý: Đặt file nhạc trong thư mục{" "}
                  <code>public/music.mp3</code> của dự án để sử dụng.
                </span>
              </div>

              {/* Khung tạo link chia sẻ */}
              <div className="share-link-box">
                <div className="share-link-info">
                  <LinkIcon size={16} className="text-amber-400" />
                  <span>Link món quà dành tặng Mẹ:</span>
                </div>

                <div className="share-link-input-row">
                  <input
                    type="text"
                    readOnly
                    value={generateShareLink()}
                    className="share-link-input"
                  />

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="btn-copy-share-link"
                  >
                    {copiedLink ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}

                    <span>
                      {copiedLink ? "Đã chép" : "Sao Chép Link"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn-modal-cancel"
                >
                  Hủy
                </button>

                <button type="submit" className="btn-modal-save">
                  <Save size={16} />
                  <span>Lưu Thay Đổi</span>
                  <Sparkles size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Camera, Sparkles, Plus, Trash2 } from "lucide-react";
import { playHeartPop } from "@/utils/audio";

interface SweetPhoto {
  id: string;
  url: string;
  caption: string;
  date: string;
  rotation: number;
}

const DEFAULT_PHOTOS: SweetPhoto[] = [
  {
    id: "default-1",
    url: "/images/bouquet.jpg?v=2",
    caption: "Bó hoa tươi thắm con dành tặng mẹ nhân ngày 20/10 💐",
    date: "20/10/2026",
    rotation: -3,
  },
  {
    id: "default-2",
    url: "/images/couple.jpg?v=2",
    caption: "Những khoảnh khắc bình yên bên mẹ là điều con luôn trân trọng ❤️",
    date: "Khoảnh khắc bên mẹ",
    rotation: 2,
  },
  {
    id: "default-3",
    url: "/images/cake.jpg?v=2",
    caption: "Mong mẹ luôn vui vẻ, hạnh phúc và nở nụ cười thật tươi 🍰",
    date: "Yêu thương mỗi ngày",
    rotation: -2,
  },
];

export default function SweetMoments() {
  const [photos, setPhotos] = useState<SweetPhoto[]>(DEFAULT_PHOTOS);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mother_moments_photos");

      if (saved) {
        const parsed: SweetPhoto[] = JSON.parse(saved);
        const customOnly = parsed.filter((p) =>
          p.id.startsWith("custom-")
        );

        if (customOnly.length > 0) {
          setPhotos([...DEFAULT_PHOTOS, ...customOnly]);
          return;
        }
      }

      setPhotos(DEFAULT_PHOTOS);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    playHeartPop();

    const file = files[0];

    if (!file.type.startsWith("image/")) {
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        const newPhoto: SweetPhoto = {
          id: "custom-" + Date.now(),
          url: event.target.result,
          caption: "Một kỷ niệm thật đẹp của mẹ và con ❤️",
          date: new Date().toLocaleDateString("vi-VN"),
          rotation: (Math.random() - 0.5) * 6,
        };

        setPhotos((prev) => {
          const updated = [...prev, newPhoto];

          try {
            localStorage.setItem(
              "mother_moments_photos",
              JSON.stringify(updated)
            );
          } catch (err) {
            console.warn(
              "Không thể lưu ảnh. Có thể dung lượng lưu trữ đã đầy.",
              err
            );
          }

          return updated;
        });
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDeletePhoto = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setPhotos((prev) => {
      const updated = prev.filter((p) => p.id !== id);

      try {
        localStorage.setItem(
          "mother_moments_photos",
          JSON.stringify(updated)
        );
      } catch (err) {
        console.error(err);
      }

      return updated;
    });
  };

  return (
    <section className="moments-section">
      <div className="section-header">
        <span className="section-tag">
          <Camera size={16} /> Album Kỷ Niệm Của Mẹ Và Con
        </span>

        <h2 className="section-title">
          Những Khoảnh Khắc Yêu Thương 💗
        </h2>

        <p className="section-desc">
          Mỗi bức ảnh là một kỷ niệm quý giá, lưu giữ những nụ cười
          và khoảnh khắc hạnh phúc bên mẹ.
        </p>
      </div>

      <div className="polaroid-gallery">
        {photos.map((item) => (
          <div
            key={item.id}
            className="polaroid-card"
            style={{ transform: `rotate(${item.rotation}deg)` }}
          >
            <div className="washi-tape" />

            <div className="polaroid-img-wrapper">
              <Image
                src={item.url}
                alt={item.caption}
                width={500}
                height={500}
                className="polaroid-img"
                unoptimized={true}
              />
            </div>

            <div className="polaroid-info">
              <p className="polaroid-caption">{item.caption}</p>

              <div className="polaroid-meta">
                <span className="polaroid-date">
                  <Sparkles
                    size={12}
                    className="inline mr-1 text-amber-400"
                  />
                  {item.date}
                </span>

                {item.id.startsWith("custom-") && (
                  <button
                    onClick={(e) => handleDeletePhoto(item.id, e)}
                    className="btn-delete-photo"
                    title="Xóa ảnh"
                    aria-label="Xóa ảnh kỷ niệm"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="moments-actions">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          style={{ display: "none" }}
          onChange={handleUploadPhoto}
        />

        <button
          id="btn-upload-moment"
          onClick={() => fileInputRef.current?.click()}
          className="btn-add-moment"
        >
          <Plus size={18} />
          <span>Thêm Ảnh Kỷ Niệm Của Mẹ Và Con</span>
        </button>

        <p className="moments-note">
          💡 Hãy tải lên những bức ảnh thật của hai mẹ con để lưu giữ
          những kỷ niệm đáng nhớ nhé!
        </p>
      </div>
    </section>
  );
}

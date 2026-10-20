import { CoupleConfig, CouponItem, ReasonItem } from "@/types";

export const DEFAULT_CONFIG: CoupleConfig = {
  wifeName: "Mẹ Yêu",
  husbandName: "Con Yêu",
  startDate: "2023-08-06",
  letterTitle: "Gửi người phụ nữ tuyệt vời nhất cuộc đời con",
  letterMessage: `Nhân ngày Phụ nữ Việt Nam 20/10, con muốn gửi đến mẹ những lời chúc yêu thương và chân thành nhất.

Cảm ơn mẹ vì đã luôn yêu thương, chăm sóc và hy sinh cho con. Cảm ơn mẹ vì những bữa cơm ấm áp, những lời dạy bảo và vòng tay dịu dàng mỗi khi con gặp khó khăn. Với con, mẹ luôn là người phụ nữ tuyệt vời nhất, là chỗ dựa bình yên và là người con yêu thương nhất trên đời.

Nhân ngày 20/10, con chúc mẹ luôn mạnh khỏe, vui vẻ, bình an và lúc nào cũng nở nụ cười trên môi. Mong rằng mỗi ngày của mẹ đều tràn ngập niềm vui, hạnh phúc và yêu thương. Con sẽ cố gắng học tập thật tốt để mẹ luôn tự hào và yên lòng.

Con yêu mẹ rất nhiều! ❤️`,
  songUrl: "/music.mp3",
};

export const INITIAL_COUPONS: CouponItem[] = [
  {
    id: "coupon-1",
    title: "Phiếu Massage Thư Giãn Cho Mẹ",
    desc: "Con sẽ giúp mẹ massage vai, cổ và lưng nhẹ nhàng để mẹ thư giãn sau một ngày vất vả.",
    badge: "Đặc Quyền Của Mẹ",
    iconName: "Sparkles",
    redeemed: false,
  },
  {
    id: "coupon-2",
    title: "Một Tuần Không Để Mẹ Làm Việc Nhà",
    desc: "Con sẽ phụ mẹ rửa bát, quét nhà và dọn dẹp để mẹ có thêm thời gian nghỉ ngơi.",
    badge: "Mẹ Cứ Nghỉ Ngơi",
    iconName: "Utensils",
    redeemed: false,
  },
  {
    id: "coupon-3",
    title: "Một Buổi Đi Chơi Cùng Mẹ",
    desc: "Con sẽ dành thời gian đưa mẹ đi dạo, mua sắm hoặc đến nơi mẹ yêu thích.",
    badge: "Ngày Đặc Biệt Của Mẹ",
    iconName: "ShoppingBag",
    redeemed: false,
  },
  {
    id: "coupon-4",
    title: "Phiếu Ôm Mẹ Thật Chặt",
    desc: "Con sẽ dành cho mẹ một cái ôm thật ấm áp và nói lời yêu thương mà đôi khi con còn ngại ngùng chưa nói.",
    badge: "Yêu Thương Vô Hạn",
    iconName: "Heart",
    redeemed: false,
  },
  {
    id: "coupon-5",
    title: "Bữa Ăn Đặc Biệt Cùng Mẹ",
    desc: "Con sẽ phụ mẹ chuẩn bị một bữa ăn ngon hoặc cùng mẹ thưởng thức món ăn mẹ yêu thích.",
    badge: "Bữa Ăn Hạnh Phúc",
    iconName: "ChefHat",
    redeemed: false,
  },
  {
    id: "coupon-6",
    title: "Phiếu Giúp Mẹ Mọi Lúc",
    desc: "Khi mẹ cần giúp đỡ, con sẽ cố gắng chủ động phụ mẹ những việc phù hợp với khả năng của mình.",
    badge: "Luôn Sẵn Sàng",
    iconName: "HandHeart",
    redeemed: false,
  },
];

export const REASONS_LIST: ReasonItem[] = [
  {
    id: 1,
    emoji: "❤️",
    title: "Tình yêu thương của mẹ",
    content:
      "Mẹ luôn dành cho con tình yêu thương chân thành nhất. Với con, tình yêu của mẹ là món quà quý giá không gì thay thế được.",
  },
  {
    id: 2,
    emoji: "🍲",
    title: "Những bữa cơm mẹ nấu",
    content:
      "Mỗi bữa cơm mẹ chuẩn bị đều chứa đựng biết bao sự quan tâm. Đó là hương vị gia đình mà con luôn trân trọng.",
  },
  {
    id: 3,
    emoji: "🌷",
    title: "Sự dịu dàng và bao dung",
    content:
      "Dù con có mắc lỗi hay gặp khó khăn, mẹ vẫn luôn kiên nhẫn chỉ bảo, động viên và cho con cơ hội trưởng thành.",
  },
  {
    id: 4,
    emoji: "🏡",
    title: "Mái nhà bình yên",
    content:
      "Nhờ có mẹ, gia đình luôn là nơi ấm áp để con trở về, được yêu thương, sẻ chia và cảm nhận hạnh phúc.",
  },
  {
    id: 5,
    emoji: "🌟",
    title: "Sự hy sinh thầm lặng",
    content:
      "Mẹ đã dành biết bao thời gian và công sức để chăm lo cho gia đình. Con luôn biết ơn những điều mẹ đã làm cho con.",
  },
  {
    id: 6,
    emoji: "💐",
    title: "Vì mẹ là mẹ của con",
    content:
      "Không cần mẹ phải hoàn hảo, chỉ cần mẹ luôn khỏe mạnh và hạnh phúc. Với con, mẹ mãi là người tuyệt vời nhất.",
  },
];

export const SWEET_COMPLIMENTS = [
  "Mẹ của con là người phụ nữ tuyệt vời nhất! ❤️",
  "Con chúc mẹ mỗi ngày đều vui vẻ và nở nụ cười thật tươi! 🌷",
  "Cảm ơn mẹ vì đã luôn yêu thương và chăm sóc con! 🥰",
  "Mẹ nhớ giữ gìn sức khỏe và dành thời gian nghỉ ngơi nhé! 💖",
  "Con mong mẹ luôn mạnh khỏe, bình an và hạnh phúc! 🌸",
  "Mẹ là món quà quý giá nhất mà cuộc đời đã dành cho con! 🎁",
  "Con sẽ cố gắng học tập thật tốt để mẹ vui lòng! 📚",
  "Dù con có lớn đến đâu, con vẫn luôn là con của mẹ! ❤️",
  "Mong những điều tốt đẹp nhất sẽ đến với mẹ mỗi ngày! 🌻",
  "Con yêu mẹ nhiều lắm, hôm nay và cả những ngày sau nữa! 💐",
];
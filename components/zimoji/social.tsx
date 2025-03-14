import clsx from "clsx";
import useThemeContext from "../heroSection/useThemeContext";
import Whatsapp from "@/components/social-svgs/whatsapp";
import Telegram from "@/components/social-svgs/telegram";
import Wechat from "@/components/social-svgs/wechat";
import Threads from "@/components/social-svgs/threads";
import X from "@/components/social-svgs/x";
import Facebook from "@/components/social-svgs/facebook";
import Tiktok from "@/components/social-svgs/tiktok";
import Instagram from "@/components/social-svgs/instagram";
import Snapchat from "@/components/social-svgs/snapchat";
import Reddit from "@/components/social-svgs/reddit";
import Bluesky from "@/components/social-svgs/bluesky";
import Tumbler from "@/components/social-svgs/tumbler";
import Discord from "@/components/social-svgs/discord";
import Pinterest from "@/components/social-svgs/pinterest";
import Messenger from "@/components/social-svgs/messenger";
import SinaWeibo from "@/components/social-svgs/sina-weibo";
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TumblrShareButton,
  WeiboShareButton,
} from "react-share";

/* eslint-disable @next/next/no-img-element */
function Social() {
  const { theme } = useThemeContext();

  const url = window.location.href;

  const openShareWindow = (shareURL: string): void => {
    window.open(shareURL, "_blank");
  };

  const shareToInstagram = (): void => {
    openShareWindow(
      `https://www.instagram.com/?url=${encodeURIComponent(url)}`
    );
  };

  const shareToSnapchat = (): void => {
    openShareWindow(
      `https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(url)}`
    );
  };

  const shareToTikTok = (): void => {
    openShareWindow(
      `https://www.tiktok.com/upload?shareUrl=${encodeURIComponent(url)}`
    );
  };

  const shareToThreads = (): void => {
    openShareWindow(
      `https://www.threads.net/intent/post?text=${encodeURIComponent(url)}`
    );
  };

  const shareToDiscord = (): void => {
    openShareWindow(
      `https://discord.com/channels/@me?message=${encodeURIComponent(url)}`
    );
  };

  const shareToBluesky = (): void => {
    openShareWindow(
      `https://bsky.app/intent/compose?text=${encodeURIComponent(url)}`
    );
  };

  const shareToWeChat = (): void => {
    openShareWindow("https://web.wechat.com/");
  };

  return (
    <div className="social-share w-[178px] 2xl:w-[250px] flex flex-col gap-6 2xl:gap-10 mx-auto">
      <img
        src="/assets/text/share-listing-zimoji.svg"
        className={clsx("w-full", theme === "dark" && "invert")}
        alt=""
      />
      <div
        className={clsx(
          "grid grid-cols-4 gap-x-4 gap-y-6 2xl:gap-x-6 2xl:gap-y-10 justify-between w-full",
          theme === "dark" ? "fill-white" : "fill-black"
        )}
      >
        <WhatsappShareButton url={url}>
          <Whatsapp className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </WhatsappShareButton>
        <TelegramShareButton url={url}>
          <Telegram className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </TelegramShareButton>
        <button onClick={shareToWeChat}>
          <Wechat className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <button onClick={shareToThreads}>
          <Threads className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <TwitterShareButton url={url}>
          <X className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <Facebook className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </FacebookShareButton>
        <button onClick={shareToTikTok}>
          <Tiktok className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <button onClick={shareToInstagram}>
          <Instagram className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <button onClick={shareToSnapchat}>
          <Snapchat className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <RedditShareButton url={url}>
          <Reddit className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </RedditShareButton>
        <button onClick={shareToBluesky}>
          <Bluesky className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <TumblrShareButton url={url}>
          <Tumbler className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </TumblrShareButton>
        <button onClick={shareToDiscord}>
          <Discord className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </button>
        <PinterestShareButton url={url} media={url}>
          <Pinterest className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </PinterestShareButton>
        <FacebookMessengerShareButton url={url} appId="">
          <Messenger className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </FacebookMessengerShareButton>
        <WeiboShareButton url={url}>
          <SinaWeibo className="h-[22px] 2xl:h-[32px] mx-auto fill-inherit hover:fill-golden transition-all duration-300" />
        </WeiboShareButton>
      </div>
    </div>
  );
}
export default Social;

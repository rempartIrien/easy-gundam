import { paragraphStyle, titleStyle } from "./(home).css";

export default function Home() {
  return (
    <main>
      <h1 class={titleStyle}>
        Welcome to Easy Gundam! (イジ士ガンダムにようこそ)
      </h1>
      <p class={paragraphStyle}>
        This site speaks about Mobile Suit Gundam (機動戦士ガンダム), a series
        by Yoshiyuki Tomino (富野 由悠季 or 富野 喜幸).
      </p>
    </main>
  );
}

export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};

export const defaultLocale: Locale = "en";

const en = {
  "app.name": "Numit",
  "app.tagline": "A playful party game for you and your friends.",

  "nav.home": "Home",
  "nav.createRoom": "Create",
  "nav.joinRoom": "Join",
  "nav.lobby": "Lobby",
  "nav.game": "Game",
  "nav.results": "Results",
  "nav.settings": "Settings",
  "nav.howToPlay": "How to play",
  "nav.about": "About",
  "nav.menu": "Menu",
  "nav.more": "More",

  "common.placeholder": "Placeholder content — coming soon.",
  "common.back": "Go back",

  "home.title": "Welcome to Numit",
  "home.subtitle": "Gather your friends, pick a room, and get ready to play.",
  "home.comingSoon": "Rooms and gameplay are coming soon.",
  "home.cta.create": "Create room",
  "home.cta.join": "Join room",
  "home.explore": "Explore",

  "createRoom.title": "Create a room",
  "createRoom.subtitle": "Set up a new game room and invite your friends.",

  "joinRoom.title": "Join a room",
  "joinRoom.subtitle": "Enter a room code to hop into your friends' game.",

  "lobby.title": "Lobby",
  "lobby.subtitle": "Players gather here before the game starts.",

  "game.title": "Game",
  "game.subtitle": "The round will play out here.",

  "results.title": "Results",
  "results.subtitle": "Scores and the final ranking will appear here.",

  "settings.title": "Settings",
  "settings.subtitle": "Adjust language, theme, and preferences.",
  "settings.appearance": "Appearance",
  "settings.language": "Language",

  "howToPlay.title": "How to play",
  "howToPlay.subtitle": "A quick guide to the rules and the flow of a round.",

  "about.title": "About",
  "about.subtitle": "A cute, mobile-first party game built for gathering friends.",

  "notFound.title": "404",
  "notFound.heading": "Page not found",
  "notFound.description": "The page you're looking for doesn't exist or has been moved.",
  "notFound.cta.home": "Go home",

  "error.heading": "This page didn't load",
  "error.description": "Something went wrong on our end. You can try refreshing or head back home.",
  "error.cta.retry": "Try again",

  "language.label": "Language",
  "language.switch": "Switch language",
} as const;

export type TranslationKey = keyof typeof en;

const ja: Record<TranslationKey, string> = {
  "app.name": "ナミット",
  "app.tagline": "友だちと楽しむ、にぎやかなパーティーゲーム。",

  "nav.home": "ホーム",
  "nav.createRoom": "作成",
  "nav.joinRoom": "参加",
  "nav.lobby": "ロビー",
  "nav.game": "ゲーム",
  "nav.results": "結果",
  "nav.settings": "設定",
  "nav.howToPlay": "遊び方",
  "nav.about": "アプリについて",
  "nav.menu": "メニュー",
  "nav.more": "その他",

  "common.placeholder": "プレースホルダーです。近日公開。",
  "common.back": "戻る",

  "home.title": "ナミットへようこそ",
  "home.subtitle": "友だちを集めて、ルームを選んで、さあ遊びましょう。",
  "home.comingSoon": "ルームとゲームプレイは近日公開です。",
  "home.cta.create": "ルームを作成",
  "home.cta.join": "ルームに参加",
  "home.explore": "さがす",

  "createRoom.title": "ルームを作成",
  "createRoom.subtitle": "新しいルームを作って友だちを招待しましょう。",

  "joinRoom.title": "ルームに参加",
  "joinRoom.subtitle": "ルームコードを入力して友だちのゲームに参加。",

  "lobby.title": "ロビー",
  "lobby.subtitle": "ゲーム開始前にプレイヤーが集まる場所です。",

  "game.title": "ゲーム",
  "game.subtitle": "ここでラウンドが進行します。",

  "results.title": "結果",
  "results.subtitle": "スコアと最終順位がここに表示されます。",

  "settings.title": "設定",
  "settings.subtitle": "言語やテーマなどを変更できます。",
  "settings.appearance": "テーマ",
  "settings.language": "言語",

  "howToPlay.title": "遊び方",
  "howToPlay.subtitle": "ルールとラウンドの流れをかんたんに紹介します。",

  "about.title": "アプリについて",
  "about.subtitle": "友だちと集まって遊ぶ、モバイルファーストのパーティーゲーム。",

  "notFound.title": "404",
  "notFound.heading": "ページが見つかりません",
  "notFound.description": "お探しのページは存在しないか、移動された可能性があります。",
  "notFound.cta.home": "ホームへ戻る",

  "error.heading": "ページを読み込めませんでした",
  "error.description":
    "問題が発生しました。ページを再読み込みするか、ホームへお戻りください。",
  "error.cta.retry": "再試行",

  "language.label": "言語",
  "language.switch": "言語を切り替える",
};

export const translations: Record<Locale, Record<TranslationKey, string>> = { en, ja };

# Vue.js & Nuxt.js Todo アプリ

シンプルな Todo アプリケーションです。Vue.js と Nuxt.js を使用して構築されています。

## Publish page

[here](https://t00m00.github.io/ToDo_app_byGenerative_AI/)

## 機能

- タスクの追加
- タスクの完了/未完了の切り替え
- タスクの削除
- LocalStorage によるタスクの永続化

## 技術スタック

- Vue.js
- Nuxt.js
- Vuex (状態管理)
- Tailwind CSS (スタイリング)

## プロジェクトのセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (localhost:3000)
npm run dev

# 本番用ビルド
npm run build
npm run start

# 静的プロジェクトの生成
npm run generate
```

## プロジェクト構造

- `components/` - Vue コンポーネント
- `layouts/` - Nuxt レイアウト
- `pages/` - アプリケーションのページ
- `plugins/` - Vue.js プラグイン
- `store/` - Vuex ストア (状態管理)

## 使い方

1. テキストボックスに新しいタスクを入力
2. 「追加」ボタンをクリックするか Enter キーを押してタスクを追加
3. チェックボックスをクリックしてタスクの完了/未完了を切り替え
4. 「削除」ボタンをクリックしてタスクを削除

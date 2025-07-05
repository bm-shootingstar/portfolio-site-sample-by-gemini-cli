## ポートフォリオサイト作成とGitHub Pagesデプロイの要約

### 1. プロジェクトの初期設定と技術スタックの決定

*   **目的:** GitHub Pagesでポートフォリオを構築。
*   **技術スタック:** React (Vite), Bootstrap, React Router, gh-pages。
*   **初期セットアップ:**
    *   `npm create vite@latest . -- --template react` でViteプロジェクト作成。
    *   `npm install` で依存関係をインストール。
    *   `npm install react-router-dom bootstrap` でルーティングとUIライブラリを導入。
    *   `npm install gh-pages --save-dev` でGitHub Pagesデプロイツールを導入。

### 2. GitHub Pages向け設定

*   **`vite.config.js`:**
    *   `base: "/portfolio_site/"` を追加し、GitHub Pagesのサブディレクトリに対応。
    *   `publicDir: 'public'` を追加し、静的ファイルの提供を明示。
*   **`package.json`:**
    *   `homepage: "https://bm-shootingstar.github.io/portfolio_site"` を追加。
    *   `scripts`に `predeploy: "npm run build"` と `deploy: "gh-pages -d dist"` を追加。

### 3. コンポーネントの作成とルーティング設定

*   `src/components` ディレクトリを作成し、`Home.jsx`, `Projects.jsx`, `About.jsx`, `Contact.jsx` の各ページコンポーネントを作成。
*   `src/App.jsx` を修正し、`react-router-dom` を使用したルーティングを設定。Bootstrapのナビゲーションバーも追加。
*   `src/main.jsx` から不要なCSSインポートを削除。
*   初期のViteテンプレートのCSSファイル (`src/App.css`, `src/index.css`) を削除。

### 4. 開発環境でのデバッグと問題解決

*   **`npm run dev` 実行時のエラー:**
    *   `src/main.jsx` が削除済みの `./index.css` をインポートしようとしていた問題を修正。
*   **画像の表示問題 (開発環境):**
    *   当初、外部のプレースホルダー画像を使用していたが、リンク切れの報告あり。
    *   `public/images` ディレクトリを作成し、ローカルのSVG画像を配置。
    *   画像パスを `/images/project1.svg` のように修正。
    *   `test.txt` を `public` ディレクトリに配置し、`localhost:XXXX/test.txt` でアクセスできるか確認することで、静的ファイルの提供問題を切り分け。
    *   **根本原因:** 作成したSVGファイルの内容が不完全であったため、ブラウザが正しくレンダリングできなかった。`xmlns`属性と`viewBox`属性を追加したより標準的なSVG形式に修正することで解決。
*   **ルーティングの調整:**
    *   開発中のデバッグのため、一時的に `HashRouter` から `BrowserRouter` に変更。
    *   デプロイ前にGitHub Pagesの推奨である `HashRouter` に戻す。

### 5. GitHub Pagesへのデプロイ

*   **Git操作:**
    *   `git init` でリポジトリを初期化。
    *   `git add .` でファイルをステージング。
    *   `git commit -m "Initial commit"` でコミット（コミットメッセージの引用符に関する問題が発生したが解決）。
    *   GitHubリポジトリ (`https://github.com/bm-shootingstar/portfolio_site`) を作成。
    *   `git remote add origin ...` と `git push -u origin main` でGitHubにプッシュ。
*   **デプロイ実行:**
    *   `npm run deploy` コマンドを実行し、サイトをビルドして `gh-pages` ブランチにデプロイ。
*   **デプロイ後の表示問題 (画像):**
    *   GitHub Pagesでは、`vite.config.js`の`base`パスが画像パスにも適用される必要があるため、`Projects.jsx`と`About.jsx`内の画像パスを `/portfolio_site/images/...` の形式に再修正。
    *   修正後、再度コミット＆プッシュし、`npm run deploy` で再デプロイ。
    *   最終的に画像が正しく表示されることを確認。

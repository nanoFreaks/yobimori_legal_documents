# yobimori 法的文書

このリポジトリでは、 yobimori に関わる法的文書を管理、公開します。

## 公開場所

https://nanofreaks.github.io/yobimori_legal_documents/

## 現在管理している文書

- [利用規約](https://nanofreaks.github.io/yobimori_legal_documents/terms_of_service)

## 編集方法

`/docs`ディレクトリ以下のMarkdownファイル(`*.md`)を編集することで修正を行えますが、
編集時はPull Requestを作成し、レビューを受けるようにしてください。

編集作業についてはGitHub上、もしくはローカルにリポジトリをクローンして編集できます。

Markdownの記法については[Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)などを参考にしてください。

## 手元で見た目を確認する場合

MarkdownはGFM(GitHub Flavored Markdown)を採用しており、GitHub上でプレビューされるものに近い状態で公開されますが、
スタイルや、ヘッダ、フッタなども合わせて確認する場合は手元で実行する必要があります。

以下の作業には Node.js(14+), pnpm(6+) を使用します。

### リポジトリのクローン

```sh
git clone https://github.com/nanoFreaks/yobimori_legal_documents.git
cd yobimori_legal_documents
```

### 依存関係の解消

```sh
pnpm i
```

### サーバの構築

```sh
pnpm dev
```

デフォルトでは http://localhost:3000 でホストされます。

### その他

- ビルド: `pnpm build`
- ソースコード
	- Lint: `pnpm lint`
	- Format: `pnpm format`
- 日本語の用法チェック: `pnpm textlint`

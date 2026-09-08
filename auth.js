/* マザーアンドチルドレン デザイン版 共有用 簡易認証
   統合ルール §7-5 / 工程②で削除する
   ※ソース上でパスワードは可読。検索避けとうっかり閲覧防止まで。
     リポジトリは必ず private にすること。 */
(function () {
  var PASS = "mc12345678";
  var html = document.documentElement;
  html.style.visibility = "hidden";
  if (prompt("関係者専用ページです。パスワードを入力してください:") !== PASS) {
    html.innerHTML = "<body style='font-family:sans-serif;text-align:center;padding:50px'>アクセス権限がありません。</body>";
  }
  html.style.visibility = "";
})();

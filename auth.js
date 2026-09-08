(function() {
  const PASSWORD = "mc12345678";
  const userInput = prompt("関係者専用ページです。パスワードを入力してください:");

  if (userInput !== PASSWORD) {
    alert("パスワードが正しくありません。");
    document.write("<div style='text-align:center;padding:50px;font-size:20px;font-family:sans-serif;'>アクセス権限がありません。</div>");
    window.stop();
  }
})();
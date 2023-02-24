document.addEventListener("DOMContentLoaded", () => {
  const lang = window.navigator.language;
  const wrapElement = document.getElementById("toCorporate");
  const txtElement = document.getElementById("toCorporateTxt");
  const linkElemnt = document.getElementById("toCorporateLink");
  const linkTxtElemnt = document.getElementById("toCorporateLinkTxt");
  const closeElemnt = document.getElementById("toCorporateClose");

  // 言語ごとにdomを生成
  // TODO safariのために含むかどうかで判定
  if (lang.match(/zh/)) {
    txt =
      "非常感谢您访问DENSO品牌网站。" +
      '<br>DENSO品牌网站将于<span class="date">2023年2月28日</span>关闭。' +
      "<br>将来，我们计划在公司网站上收集有关品牌的信息并传播信息。" +
      "<br>感谢您长期以来的惠顾。";
    linkTxt = "DENSO Global（corporate website）";
    link = "https://www.denso.com/cn/zh/";
  } else if (lang.match(/en/)) {
    txt =
      'Thank you for visiting the "DENSO Brand Site."' +
      '<br>The DENSO Brand Site will be closed on <span class="date">February 28, 2023.</span>' +
      "<br>In the future, we plan to consolidate the dissemination of information about the brand on the corporate website." +
      "<br>We appreciate your patronage over the years.";
    linkTxt = "DENSO Global（corporate website）";
    link = "#";
  } else {
    txt =
      "日頃より「デンソーブランドサイト」を訪問いただき、誠にありがとうございます。" +
      '<br>「デンソーブランドサイト」は<span class="date">2023年2月28日</span>をもちましてクローズいたします。' +
      "<br>今後はブランドに関する情報をコーポレートサイトに集約し、情報発信を行っていく予定です。" +
      "<br>長らくのご愛顧、誠にありがとうございました。";
    linkTxt = "DENSO コーポレートサイト";
    link = "https://www.denso.com/jp/ja/";
  }

  txtElement.innerHTML = txt;
  if (localStorage.getItem("themeColor") === "light") {
    txtElement.style.color = "#666";
    document.getElementById("toCorporate").style.backgroundColor = "white";
  } else {
    txtElement.style.color = "rgb(191,191,191)";
    document.getElementById("toCorporateLink").style.background = "#5f00dc";
    // debugger;
    // document.getElementById("dcross_image").src = "./images/dcross.png";
    document.getElementById("toCorporate").style.background =
      "linear-gradient(90deg, rgba(16,16,17,1) 0%, rgba(62,6,125,0.5942752100840336) 46%, rgba(0,0,0,1) 100%, rgba(8,8,114,1) 100%, rgba(0,212,255,1) 100%)";
  }
  linkTxtElemnt.append(linkTxt);
  linkElemnt.setAttribute("href", link);

  // 閉じる
  closeElemnt.addEventListener("click", () => {
    wrapElement.classList.add("-hide");
  });
});

window.addEventListener("load", () => {
  const wrapElement = document.getElementById("toCorporate");
  wrapElement.classList.remove("-hide");
});

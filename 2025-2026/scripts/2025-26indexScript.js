let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = `-${document.getElementById("nav").clientHeight + 10}px`;
  }
  prevScrollpos = currentScrollPos;
}

let issues = [
  {
    path: "assets/VolumeI.pdf",
    articles: [
      "US, China, EU Macroeconomic Outlook Late 2023 / Early 2024",
      "Recommended Holding",
      "Why Oil Prices are on the Rise, Again",
      "Scrubbing Off The Green",
      "Investing Concepts 1: Fundamental Analysis"
    ],
    pages: [3, 5, 8, 9, 11],
    contributor_text: `
      <p>Written by Colin Ngan, Tim He, Sebastian Zhu; Layout by Justin Chen; Logo and cover by Felisha Wang</p>
    `
  },
  {
    path: "assets/VolumeII.pdf",
    articles: [
      "Hong Kong Economic Outlook 2024/2025",
      "Hong Kong: Houses, Taxes, and Monopolies",
      "What do Locals Think of Hong Kong’s Housing Situation?",
      "Recommended Holding",
      "S&P’s New Record High, The Magnificent 7, and Stock Indexes",
      "BYD: Pioneering Growth and Innovation in the Global EV Market",
      "Investing Concepts 2: Technical Analysis",
      "Dogecoin and Elon Musk"
    ],
    pages: [3, 7, 11, 12, 14, 18, 20, 22],
    contributor_text: `
      <p>Written by Colin Ngan, Tim He, Sebastian Zhu, Howard Deng, Konnor Wan; Layout by Justin Chen</p>
    `
  },
  {
    path: "assets/VolumeIII.pdf",
    articles: [
      "Hong Kong Economic Outlook 2024/2025",
      "Exchange Square Interviews",
      "Solar History in China",
      "Recommended Holding",
      "Investing Concepts 3: Active Investing Strategies",
      "The Terra Luna Catastrophe",
      "Quantum Economics — An Examination",
      "The Effects of Social Capitalism on Economy"
    ],
    pages: [4, 7, 8, 9, 13, 16, 18, 22],
    contributor_text: `
        <p>Articles: Tim He, Colin Ngan, Sebastian Zhu, Howard Deng, Konnor Wan, Isabella Sun, Amelia Xu;</p>
        <p>Layout: Justin Chen, Katy Su;</p>
        <p>Marketing: Micky Lyu, Zoe Wai, Irene Chen, Marcela Chen;</p>
        <p>Administration: Tim He, Colin Ngan, Sebastian Zhu, Howard Deng, Konnor Wan, Justin Chen, Elly Gao;</p>
    `
  },
  {
    path: "assets/VolumeIV.pdf",
    articles: [
      "Interviews on Artificial Intelligence",
      "A Quick Update on the World Economy",
      "Investing Concepts 4: Investing in Loss — Negative Gearing in Australia",
      "Peru’s Lost Decade: a Case Study of the Debt Crisis in Latin America",
      "Power Shift: The Future of Sustainability Under Trump",
      "The Global Semiconductors Arms Race",
      "From Oil to Agriculture: The Far-Reaching Effects of Supply Chain Disruptions",
      "The Economic Impacts of Climate Change on the Global Economy",
      "The Tax Advantages of Hong Kong",
      "Bitcoin vs. Ethereum",
      "The Economic Rise of Singapore",
      "Global Chip Shortage",
      "Dividend Stocks: What is the best portfolio choice for diversification and passive income?",
      "Cryptocurrency Amid Regulatory Scrutiny: Stablecoins",
      "Automation in the Workplace",
      "Deportation and the American Workforce: A Looming Economic Crisis"
    ],
    pages: [6, 7, 9, 11, 13, 14, 18, 22, 24, 25, 27, 29, 30, 32, 34, 36],
    contributor_text: `
      <p><strong>Articles</strong>: Konnor Wan; Tim He, Colin Ngan, Sebastian Zhu, Thomas
      Wu, Samson Suen, Eason Huang, Helen Dai, Athena Yip, Kaleb Lau,
      Judy Bai, Amy Liu, Joseph Wu, Bruce Chan, Tony Huang, Richard Zeng, Sebastian Ng, Howard Deng;</p>
      <p><strong>Layout</strong>: Justin Chen;</p>
      <p><strong>Marketing</strong>: Sophia Swing; Daisy Chen, Irene Chen, Zoe Wai, Athena Yip, Arthur
        Wong, Katelyn To, Jocelyn Tam, Micky Lyu;</p>
      <p><strong>Administration</strong>: Tim He, Howard Deng, Colin Ngan, Sebastian Zhu, Konnor Wan, Elly Gao;</p>
      <p><strong>Interview</strong>: Helen Dai, Arthur Wong, Katelyn To, Howard Deng, Colin Ngan;</p>
      <p><strong>Filming</strong>: Athena Yip, Jocelyn Tam, Sophia Swing, Sebastian Zhu, Tim He;</p>
    `
  },
  {
    path: "./2024-2025/issueV.html",
    articles: [
      "Hong Kong’s Budget Deficit: Causes and Cures for a Sustainable Fiscal Future",
      "Economic History: Parallels between Trump’s “Liberation Day” and Hoover’s Smoot-Hawley",
      "How did the implementation of Trump’s tariffs on imports affect global trade dynamics, and what are the potential consequences for global economic stability and recession?",
      "Is History Repeating Itself? A Comparison of Trump’s Tariffs and the Smoot-Hawley Incident",
      "How do Trump’s proposed tariffs impact long-term GDP growth in the US?",
      "How has Trump’s planned withdrawal of EV subsidies affected car producers?",
      "How billionaires pay less taxes using offshore accounts",
      "What are the economics and repercussions of China’s electronic vehicle boom?",
      "What impacts will Trump’s tariffs have on inflation, and how will this affect the U.S. economy?",
      "How will mass deportations affect the US economy?",
      "How have Trump’s tariffs affected the international supply chain?"
    ],
    pages: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11"],
    contributor_text: `
      <p><strong>Articles</strong>: Konnor Wan; Tim He, Howard Deng, Colin Ngan, Sebastian Zhu, Thomas
      Wu, Chloe Luo, Samson Suen, Natalie Yue, Monique Siu, Eason Huang, Helen Dai, Athena Yip, Isabella Sun, Kaleb Lau,
      Judy Bai, Amy Liu, Joseph Wu, Bruce Chan, Tony Huang, Richard Zeng, Sebastian Ng, Sofie Tse, Claire Fang, Katelyn
      To;</p>
      <p><strong>Layout</strong>: Justin Chen;</p>
      <p><strong>Marketing</strong>: Sophia Swing; Daisy Chen, Irene Chen, Zoe Wai, Athena Yip, Arthur
        Wong, Katelyn To, Jocelyn Tam, Micky Lyu;</p>
      <p><strong>Administration</strong>: Tim He, Howard Deng, Colin Ngan, Sebastian Zhu, Konnor Wan, Elly Gao;</p>
      <p><strong>Interview</strong>: Helen Dai, Arthur Wong, Katelyn To, Howard Deng, Colin Ngan;</p>
      <p><strong>Filming</strong>: Athena Yip, Jocelyn Tam, Sophia Swing, Sebastian Zhu, Tim He;</p>
    `
  },
];

function openPopup(i) {
  let number;
  switch (i) {
    case "I":
      number = 1;
      break;
    case "II":
      number = 2;
      break;
    case "III":
      number = 3;
      break;
    case "IV":
      number = 4;
      break;
    case "V":
      number = 5;
      break;
  }
  document.getElementById("popup-issue-number").innerText = `Issue ${i}`;
  document.getElementById("read-button").onclick = function () {
    window.open(issues[number - 1].path, '_blank');
  }
  document.getElementById("articles").innerHTML = '';
  for (let iter = 0; iter < issues[number - 1].articles.length; iter++) {
    if (number !== 5) {
      document.getElementById("articles").innerHTML += `
        <div onclick="window.open('${issues[number - 1].path + '#page=' + issues[number - 1].pages[iter]}', '_blank');">
          ${issues[number - 1].articles[iter]}
        </div>
    `;
    } else {
      document.getElementById("articles").innerHTML += `
        <div onclick="window.open('${issues[number - 1].path + '#' + issues[number - 1].pages[iter]}', '_blank');">
          ${issues[number - 1].articles[iter]}
        </div>
    `;
    }
  }
  document.querySelector(".contributor-text p").innerHTML = issues[number - 1].contributor_text;
  document.querySelector("#issue-popup").style.backgroundColor = `var(--${number}-primary)`;
  document.querySelector("#issue-popup").style.color = `var(--${number}-secondary)`;

  document.querySelector("#read-button").style.backgroundColor = `var(--${number}-secondary)`;
  document.querySelector("#read-button").style.color = `var(--${number}-primary)`;

  document.querySelector(':root').style.setProperty('--color', `var(--${number}-secondary)`);
  document.querySelector(':root').style.setProperty('--background-color', `var(--${number}-primary)`);

  document.querySelector("#close-button-wrapper object").contentDocument.getElementById("close").style.color = getComputedStyle(document.body).getPropertyValue(`--${number}-secondary`);

  document.querySelector("#issue-popup").style.opacity = "1";
  document.querySelector("#issue-popup").classList.toggle("active");
}

function closePopup() {
  document.querySelector("#issue-popup").style.opacity = "0";
  setTimeout(function () {
    document.querySelector("#issue-popup").classList.toggle("active");
  }, 300);
}

for (let i = 0; i < document.querySelectorAll("#colorTiles div").length; i++) {
  document.querySelectorAll("#colorTiles div")[i].addEventListener("mouseover", function () {
    colorIssue(i + 1);
  })
}

function colorIssue(t) {
  document.body.style["background-color"] = `var(--${t}-secondary)`;
  document.body.style["color"] = `var(--${t}-primary)`;
  document.querySelector(':root').style.setProperty('--color', `var(--${t}-primary)`);
  document.querySelector(':root').style.setProperty('--background-color', `var(--${t}-secondary)`);

  for (let i = 0; i < document.querySelectorAll(".replaceLogo").length; i++) {
    if (document.querySelectorAll(".replaceLogo")[i].contentDocument)
      document.querySelectorAll(".replaceLogo")[i].contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue(`--${t}-primary`);
  }

  for (let i = 0; i < document.querySelectorAll(".banner").length; i++) {
    if (i % 2 === 0) {
      document.querySelectorAll(".banner")[i].style["background-color"] = `var(--${t}-complement)`;
      document.querySelectorAll(".banner")[i].style["color"] = `var(--${t}-primary)`;
    } else {
      document.querySelectorAll(".banner")[i].style["background-color"] = `var(--${t}-primary)`;
      document.querySelectorAll(".banner")[i].style["color"] = `var(--${t}-complement)`;
    }
  }

  document.querySelector("#nav").style["background-color"] = `var(--${t}-primary)`;
  document.querySelector("#nav").style["color"] = `var(--${t}-secondary)`;

  if (document.querySelector("#nav .replaceLogo").contentDocument)
    document.querySelector("#nav .replaceLogo").contentDocument.getElementById("logo").style.color = getComputedStyle(document.body).getPropertyValue(`--${t}-secondary`);

  document.querySelector(".subscribe button").style["background-color"] = `var(--${t}-primary)`;
  document.querySelector(".subscribe button").style["color"] = `var(--${t}-secondary)`;

  document.querySelector("#footer").style["color"] = `var(--${t}-primary)`;
}


window.onload = () => {
  let o = document.querySelectorAll(".instagram");
  for (let i = 0; i < o.length; i++) {
    o[i].querySelector("object").contentDocument.getElementById("instagram-icon").style.color = "white";

    o[i].onmouseover = (e) => {
      e.target.querySelector("object").contentDocument.getElementById("instagram-icon").style.color = getComputedStyle(document.body).getPropertyValue(`--color`);
    }

    o[i].onmouseleave = (e) => {
      e.target.querySelector("object").contentDocument.getElementById("instagram-icon").style.color = "white";
    }
  }

  o = document.querySelectorAll(".youtube");
  for (let i = 0; i < o.length; i++) {
    o[i].querySelector("object").contentDocument.getElementById("youtube-icon").style.color = "white";

    o[i].onmouseover = (e) => {
      e.target.querySelector("object").contentDocument.getElementById("youtube-icon").style.color = getComputedStyle(document.body).getPropertyValue(`--color`);
    }

    o[i].onmouseleave = (e) => {
      e.target.querySelector("object").contentDocument.getElementById("youtube-icon").style.color = "white";
    }
  }

  o = document.querySelectorAll(".email");
  for (let i = 0; i < o.length; i++) {
    o[i].querySelector("object").contentDocument.getElementById("email-icon").style.color = "white";

    o[i].onmouseover = (e) => {
      e.target.querySelector("object").contentDocument.getElementById("email-icon").style.color = getComputedStyle(document.body).getPropertyValue(`--color`);
    }

    o[i].onmouseleave = (e) => {
      e.target.querySelector("object").contentDocument.getElementById("email-icon").style.color = "white";
    }
  }
}

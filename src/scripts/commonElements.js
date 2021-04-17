export const getLogoContainer = (
  botImage,
  botAltImage,
  comImage,
  comAltImage,
  botDescription
) => {
  <div class="GlibGradeContainer">
    <img
      class=" pointer inheritAll"
      src={botImage}
      alt={botAltImage}
      onmouseover="document.getElementById('GlibGradeBotLogoTitle').hidden = false; document.getElementById('GlibGradeBotLogoDescr').hidden = false;"
      onmouseout="document.getElementById('GlibGradeBotLogoTitle').hidden = true; document.getElementById('GlibGradeBotLogoDescr').hidden = true;"
      width="50px"
      height="50px"
    />
    <img
      class="inheritAll"
      src={comImage}
      alt={comAltImage}
      onmouseover="document.getElementById('GlibGradeComLogoTitle').hidden = false;"
      onmouseout="document.getElementById('GlibGradeComLogoTitle').hidden = true;"
      width="50px"
      height="50px"
    />

    <div id="GlibGradeBotLogoTitle" class="GlibGradeBotFloaterTitle" hidden>
      <h1 class="GlibGradeDescription">GlibGrade Rating</h1>
    </div>
    <div id="GlibGradeBotLogoDescr" class="GlibGradeBotFloaterDescr" hidden>
      <h1 class="GlibGradeDescription">About the site:</h1>
      <div class="GlibGradeDescription">{botDescription}</div>
    </div>
    <div id="GlibGradeComLogoTitle" class="GlibGradeComFloaterTitle" hidden>
      <h1 class="GlibGradeDescription">Community Rating</h1>
    </div>
  </div>;
};

export const getArticleContainer = (
  botImage,
  botAltImage,
  comImage,
  comAltImage,
  botDescription
) => {
  <div class="GlibGradeContainer">
    <img
      class="pointer inheritAll"
      src={botImage}
      alt={botAltImage}
      onmouseover="document.getElementById('GlibGradeBotArticleTitle').hidden = false; document.getElementById('GlibGradeBotArticleDescr').hidden = false;"
      onmouseout="document.getElementById('GlibGradeBotArticleTitle').hidden = true; document.getElementById('GlibGradeBotArticleDescr').hidden = true;"
      width="50px"
      height="50px"
    />
    <img
      class="inheritAll"
      src={comImage}
      alt={comAltImage}
      onmouseover="document.getElementById('GlibGradeComArticleTitle').hidden = false;"
      onmouseout="document.getElementById('GlibGradeComArticleTitle').hidden = true;"
      width="50px"
      height="50px"
    />

    <div id="GlibGradeBotArticleTitle" class="GlibGradeBotFloaterTitle" hidden>
      <h1 class="GlibGradeDescription">GlibGrade Rating</h1>
    </div>
    <div id="GlibGradeBotArticleDescr" class="GlibGradeBotFloaterDescr" hidden>
      <h1 class="GlibGradeDescription">About the article:</h1>
      <div class="GlibGradeDescription">{botDescription}</div>
    </div>
    <div id="GlibGradeComArticleTitle" class="GlibGradeComFloaterTitle" hidden>
      <h1 class="GlibGradeDescription">Community Rating</h1>
    </div>
  </div>;
};

export const getAuthorContainer = (
  botImage,
  botAltImage,
  comImage,
  comAltImage,
  botDescription,
  authorName
) => {
  <div class="GlibGradeContainer">
    <img
      class="pointer inheritAll"
      src={botImage}
      alt={botAltImage}
      onmouseover={
        "document.getElementById('GlibGradeBotAuthor-" +
        authorName +
        "Title').hidden = false; document.getElementById('GlibGradeBotAuthor-" +
        authorName +
        "Descr').hidden = false;"
      }
      onmouseout={
        "document.getElementById('GlibGradeBotAuthor-" +
        authorName +
        "Title').hidden = true; document.getElementById('GlibGradeBotAuthor-" +
        authorName +
        "Descr').hidden = true;"
      }
      width="50px"
      height="50px"
    />
    <img
      class="inheritAll"
      src={comImage}
      alt={comAltImage}
      onmouseover={
        "document.getElementById('GlibGradeComAuthor-" +
        authorName +
        "Title').hidden = false;"
      }
      onmouseout={
        "document.getElementById('GlibGradeComAuthor-" +
        authorName +
        "Title').hidden = true;"
      }
      width="50px"
      height="50px"
    />

    <div
      id={"GlibGradeBotAuthor-" + authorName + "Title"}
      class="GlibGradeBotFloaterTitle"
      hidden
    >
      <h1 class="GlibGradeDescription inheritAll">GlibGrade Rating</h1>
    </div>
    <div
      id={"GlibGradeBotAuthor-" + authorName + "Descr"}
      class="GlibGradeBotFloaterDescr"
      hidden
    >
      <h1 class="GlibGradeDescription inheritAll">About the author {authorName}:</h1>
      <div class="GlibGradeDescription inheritAll">{botDescription}</div>
    </div>
    <div
      id={"GlibGradeComAuthor-" + authorName + "Title"}
      class="GlibGradeComFloaterTitle"
      hidden
    >
      <h1 class="GlibGradeDescription inheritAll">Community Rating</h1>
    </div>
  </div>;
};

  import {
    getLogoContainer,
    getArticleContainer,
    getAuthorContainer,
  } from "./commonElements";

  const getCompleteHTML = (site) => {};
  const getArticleName = (site) => {};
  const getAuthorName = (site) => {};

  const getGlibGradeSiteFeedback = (site) => {};
  const getGlibGradeArticleFeedback = (site, article) => {};
  const getGlibGradeAuthorFeedback = (site, author) => {};

  const getGlibGradeSiteRating = (site) => {};
  const getGlibGradeArticleRating = (site, article) => {};
  const getGlibGradeAuthorRating = (site, author) => {};

  const getCommunitySiteRating = (site) => {};
  const getCommunityArticleRating = (site, article) => {};
  const getCommunityAuthorRating = (site, author) => {};

  const convertRatingToLetterImage = (rating) => {
    if (glibSiteRating > 95) {
      return "assets/A+.png";
    } else if (glibSiteRating > 90) {
      return "assets/A-.png";
    } else if (glibSiteRating > 85) {
      return "assets/B+.png";
    } else if (glibSiteRating > 80) {
      return "assets/B-.png";
    } else if (glibSiteRating > 75) {
      return "assets/C+.png";
    } else if (glibSiteRating > 70) {
      return "assets/C-.png";
    } else if (glibSiteRating > 65) {
      return "assets/D+.png";
    } else if (glibSiteRating > 60) {
      return "assets/D-.png";
    } else {
      return "assets/F.png";
    }
  };
  const convertRatingToNumberImage = (rating) => {
    return "assets/" + rating + ".png";
  };

  const setGlibGradeSiteRating = (mainHTML, ratingHTML) => {};
  const setGlibGradeArticleRating = (mainHTML, ratingHTML) => {};
  const setGlibGradeAuthorRating = (mainHTML, ratingHTML) => {};
  const setAllGlibGradeRatings = (
    mainHTML,
    siteHTML,
    articleHTML,
    authorHTML
  ) => {
    let html = setGlibGradeSiteRating(mainHTML, siteHTML);
    html = setGlibGradeArticleRating(html, articleHTML);
    html = setGlibGradeAuthorRating(html, authorHTML);
    return html;
  };

  const saveNewHTML = (html, filename) => {
    var file = new Blob([html], { type: "html" });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  };

  const main = (site) => {
    const articleName = getArticleName(site);
    const authorName = getAuthorName(site);

    const glibSiteFeedback = getGlibGradeSiteFeedback(site);
    const glibArticleFeedback = getGlibGradeArticleFeedback(site, articleName);
    const glibAuthorFeedback = getGlibGradeAuthorFeedback(site, authorName);

    const glibSiteRating = getGlibGradeSiteRating(site);
    const glibArticleRating = getGlibGradeArticleRating(site, articleName);
    const glibAuthorRating = getGlibGradeAuthorRating(site, authorName);

    const comSiteRating = getCommunitySiteRating(site);
    const comArticleRating = getCommunityArticleRating(site, articleName);
    const comAuthorRating = getCommunityAuthorRating(site, authorName);

    const glibSiteImage = convertRatingToLetterImage(glibSiteRating);
    const glibArticleImage = convertRatingToLetterImage(glibArticleRating);
    const glibAuthorImage = convertRatingToLetterImage(glibAuthorRating);

    const comSiteImage = convertRatingToNumberImage(comSiteRating);
    const comArticleImage = convertRatingToNumberImage(comArticleRating);
    const comAuthorImage = convertRatingToNumberImage(comAuthorRating);

    const html = getCompleteHTML(site);
    const siteHTML = getLogoContainer(
      glibSiteImage,
      glibSiteRating + "%",
      comSiteImage,
      comSiteRating + "%",
      glibSiteFeedback
    );
    const articleHTML = getArticleContainer(
      glibArticleImage,
      glibArticleRating + "%",
      comArticleImage,
      comArticleRating + "%",
      glibArticleFeedback
    );
    const authorHTML = getAuthorContainer(
      glibAuthorImage,
      glibAuthorRating + "%",
      comAuthorImage,
      comAuthorRating + "%",
      glibAuthorFeedback,
      authorName
    );

    const finalHTML = setAllGlibGradeRatings(
      html,
      siteHTML,
      articleHTML,
      authorHTML
    );

    saveNewHTML(finalHTML, "glibGradeIncluded.html");
  };


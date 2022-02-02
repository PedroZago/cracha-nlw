const LinkSocialMedia = {
  github: "pedrozago",
  youtube: "youtube",
  facebook: "facebook",
  instagram: "instagram",
  twitter: "twitter"
};

const changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`;
  }
};

changeSocialMediaLinks();

const getGitHubProfileInfos = async () => {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`;

  await fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    })
};

getGitHubProfileInfos();
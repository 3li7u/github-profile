import createEl from "./create-el.js";

export function createGetProfileForm() {
  return createEl({
    tagName: "section",
    attrs: [{ key: "class", value: "get-profile" }],
    content: [
      {
        tagName: "div",
        attrs: [{ key: "class", value: "container" }],
        content: [
          {
            tagName: "form",
            content: [
              {
                tagName: "label",
                attrs: [{ key: "for", value: "username" }],
                content: "GitHub Username:",
              },
              {
                tagName: "input",
                attrs: [
                  { key: "type", value: "text" },
                  { key: "name", value: "username" },
                  { key: "id", value: "username" },
                  { key: "autoFocus", value: "true" },
                  { key: "placeholder", value: "Enter a GitHub username" },
                ],
              },
              {
                tagName: "input",
                attrs: [
                  { key: "type", value: "submit" },
                  { key: "value", value: "Get Profile" },
                ],
              },
              {
                tagName: "span",
                attrs: [{ key: "class", value: "err-msg" }],
              },
            ],
          },
        ],
      },
    ],
  });
}

export function createProfile(user, repos) {
  const {
    login: username,
    avatar_url: imgUrl,
    html_url: url,
    name,
    location,
    bio,
    public_repos: reposCount,
    followers,
    following,
    created_at: date,
  } = user;
  const repositories = repos.map(
    ({
      name,
      html_url: url,
      description,
      stargazers_count: stars,
      watchers_count: watches,
      forks_count: forks,
      created_at: date,
    }) => ({
      name,
      url,
      description,
      stars,
      watches,
      forks,
      date,
    })
  );
  return createEl({
    tagName: "section",
    attrs: [{ key: "class", value: "profile" }],
    content: [
      {
        tagName: "div",
        attrs: [{ key: "class", value: "container" }],
        content: [
          {
            tagName: "div",
            attrs: [{ key: "class", value: "card" }],
            content: [
              {
                tagName: "a",
                attrs: [
                  { key: "class", value: "user" },
                  { key: "href", value: url },
                  { key: "target", value: "_blank" },
                ],
                content: [
                  {
                    tagName: "div",
                    attrs: [{ key: "class", value: "image" }],
                    content: [
                      {
                        tagName: "img",
                        attrs: [
                          { key: "src", value: imgUrl },
                          { key: "alt", value: "profile" },
                        ],
                      },
                    ],
                  },
                  {
                    tagName: "div",
                    attrs: [{ key: "class", value: "meta" }],
                    content: [
                      {
                        tagName: "div",
                        attrs: [{ key: "class", value: "title" }],
                        content: [
                          {
                            tagName: "h4",
                            content: name ? name : "",
                          },
                          {
                            tagName: "span",
                            content: `@${username}`,
                          },
                        ],
                      },
                      {
                        tagName: "div",
                        attrs: [{ key: "class", value: "location" }],
                        content: location
                          ? [
                              {
                                tagName: "p",
                                content: location,
                              },
                            ]
                          : "",
                      },
                      {
                        tagName: "div",
                        attrs: [{ key: "class", value: "bio" }],
                        content: bio
                          ? [
                              {
                                tagName: "p",
                                content: bio,
                              },
                            ]
                          : "",
                      },
                      {
                        tagName: "div",
                        attrs: [{ key: "class", value: "follow" }],
                        content: [
                          {
                            tagName: "span",
                            attrs: [{ key: "title", value: "Date of Join" }],
                            content: [
                              {
                                tagName: "i",
                                attrs: [
                                  {
                                    key: "class",
                                    value: "fas fa-calendar-alt",
                                  },
                                ],
                              },
                              {
                                tagName: "span",
                                content: new Date(date)
                                  .getFullYear()
                                  .toString(),
                              },
                            ],
                          },
                          {
                            tagName: "span",
                            attrs: [{ key: "title", value: "Followers" }],
                            content: [
                              {
                                tagName: "i",
                                attrs: [
                                  {
                                    key: "class",
                                    value: "fas fa-users",
                                  },
                                ],
                              },
                              {
                                tagName: "span",
                                content: followers.toString(),
                              },
                            ],
                          },
                          {
                            tagName: "span",
                            attrs: [{ key: "title", value: "following" }],
                            content: [
                              {
                                tagName: "i",
                                attrs: [
                                  {
                                    key: "class",
                                    value: "fas fa-rss",
                                  },
                                ],
                              },
                              {
                                tagName: "span",
                                content: following.toString(),
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                tagName: "div",
                attrs: [{ key: "class", value: "repositories" }],
                content: [
                  {
                    tagName: "div",
                    attrs: [{ key: "class", value: "header" }],
                    content: [
                      {
                        tagName: "div",
                        content: [
                          {
                            tagName: "h4",
                            content: "Repositories:",
                          },
                        ],
                      },
                      {
                        tagName: "div",
                        content: [
                          {
                            tagName: "span",
                            attrs: [{ key: "class", value: "repos-number" }],
                            content: reposCount.toString(),
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tagName: "div",
                    attrs: [{ key: "class", value: "repos" }],
                    content:
                      repositories && repositories.length > 0
                        ? repositories.map(
                            ({
                              name,
                              isPrivate,
                              url,
                              description,
                              stars,
                              watches,
                              forks,
                              date,
                            }) => ({
                              tagName: "a",
                              attrs: [
                                { key: "href", value: url },
                                { key: "target", value: "_blank" },
                                { key: "class", value: "repo" },
                              ],
                              content: [
                                {
                                  tagName: "div",
                                  attrs: [{ key: "class", value: "title" }],
                                  content: [
                                    {
                                      tagName: "h4",
                                      content: name,
                                    },
                                  ],
                                },
                                {
                                  tagName: "div",
                                  attrs: [
                                    { key: "class", value: "description" },
                                  ],
                                  content: [
                                    {
                                      tagName: "p",
                                      content: description ? description : "",
                                    },
                                  ],
                                },
                                {
                                  tagName: "div",
                                  attrs: [{ key: "class", value: "meta" }],
                                  content: [
                                    {
                                      tagName: "div",
                                      attrs: [{ key: "class", value: "info" }],
                                      content: [
                                        {
                                          tagName: "span",
                                          content: new Date(
                                            date
                                          ).toLocaleDateString("en", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                          }),
                                        },
                                      ],
                                    },
                                    {
                                      tagName: "div",
                                      attrs: [{ key: "class", value: "stat" }],
                                      content: [
                                        {
                                          tagName: "span",
                                          content: [
                                            {
                                              tagName: "i",
                                              attrs: [
                                                {
                                                  key: "class",
                                                  value: "far fa-eye",
                                                },
                                              ],
                                            },
                                            {
                                              tagName: "span",
                                              content: watches.toString(),
                                            },
                                          ],
                                        },
                                        {
                                          tagName: "span",
                                          content: [
                                            {
                                              tagName: "i",
                                              attrs: [
                                                {
                                                  key: "class",
                                                  value: "fas fa-code-fork",
                                                },
                                              ],
                                            },
                                            {
                                              tagName: "span",
                                              content: forks.toString(),
                                            },
                                          ],
                                        },
                                        {
                                          tagName: "span",
                                          content: [
                                            {
                                              tagName: "i",
                                              attrs: [
                                                {
                                                  key: "class",
                                                  value: "far fa-star",
                                                },
                                              ],
                                            },
                                            {
                                              tagName: "span",
                                              content: stars.toString(),
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            })
                          )
                        : [
                            {
                              tagName: "div",
                              attrs: [{ key: "class", value: "no-repos" }],
                              content: [
                                {
                                  tagName: "i",
                                  attrs: [
                                    { key: "class", value: "fas fa-trash-alt" },
                                  ],
                                },
                                {
                                  tagName: "span",
                                  content: "There is no repositories",
                                },
                              ],
                            },
                          ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
}

export function createSpinner() {
  return createEl({
    tagName: "div",
    attrs: [{ key: "class", value: "spinner-bg" }],
    content: [
      {
        tagName: "div",
        attrs: [{ key: "class", value: "spinner spinner-swing-flash-circles" }],
        content: [
          {
            tagName: "div",
            attrs: [{ key: "class", value: "dot" }],
          },
          {
            tagName: "div",
            attrs: [{ key: "class", value: "dot" }],
          },
          {
            tagName: "div",
            attrs: [{ key: "class", value: "dot" }],
          },
        ],
      },
    ],
  });
}

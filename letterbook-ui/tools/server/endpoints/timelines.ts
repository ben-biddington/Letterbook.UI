import { Express } from 'express';
import newGuid from 'letterbook-ui/core/guid';

export default function apply(app: Express) {
  app.get(/api\/v1\/timelines\/home/, (req, res) => {
    if (req.query.since_id) return [];

    res.status(200).json([
      {
        id: newGuid(),
        created_at: '2023-08-11T12:41:36.620Z',
        in_reply_to_id: null,
        in_reply_to_account_id: null,
        sensitive: false,
        spoiler_text: '',
        visibility: 'public',
        language: 'en',
        uri: 'https://mastodon.cloud/users/jasongorman/statuses/110871032405725875',
        url: 'https://mastodon.cloud/@jasongorman/110871032405725875',
        replies_count: 14,
        reblogs_count: 91,
        favourites_count: 105,
        edited_at: null,
        content:
          '\u003cp\u003e\u0026quot;We tried Agile and it didn\u0026#39;t work?\u0026quot; Did you try the part where empowered, self-organising teams rapidly iterate production-quality software based on direct feedback from end users and continuously reflect on and improve how they work?\u003c/p\u003e',
        reblog: null,
        application: null,
        account: {
          id: '297928',
          username: 'jasongorman',
          acct: 'jasongorman',
          display_name: 'Jason Gorman',
          locked: false,
          bot: false,
          discoverable: false,
          group: false,
          created_at: '2018-08-16T00:00:00.000Z',
          note: '\u003cp\u003eSoftware developer, trainer and mentor at Codemanship. I didn\u0026#39;t vote for any of this.\u003c/p\u003e',
          url: 'https://mastodon.cloud/@jasongorman',
          avatar:
            'https://media.mastodon.cloud/accounts/avatars/000/297/928/original/fa0cb9378ee0dca2.png',
          avatar_static:
            'https://media.mastodon.cloud/accounts/avatars/000/297/928/original/fa0cb9378ee0dca2.png',
          header:
            'https://media.mastodon.cloud/accounts/headers/000/297/928/original/3fb080a3c1695716.png',
          header_static:
            'https://media.mastodon.cloud/accounts/headers/000/297/928/original/3fb080a3c1695716.png',
          followers_count: 1406,
          following_count: 185,
          statuses_count: 2847,
          last_status_at: '2023-08-13',
          noindex: false,
          emojis: [],
          roles: [],
          fields: [
            {
              name: 'Business',
              value:
                '\u003ca href="http://www.codemanship.com" target="_blank" rel="nofollow noopener noreferrer me"\u003e\u003cspan class="invisible"\u003ehttp://www.\u003c/span\u003e\u003cspan class=""\u003ecodemanship.com\u003c/span\u003e\u003cspan class="invisible"\u003e\u003c/span\u003e\u003c/a\u003e',
              verified_at: '2022-11-21T13:26:53.732+00:00',
            },
            {
              name: 'GitHub',
              value:
                '\u003ca href="https://www.github.com/jasongorman" target="_blank" rel="nofollow noopener noreferrer me"\u003e\u003cspan class="invisible"\u003ehttps://www.\u003c/span\u003e\u003cspan class=""\u003egithub.com/jasongorman\u003c/span\u003e\u003cspan class="invisible"\u003e\u003c/span\u003e\u003c/a\u003e',
              verified_at: null,
            },
            {
              name: 'Twitter',
              value:
                '\u003ca href="https://twitter.com/jasongorman" target="_blank" rel="nofollow noopener noreferrer me"\u003e\u003cspan class="invisible"\u003ehttps://\u003c/span\u003e\u003cspan class=""\u003etwitter.com/jasongorman\u003c/span\u003e\u003cspan class="invisible"\u003e\u003c/span\u003e\u003c/a\u003e',
              verified_at: null,
            },
            {
              name: 'LinkedIn',
              value:
                '\u003ca href="https://www.linkedin.com/in/jasongorman/" target="_blank" rel="nofollow noopener noreferrer me"\u003e\u003cspan class="invisible"\u003ehttps://www.\u003c/span\u003e\u003cspan class=""\u003elinkedin.com/in/jasongorman/\u003c/span\u003e\u003cspan class="invisible"\u003e\u003c/span\u003e\u003c/a\u003e',
              verified_at: null,
            },
          ],
        },
        media_attachments: [],
        mentions: [],
        tags: [],
        emojis: [],
        card: null,
        poll: null,
      },
      {
        id: '110857144074127813',
        created_at: '2023-08-09T01:49:37.501Z',
        in_reply_to_id: null,
        in_reply_to_account_id: null,
        sensitive: false,
        spoiler_text: '',
        visibility: 'public',
        language: 'en',
        uri: 'https://tech.lgbt/users/jenniferplusplus/statuses/110857144074127813',
        url: 'https://tech.lgbt/@jenniferplusplus/110857144074127813',
        replies_count: 19,
        reblogs_count: 118,
        favourites_count: 114,
        edited_at: null,
        local_only: false,
        content:
          '\u003cp\u003eI don\u0026#39;t know who needs to hear this (no, really, I don\u0026#39;t) but I\u0026#39;m building a new and completely from-scratch fedi microblogging server in C Sharp. I would very much like to have more help. It\u0026#39;s early days, but the general thesis for the project is to have a better admin and moderator experience than mastodon. It\u0026#39;s called \u003ca href="https://tech.lgbt/tags/Letterbook" class="mention hashtag" rel="tag"\u003e#\u003cspan\u003eLetterbook\u003c/span\u003e\u003c/a\u003e. \u003c/p\u003e\u003cp\u003eIf you wanted to help build the fediverse, but working with Ruby and/or the Mastodon core team wasn\u0026#39;t appealing, this might be a better fit, and we should chat.\u003c/p\u003e',
        reblog: null,
        application: null,
        account: {
          id: '109311698348768553',
          username: 'jenniferplusplus',
          acct: 'jenniferplusplus',
          display_name: 'Jenniferplusplus',
          locked: false,
          bot: false,
          discoverable: true,
          group: false,
          created_at: '2022-11-09T00:00:00.000Z',
          note: '\u003cp\u003etrans lesbian\u003cbr /\u003estaff software engineer\u003cbr /\u003edevops, reliability, resilience, sociotechnical systems\u003cbr /\u003ealso, that gay shit\u003c/p\u003e',
          url: 'https://tech.lgbt/@jenniferplusplus',
          uri: 'https://tech.lgbt/users/jenniferplusplus',
          avatar:
            'https://media.tech.lgbt/accounts/avatars/109/311/698/348/768/553/original/1f5260dfd850e510.jpg',
          avatar_static:
            'https://media.tech.lgbt/accounts/avatars/109/311/698/348/768/553/original/1f5260dfd850e510.jpg',
          header:
            'https://media.tech.lgbt/accounts/headers/109/311/698/348/768/553/original/89515f44ed99d1e1.jpg',
          header_static:
            'https://media.tech.lgbt/accounts/headers/109/311/698/348/768/553/original/89515f44ed99d1e1.jpg',
          followers_count: 1776,
          following_count: 288,
          statuses_count: 2812,
          last_status_at: '2023-08-13',
          noindex: true,
          emojis: [],
          roles: [],
          fields: [
            {
              name: 'Blog',
              value:
                '\u003ca href="https://jenniferplusplus.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"\u003e\u003cspan class="invisible"\u003ehttps://\u003c/span\u003e\u003cspan class=""\u003ejenniferplusplus.com\u003c/span\u003e\u003cspan class="invisible"\u003e\u003c/span\u003e\u003c/a\u003e',
              verified_at: '2022-11-09T17:53:08.045+00:00',
            },
            {
              name: 'Github',
              value:
                '\u003ca href="https://github.com/jenniferplusplus" target="_blank" rel="nofollow noopener noreferrer me" translate="no"\u003e\u003cspan class="invisible"\u003ehttps://\u003c/span\u003e\u003cspan class=""\u003egithub.com/jenniferplusplus\u003c/span\u003e\u003cspan class="invisible"\u003e\u003c/span\u003e\u003c/a\u003e',
              verified_at: '2023-02-02T06:40:46.597+00:00',
            },
            {
              name: 'Building',
              value:
                '\u003ca href="https://github.com/Letterbook/Letterbook" target="_blank" rel="nofollow noopener noreferrer me" translate="no"\u003e\u003cspan class="invisible"\u003ehttps://\u003c/span\u003e\u003cspan class="ellipsis"\u003egithub.com/Letterbook/Letterbo\u003c/span\u003e\u003cspan class="invisible"\u003eok\u003c/span\u003e\u003c/a\u003e',
              verified_at: null,
            },
            { name: 'Pronouns', value: 'she/her', verified_at: null },
          ],
        },
        media_attachments: [],
        mentions: [],
        tags: [
          { name: 'letterbook', url: 'https://tech.lgbt/tags/letterbook' },
        ],
        emojis: [],
        card: null,
        poll: null,
      },
    ]);
  });
}

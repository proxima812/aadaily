import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : tryOrUndefined(() => {
      return {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://aadaily.vercel.app", "ASSETS_PREFIX": undefined}.KEYSTATIC_GITHUB_CLIENT_ID;
    }),
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : tryOrUndefined(() => {
      return {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://aadaily.vercel.app", "ASSETS_PREFIX": undefined}.KEYSTATIC_GITHUB_CLIENT_SECRET;
    }),
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : tryOrUndefined(() => {
      return {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://aadaily.vercel.app", "ASSETS_PREFIX": undefined}.KEYSTATIC_SECRET;
    })
  }, {
    slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
  });
  return async function keystaticAPIRoute(context) {
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const REPO_OWNER = "";
const REPO_NAME = "";
const config = config$1({
  storage: {
    kind: "github",
    repo: `${REPO_OWNER}/${REPO_NAME}`
  } ,
  ui: {
    brand: {
      name: "Название"
    }
  },
  collections: {
    diaries: collection({
      label: "Ежедневники",
      slugField: "title",
      path: "src/content/diaries/*",
      entryLayout: "content",
      columns: ["title", "datePublished", "draft"],
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        description: fields.text({
          label: "Описание",
          multiline: true
        }),
        datePublished: fields.datetime({
          defaultValue: { kind: "now" },
          label: "Дата публикации"
        }),
        // ogImage: fields.image({
        // 	label: "Изображение",
        // 	directory: "src/assets/images/posts",
        // 	publicPath: "../../assets/images/posts/",
        // }),
        content: fields.mdx({
          label: "Контент",
          description: "",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/"
            }
          }
        }),
        draft: fields.checkbox({
          label: "Черновик",
          defaultValue: false,
          description: "Установите как черновик, чтобы предотвратить его публикацию."
        })
      }
    }),
    pages: collection({
      label: "Страницы",
      slugField: "title",
      path: "src/content/pages/*",
      entryLayout: "content",
      columns: ["title", "description", "noIndex"],
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "SEO Заголовок" } }),
        description: fields.text({
          label: "SEO Описание",
          multiline: true
        }),
        ogImage: fields.image({
          label: "Изображение",
          directory: "src/assets/images/pages",
          publicPath: "../../assets/images/pages/"
        }),
        noIndex: fields.checkbox({
          label: "НЕ Индексировать страницу?",
          defaultValue: false
        }),
        content: fields.mdx({
          label: "Контент",
          options: {
            image: {
              directory: "src/assets/images/pages",
              publicPath: "../../assets/images/pages/"
            }
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

export { ALL, all, prerender };

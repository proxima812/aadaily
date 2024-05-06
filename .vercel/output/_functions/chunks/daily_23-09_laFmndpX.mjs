import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"я-была-особенной\">«Я БЫЛА ОСОБЕННОЙ»</h2>\n<p><strong>Он [Bill W.] сказал мне мягко и просто: «Вы думаете, вы одна из нас?»</strong></p>\n<p><strong><em>Анонимные Алкоголики<br>\nAlcoholics Anonymous, p. 413</em></strong></p>\n<p>В пьяной жизни я была убеждена в собственной исключительности. Я думала, что\nстою выше общепринятых мелочных требований и имею право на прощение. Я никогда\nне осознавала, что темная сторона моих взглядов — это постоянное ощущение\n«отверженности». Поначалу в АА я находила сходство с другими людьми только как\nалкоголик. Каким же чудным пробуждением для меня стало осознание того, что\nесли люди делают все как можно лучше, то так же поступаю и я! Все эти\nпереживаемые ими боли, тревоги и радости не являются исключительными, они\nчасть и моей жизни точно так же, как и любого другого человека.</p>";

				const frontmatter = {"title":"23 сентября","description":"Размышления АА на сегодня - 23 сентября","id":"267","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_23-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## «Я БЫЛА ОСОБЕННОЙ»\n\n**Он [Bill W.] сказал мне мягко и просто: «Вы думаете, вы одна из нас?»**\n\n**_Анонимные Алкоголики  \nAlcoholics Anonymous, p. 413_**\n\nВ пьяной жизни я была убеждена в собственной исключительности. Я думала, что\nстою выше общепринятых мелочных требований и имею право на прощение. Я никогда\nне осознавала, что темная сторона моих взглядов — это постоянное ощущение\n«отверженности». Поначалу в АА я находила сходство с другими людьми только как\nалкоголик. Каким же чудным пробуждением для меня стало осознание того, что\nесли люди делают все как можно лучше, то так же поступаю и я! Все эти\nпереживаемые ими боли, тревоги и радости не являются исключительными, они\nчасть и моей жизни точно так же, как и любого другого человека.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"я-была-особенной","text":"«Я БЫЛА ОСОБЕННОЙ»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"новая-жизнь\">НОВАЯ ЖИЗНЬ</h2>\n<p><strong>Да, такая замена есть, и это намного больше, чем просто замена. Это наше\nбратство АА. …Жизнь наконец обретет смысл.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 148<br>\nAlcoholics Anonymous, p. 152</em></strong></p>\n<p>Без алкоголя жизнь лучше. АА и Высшая Сила сохраняют мою трезвость, а\nблагодать Божья делает ее еще богаче: она приносит в мою жизнь служение.\nЗнакомство с Программой АА учит меня новому и более глубокому пониманию того,\nчем является АА и что оно делает. Но что еще более важно, оно помогает мне\nувидеть, кто я такой, — алкоголик, которому, чтобы жить жизнью, данной Высшей\nСилой, постоянно нужен опыт Анонимных Алкоголиков.</p>";

				const frontmatter = {"title":"15 сентября","description":"Размышления АА на сегодня - 15 сентября","id":"259","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_15-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## НОВАЯ ЖИЗНЬ\n\n**Да, такая замена есть, и это намного больше, чем просто замена. Это наше\nбратство АА. …Жизнь наконец обретет смысл.**\n\n**_Анонимные Алкоголики, с. 148  \nAlcoholics Anonymous, p. 152_**\n\nБез алкоголя жизнь лучше. АА и Высшая Сила сохраняют мою трезвость, а\nблагодать Божья делает ее еще богаче: она приносит в мою жизнь служение.\nЗнакомство с Программой АА учит меня новому и более глубокому пониманию того,\nчем является АА и что оно делает. Но что еще более важно, оно помогает мне\nувидеть, кто я такой, — алкоголик, которому, чтобы жить жизнью, данной Высшей\nСилой, постоянно нужен опыт Анонимных Алкоголиков.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"новая-жизнь","text":"НОВАЯ ЖИЗНЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

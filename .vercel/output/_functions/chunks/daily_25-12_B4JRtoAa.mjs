import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"в-ладу-с-жизнью\">В ЛАДУ С ЖИЗНЬЮ</h2>\n<p><strong>Каждый день мы должны вносить в наши действия идею Божьей воли. «Как мне\nслужить Тебе? Да исполнится воля Твоя (не моя)».</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 82-83<br>\nAlcoholics Anonymous, p. 85</em></strong></p>\n<p>Начиная день, я каждое утро читаю этот отрывок, чтобы постоянно напоминать\nсебе о необходимости «применять эти принципы во всех моих делах». Когда я\nпостоянно держу в мыслях Божью волю, я способна делать то, что мне <em>следует</em>\nделать, и это примиряет меня с жизнью, с самой собой и с Богом.</p>";

				const frontmatter = {"title":"25 декабря","description":"Размышления АА на сегодня - 25 декабря","id":"360","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_25-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## В ЛАДУ С ЖИЗНЬЮ\n\n**Каждый день мы должны вносить в наши действия идею Божьей воли. «Как мне\nслужить Тебе? Да исполнится воля Твоя (не моя)».**\n\n**_Анонимные Алкоголики, с. 82-83  \nAlcoholics Anonymous, p. 85_**\n\nНачиная день, я каждое утро читаю этот отрывок, чтобы постоянно напоминать\nсебе о необходимости «применять эти принципы во всех моих делах». Когда я\nпостоянно держу в мыслях Божью волю, я способна делать то, что мне _следует_\nделать, и это примиряет меня с жизнью, с самой собой и с Богом.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"в-ладу-с-жизнью","text":"В ЛАДУ С ЖИЗНЬЮ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"выздоравливать-с-любовью\">ВЫЗДОРАВЛИВАТЬ С ЛЮБОВЬЮ</h2>\n<p><strong>Нам надо было отвергнуть всю нашу «драгоценную» философию самодостаточности.\nЭто невозможно было сделать, опираясь на привычную силу воли. Нет, то был\nвопрос готовности принять эти новые факты. Мы не убегали, но и не боролись. Мы\nприняли. И тогда стали свободными.</strong></p>\n<p><strong><em>«Лучшее из «Грейпвайна»<br>\nBest of Grapevine, vol. 1, p. 198</em></strong></p>\n<p>Я могу быть свободным от своего прежнего порабощающего «я». Наконец-то я\nувидел в себе что-то хорошее и поверил в это. Я вижу, что Высшая Сила, которая\nокутывает меня, любит меня и ведет к выздоровлению. Моя Высшая Сила становится\nисточником любви и силы, который творит во мне постоянное чудо. Я трезв… и я\nблагодарен.</p>";

				const frontmatter = {"title":"18 сентября","description":"Размышления АА на сегодня - 18 сентября","id":"262","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_18-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВЫЗДОРАВЛИВАТЬ С ЛЮБОВЬЮ\n\n**Нам надо было отвергнуть всю нашу «драгоценную» философию самодостаточности.\nЭто невозможно было сделать, опираясь на привычную силу воли. Нет, то был\nвопрос готовности принять эти новые факты. Мы не убегали, но и не боролись. Мы\nприняли. И тогда стали свободными.**\n\n**_«Лучшее из «Грейпвайна»  \nBest of Grapevine, vol. 1, p. 198_**\n\nЯ могу быть свободным от своего прежнего порабощающего «я». Наконец-то я\nувидел в себе что-то хорошее и поверил в это. Я вижу, что Высшая Сила, которая\nокутывает меня, любит меня и ведет к выздоровлению. Моя Высшая Сила становится\nисточником любви и силы, который творит во мне постоянное чудо. Я трезв… и я\nблагодарен.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"выздоравливать-с-любовью","text":"ВЫЗДОРАВЛИВАТЬ С ЛЮБОВЬЮ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

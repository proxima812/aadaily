import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"новое-состояние-сознания\">НОВОЕ СОСТОЯНИЕ СОЗНАНИЯ</h2>\n<p><strong>Такой человек получает дар, который равносилен новому состоянию сознания и\nновому существованию.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 121<br>\nTwelve Steps and Twelve Traditions, p. 107</em></strong></p>\n<p>Многие в АА ломают голову над тем, что такое духовное пробуждение. Я был\nсклонен искать чудо, нечто драматическое, потрясающее. Но обычно происходит\nтак, что ощущение благополучия и покоя выводят нас на новый уровень сознания.\nИменно так и произошло со мной. Безумие и внутреннее смятение исчезли, и я\nвошел в новое измерение — царство надежды, любви и покоя. Думаю, что степень\nэтого нового ощущения находится в прямой зависимости от искренно-сти, глубины\nи самоотдачи, с которыми я работаю по Двенадцати Шагам АА.</p>";

				const frontmatter = {"title":"5 декабря","description":"Размышления АА на сегодня - 5 декабря","id":"340","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_05-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## НОВОЕ СОСТОЯНИЕ СОЗНАНИЯ\n\n**Такой человек получает дар, который равносилен новому состоянию сознания и\nновому существованию.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 121  \nTwelve Steps and Twelve Traditions, p. 107_**\n\nМногие в АА ломают голову над тем, что такое духовное пробуждение. Я был\nсклонен искать чудо, нечто драматическое, потрясающее. Но обычно происходит\nтак, что ощущение благополучия и покоя выводят нас на новый уровень сознания.\nИменно так и произошло со мной. Безумие и внутреннее смятение исчезли, и я\nвошел в новое измерение — царство надежды, любви и покоя. Думаю, что степень\nэтого нового ощущения находится в прямой зависимости от искренно-сти, глубины\nи самоотдачи, с которыми я работаю по Двенадцати Шагам АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"новое-состояние-сознания","text":"НОВОЕ СОСТОЯНИЕ СОЗНАНИЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

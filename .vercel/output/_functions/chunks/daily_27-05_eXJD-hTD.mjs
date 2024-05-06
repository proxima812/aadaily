import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"без-слезливого-комплекса-вины\">БЕЗ СЛЕЗЛИВОГО КОМПЛЕКСА ВИНЫ</h2>\n<p><strong>День за днем мы пытаемся медленно двигаться к Божественному совершенству. А\nпотому не должны предаваться слезливому чувству вины…</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 15</em></strong></p>\n<p>Когда я впервые открыл для себя, что в Двенадцати Шагах АА нет ни одного «Не\nделай», я был потрясен, потому что это открытие распахнуло передо мной\nогромный портал. Только тогда я смог осознать, что значит для меня АА:</p>\n<p>АА — это не программа «Не делай», а «Делай».</p>\n<p>АА — это не закон военного времени; это свобода.</p>\n<p>АА — это не слезы над недостатками, а сладость исправления их.</p>\n<p>АА — это не раскаяние, а спасение.</p>\n<p>АА — это не «Горе мне!» за мои грехи, прошлые и настоящие.</p>\n<p>АА — это «Хвала Богу!» за прогресс, которого я достигаю сегодня.</p>";

				const frontmatter = {"title":"27 мая","description":"Размышления АА на сегодня - 27 мая","id":"148","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_27-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## БЕЗ СЛЕЗЛИВОГО КОМПЛЕКСА ВИНЫ\n\n**День за днем мы пытаемся медленно двигаться к Божественному совершенству. А\nпотому не должны предаваться слезливому чувству вины…**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 15_**\n\nКогда я впервые открыл для себя, что в Двенадцати Шагах АА нет ни одного «Не\nделай», я был потрясен, потому что это открытие распахнуло передо мной\nогромный портал. Только тогда я смог осознать, что значит для меня АА:\n\nАА — это не программа «Не делай», а «Делай».\n\nАА — это не закон военного времени; это свобода.\n\nАА — это не слезы над недостатками, а сладость исправления их.\n\nАА — это не раскаяние, а спасение.\n\nАА — это не «Горе мне!» за мои грехи, прошлые и настоящие.\n\nАА — это «Хвала Богу!» за прогресс, которого я достигаю сегодня.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"без-слезливого-комплекса-вины","text":"БЕЗ СЛЕЗЛИВОГО КОМПЛЕКСА ВИНЫ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

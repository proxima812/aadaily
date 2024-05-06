import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"покой-после-бури\">ПОКОЙ ПОСЛЕ БУРИ</h2>\n<p><strong>Один человек, испытавший это на себе, однажды назвал боль пробным камнем\nдуховного роста. Мы, члены АА, вполне согласны с этим…</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 106<br>\nTwelve Steps and Twelve Traditions, pp. 93-94</em></strong></p>\n<p>Когда мне «срывает крышу» в эмоциональных водоворотах, я вспоминаю, что\nпроцесс духовного роста часто весьма болезнен. Мое развитие в Программе АА\nнаучило меня, что я должен прожить внутренние изменения, какими бы\nболезненными они ни были, потому что именно они ведут меня от себялюбия к\nбескорыстию. Если я хочу быть спокойным, то должен ПЕРЕШАГНУТЬ эмоциональные\nрасстройства и следующие за ними «похмелья» и быть благодарным за\nпродолжающийся духовный рост.</p>";

				const frontmatter = {"title":"3 октября","description":"Размышления АА на сегодня - 3 октября","id":"277","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_03-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПОКОЙ ПОСЛЕ БУРИ\n\n**Один человек, испытавший это на себе, однажды назвал боль пробным камнем\nдуховного роста. Мы, члены АА, вполне согласны с этим…**\n\n**_Двенадцать шагов и двенадцать традиций, с. 106  \nTwelve Steps and Twelve Traditions, pp. 93-94_**\n\nКогда мне «срывает крышу» в эмоциональных водоворотах, я вспоминаю, что\nпроцесс духовного роста часто весьма болезнен. Мое развитие в Программе АА\nнаучило меня, что я должен прожить внутренние изменения, какими бы\nболезненными они ни были, потому что именно они ведут меня от себялюбия к\nбескорыстию. Если я хочу быть спокойным, то должен ПЕРЕШАГНУТЬ эмоциональные\nрасстройства и следующие за ними «похмелья» и быть благодарным за\nпродолжающийся духовный рост.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"покой-после-бури","text":"ПОКОЙ ПОСЛЕ БУРИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"всеобъемлющая-благодарность\">ВСЕОБЪЕМЛЮЩАЯ БЛАГОДАРНОСТЬ</h2>\n<p><strong>И, говоря от имени доктора Боба и от себя, я с благодарностью заявляю, что,\nесли бы не наши жены, Анни и Луиза, никто из нас не дожил бы до начала АА.</strong></p>\n<p><strong><em>Образ жизни АА<br>\nThe AA: Way of Life, p. 67</em></strong></p>\n<p>Способен ли я на великодушную дань уважения и благодарности своей жене,\nродителям и друзьям, без помощи которых я вряд ли бы выжил и смог добраться до\nдверей АА? Я буду работать над этим и постараюсь увидеть тот план, который моя\nВысшая Сила приготовила для меня. План, соединяющий наши жизни.</p>";

				const frontmatter = {"title":"7 апреля","description":"Размышления АА на сегодня - 7 апреля","id":"98","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_07-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВСЕОБЪЕМЛЮЩАЯ БЛАГОДАРНОСТЬ\n\n**И, говоря от имени доктора Боба и от себя, я с благодарностью заявляю, что,\nесли бы не наши жены, Анни и Луиза, никто из нас не дожил бы до начала АА.**\n\n**_Образ жизни АА  \nThe AA: Way of Life, p. 67_**\n\nСпособен ли я на великодушную дань уважения и благодарности своей жене,\nродителям и друзьям, без помощи которых я вряд ли бы выжил и смог добраться до\nдверей АА? Я буду работать над этим и постараюсь увидеть тот план, который моя\nВысшая Сила приготовила для меня. План, соединяющий наши жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"всеобъемлющая-благодарность","text":"ВСЕОБЪЕМЛЮЩАЯ БЛАГОДАРНОСТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

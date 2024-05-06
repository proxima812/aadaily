import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"подчиниться-образу-жизни-аа\">ПОДЧИНИТЬСЯ ОБРАЗУ ЖИЗНИ АА</h2>\n<p><strong>Мы подчиняемся Шагам и Традициям АА потому, что мы действительно хотим их.\nЭто не является вопросом добра и зла — мы подчиняемся, потому что искренне\nхотим подчиняться. Таков наш процесс роста в единстве и действии. Таково\nсвидетельство присутствия с нами Божьей благодати и любви.</strong></p>\n<p><strong><em>АА взрослеет<br>\nAA Comes of Age, p. 106</em></strong></p>\n<p>Любопытно наблюдать за собственным духовным ростом в АА. Сначала я противился\nподчинению принципам Содружества. Но боль, причиненная мне моей воинственно-\nстью, научила меня, что, выбирая образ жизни АА, я открываюсь Божьей благодати\nи любви. И тогда я начал осознавать, что означает быть членом АА.</p>";

				const frontmatter = {"title":"27 июня","description":"Размышления АА на сегодня - 27 июня","id":"179","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_27-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПОДЧИНИТЬСЯ ОБРАЗУ ЖИЗНИ АА\n\n**Мы подчиняемся Шагам и Традициям АА потому, что мы действительно хотим их.\nЭто не является вопросом добра и зла — мы подчиняемся, потому что искренне\nхотим подчиняться. Таков наш процесс роста в единстве и действии. Таково\nсвидетельство присутствия с нами Божьей благодати и любви.**\n\n**_АА взрослеет  \nAA Comes of Age, p. 106_**\n\nЛюбопытно наблюдать за собственным духовным ростом в АА. Сначала я противился\nподчинению принципам Содружества. Но боль, причиненная мне моей воинственно-\nстью, научила меня, что, выбирая образ жизни АА, я открываюсь Божьей благодати\nи любви. И тогда я начал осознавать, что означает быть членом АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"подчиниться-образу-жизни-аа","text":"ПОДЧИНИТЬСЯ ОБРАЗУ ЖИЗНИ АА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

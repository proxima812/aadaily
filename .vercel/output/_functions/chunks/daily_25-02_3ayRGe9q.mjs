import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"противостоять-неудачам\">ПРОТИВОСТОЯТЬ НЕУДАЧАМ</h2>\n<p><strong>В Божьем домостроительстве ничего не пропадает зря. Через неудачу мы\nполучаем урок смирения, который, по-видимому, необходим, хотя и является\nболезненным.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 31</em></strong></p>\n<p>Как благодарен я сегодня, зная, что все мои прошлые неудачи были для меня\nнеобходимы, чтобы оказаться там, где я сейчас нахожусь! Через сильную боль\nпришел опыт, и в страдании я стал покорным. Я устремился к Богу, как я Его\nпонимаю, Он поделился Своими драгоценными дарами. Через переживание и\nпослушание начался рост, а за ним благодарность. Да, затем пришло\nумиротворение — жить в трезвости и делиться трезвостью.</p>";

				const frontmatter = {"title":"25 февраля","description":"Размышления АА на сегодня - 25 февраля","id":"56","datePublished":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/fevral/daily_25-02.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПРОТИВОСТОЯТЬ НЕУДАЧАМ\n\n**В Божьем домостроительстве ничего не пропадает зря. Через неудачу мы\nполучаем урок смирения, который, по-видимому, необходим, хотя и является\nболезненным.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 31_**\n\nКак благодарен я сегодня, зная, что все мои прошлые неудачи были для меня\nнеобходимы, чтобы оказаться там, где я сейчас нахожусь! Через сильную боль\nпришел опыт, и в страдании я стал покорным. Я устремился к Богу, как я Его\nпонимаю, Он поделился Своими драгоценными дарами. Через переживание и\nпослушание начался рост, а за ним благодарность. Да, затем пришло\nумиротворение — жить в трезвости и делиться трезвостью.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"противостоять-неудачам","text":"ПРОТИВОСТОЯТЬ НЕУДАЧАМ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

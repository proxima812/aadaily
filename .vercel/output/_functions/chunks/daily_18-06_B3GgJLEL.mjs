import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"братство-свободы\">БРАТСТВО СВОБОДЫ</h2>\n<p><strong>…если бы людям была предоставлена абсолютная свобода и они бы никому не\nподчинялись, они бы тогда добровольно объединились для общего дела.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 54</em></strong></p>\n<p>Когда надо мной больше не довлеет диктат другого человека или алкоголя, я\nобретаю новую свободу. Когда я освобождаюсь от прошлого и от лишнего груза,\nкоторый так долго тащил на себе, я познаю свободу. Меня ввели в жизнь и в\nбратство свободы. Шаги — это «предлагаемый» способ обрести новую жизнь, в АА\nнет диктата, и никто никем не командует. Я свободен в служении по своему\nжеланию, а не по чьему-то указу. Мне ясно, что я извлекаю пользу из духовного\nроста других членов АА и беру у них то, чему хочу научиться, и возвращаю это\nгруппе. «Общее благополучие» может расти лишь в среде свободных личностей.</p>";

				const frontmatter = {"title":"18 июня","description":"Размышления АА на сегодня - 18 июня","id":"170","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_18-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## БРАТСТВО СВОБОДЫ\n\n**…если бы людям была предоставлена абсолютная свобода и они бы никому не\nподчинялись, они бы тогда добровольно объединились для общего дела.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 54_**\n\nКогда надо мной больше не довлеет диктат другого человека или алкоголя, я\nобретаю новую свободу. Когда я освобождаюсь от прошлого и от лишнего груза,\nкоторый так долго тащил на себе, я познаю свободу. Меня ввели в жизнь и в\nбратство свободы. Шаги — это «предлагаемый» способ обрести новую жизнь, в АА\nнет диктата, и никто никем не командует. Я свободен в служении по своему\nжеланию, а не по чьему-то указу. Мне ясно, что я извлекаю пользу из духовного\nроста других членов АА и беру у них то, чему хочу научиться, и возвращаю это\nгруппе. «Общее благополучие» может расти лишь в среде свободных личностей.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"братство-свободы","text":"БРАТСТВО СВОБОДЫ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

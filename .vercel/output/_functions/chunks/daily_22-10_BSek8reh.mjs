import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"истинная-терпимость\">ИСТИННАЯ ТЕРПИМОСТЬ</h2>\n<p>Наконец, мы видим, что все люди, в том числе и мы, в некоторой степени\nэмоционально неуравновешенны и часто бывают неправы. И тут мы вплотную\nподходим к пониманию подлинной терпимости и смысла настоящей любви к людям.</p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 104-105<br>\nTwelve Steps and Twelve Traditions, p. 92</em></strong></p>\n<p>Мне пришло на ум, что все люди в какой-то степени эмоционально больны. А как\nже иначе? Кто из нас духовно совершенен? А эмоционально? А физически? Поэтому\nнам ничего другого не остается, кроме как терпеть друг друга и относиться к\nдругим так, как мы хотим, чтобы они относились к нам. Вот это и есть истинная\nлюбовь.</p>";

				const frontmatter = {"title":"22 октября","description":"Размышления АА на сегодня - 22 октября","id":"296","datePublished":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/oktyabr/daily_22-10.md";
				const url = undefined;
				function rawContent() {
					return "\n## ИСТИННАЯ ТЕРПИМОСТЬ\n\nНаконец, мы видим, что все люди, в том числе и мы, в некоторой степени\nэмоционально неуравновешенны и часто бывают неправы. И тут мы вплотную\nподходим к пониманию подлинной терпимости и смысла настоящей любви к людям.\n\n**_Двенадцать шагов и двенадцать традиций, с. 104-105  \nTwelve Steps and Twelve Traditions, p. 92_**\n\nМне пришло на ум, что все люди в какой-то степени эмоционально больны. А как\nже иначе? Кто из нас духовно совершенен? А эмоционально? А физически? Поэтому\nнам ничего другого не остается, кроме как терпеть друг друга и относиться к\nдругим так, как мы хотим, чтобы они относились к нам. Вот это и есть истинная\nлюбовь.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"истинная-терпимость","text":"ИСТИННАЯ ТЕРПИМОСТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

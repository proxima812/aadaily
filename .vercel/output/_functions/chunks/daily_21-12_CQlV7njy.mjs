import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"слушай-делись-и-молись\">СЛУШАЙ, ДЕЛИСЬ И МОЛИСЬ</h2>\n<p><strong>Помогая алкоголику и его семье, вы ни в коем случае не должны принимать\nучастия в их ссорах. Этим вы можете лишить себя возможности помогать этим\nлюдям в дальнейшем.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 97<br>\nAlcoholics Anonymous, p. 100</em></strong></p>\n<p>Когда я пытаюсь помочь товарищу-алкоголику, то частенько порываюсь давать ему\nсоветы. Возможно, это естественный мой порыв. Но позволить другим право на\nошибку тоже необходимо. Лучшее, что я могу сделать, — и это легче сказать, чем\nвыполнить, — это слушать, делиться личным опытом и молиться за других людей.</p>";

				const frontmatter = {"title":"21 декабря","description":"Размышления АА на сегодня - 21 декабря","id":"356","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_21-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## СЛУШАЙ, ДЕЛИСЬ И МОЛИСЬ\n\n**Помогая алкоголику и его семье, вы ни в коем случае не должны принимать\nучастия в их ссорах. Этим вы можете лишить себя возможности помогать этим\nлюдям в дальнейшем.**\n\n**_Анонимные Алкоголики, с. 97  \nAlcoholics Anonymous, p. 100_**\n\nКогда я пытаюсь помочь товарищу-алкоголику, то частенько порываюсь давать ему\nсоветы. Возможно, это естественный мой порыв. Но позволить другим право на\nошибку тоже необходимо. Лучшее, что я могу сделать, — и это легче сказать, чем\nвыполнить, — это слушать, делиться личным опытом и молиться за других людей.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"слушай-делись-и-молись","text":"СЛУШАЙ, ДЕЛИСЬ И МОЛИСЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

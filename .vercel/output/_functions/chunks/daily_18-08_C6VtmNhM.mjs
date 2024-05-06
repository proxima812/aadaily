import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"улучшение\">УЛУЧШЕНИЕ</h2>\n<p><strong>Тревожащие нас эмоциональные конфликты прошлого погребены в подсознании\nпорой настолько глубоко, что мы забыли о них.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 92<br>\nTwelve Steps and Twelve Traditions, рp. 79-80</em></strong></p>\n<p>Только добрыми делами я могу избавиться от остатков чувства вины или стыда,\nвызванных пьянством. Во времена моих пьяных злоключений друзья не раз\nговорили: «Зачем ты это делаешь? Ты только вредишь себе». Вряд ли я тогда\nосознавал, как верны были их слова! И хотя вредил я и людям, многие мои\nпоступки оставляли глубокие раны в моей же собственной душе. Восьмой Шаг дает\nмне возможность простить самого себя. Составляя список тех, кому я причинил\nзло, я тем самым выявляю ущерб, что причинил людям. Возмещая ущерб, я\nосвобождаюсь от тяжкой ноши, и это помогает моему выздоровлению.</p>";

				const frontmatter = {"title":"18 августа","description":"Размышления АА на сегодня - 18 августа","id":"232","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_18-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## УЛУЧШЕНИЕ\n\n**Тревожащие нас эмоциональные конфликты прошлого погребены в подсознании\nпорой настолько глубоко, что мы забыли о них.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 92  \nTwelve Steps and Twelve Traditions, рp. 79-80_**\n\nТолько добрыми делами я могу избавиться от остатков чувства вины или стыда,\nвызванных пьянством. Во времена моих пьяных злоключений друзья не раз\nговорили: «Зачем ты это делаешь? Ты только вредишь себе». Вряд ли я тогда\nосознавал, как верны были их слова! И хотя вредил я и людям, многие мои\nпоступки оставляли глубокие раны в моей же собственной душе. Восьмой Шаг дает\nмне возможность простить самого себя. Составляя список тех, кому я причинил\nзло, я тем самым выявляю ущерб, что причинил людям. Возмещая ущерб, я\nосвобождаюсь от тяжкой ноши, и это помогает моему выздоровлению.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"улучшение","text":"УЛУЧШЕНИЕ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

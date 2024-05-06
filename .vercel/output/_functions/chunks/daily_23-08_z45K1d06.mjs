import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"нести-смысл-наших-идей-домой\">НЕСТИ СМЫСЛ НАШИХ ИДЕЙ ДОМОЙ</h2>\n<p><strong>Можем ли мы проявлять дух любви и терпимости в нашей расстроившейся семейной\nжизни в той мере, в какой мы проявляем его в группе АА?</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 126<br>\nTwelve Steps and Twelve Traditions, рр. 111-112</em></strong></p>\n<p>Члены моей семьи страдают от последствий моей болезни. Любить и принимать их\nтакими, какие они есть, точно так же, как я люблю и принимаю членов АА,\nспособствует возвращению в мою жизнь любви, терпимости и гармонии. Простая\nвежливость и уважение границ личности других людей — это осознанная\nнеобходимость всей моей жизни.</p>";

				const frontmatter = {"title":"23 августа","description":"Размышления АА на сегодня - 23 августа","id":"236","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_23-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## НЕСТИ СМЫСЛ НАШИХ ИДЕЙ ДОМОЙ\n\n**Можем ли мы проявлять дух любви и терпимости в нашей расстроившейся семейной\nжизни в той мере, в какой мы проявляем его в группе АА?**\n\n**_Двенадцать шагов и двенадцать традиций, с. 126  \nTwelve Steps and Twelve Traditions, рр. 111-112_**\n\nЧлены моей семьи страдают от последствий моей болезни. Любить и принимать их\nтакими, какие они есть, точно так же, как я люблю и принимаю членов АА,\nспособствует возвращению в мою жизнь любви, терпимости и гармонии. Простая\nвежливость и уважение границ личности других людей — это осознанная\nнеобходимость всей моей жизни.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"нести-смысл-наших-идей-домой","text":"НЕСТИ СМЫСЛ НАШИХ ИДЕЙ ДОМОЙ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

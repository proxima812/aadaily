import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"те-кто-все-еще-страдает\">ТЕ, КТО ВСЕ ЕЩЕ СТРАДАЕТ</h2>\n<p><strong>Для нас же, если мы не будем помогать тем, кто болен, существует постоянная\nугроза жизни и душевному здоровью.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 169<br>\nTwelve Steps and Twelve Traditions, p. 151</em></strong></p>\n<p>Я хорошо знаю эту муку неудержимого желания выпить, чтобы успокоить свои нервы\nи свои страхи. Знаю я и боль трезвости со сжатыми зубами. Я не забываю того\nнезнакомца, который тихо страдает, одиноко спрятавшись в себя в отчаянных\nпопытках найти отвратительное облегчение в спиртном. Я прошу Высшую Силу дать\nмне силы, мужество и готовность быть Ее инструментом и сострадать, и помогать\nлюдям бескорыстно. Пусть группа по-прежнему дает мне силу делать вместе с\nдругими то, что я не могу сделать один.</p>";

				const frontmatter = {"title":"25 июля","description":"Размышления АА на сегодня - 25 июля","id":"207","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_25-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## ТЕ, КТО ВСЕ ЕЩЕ СТРАДАЕТ\n\n**Для нас же, если мы не будем помогать тем, кто болен, существует постоянная\nугроза жизни и душевному здоровью.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 169  \nTwelve Steps and Twelve Traditions, p. 151_**\n\nЯ хорошо знаю эту муку неудержимого желания выпить, чтобы успокоить свои нервы\nи свои страхи. Знаю я и боль трезвости со сжатыми зубами. Я не забываю того\nнезнакомца, который тихо страдает, одиноко спрятавшись в себя в отчаянных\nпопытках найти отвратительное облегчение в спиртном. Я прошу Высшую Силу дать\nмне силы, мужество и готовность быть Ее инструментом и сострадать, и помогать\nлюдям бескорыстно. Пусть группа по-прежнему дает мне силу делать вместе с\nдругими то, что я не могу сделать один.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"те-кто-все-еще-страдает","text":"ТЕ, КТО ВСЕ ЕЩЕ СТРАДАЕТ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

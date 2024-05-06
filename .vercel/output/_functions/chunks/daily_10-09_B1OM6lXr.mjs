import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"кому-доверить-выздоровление\">КОМУ ДОВЕРИТЬ ВЫЗДОРОВЛЕНИЕ?</h2>\n<p><strong>Все это [Обещания] становятся явью, если приложить усилия.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 81<br>\nAlcoholics Anonymous, p. 84</em></strong></p>\n<p>Иногда я думаю: «Возмещать ущерб — это уж слишком! Нельзя так унижаться!» И\nтем не менее, именно смирение приближает меня к солнечному свету Духа. АА —\nмоя единственная надежда, если я хочу и дальше выздоравливать и обрести жизнь,\nнаполненную счастьем, дружбой и гармонией.</p>";

				const frontmatter = {"title":"10 сентября","description":"Размышления АА на сегодня - 10 сентября","id":"254","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_10-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## КОМУ ДОВЕРИТЬ ВЫЗДОРОВЛЕНИЕ?\n\n**Все это [Обещания] становятся явью, если приложить усилия.**\n\n**_Анонимные Алкоголики, с. 81  \nAlcoholics Anonymous, p. 84_**\n\nИногда я думаю: «Возмещать ущерб — это уж слишком! Нельзя так унижаться!» И\nтем не менее, именно смирение приближает меня к солнечному свету Духа. АА —\nмоя единственная надежда, если я хочу и дальше выздоравливать и обрести жизнь,\nнаполненную счастьем, дружбой и гармонией.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"кому-доверить-выздоровление","text":"КОМУ ДОВЕРИТЬ ВЫЗДОРОВЛЕНИЕ?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

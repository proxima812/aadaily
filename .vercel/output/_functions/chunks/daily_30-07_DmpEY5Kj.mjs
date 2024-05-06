import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"отдавать\">ОТДАВАТЬ</h2>\n<p><strong>…он нашел нечто большее, чем золото… Он еще не понимает, что затронул начало\nбогатейшей жилы, которая будет приносить ему прибыль лишь в том случае, если\nон будет копать до конца жизни и настоит на том, чтобы все добытое раздавалось\nбесплатно.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 124-125<br>\nAlcoholics Anonymous, p. 129</em></strong></p>\n<p>Мое участие в Седьмой Традиции значит намного больше, чем просто плата за\nчашку кофе. Это означает принятие себя как члена группы. Впервые я могу быть\nответственным, потому что у меня есть выбор. Включившись в «дела» АА, я могу\nпознать принципы решения проблем и в своей повседневной жизни. Обеспечивая сам\nсебя, я могу отдавать в АА то, что АА дало мне!</p>\n<p>Отдавая в АА, я гарантирую не только свою собственную трезвость, но и\nсуществование АА для моих потомков.</p>";

				const frontmatter = {"title":"30 июля","description":"Размышления АА на сегодня - 30 июля","id":"212","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_30-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОТДАВАТЬ\n\n**…он нашел нечто большее, чем золото… Он еще не понимает, что затронул начало\nбогатейшей жилы, которая будет приносить ему прибыль лишь в том случае, если\nон будет копать до конца жизни и настоит на том, чтобы все добытое раздавалось\nбесплатно.**\n\n**_Анонимные Алкоголики, с. 124-125  \nAlcoholics Anonymous, p. 129_**\n\nМое участие в Седьмой Традиции значит намного больше, чем просто плата за\nчашку кофе. Это означает принятие себя как члена группы. Впервые я могу быть\nответственным, потому что у меня есть выбор. Включившись в «дела» АА, я могу\nпознать принципы решения проблем и в своей повседневной жизни. Обеспечивая сам\nсебя, я могу отдавать в АА то, что АА дало мне!\n\nОтдавая в АА, я гарантирую не только свою собственную трезвость, но и\nсуществование АА для моих потомков.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"отдавать","text":"ОТДАВАТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

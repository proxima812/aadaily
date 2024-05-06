import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"общий-поиск\">ОБЩИЙ ПОИСК</h2>\n<p><strong>Постарайтесь понять, в чем правы верующие люди. Воспользуйтесь тем, что они\nпредлагают.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 85<br>\nAlcoholics Anonymous, p. 87</em></strong></p>\n<p>Я не претендую на то, что у меня есть ответы на все духовные вопросы, как и на\nто, что я все знаю об алкоголизме. На свете немало людей, занимающихся\nдуховными поисками. Если я непредвзято отношусь к тому, что говорят другие, то\nмогу многое приобрести. Моя трезвость значительно обогащается, и работа по\nОдиннадцатому Шагу становится более плодотворной, когда я пользуюсь\nлитературой и исполняю предписания своей религии, но многое черпаю и из других\nрелигий. Таким образом поддержку в воздержании от алкоголя я получаю из многих\nисточников.</p>";

				const frontmatter = {"title":"24 ноября","description":"Размышления АА на сегодня - 24 ноября","id":"329","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_24-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОБЩИЙ ПОИСК\n\n**Постарайтесь понять, в чем правы верующие люди. Воспользуйтесь тем, что они\nпредлагают.**\n\n**_Анонимные Алкоголики, с. 85  \nAlcoholics Anonymous, p. 87_**\n\nЯ не претендую на то, что у меня есть ответы на все духовные вопросы, как и на\nто, что я все знаю об алкоголизме. На свете немало людей, занимающихся\nдуховными поисками. Если я непредвзято отношусь к тому, что говорят другие, то\nмогу многое приобрести. Моя трезвость значительно обогащается, и работа по\nОдиннадцатому Шагу становится более плодотворной, когда я пользуюсь\nлитературой и исполняю предписания своей религии, но многое черпаю и из других\nрелигий. Таким образом поддержку в воздержании от алкоголя я получаю из многих\nисточников.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"общий-поиск","text":"ОБЩИЙ ПОИСК"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

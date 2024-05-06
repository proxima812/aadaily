import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"все-что-мы-делаем--мы-стремимся\">ВСЕ, ЧТО МЫ ДЕЛАЕМ, — МЫ СТРЕМИМСЯ</h2>\n<p><strong>Может ли Он освободить нас от всего этого?</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 73-74<br>\nAlcoholics Anonymous, p. 76</em></strong></p>\n<p>Работа по Шестому Шагу помогла мне понять, что я действительно стремлюсь к\n«духовному прогрессу». Да, некоторые из недостатков моего характера, возможно,\nи останутся со мной на всю жизнь, но большинство уже или стали менее заметны,\nили исчезли вовсе. Все, чего просит от меня Шестой Шаг, — быть готовым назвать\nнедостатки, признать их своими и пожелать устранить те, которые могу, — только\nна сегодня. По мере духовного роста в Программе я все более не приемлю\nнекоторые свои недостатки, и следовательно, мне надо повторить Шестой Шаг,\nчтобы мне стало лучше с самим собой и в душе у меня наступил покой.</p>";

				const frontmatter = {"title":"6 июня","description":"Размышления АА на сегодня - 6 июня","id":"158","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyun/daily_06-06.md";
				const url = undefined;
				function rawContent() {
					return "\n## ВСЕ, ЧТО МЫ ДЕЛАЕМ, — МЫ СТРЕМИМСЯ\n\n**Может ли Он освободить нас от всего этого?**\n\n**_Анонимные Алкоголики, с. 73-74  \nAlcoholics Anonymous, p. 76_**\n\nРабота по Шестому Шагу помогла мне понять, что я действительно стремлюсь к\n«духовному прогрессу». Да, некоторые из недостатков моего характера, возможно,\nи останутся со мной на всю жизнь, но большинство уже или стали менее заметны,\nили исчезли вовсе. Все, чего просит от меня Шестой Шаг, — быть готовым назвать\nнедостатки, признать их своими и пожелать устранить те, которые могу, — только\nна сегодня. По мере духовного роста в Программе я все более не приемлю\nнекоторые свои недостатки, и следовательно, мне надо повторить Шестой Шаг,\nчтобы мне стало лучше с самим собой и в душе у меня наступил покой.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"все-что-мы-делаем--мы-стремимся","text":"ВСЕ, ЧТО МЫ ДЕЛАЕМ, — МЫ СТРЕМИМСЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

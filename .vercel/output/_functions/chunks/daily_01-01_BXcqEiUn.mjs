import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"я--чудо\">«Я — ЧУДО»</h2>\n<p><strong>Самое главное в нашей жизни сегодня — абсолютная уверенность в том, что\nСоздатель чудодейственным образом вошел в наши сердца и жизни. Он сумел\nсовершить для нас то, что мы никогда не смогли бы сделать сами.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 24<br>\nAlcoholics Anonymous, p. 25</em></strong></p>\n<p>Сегодня это поистине факт моей жизни и настоящее чудо. Я всегда верил в Бога,\nно мне никогда не удавалось сделать так, чтобы сам смысл веры вошел в мою\nжизнь. Сегодня благодаря Анонимным Алкоголикам я верю и полагаюсь на Бога, как\nя Его понимаю. И благодаря этому я сегодня трезвый! Я не мог в одиночку\nнаучиться доверять Богу и полагаться на Него. Теперь я верю в чудеса, потому\nчто я сам — чудо!</p>";

				const frontmatter = {"title":"1 января","description":"Размышления АА на сегодня - 1 января","id":"1","datePublished":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/yanvar/daily_01-01.md";
				const url = undefined;
				function rawContent() {
					return "\n## «Я — ЧУДО»\n\n**Самое главное в нашей жизни сегодня — абсолютная уверенность в том, что\nСоздатель чудодейственным образом вошел в наши сердца и жизни. Он сумел\nсовершить для нас то, что мы никогда не смогли бы сделать сами.**\n\n**_Анонимные Алкоголики, с. 24  \nAlcoholics Anonymous, p. 25_**\n\nСегодня это поистине факт моей жизни и настоящее чудо. Я всегда верил в Бога,\nно мне никогда не удавалось сделать так, чтобы сам смысл веры вошел в мою\nжизнь. Сегодня благодаря Анонимным Алкоголикам я верю и полагаюсь на Бога, как\nя Его понимаю. И благодаря этому я сегодня трезвый! Я не мог в одиночку\nнаучиться доверять Богу и полагаться на Него. Теперь я верю в чудеса, потому\nчто я сам — чудо!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"я--чудо","text":"«Я — ЧУДО»"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

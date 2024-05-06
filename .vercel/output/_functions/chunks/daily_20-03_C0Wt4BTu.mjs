import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"любовь-и-терпимость\">ЛЮБОВЬ И ТЕРПИМОСТЬ</h2>\n<p><strong>Любовь к другим и терпимость определяют наш кодекс.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 82<br>\nAlcoholics Anonymous, p. 84</em></strong></p>\n<p>Я обнаружил, что для поддержания настоящего духовного прогресса я должен во\nвсех ситуациях прощать людей. Насущная необходимость прощения, может, и не\nочевидна на первый взгляд, но я знаю, что все великие люди, обретшие\nдуховность, твердо настаивали на этом.</p>\n<p>Я должен прощать нанесенный мне вред не просто на словах или формально, но в\nсвоем сердце. Я делаю это не ради другого человека, а ради себя. Обида, злость\nили желание видеть кого-то наказанным — вот что отравляет мою душу. Такие\nчувства цепями приковывают ко мне мои проблемы, и они же привязывают меня к\nдругим проблемам, ничего общего с моей не имеющими.</p>";

				const frontmatter = {"title":"20 марта","description":"Размышления АА на сегодня - 20 марта","id":"80","datePublished":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/mart/daily_20-03.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЛЮБОВЬ И ТЕРПИМОСТЬ\n\n**Любовь к другим и терпимость определяют наш кодекс.**\n\n**_Анонимные Алкоголики, с. 82  \nAlcoholics Anonymous, p. 84_**\n\nЯ обнаружил, что для поддержания настоящего духовного прогресса я должен во\nвсех ситуациях прощать людей. Насущная необходимость прощения, может, и не\nочевидна на первый взгляд, но я знаю, что все великие люди, обретшие\nдуховность, твердо настаивали на этом.\n\nЯ должен прощать нанесенный мне вред не просто на словах или формально, но в\nсвоем сердце. Я делаю это не ради другого человека, а ради себя. Обида, злость\nили желание видеть кого-то наказанным — вот что отравляет мою душу. Такие\nчувства цепями приковывают ко мне мои проблемы, и они же привязывают меня к\nдругим проблемам, ничего общего с моей не имеющими.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"любовь-и-терпимость","text":"ЛЮБОВЬ И ТЕРПИМОСТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

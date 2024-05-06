import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"опыт--лучший-учитель\">ОПЫТ — ЛУЧШИЙ УЧИТЕЛЬ</h2>\n<p><strong>Так как вначале мы еще неопытны, поскольку мы совсем недавно установили\nконтакт с Богом, возможно, мы не всегда будем испытывать вдохновение.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 84<br>\nAlcoholics Anonymous, p. 87</em></strong></p>\n<p>Говорят, что опыт — лучший учитель, я же уверен, что опыт — это единственный\nучитель. Я смог узнать о любви Бога ко мне, только испытав свою зависимость от\nэтой любви. Вначале я не был уверен, что Он руководит моей жизнью. Но сейчас\nвижу, что если у меня достает смелости попросить Его о руководстве, то и\nдействовать я должен так, как если бы Он уже дал мне его. Я часто прошу Бога\nпомочь мне не забывать, что это именно Он указывает мне путь.</p>";

				const frontmatter = {"title":"3 июля","description":"Размышления АА на сегодня - 3 июля","id":"185","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_03-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОПЫТ — ЛУЧШИЙ УЧИТЕЛЬ\n\n**Так как вначале мы еще неопытны, поскольку мы совсем недавно установили\nконтакт с Богом, возможно, мы не всегда будем испытывать вдохновение.**\n\n**_Анонимные Алкоголики, с. 84  \nAlcoholics Anonymous, p. 87_**\n\nГоворят, что опыт — лучший учитель, я же уверен, что опыт — это единственный\nучитель. Я смог узнать о любви Бога ко мне, только испытав свою зависимость от\nэтой любви. Вначале я не был уверен, что Он руководит моей жизнью. Но сейчас\nвижу, что если у меня достает смелости попросить Его о руководстве, то и\nдействовать я должен так, как если бы Он уже дал мне его. Я часто прошу Бога\nпомочь мне не забывать, что это именно Он указывает мне путь.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"опыт--лучший-учитель","text":"ОПЫТ — ЛУЧШИЙ УЧИТЕЛЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

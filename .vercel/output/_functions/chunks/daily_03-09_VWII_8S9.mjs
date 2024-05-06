import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"строить-новую-жизнь\">СТРОИТЬ НОВУЮ ЖИЗНЬ</h2>\n<p><strong>Мы считаем, что те, кто думают, что достаточно быть трезвыми, чтобы все\nналадилось, ошибаются.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 80<br>\nAlcoholics Anonymous, p. 82</em></strong></p>\n<p>Когда я размышляю о Девятом Шаге, то вижу, что просто оставаться трезвым мне\nмало. Надо лишь вспомнить то владевшее мной, когда я пил, ощущение\nбезнадежности и свою тогдашнюю готовность во что бы то ни стало обрести\nтрезвость. Однако для окружающих одной моей трезвости недостаточно. А потому\nмне надо постараться использовать этот Божий дар для создания новой жизни у\nмоих любимых и моей семьи. Не менее важно и то, что я должен помогать тем, кто\nхочет идти путем АА.</p>\n<p>Я прошу Бога помочь мне делиться даром трезвости, чтобы Его блага стали\nдоступны людям, которых я знаю и люблю.</p>";

				const frontmatter = {"title":"3 сентября","description":"Размышления АА на сегодня - 3 сентября","id":"247","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_03-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## СТРОИТЬ НОВУЮ ЖИЗНЬ\n\n**Мы считаем, что те, кто думают, что достаточно быть трезвыми, чтобы все\nналадилось, ошибаются.**\n\n**_Анонимные Алкоголики, с. 80  \nAlcoholics Anonymous, p. 82_**\n\nКогда я размышляю о Девятом Шаге, то вижу, что просто оставаться трезвым мне\nмало. Надо лишь вспомнить то владевшее мной, когда я пил, ощущение\nбезнадежности и свою тогдашнюю готовность во что бы то ни стало обрести\nтрезвость. Однако для окружающих одной моей трезвости недостаточно. А потому\nмне надо постараться использовать этот Божий дар для создания новой жизни у\nмоих любимых и моей семьи. Не менее важно и то, что я должен помогать тем, кто\nхочет идти путем АА.\n\nЯ прошу Бога помочь мне делиться даром трезвости, чтобы Его блага стали\nдоступны людям, которых я знаю и люблю.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"строить-новую-жизнь","text":"СТРОИТЬ НОВУЮ ЖИЗНЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

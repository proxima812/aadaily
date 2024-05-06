import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"есть-ли-у-меня-выбор\">ЕСТЬ ЛИ У МЕНЯ ВЫБОР?</h2>\n<p><strong>Дело в том, что большинство алкоголиков, по причинам пока не известным,\nтеряют возможность выбора во всем, что связано с выпивкой. Наша так называемая\nсила воли практически перестает существовать.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 23<br>\nAlcoholics Anonymous, p. 24</em></strong></p>\n<p>Когда я прекращаю пить, мое бессилие перед алкоголем не исчезает. В трезвости\nу меня по-прежнему нет выбора — я не могу пить.</p>\n<p>Возможность, которая у меня действительно <em>есть,</em> — это использовать «набор\nдухов-ных средств» (« <em>Анонимные Алкоголики</em> », с. 24). Когда я делаю это,\nВысшая Сила освобождает меня от отсутствия выбора и сохраняет трезвым <em>еще на\nодин день</em>. Если бы выбор <em>не пить</em> был за мной, то зачем мне были бы нужны АА\nи Высшая Сила?</p>";

				const frontmatter = {"title":"8 января","description":"Размышления АА на сегодня - 8 января","id":"8","datePublished":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/yanvar/daily_08-01.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЕСТЬ ЛИ У МЕНЯ ВЫБОР?\n\n**Дело в том, что большинство алкоголиков, по причинам пока не известным,\nтеряют возможность выбора во всем, что связано с выпивкой. Наша так называемая\nсила воли практически перестает существовать.**\n\n**_Анонимные Алкоголики, с. 23  \nAlcoholics Anonymous, p. 24_**\n\nКогда я прекращаю пить, мое бессилие перед алкоголем не исчезает. В трезвости\nу меня по-прежнему нет выбора — я не могу пить.\n\nВозможность, которая у меня действительно _есть,_ — это использовать «набор\nдухов-ных средств» (« _Анонимные Алкоголики_ », с. 24). Когда я делаю это,\nВысшая Сила освобождает меня от отсутствия выбора и сохраняет трезвым _еще на\nодин день_. Если бы выбор _не пить_ был за мной, то зачем мне были бы нужны АА\nи Высшая Сила?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"есть-ли-у-меня-выбор","text":"ЕСТЬ ЛИ У МЕНЯ ВЫБОР?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

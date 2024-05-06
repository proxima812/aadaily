import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"и-простить\">…И ПРОСТИТЬ</h2>\n<p><strong>В сложнейших обстоятельствах моей жизни снова и снова прощать других\nозначает прощать себя.</strong></p>\n<p><strong><em>Как это видит Билл<br>\nAs Bill Sees It, p. 268</em></strong></p>\n<p>Прощение себя и прощение других — два потока в одной реке, которым мешает, а\nто и вовсе перекрывает их, плотина, возведенная из чувства обиды. Если плотину\nубрать, оба потока возобновят свое течение. Шаги АА позволяют мне увидеть, как\nформировалось чувство обиды и как затем оно заблокировало течение моей жизни.\nШаги указывают путь, следуя которому, можно, по милости Бога, как я Его\nпонимаю, устранить это чувство. В результате этого решения я могу найти ту\nнеобходимую благодать, которая даст мне возможность простить себя и других.</p>";

				const frontmatter = {"title":"17 мая","description":"Размышления АА на сегодня - 17 мая","id":"138","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_17-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## …И ПРОСТИТЬ\n\n**В сложнейших обстоятельствах моей жизни снова и снова прощать других\nозначает прощать себя.**\n\n**_Как это видит Билл  \nAs Bill Sees It, p. 268_**\n\nПрощение себя и прощение других — два потока в одной реке, которым мешает, а\nто и вовсе перекрывает их, плотина, возведенная из чувства обиды. Если плотину\nубрать, оба потока возобновят свое течение. Шаги АА позволяют мне увидеть, как\nформировалось чувство обиды и как затем оно заблокировало течение моей жизни.\nШаги указывают путь, следуя которому, можно, по милости Бога, как я Его\nпонимаю, устранить это чувство. В результате этого решения я могу найти ту\nнеобходимую благодать, которая даст мне возможность простить себя и других.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"и-простить","text":"…И ПРОСТИТЬ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

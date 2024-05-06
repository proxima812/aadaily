import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"утренние-мысли\">УТРЕННИЕ МЫСЛИ</h2>\n<p><strong>Спрашивайте Его во время вашего углубленного утреннего размышления, что вы\nможете сделать для тех, кто еще болен.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 160<br>\nAlcoholics Anonymous, p. 164</em></strong></p>\n<p>Многие годы я размышлял о Божьей воле в отношении меня, веря в то, что мне,\nвозможно, уготована великая судьба. В конце концов, я родился в определенной\nвере, и разве не сказали мне еще в раннем детстве, что я «избран»? Когда я\nразмышлял об этом слове, до меня <em>наконец</em> дошло, что воля Божья, которую мне\nнадлежит исполнить, проста и заключается в моей ежедневной работе по\nДвенадцатому Шагу. Более того, я осо-знал, что делать это нужно полной мерой\nмоих сил и способностей. Вскоре я узнал, что такая практика помогает мне быть\nв гуще всех событий дня.</p>";

				const frontmatter = {"title":"12 ноября","description":"Размышления АА на сегодня - 12 ноября","id":"317","datePublished":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/noyabr/daily_12-11.md";
				const url = undefined;
				function rawContent() {
					return "\n## УТРЕННИЕ МЫСЛИ\n\n**Спрашивайте Его во время вашего углубленного утреннего размышления, что вы\nможете сделать для тех, кто еще болен.**\n\n**_Анонимные Алкоголики, с. 160  \nAlcoholics Anonymous, p. 164_**\n\nМногие годы я размышлял о Божьей воле в отношении меня, веря в то, что мне,\nвозможно, уготована великая судьба. В конце концов, я родился в определенной\nвере, и разве не сказали мне еще в раннем детстве, что я «избран»? Когда я\nразмышлял об этом слове, до меня _наконец_ дошло, что воля Божья, которую мне\nнадлежит исполнить, проста и заключается в моей ежедневной работе по\nДвенадцатому Шагу. Более того, я осо-знал, что делать это нужно полной мерой\nмоих сил и способностей. Вскоре я узнал, что такая практика помогает мне быть\nв гуще всех событий дня.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"утренние-мысли","text":"УТРЕННИЕ МЫСЛИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

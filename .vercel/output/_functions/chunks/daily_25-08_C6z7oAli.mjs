import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"дар-связи-с-другими-людьми\">ДАР СВЯЗИ С ДРУГИМИ ЛЮДЬМИ</h2>\n<p><em>Освободи меня от пут себялюбия, чтобы я лучше мог выполнять Твою волю.</em></p>\n<p><em>Анонимные Алкоголики, с. 61<br>\nAlcoholics Anonymous, p. 63</em></p>\n<p>Во времена моего пьянства я не единожды пил, чтобы установить связь с другими\nлюдьми, но преуспел лишь в обретении оков рабства алкогольного одиночества. В\nАА я получил дар связи с теми, кто был там до меня, с теми, кто там сейчас, и\nс теми, кто еще придет. Я несказанно благодарен Богу за этот Его добрый дар.</p>";

				const frontmatter = {"title":"25 августа","description":"Размышления АА на сегодня - 25 августа","id":"238","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_25-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ДАР СВЯЗИ С ДРУГИМИ ЛЮДЬМИ\n\n_Освободи меня от пут себялюбия, чтобы я лучше мог выполнять Твою волю._\n\n_Анонимные Алкоголики, с. 61  \nAlcoholics Anonymous, p. 63_\n\nВо времена моего пьянства я не единожды пил, чтобы установить связь с другими\nлюдьми, но преуспел лишь в обретении оков рабства алкогольного одиночества. В\nАА я получил дар связи с теми, кто был там до меня, с теми, кто там сейчас, и\nс теми, кто еще придет. Я несказанно благодарен Богу за этот Его добрый дар.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"дар-связи-с-другими-людьми","text":"ДАР СВЯЗИ С ДРУГИМИ ЛЮДЬМИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

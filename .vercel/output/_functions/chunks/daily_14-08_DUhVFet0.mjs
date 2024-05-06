import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"исправляем-дефекты\">ИСПРАВЛЯЕМ ДЕФЕКТЫ</h2>\n<p><strong>Нам следует попытаться убрать с нашего жизненного пути всю рухлядь, которая\nнакопилась из-за нашего желания руководствоваться только своей волей и\nстараться затмить остальных. Если мы не хотим делать этого, мы просим Бога,\nчтобы к нам пришло такое желание. Помните, что с самого начала мы решили быть\nготовыми на любые жертвы, чтобы победить алкоголь.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 74-75<br>\nAlcoholics Anonymous, pp. 72-73</em></strong></p>\n<p>Составить список людей, которым я причинил зло, не составило большого труда.\nОни уже фигурировали в моей инвентаризации в Четвертом Шаге: люди, на которых\nя был в обиде, реальной или воображаемой, а также те, которым я причинил\nстрадания как бы в отместку. Чтобы мое выздоровление было основательным,\nабсолютно не существенно, чтобы навредившие мне люди загладили свою вину\nпередо мной. В моих отношениях с Богом важно только то, что я стою перед Ним,\nзная, что сделал все возможное, чтобы исправить вред, который причинил я.</p>";

				const frontmatter = {"title":"14 августа","description":"Размышления АА на сегодня - 14 августа","id":"228","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_14-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ИСПРАВЛЯЕМ ДЕФЕКТЫ\n\n**Нам следует попытаться убрать с нашего жизненного пути всю рухлядь, которая\nнакопилась из-за нашего желания руководствоваться только своей волей и\nстараться затмить остальных. Если мы не хотим делать этого, мы просим Бога,\nчтобы к нам пришло такое желание. Помните, что с самого начала мы решили быть\nготовыми на любые жертвы, чтобы победить алкоголь.**\n\n**_Анонимные Алкоголики, с. 74-75  \nAlcoholics Anonymous, pp. 72-73_**\n\nСоставить список людей, которым я причинил зло, не составило большого труда.\nОни уже фигурировали в моей инвентаризации в Четвертом Шаге: люди, на которых\nя был в обиде, реальной или воображаемой, а также те, которым я причинил\nстрадания как бы в отместку. Чтобы мое выздоровление было основательным,\nабсолютно не существенно, чтобы навредившие мне люди загладили свою вину\nпередо мной. В моих отношениях с Богом важно только то, что я стою перед Ним,\nзная, что сделал все возможное, чтобы исправить вред, который причинил я.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"исправляем-дефекты","text":"ИСПРАВЛЯЕМ ДЕФЕКТЫ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
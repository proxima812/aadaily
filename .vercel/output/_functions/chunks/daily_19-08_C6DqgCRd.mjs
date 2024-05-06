import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"точка-зрения\">ТОЧКА ЗРЕНИЯ</h2>\n<p><strong>Вернемся к нашему списку. Выбросив из головы мысли о зле, которое нам\nпричинили другие, мы с решимостью принялись искать наши собственные ошибки. В\nкаких случаях мы проявляли эгоизм, были бесчестными, себялюбивыми,\nпреследовали свои корыстные интересы, трусили?</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 65-66<br>\nAlcoholics Anonymous, p. 67</em></strong></p>\n<p>Чудесная свобода есть в том, что я больше не нуждаюсь в постоянном одобрении\nсвоих коллег или людей, которых люблю! Жаль, что я не знала об этом Шаге\nраньше: только выработав определенную точку зрения, я почувствовала себя\nспособной в дальнейшем в очередной раз поступить правильно, зная, что этот\nпоступок соответствует ситуации и является единственно верным.</p>";

				const frontmatter = {"title":"19 августа","description":"Размышления АА на сегодня - 19 августа","id":"214","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_19-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ТОЧКА ЗРЕНИЯ\n\n**Вернемся к нашему списку. Выбросив из головы мысли о зле, которое нам\nпричинили другие, мы с решимостью принялись искать наши собственные ошибки. В\nкаких случаях мы проявляли эгоизм, были бесчестными, себялюбивыми,\nпреследовали свои корыстные интересы, трусили?**\n\n**_Анонимные Алкоголики, с. 65-66  \nAlcoholics Anonymous, p. 67_**\n\nЧудесная свобода есть в том, что я больше не нуждаюсь в постоянном одобрении\nсвоих коллег или людей, которых люблю! Жаль, что я не знала об этом Шаге\nраньше: только выработав определенную точку зрения, я почувствовала себя\nспособной в дальнейшем в очередной раз поступить правильно, зная, что этот\nпоступок соответствует ситуации и является единственно верным.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"точка-зрения","text":"ТОЧКА ЗРЕНИЯ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

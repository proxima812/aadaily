import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"круг-и-треугольник\">КРУГ И ТРЕУГОЛЬНИК</h2>\n<p><strong>Круг символизирует весь мир АА, а треугольник — три Принципа АА:\nВыздоровление, Единство, Служение. В нашем новом чудесном мире мы обрели\nсвободу от смертельной одержимости.</strong></p>\n<p><strong><em>АА взрослеет<br>\nAA Comes of Age, p. 139</em></strong></p>\n<p>В начале своего пребывания в АА я стал заниматься служением и нашел для себя\nобъяснение нашего символа. Во-первых, это круг любви и служения с\nравносторонним треугольником внутри, основание которого представляет собой\nнаше Выздоровление по Двенадцати Шагам. Две другие стороны означают,\nсоответственно, Единство и Служение. Все три стороны треугольника равны. По\nмере моего духовного роста в АА я отождествлял себя с этим символом. Я — круг,\nа стороны треугольника представляют собой три аспекта моей личности:\nфизический, эмоциональный, духовный. Последний является основанием символа.\nВсе вместе эти три аспекта и составляют мою трезвую и счастливую жизнь.</p>";

				const frontmatter = {"title":"30 сентября","description":"Размышления АА на сегодня - 30 сентября","id":"274","datePublished":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/sentyabr/daily_30-09.md";
				const url = undefined;
				function rawContent() {
					return "\n## КРУГ И ТРЕУГОЛЬНИК\n\n**Круг символизирует весь мир АА, а треугольник — три Принципа АА:\nВыздоровление, Единство, Служение. В нашем новом чудесном мире мы обрели\nсвободу от смертельной одержимости.**\n\n**_АА взрослеет  \nAA Comes of Age, p. 139_**\n\nВ начале своего пребывания в АА я стал заниматься служением и нашел для себя\nобъяснение нашего символа. Во-первых, это круг любви и служения с\nравносторонним треугольником внутри, основание которого представляет собой\nнаше Выздоровление по Двенадцати Шагам. Две другие стороны означают,\nсоответственно, Единство и Служение. Все три стороны треугольника равны. По\nмере моего духовного роста в АА я отождествлял себя с этим символом. Я — круг,\nа стороны треугольника представляют собой три аспекта моей личности:\nфизический, эмоциональный, духовный. Последний является основанием символа.\nВсе вместе эти три аспекта и составляют мою трезвую и счастливую жизнь.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"круг-и-треугольник","text":"КРУГ И ТРЕУГОЛЬНИК"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

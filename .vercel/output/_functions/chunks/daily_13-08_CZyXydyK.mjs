import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"тщательная-уборка\">ТЩАТЕЛЬНАЯ УБОРКА</h2>\n<p><strong>И, наконец, расчистив руины нашей прошлой деятельности, мы можем,\nруководствуясь вновь обретенным знанием о себе, начать строить нормальные\nвзаимоотношения со всеми людьми, которых мы знаем.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 89<br>\nTwelve Steps and Twelve Traditions, p. 77</em></strong></p>\n<p>Когда я приблизилась к Восьмому Шагу, то увидела, что все, что требовалось для\nуспешной работы по предыдущим Семи Шагам, здесь сошлось вместе: мужество,\nчестность, искренность, готовность и обстоятельность. Вначале у меня недостало\nсил справиться с этой задачей. Вот почему в этом Шаге говорится:\n«Преисполнились желанием…» Мне надо выработать в себе мужество — чтобы начать,\nчестность — чтобы видеть, в чем я не права, искреннее желание — чтобы\nрасставить все по своим местам, обстоятельность — при подготовке списка, и\nготовность — чтобы взять на себя труд, необходимый для истинного смирения. С\nпомощью своей Высшей Силы я выработала в себе эти качества. И это позволило\nмне завершить этот Шаг и продолжить движение вперед в стремлении к духовному\nросту.</p>";

				const frontmatter = {"title":"13 августа","description":"Размышления АА на сегодня - 13 августа","id":"227","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_13-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ТЩАТЕЛЬНАЯ УБОРКА\n\n**И, наконец, расчистив руины нашей прошлой деятельности, мы можем,\nруководствуясь вновь обретенным знанием о себе, начать строить нормальные\nвзаимоотношения со всеми людьми, которых мы знаем.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 89  \nTwelve Steps and Twelve Traditions, p. 77_**\n\nКогда я приблизилась к Восьмому Шагу, то увидела, что все, что требовалось для\nуспешной работы по предыдущим Семи Шагам, здесь сошлось вместе: мужество,\nчестность, искренность, готовность и обстоятельность. Вначале у меня недостало\nсил справиться с этой задачей. Вот почему в этом Шаге говорится:\n«Преисполнились желанием…» Мне надо выработать в себе мужество — чтобы начать,\nчестность — чтобы видеть, в чем я не права, искреннее желание — чтобы\nрасставить все по своим местам, обстоятельность — при подготовке списка, и\nготовность — чтобы взять на себя труд, необходимый для истинного смирения. С\nпомощью своей Высшей Силы я выработала в себе эти качества. И это позволило\nмне завершить этот Шаг и продолжить движение вперед в стремлении к духовному\nросту.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"тщательная-уборка","text":"ТЩАТЕЛЬНАЯ УБОРКА"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
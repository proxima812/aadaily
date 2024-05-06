import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"перешагнуть-через-страх\">ПЕРЕШАГНУТЬ ЧЕРЕЗ СТРАХ</h2>\n<p><strong>Если мы все еще не хотим освободиться от всего плохого в нас, то мы просим\nБога помочь нам обрести это желание.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 74<br>\nAlcoholics Anonymous, p. 76</em></strong></p>\n<p>В процессе работы по Пятому Шагу я осознал, что все дефекты моего характера\nпроистекают из потребности ощущать безопасность и быть любимым. Работать над\nэтими дефектами с помощью только моей воли было бы не более чем безумием. В\nШестом Шаге я стал наращивать усилия. В частности, медитировал, постоянно\nповторял содержание Шага, посещал собрания, следовал советам наставника,\nчитал, искал внутри себя.</p>\n<p>В течение первых трех лет трезвости я боялся войти в лифт один. Однажды я\nрешил перешагнуть через этот страх. Я попросил у Бога помощи и вошел в лифт,\nгде увидел плачущую женщину. Она сказала, что с тех пор как похоронила мужа,\nсмертельно боится лифтов. Я позабыл о своем страхе и стал ее успокаивать. Этот\nдуховный опыт помог мне понять, что готовность — это ключ к работе по\nДвенадцати Шагам для моего выздоровления. Бог помогает тем, кто и сам не сидит\nсложа руки.</p>";

				const frontmatter = {"title":"9 мая","description":"Размышления АА на сегодня - 9 мая","id":"130","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_09-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПЕРЕШАГНУТЬ ЧЕРЕЗ СТРАХ\n\n**Если мы все еще не хотим освободиться от всего плохого в нас, то мы просим\nБога помочь нам обрести это желание.**\n\n**_Анонимные Алкоголики, с. 74  \nAlcoholics Anonymous, p. 76_**\n\nВ процессе работы по Пятому Шагу я осознал, что все дефекты моего характера\nпроистекают из потребности ощущать безопасность и быть любимым. Работать над\nэтими дефектами с помощью только моей воли было бы не более чем безумием. В\nШестом Шаге я стал наращивать усилия. В частности, медитировал, постоянно\nповторял содержание Шага, посещал собрания, следовал советам наставника,\nчитал, искал внутри себя.\n\nВ течение первых трех лет трезвости я боялся войти в лифт один. Однажды я\nрешил перешагнуть через этот страх. Я попросил у Бога помощи и вошел в лифт,\nгде увидел плачущую женщину. Она сказала, что с тех пор как похоронила мужа,\nсмертельно боится лифтов. Я позабыл о своем страхе и стал ее успокаивать. Этот\nдуховный опыт помог мне понять, что готовность — это ключ к работе по\nДвенадцати Шагам для моего выздоровления. Бог помогает тем, кто и сам не сидит\nсложа руки.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"перешагнуть-через-страх","text":"ПЕРЕШАГНУТЬ ЧЕРЕЗ СТРАХ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

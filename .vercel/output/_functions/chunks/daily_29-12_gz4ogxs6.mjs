import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"радость-жизни\">РАДОСТЬ ЖИЗНИ</h2>\n<p><strong>…поэтому радость жизни является темой Двенадцатого Шага АА.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 141<br>\nTwelve Steps and Twelve Traditions, p. 125</em></strong></p>\n<p>АА — это радостная Программа! И все же порой, когда для продвижения вперед\nнадо предпринять что-то, я «торможу» и противлюсь действиям, способным\nпринести мне желанную радость. Я бы, вероятно, не сопротивлялся, если бы эти\nдействия не затрагивали наиболее уязвимые стороны моей жизни, а именно те, где\nболее всего нужны надежда и смирение. Позволить себе радоваться жизни — вот\nпуть смягчения жестких граней моего «я». В этом и заключается сила радости,\nпомогающая всем членам АА.</p>";

				const frontmatter = {"title":"29 декабря","description":"Размышления АА на сегодня - 29 декабря","id":"364","datePublished":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/dekabr/daily_29-12.md";
				const url = undefined;
				function rawContent() {
					return "\n## РАДОСТЬ ЖИЗНИ\n\n**…поэтому радость жизни является темой Двенадцатого Шага АА.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 141  \nTwelve Steps and Twelve Traditions, p. 125_**\n\nАА — это радостная Программа! И все же порой, когда для продвижения вперед\nнадо предпринять что-то, я «торможу» и противлюсь действиям, способным\nпринести мне желанную радость. Я бы, вероятно, не сопротивлялся, если бы эти\nдействия не затрагивали наиболее уязвимые стороны моей жизни, а именно те, где\nболее всего нужны надежда и смирение. Позволить себе радоваться жизни — вот\nпуть смягчения жестких граней моего «я». В этом и заключается сила радости,\nпомогающая всем членам АА.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"радость-жизни","text":"РАДОСТЬ ЖИЗНИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

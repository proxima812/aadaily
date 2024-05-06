import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"первый-шаг\">ПЕРВЫЙ ШАГ</h2>\n<p><strong>Мы… (Первое слово Первого Шага)</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 26<br>\nTwelve Steps and Twelve Traditions, p. 21</em></strong></p>\n<p>Когда я пил, то думать мог только: «Я, я, я» или «Мне, мне, мне». Такая\nболезненная, одержимая сосредоточенность на себе, такая душевная болезнь,\nтакой душевный эгоизм более половины жизни привязывали меня к бутылке.</p>\n<p>Поиски Бога и путей исполнения Его воли день за днем начались с первого слова\nПервого Шага «МЫ». В этом «МЫ» заключена власть, заключена сила, в нем есть\nбезопасность, и для такого алкоголика, как я, — в этом «МЫ» заключена жизнь.\nЕсли бы я попробовал выздороветь в одиночку, то, вероятно, умер бы. С Богом и\nдругим алкоголиком у меня есть святая цель в жизни… Я стал проводником\nисцеляющей любви Бога.</p>";

				const frontmatter = {"title":"22 мая","description":"Размышления АА на сегодня - 22 мая","id":"143","datePublished":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/maj/daily_22-05.md";
				const url = undefined;
				function rawContent() {
					return "\n## ПЕРВЫЙ ШАГ\n\n**Мы… (Первое слово Первого Шага)**\n\n**_Двенадцать шагов и двенадцать традиций, с. 26  \nTwelve Steps and Twelve Traditions, p. 21_**\n\nКогда я пил, то думать мог только: «Я, я, я» или «Мне, мне, мне». Такая\nболезненная, одержимая сосредоточенность на себе, такая душевная болезнь,\nтакой душевный эгоизм более половины жизни привязывали меня к бутылке.\n\nПоиски Бога и путей исполнения Его воли день за днем начались с первого слова\nПервого Шага «МЫ». В этом «МЫ» заключена власть, заключена сила, в нем есть\nбезопасность, и для такого алкоголика, как я, — в этом «МЫ» заключена жизнь.\nЕсли бы я попробовал выздороветь в одиночку, то, вероятно, умер бы. С Богом и\nдругим алкоголиком у меня есть святая цель в жизни… Я стал проводником\nисцеляющей любви Бога.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"первый-шаг","text":"ПЕРВЫЙ ШАГ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

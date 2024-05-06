import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"самоанализ\">САМОАНАЛИЗ</h2>\n<p><strong>…мы просим Бога направить наши помыслы в верное русло, уберечь нас от\nжалости к себе, бесчестных поступков, корыстолюбия.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 84<br>\nAlcoholics Anonymous, p. 86</em></strong></p>\n<p>Произнесенная искренне, эта молитва учит меня быть по-настоящему бескорыстным\nи смиренным, потому что, даже делая добрые дела, я, бывало, искал одобрения и\nславы для себя.</p>\n<p>Исследуя мотивы всех своих поступков, я могу служить Богу и людям, помогая им\nв их намерениях. Если я отдаю Богу руководство моими мыслями, то отпадает\nмасса ненужных забот, и я верю, что Он ведет меня на протяжении дня. Если\nсразу при появлении у меня мыслей о саможалости, нечестности и эгоизме я\nизбавляюсь от них, то живу в мире с Богом, с ближним и с самим собой.</p>";

				const frontmatter = {"title":"20 апреля","description":"Размышления АА на сегодня - 20 апреля","id":"111","datePublished":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/april/daily_20-04.md";
				const url = undefined;
				function rawContent() {
					return "\n## САМОАНАЛИЗ\n\n**…мы просим Бога направить наши помыслы в верное русло, уберечь нас от\nжалости к себе, бесчестных поступков, корыстолюбия.**\n\n**_Анонимные Алкоголики, с. 84  \nAlcoholics Anonymous, p. 86_**\n\nПроизнесенная искренне, эта молитва учит меня быть по-настоящему бескорыстным\nи смиренным, потому что, даже делая добрые дела, я, бывало, искал одобрения и\nславы для себя.\n\nИсследуя мотивы всех своих поступков, я могу служить Богу и людям, помогая им\nв их намерениях. Если я отдаю Богу руководство моими мыслями, то отпадает\nмасса ненужных забот, и я верю, что Он ведет меня на протяжении дня. Если\nсразу при появлении у меня мыслей о саможалости, нечестности и эгоизме я\nизбавляюсь от них, то живу в мире с Богом, с ближним и с самим собой.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"самоанализ","text":"САМОАНАЛИЗ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"отказаться-от-главной-роли\">ОТКАЗАТЬСЯ ОТ ГЛАВНОЙ РОЛИ</h2>\n<p><strong>…ибо без определенной степени смирения ни один алкоголик не может оставаться\nтрезвым… Без него они не смогут поставить перед собой какую-либо полезную\nцель, а в трудные моменты жизни опереться на веру, чтобы устоять перед\nиспытаниями.</strong></p>\n<p><strong><em>Двенадцать шагов и двенадцать традиций, с. 81<br>\nTwelve Steps and Twelve Traditions, p. 72</em></strong></p>\n<p>Почему я противлюсь слову «смирение»? Я смиряюсь не перед другими людьми, а\nперед Богом, как я понимаю Его. Смирение означает проявление «покорного\nуважения», и, будучи смиренным, я осознаю, что я не центр Вселенной. Пока я\nпил, то всецело был во власти гордыни и эгоцентризма, считая, что мир\nвращается вокруг меня и что я хозяин своей судьбы. Смирение позволяет мне\nбольше полагаться на Бога в преодолении жизненных преград и в избавлении от\nнедостатков — чтобы я мог духовно расти. Для повышения своего\nпрофессионального уровня я должен решать все более сложные проблемы, а когда\nна моем пути возникают препятствия — учиться преодолевать их с Божьей помощью.\nЕжедневное общение с Богом подтверждает мое смирение и позволяет мне осознать,\nчто Некто более могущественный, чем я, готов помочь мне, если я перестану\nмнить себя Богом.</p>";

				const frontmatter = {"title":"12 июля","description":"Размышления АА на сегодня - 12 июля","id":"194","datePublished":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/iyul/daily_12-07.md";
				const url = undefined;
				function rawContent() {
					return "\n## ОТКАЗАТЬСЯ ОТ ГЛАВНОЙ РОЛИ\n\n**…ибо без определенной степени смирения ни один алкоголик не может оставаться\nтрезвым… Без него они не смогут поставить перед собой какую-либо полезную\nцель, а в трудные моменты жизни опереться на веру, чтобы устоять перед\nиспытаниями.**\n\n**_Двенадцать шагов и двенадцать традиций, с. 81  \nTwelve Steps and Twelve Traditions, p. 72_**\n\nПочему я противлюсь слову «смирение»? Я смиряюсь не перед другими людьми, а\nперед Богом, как я понимаю Его. Смирение означает проявление «покорного\nуважения», и, будучи смиренным, я осознаю, что я не центр Вселенной. Пока я\nпил, то всецело был во власти гордыни и эгоцентризма, считая, что мир\nвращается вокруг меня и что я хозяин своей судьбы. Смирение позволяет мне\nбольше полагаться на Бога в преодолении жизненных преград и в избавлении от\nнедостатков — чтобы я мог духовно расти. Для повышения своего\nпрофессионального уровня я должен решать все более сложные проблемы, а когда\nна моем пути возникают препятствия — учиться преодолевать их с Божьей помощью.\nЕжедневное общение с Богом подтверждает мое смирение и позволяет мне осознать,\nчто Некто более могущественный, чем я, готов помочь мне, если я перестану\nмнить себя Богом.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"отказаться-от-главной-роли","text":"ОТКАЗАТЬСЯ ОТ ГЛАВНОЙ РОЛИ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
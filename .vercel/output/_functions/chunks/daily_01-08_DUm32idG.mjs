import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"жить-этим\">ЖИТЬ ЭТИМ</h2>\n<p><em><strong>Духовная жизнь — это не теория</strong></em> <strong>. Нужно жить духовной жизнью.</strong></p>\n<p><strong><em>Анонимные Алкоголики, с. 80<br>\nAlcoholics Anonymous, p. 83</em></strong></p>\n<p>Новичком в Программе я не мог до конца понять, что означает жить в\nсоответствии с духовной стороной Программы. Но сейчас, трезвый, я не\nпредставляю себе жизни без нее. Я искал духовность. Бог, как я Его понимаю,\nдал мне наконец ответы на вопросы, — вопросы, заставлявшие меня пить в течение\nдвадцати лет. Живя духовной жизнью, прося у Бога помощи, я научился любить,\nзаботиться о своих товарищах, сострадать им и испытывать радость в мире, где\nраньше я испытывал только страх.</p>";

				const frontmatter = {"title":"1 августа","description":"Размышления АА на сегодня - 1 августа","id":"215","datePublished":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-aa/src/content/diaries/avgust/daily_01-08.md";
				const url = undefined;
				function rawContent() {
					return "\n## ЖИТЬ ЭТИМ\n\n_**Духовная жизнь — это не теория**_ **. Нужно жить духовной жизнью.**\n\n**_Анонимные Алкоголики, с. 80  \nAlcoholics Anonymous, p. 83_**\n\nНовичком в Программе я не мог до конца понять, что означает жить в\nсоответствии с духовной стороной Программы. Но сейчас, трезвый, я не\nпредставляю себе жизни без нее. Я искал духовность. Бог, как я Его понимаю,\nдал мне наконец ответы на вопросы, — вопросы, заставлявшие меня пить в течение\nдвадцати лет. Живя духовной жизнью, прося у Бога помощи, я научился любить,\nзаботиться о своих товарищах, сострадать им и испытывать радость в мире, где\nраньше я испытывал только страх.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"жить-этим","text":"ЖИТЬ ЭТИМ"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

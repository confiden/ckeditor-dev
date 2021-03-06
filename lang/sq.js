/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @fileOverview
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'sq' ] = {
	// ARIA description.
	editor: 'Redaktues i Pasur Teksti',
	editorPanel: 'Paneli i redaktuesit të tekstit të plotë',

	// Common messages and labels.
	common: {
		// Screenreader titles. Please note that screenreaders are not always capable
		// of reading non-English words. So be careful while translating it.
		editorHelp: 'Shtyp ALT 0 për ndihmë',

		browseServer: 'Shfleto në Server',
		url: 'URL',
		protocol: 'Protokolli',
		upload: 'Ngarko',
		uploadSubmit: 'Dërgo në server',
		image: 'Imazh',
		flash: 'Objekt flash',
		form: 'Formular',
		checkbox: 'Checkbox',
		radio: 'Buton radio',
		textField: 'Fushë tekst',
		textarea: 'Hapësirë tekst',
		hiddenField: 'Fushë e fshehur',
		button: 'Buton',
		select: 'Menu zgjedhjeje',
		imageButton: 'Buton imazhi',
		notSet: '<e pazgjedhur>',
		id: 'Id',
		name: 'Emër',
		langDir: 'Kod gjuhe',
		langDirLtr: 'Nga e majta në të djathtë (LTR)',
		langDirRtl: 'Nga e djathta në të majtë (RTL)',
		langCode: 'Kod gjuhe',
		longDescr: 'Përshkrim i hollësishëm',
		cssClass: 'Klasa stili CSS',
		advisoryTitle: 'Titull',
		cssStyle: 'Stil',
		ok: 'OK',
		cancel: 'Anulo',
		close: 'Mbyll',
		preview: 'Parashiko',
		resize: 'Ripërmaso',
		generalTab: 'Të përgjithshme',
		advancedTab: 'Të përparuara',
		validateNumberFailed: 'Vlera e futur nuk është një numër',
		confirmNewPage: 'Çdo ndryshim që nuk është ruajtur do humbasë. Je i sigurtë që dëshiron të krijosh një faqe të re?',
		confirmCancel: 'Disa opsione kanë ndryshuar. Je i sigurtë që dëshiron ta mbyllësh dritaren?',
		options: 'Opsione',
		target: 'Objektivi',
		targetNew: 'Dritare e re (_blank)',
		targetTop: 'Dritare në plan të parë (_top)',
		targetSelf: 'E njëjta dritare (_self)',
		targetParent: 'Dritarja prind (_parent)',
		langDirLTR: 'Nga e majta në të djathë (LTR)',
		langDirRTL: 'Nga e djathta në të majtë (RTL)',
		styles: 'Stil',
		cssClasses: 'Klasa Stili CSS',
		width: 'Gjerësi',
		height: 'Lartësi',
		align: 'Rreshtim',
		alignLeft: 'Majtas',
		alignRight: 'Djathtas',
		alignCenter: 'Qendër',
		alignJustify: 'Zgjero',
		alignTop: 'Lart',
		alignMiddle: 'Në mes',
		alignBottom: 'Poshtë',
		alignNone: 'Asnjë',
		invalidValue: 'Vlerë e pavlefshme',
		invalidHeight: 'Lartësia duhet të jetë një numër',
		invalidWidth: 'Gjerësia duhet të jetë një numër',
		invalidLength: 'Value specified for the "%1" field must be a positive number with or without a valid measurement unit (%2).', // MISSING
		invalidCssLength: 'Vlera e fushës "%1" duhet të jetë një numër pozitiv me apo pa njësi matëse të vlefshme CSS (px, %, in, cm, mm, em, ex, pt ose pc).',
		invalidHtmlLength: 'Vlera e fushës "%1" duhet të jetë një numër pozitiv me apo pa njësi matëse të vlefshme HTML (px ose %)',
		invalidInlineStyle: 'Stili inline duhet të jetë një apo disa vlera të formatit "emër: vlerë", ndarë nga pikëpresje.',
		cssLengthTooltip: 'Fut një numër për vlerën në pixel apo një numër me një njësi të vlefshme CSS (px, %, in, cm, mm, ex, pt, ose pc).',

		// Put the voice-only part of the label in the span.
		unavailable: '%1<span class="cke_accessibility">, i padisponueshëm</span>',

		// Keyboard keys translations used for creating shortcuts descriptions in tooltips, context menus and ARIA labels.
		keyboard: {
			8: 'Prapa',
			13: 'Enter',
			16: 'Shift',
			17: 'Ctrl',
			18: 'Alt',
			32: 'Space', // MISSING
			35: 'End',
			36: 'Home',
			46: 'Grise',
			112: 'F1', // MISSING
			113: 'F2', // MISSING
			114: 'F3', // MISSING
			115: 'F4', // MISSING
			116: 'F5', // MISSING
			117: 'F6', // MISSING
			118: 'F7', // MISSING
			119: 'F8', // MISSING
			120: 'F9', // MISSING
			121: 'F10', // MISSING
			122: 'F11', // MISSING
			123: 'F12', // MISSING
			124: 'F13', // MISSING
			125: 'F14', // MISSING
			126: 'F15', // MISSING
			127: 'F16', // MISSING
			128: 'F17', // MISSING
			129: 'F18', // MISSING
			130: 'F19', // MISSING
			131: 'F20', // MISSING
			132: 'F21', // MISSING
			133: 'F22', // MISSING
			134: 'F23', // MISSING
			135: 'F24', // MISSING
			224: 'Command' // MISSING
		},

		// Prepended to ARIA labels with shortcuts.
		keyboardShortcut: 'Keyboard shortcut', // MISSING

		optionDefault: 'Default' // MISSING
	}
};

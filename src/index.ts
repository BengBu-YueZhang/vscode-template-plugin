import * as vscode from 'vscode';
import {
	getTpl,
	insertTpl,
} from './util';

export function activate(context: vscode.ExtensionContext) {

	const JSandVue2 = vscode.commands.registerCommand('quickstart.JSandVue2', (url) => {
		// const tpl = getTpl('JSandVue2');
		// insertTpl(tpl);
	});
	const JSandVue2andClass = vscode.commands.registerCommand('quickstart.JSandVue2andClass', () => {
		// const tpl = getTpl('JSandVue2andClass');
		// insertTpl(tpl);
	});
	const TSandVue2 = vscode.commands.registerCommand('quickstart.TSandVue2', () => {
		// const tpl = getTpl('TSandVue2');
		// insertTpl(tpl);
	});
	const JSandReact = vscode.commands.registerCommand('quickstart.JSandReact', () => {
		// const tpl = getTpl('JSandReact');
		// insertTpl(tpl);
	});
	const JSandReactandClass = vscode.commands.registerCommand('quickstart.JSandReactandClass', () => {
		// const tpl = getTpl('JSandReactandClass');
		// insertTpl(tpl);
	});
	const TSandReact = vscode.commands.registerCommand('quickstart.TSandReact', () => {
		// const tpl = getTpl('TSandReact');
		// insertTpl(tpl);
	});
	const TSandReactandClass = vscode.commands.registerCommand('quickstart.TSandReactandClass', () => {
		// const tpl = getTpl('TSandReactandClass');
		// insertTpl(tpl);
	});
	const TSandVue3 = vscode.commands.registerCommand('quickstart.TSandVue3', () => {
		// const tpl = getTpl('TSandVue3');
		// insertTpl(tpl);
	});

	context.subscriptions.push(JSandVue2);
	context.subscriptions.push(JSandVue2andClass);
	context.subscriptions.push(TSandVue2);
	context.subscriptions.push(JSandReact);
	context.subscriptions.push(JSandReactandClass);
	context.subscriptions.push(TSandReact);
	context.subscriptions.push(TSandReactandClass);
	context.subscriptions.push(TSandVue3);
}

export function deactivate() {}

import * as vscode from 'vscode';
import {
	insertTpl,
} from './util';

export function activate(context: vscode.ExtensionContext) {

	const JSandVue2 = vscode.commands.registerCommand('quickstart.JSandVue2', (url) => {
		insertTpl('JSandVue2');
	});
	const JSandVue2andClass = vscode.commands.registerCommand('quickstart.JSandVue2andClass', () => {
		insertTpl('JSandVue2andClass');
	});
	const TSandVue2 = vscode.commands.registerCommand('quickstart.TSandVue2', () => {
		insertTpl('TSandVue2');
	});
	const JSandReact = vscode.commands.registerCommand('quickstart.JSandReact', () => {
		insertTpl('JSandReact');
	});
	const JSandReactandClass = vscode.commands.registerCommand('quickstart.JSandReactandClass', () => {
		insertTpl('JSandReactandClass');
	});
	const TSandReact = vscode.commands.registerCommand('quickstart.TSandReact', () => {
		insertTpl('TSandReact');
	});
	const TSandReactandClass = vscode.commands.registerCommand('quickstart.TSandReactandClass', () => {
		insertTpl('TSandReactandClass');
	});
	const TSandVue3 = vscode.commands.registerCommand('quickstart.TSandVue3', () => {
		insertTpl('TSandVue3');
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

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// "onCommand:extension.JSandVue2",
	// "onCommand:extension.JSandVue2andClass",
	// "onCommand:extension.TSandVue2",
	// "onCommand:extension.JSandReact",
	// "onCommand:extension.JSandReactandClass",
	// "onCommand:extension.TSandReact",
	// "onCommand:extension.TSandReactandClass",
	// "onCommand:extension.TSandVue3"

	const JSandVue2 = vscode.commands.registerCommand('extension.JSandVue2', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const JSandVue2andClass = vscode.commands.registerCommand('extension.JSandVue2andClass', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const TSandVue2 = vscode.commands.registerCommand('extension.TSandVue2', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const JSandReact = vscode.commands.registerCommand('extension.JSandReact', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const JSandReactandClass = vscode.commands.registerCommand('extension.JSandReactandClass', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const TSandReact = vscode.commands.registerCommand('extension.TSandReact', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const TSandReactandClass = vscode.commands.registerCommand('extension.TSandReactandClass', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	const TSandVue3 = vscode.commands.registerCommand('extension.TSandVue3', () => {
		vscode.window.showInformationMessage('Hello World!');
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

import {
    JSandVue2,
    JSandVue2andClass,
    TSandVue2,
    JSandReact,
    JSandReactandClass,
    TSandReact,
    TSandReactandClass,
    TSandVue3
} from './template';
import * as vscode from 'vscode';

type Tpl = 'JSandVue2' | 'JSandVue2andClass' | 'TSandVue2' | 'JSandReact' | 'JSandReactandClass' | 'TSandReact' | 'TSandReactandClass' | 'TSandVue3';

export function getTpl (type: Tpl): string {
    switch (type) {
        case 'JSandVue2':
            return JSandVue2;
        case 'JSandVue2andClass':
            return JSandVue2andClass;
        case 'TSandVue2':
            return TSandVue2;
        case 'JSandReact':
            return JSandReact;
        case 'JSandReactandClass':
            return JSandReactandClass;
        case 'TSandReact':
            return TSandReact;
        case 'TSandReactandClass':
            return TSandReactandClass;
        case 'TSandVue3':
            return TSandVue3;
        default:
            return '';
    }
}

export function insertTpl (tpl: string) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(0, 0);
        const range = new vscode.Range(start, end);
        editor.edit(editBuilder => {
            editBuilder.replace(range, tpl);
        });
    }
}

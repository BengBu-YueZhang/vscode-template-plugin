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

export function getTpl (type: Tpl, name: string): string {
    switch (type) {
        case 'JSandVue2':
            return JSandVue2(name);
        case 'JSandVue2andClass':
            return JSandVue2andClass(name);
        case 'TSandVue2':
            return TSandVue2(name);
        case 'JSandReact':
            return JSandReact(name);
        case 'JSandReactandClass':
            return JSandReactandClass(name);
        case 'TSandReact':
            return TSandReact(name);
        case 'TSandReactandClass':
            return TSandReactandClass(name);
        case 'TSandVue3':
            return TSandVue3(name);
        default:
            return '';
    }
}

export function insertTpl (type: Tpl) {
    const textEditor = vscode.window.activeTextEditor;
    if (textEditor) {
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(0, 0);
        const range = new vscode.Range(start, end);
        const name = getComponentName(textEditor.document.fileName);
        const tpl = getTpl(type, name);
        textEditor.edit(editBuilder => {
            editBuilder.replace(range, tpl);
        });
    }
}

/**
 * 自动填写组件名称的功能，可以通过配置，决定是否开启
 * 获取组件名称的策略:
 * 1. 如果文件的名称是 boo.vue 或者 boo.jsx，那么返回boo
 * 2. 如果文件的名称是 index.vue 或者 index.jsx 那么返回文件上一层文件夹的名称
 */
export function getComponentName (path: string): string {
    const { isAutoName = true } = vscode.workspace.getConfiguration('quickstart');
    if (!isAutoName) {
        return '';
    }
    const filename = getActiveFileName(path);
    const foldername = getActiveFolderName(path);
    if (filename !== 'index') {
        return filename;
    }
    return foldername;
}

export function getActiveFileName (path: string): string {
    const paths = path.split('/');
    const filename = paths[paths.length - 1];
    return filename.split('.')[0];
}

export function getActiveFolderName (path: string): string {
    const paths = path.split('/');
    paths.pop();
    const foldername = paths[paths.length - 1];
    return foldername;
}

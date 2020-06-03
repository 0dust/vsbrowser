// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Visuals from './visuals';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand("vsbrowser.open", () => {
		Visuals.view(context.extensionPath);
	}))

	context.subscriptions.push(vscode.commands.registerCommand("vsbrowser.close", () => {
		Visuals.destroy(context.extensionPath);
	}))


// this method is called when your extension is deactivated
export function deactivate() {}

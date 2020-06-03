import * as path from 'path';
import * as vscode from 'vscode';

export default class Visuals {
    public static currentView : Visuals | undefined;
    private readonly _panel : vscode.WebviewPanel;

    public static view(extenstionPath: string){
        const col = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

        if (Visuals.currentView){
            Visuals.currentView._panel.reveal(col);
            return;
        }
    }

}
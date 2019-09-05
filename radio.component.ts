import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    moduleId: module.id,
})
export class RadioComponent implements OnInit, AfterViewInit {

    @ViewChild("myWebView", { read: ElementRef, static: false }) webViewRef: ElementRef;

    webViewSrc: string;
    active: string;

    constructor(private _page: Page) { }

    ngOnInit(): void {
        this.webViewSrc = "http://mixlr.com/ahlussunnahfortaleza/embed";

        this.active = "radio";
        this._page.actionBarHidden = true;
    }
    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }

            console.log("WebView message - " + message);
        });
    }

}

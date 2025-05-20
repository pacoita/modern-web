import { Component, inject, OnInit } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { Meta } from '@angular/platform-browser';
import keys from '../../.config/keys.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NavigationComponent]
})
export class AppComponent implements OnInit {

    private metaService = inject(Meta);

    ngOnInit() {
        const metaTag = this.metaService.getTag('http-equiv="origin-trial"');
        if (!metaTag) {
            this.metaService.addTag({
                httpEquiv: 'origin-trial',
                content: keys.SUMMARIZER_TOKEN
            });
        }
    }                                                                                                                             
}

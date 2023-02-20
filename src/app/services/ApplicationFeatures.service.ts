import { ElementRef, Injectable } from "@angular/core";

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationFeatures {

    localRefConverter = new Subject<boolean>();




}
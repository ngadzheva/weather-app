import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

export function WithUnsubscribe() {
    return class Base implements OnDestroy {
        protected unsubscribe$ = new Subject<void>();

        ngOnDestroy(): void {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        }
    }
}

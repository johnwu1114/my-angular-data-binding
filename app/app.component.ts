import { Component, VERSION } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "/app/app.component.html",
    styleUrls: ["app/app.component.css"]
})
export class AppComponent {
    name = "Angular";
    version = VERSION.full;
    counter: number = 0;

    constructor() {
        setInterval(() => {
            this.counter++;
        }, 1000);
    }

    onClickButton(): void {
        alert("Hello " + this.name);
    }
}
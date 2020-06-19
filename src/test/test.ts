export default class Test {
    private _msg: string;

    constructor() {
        this._msg = "document ready";
    }

    do(): void {
        console.warn(this._msg);
        document.body.innerHTML = "<h1>Test</h1>";
    }
}
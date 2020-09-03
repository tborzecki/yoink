@Component({
    selector: 'component',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
})
export class Component {
    constructor(){
        console.log( 'Hello World.' );
    }
}

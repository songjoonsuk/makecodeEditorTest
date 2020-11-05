namespace MagicShow {
    export function PlotAt ( index : number) : void {
        let y = Math.floor( index / 5 );
        let x = Math.floor( index % 5 );
        led.plot(x,y);
    } 


}

namespace MagicShow {


    //% blockId = kkk
    //% block = "plot at %index" 
    //% index.min = 0  index.max=25
    export function PlotAt ( index : number) : void {
        let y = Math.floor( index / 5 );
        let x = Math.floor( index % 5 );
        led.plot(x,y);
    } 


}

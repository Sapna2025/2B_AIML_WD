const EvenEmitter=require('events');
class Button extends EvenEmitter{
    click(){
        this.emit("click");
    }
}
const button=new Button();
button.on("click",()=>{
    console.log("Button Clicked");
});
button.click();
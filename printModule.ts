
const aPrintModule = {
  printMessage1 : function (message: string): void {
    console.log(message);
  },
  printMessage2: (message:string) => console.log(message)
}
module.exports = aPrintModule;
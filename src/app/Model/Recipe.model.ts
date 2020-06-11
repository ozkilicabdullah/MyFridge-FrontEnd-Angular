export class Recipe{
    constructor(
        public id?:number,
        public foodId?:number,
        public foodName?:string,
        public ingredients?:string,
        public directions?:string,
        public imageUrl?:string
    ){}
 
}
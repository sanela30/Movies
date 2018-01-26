export class Movie {

    constructor(
        public id?:number, 
        public name?:string, 
        public director?:string, 
        public ImageUrl?:string, 
        public duration?:number, 
        public releaseDate?:string, 
        public genres?: Array<string>
        ) {}
  

}



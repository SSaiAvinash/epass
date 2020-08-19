export class User {
    constructor(
        public name: string,
        public gender:string,
        public number: number,
        public email: string,
        public category:string,
        public present_address:string,
        public destination_address:string,
        public aadhar:number
    ){}
}

export class Dist {
    constructor(
        public ds: string,
        public dd:string,
    ){}
}
